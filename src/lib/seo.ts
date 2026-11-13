import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/images/editorial/cotu-circle-blue-hour.png",
          width: 1680,
          height: 945,
          alt: "Center of the Universe Tulsa editorial illustration",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/editorial/cotu-circle-blue-hour.png"],
    },
  };
}
