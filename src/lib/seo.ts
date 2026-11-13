import type { Metadata } from "next";
import { images } from "@/data/images";
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
          url: images.hero.src,
          width: 885,
          height: 1024,
          alt: images.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images.hero.src],
    },
  };
}
