import Link from "next/link";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleShell, NextLinks } from "@/components/ArticleBlocks";
import { JsonLd } from "@/components/JsonLd";
import { siteStatus } from "@/data/site-status";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Center of the Universe Tulsa FAQ", "Straight answers about location, closure, cost, echo, access, parking, kids, Artificial Cloud, Tulsa King and reopening.", "/faq");

const faqs = [
  ["What is the Center of the Universe in Tulsa?", "A circular civic space on the Boston Avenue pedestrian bridge known for a peculiar acoustic return when someone speaks or claps near its center."],
  ["Where is it?", "At 1 S Boston Ave in Downtown Tulsa, on the pedestrian bridge above the railroad tracks. The coordinates are 36.15689, -95.99153."],
  ["Is it currently open?", `No. The attraction is currently listed as temporarily closed during bridge and public-space renovation. Status last checked ${siteStatus.lastVerified}.`],
  ["When will renovation be complete?", `The public-space completion is expected in ${siteStatus.expected}, subject to the project schedule. Verify before visiting; there is no hard reopening date on this guide.`],
  ["Is it free?", "It has historically been a free public attraction. Because it is currently closed, this guide does not publish open hours or imply present access."],
  ["Why does it echo?", "The most plausible explanation is sound focusing and short reverberation from the curved hard walls around the plaza. The effect appears accidental rather than deliberately engineered."],
  ["Can people outside the circle hear you?", "Yes. The fun legend overstates the effect. People outside can hear you, but the reflected character and balance of sound can be noticeably different."],
  ["How long should I spend there?", "The circle itself is a 10–20 minute stop for most visitors. Pair it with Artificial Cloud, Guthrie Green, nearby music museums or Greenwood for a longer downtown visit."],
  ["Where should I park?", "Use current City of Tulsa downtown parking resources and read posted conditions. Construction and event nights can change the most practical choice."],
  ["Is it kid-friendly?", "The short clap-and-compare experiment can be engaging for children, but current construction access must be checked and adults should account for an elevated urban setting."],
  ["Is it wheelchair accessible?", "Do not rely on pre-construction descriptions. Verify current step-free access after reopening through authoritative project or city information."],
  ["What is the tall sculpture beside it?", "Artificial Cloud, a monumental steel work by Native American artist Robert Haozous, installed in 1991 and listed at about 72.5 feet tall."],
  ["Was it in Tulsa King?", "Yes. The location appeared in Tulsa King, and an episode used the title “Center of the Universe.” This guide is not affiliated with the series."],
  ["Is it really the center of the universe?", "Not in the cosmological sense. Modern cosmology does not identify one special center of the expanding universe. Tulsa keeps the better local title anyway."],
] as const;

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

export default function FaqPage() {
  return <><ArticleHero eyebrow="Straight answers" title="Ask the obvious questions." intro="Is it open? Can anyone else hear you? Is Tulsa making a cosmological claim? Here are the careful answers, with legends kept in their lane." current="FAQ" /><ArticleShell><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}</summary><div><p>{answer}</p>{question.includes("open") && <Link href="/renovation">Read the current renovation update →</Link>}{question.includes("echo") && <Link href="/how-it-works">See the acoustic explanation →</Link>}</div></details>)}</div><NextLinks links={[{ label: "Current renovation status", href: "/renovation" }, { label: "Plan a future visit", href: "/visit" }, { label: "See the research", href: "/sources" }]} /></ArticleShell><JsonLd data={faqSchema} /></>;
}
