export const siteStatus = {
  status: "temporarily-closed",
  label: "Temporarily closed for renovation",
  shortLabel: "Under renovation",
  expected: "Fall 2026",
  lastVerified: "2026-08-25",
  expiresAfterDays: 45,
  source:
    "https://downtowntulsa.com/about/programs-and-initiatives/urban-planning/centeroftheuniverse",
} as const;

export function statusIsStale(referenceDate = new Date()) {
  const verified = new Date(`${siteStatus.lastVerified}T12:00:00Z`);
  const ageInDays =
    (referenceDate.getTime() - verified.getTime()) / (1000 * 60 * 60 * 24);
  return ageInDays > siteStatus.expiresAfterDays;
}

if (process.env.NODE_ENV !== "production" && statusIsStale()) {
  console.warn(
    `WARNING: Center of the Universe access status was last verified on ${siteStatus.lastVerified}.`,
  );
}
