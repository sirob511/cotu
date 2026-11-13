import { cotu, site } from "@/data/site";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.descriptor,
  publisher: { "@id": `${site.url}/#publisher` },
};

export const publisherSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#publisher`,
  name: site.publisher,
  url: site.url,
  description: "An independent informational visitor guide.",
};

export const attractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${site.url}/#attraction`,
  name: `${cotu.name}, Tulsa`,
  description:
    "A downtown Tulsa civic space known for an unusual echo at the center of a circular brick plaza.",
  mainEntityOfPage: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 S Boston Ave",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    postalCode: "74103",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: cotu.latitude,
    longitude: cotu.longitude,
  },
};

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}
