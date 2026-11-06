import { ArticleHero } from "@/components/ArticleHero";
import { ArticleSection, ArticleShell, NextLinks, SourceNote } from "@/components/ArticleBlocks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("History of the Center of the Universe in Tulsa", "From a 1930s road bridge to a fire, pedestrian rebuild, accidental echo, public art and 2024–2027 rehabilitation: the history of Tulsa's Center of the Universe.", "/history");

const timeline = [
  ["1930s", "A bridge for cars", "The original Boston Avenue bridge carried vehicles across Tulsa's railroad tracks."],
  ["1980s", "Fire and reconstruction", "A fire damaged part of the bridge. The rebuilt span became a pedestrian plaza in the early 1980s."],
  ["After the rebuild", "An accidental discovery", "The acoustic behavior emerged from the new geometry rather than a documented plan to build a mystery spot."],
  ["1991", "Artificial Cloud arrives", "Robert Haozous's monumental steel sculpture added another layer of strangeness and public meaning."],
  ["2019–2022", "Reimagining begins", "Planning and design work explored a more welcoming public space while studying the acoustic phenomenon."],
  ["2024–2027", "Repair and renewal", "City structural repairs ran from December 2024 into 2026. The $7 million above-deck plaza rebuild breaks ground November 16, 2026, with completion expected by fall 2027."],
] as const;

export default function HistoryPage() {
  return <><ArticleHero eyebrow="A Tulsa timeline" title="A road bridge became a listening room." intro="No cosmic blueprint was required. The Center of the Universe grew from infrastructure, damage, rebuilding, public art and the local instinct to share a wonderfully odd experience." current="History" /><ArticleShell><div className="history-timeline">{timeline.map(([year, title, text], index) => <article key={year}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div><time>{year}</time><h2>{title}</h2><p>{text}</p></div></article>)}</div><ArticleSection eyebrow="The key turn" title="The anomaly was probably a happy accident"><p>The pedestrian plaza needed architecture; it did not need an acoustic trick. Yet its circular arrangement and hard curved walls created conditions in which sound near the middle returns with unusual force and character. The public did the rest: test, react, tell someone else.</p><p>That accidental origin is part of the place&apos;s charm. It is not a branded attraction that was engineered to produce a scripted reaction. It is a side effect of civic space that became an identity.</p></ArticleSection><ArticleSection eyebrow="A larger civic space" title="Public art changed the silhouette"><p>Artificial Cloud, installed in 1991, made the plaza recognizable from farther away and placed the intimate acoustic effect beside a monumental work by Robert Haozous. The two are now easy to conflate, but they are distinct: one is a physical phenomenon associated with the plaza; the other is an intentional artwork with its own authorship and ideas.</p><SourceNote href="https://www.tulsalibrary.org/research/government/tulsa-area-faqs">Tulsa City-County Library documents the bridge, circle dimensions and sculpture.</SourceNote></ArticleSection><NextLinks links={[{ label: "Understand the acoustics", href: "/how-it-works" }, { label: "Meet Artificial Cloud", href: "/artificial-cloud" }, { label: "Follow the renovation", href: "/renovation" }]} /></ArticleShell></>;
}
