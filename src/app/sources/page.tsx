import { ExternalLink } from "lucide-react";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleShell, NextLinks } from "@/components/ArticleBlocks";
import { sources } from "@/data/sources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Sources & Research | Center of the Universe Tulsa", "Primary and supporting research used by this independent visitor guide, including City of Tulsa, Downtown Tulsa Partnership and Tulsa City-County Library.", "/sources");

export default function SourcesPage() {
  return <><ArticleHero eyebrow="Research index" title="Follow the facts back to Tulsa." intro="A useful guide should make its evidence easy to inspect, especially when access, schedules and construction are changing." current="Sources" /><ArticleShell><div className="sources-list">{sources.map((source, index) => <article key={source.url}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{source.organization}</p><h2>{source.title}</h2><small>{source.note}</small></div><a href={source.url} target="_blank" rel="noreferrer" aria-label={`Open ${source.title}`}><ExternalLink size={18} /></a></article>)}</div><div className="source-policy"><h2>Update standard</h2><p>For access and renovation dates, check the official project and city sources first. Record a new verification date even when the status has not changed. Do not convert a projected season into a hard opening day.</p></div><NextLinks links={[{ label: "About the guide", href: "/about" }, { label: "Current renovation update", href: "/renovation" }, { label: "Start at the Center", href: "/" }]} /></ArticleShell></>;
}
