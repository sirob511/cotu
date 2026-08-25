import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const paths = [
  "",
  "/visit",
  "/directions",
  "/parking",
  "/how-it-works",
  "/history",
  "/renovation",
  "/artificial-cloud",
  "/things-to-do-nearby",
  "/map",
  "/faq",
  "/fun-facts",
  "/tulsa-king",
  "/about",
  "/sources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-08-25",
    changeFrequency: path === "/renovation" ? "weekly" : path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/renovation" || path === "/visit" ? 0.9 : 0.7,
  }));
}
