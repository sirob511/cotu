import { ArticleHero } from "@/components/ArticleHero";
import { ArticleShell, NextLinks } from "@/components/ArticleBlocks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Center of the Universe Tulsa Fun Facts", "Thirteen memorable facts about Tulsa's acoustic circle, bridge, brick rings, Artificial Cloud, renovation, Tulsa King and the actual universe.", "/fun-facts");

const facts = [
  ["01", "It sits above railroad tracks.", "The strange listening spot is part of an elevated pedestrian plaza, not a patch of sidewalk at the posted address."],
  ["02", "The bridge once carried cars.", "The original Boston Avenue crossing dates to the 1930s and served vehicles before the later pedestrian reconstruction."],
  ["03", "The center marker is about 30 inches wide.", "Tulsa City-County Library describes the worn concrete center as much smaller than many first-time visitors expect."],
  ["04", "Thirteen rows of brick make the larger circle.", "Together they form a ring approximately eight feet across around the small central marker."],
  ["05", "The echo seems to be a happy accident.", "The acoustic behavior is associated with the reconstructed plaza's geometry, not a documented plan for an engineered trick."],
  ["06", "Outside listeners are not struck mute.", "They can hear the sound. They simply receive a different mix of direct and reflected energy than the person near the center."],
  ["07", "Artificial Cloud is about 72.5 feet tall.", "The public artwork dwarfs the acoustic marker and radically changes the plaza's silhouette."],
  ["08", "Rust belongs to the artwork.", "Robert Haozous intended Artificial Cloud to weather as part of its material and conceptual life."],
  ["09", "Engineers studied the echo.", "Redevelopment planning included acoustic expertise so the critical conditions could be understood and protected."],
  ["10", "The inner walls are staying.", "City statements say the concrete walls responsible for the phenomenon will be preserved through rehabilitation."],
  ["11", "Old illuminated brick artwork is leaving.", "The redevelopment plans remove Trace while preserving Artificial Cloud and the core acoustic setting."],
  ["12", "Tulsa King brought another audience.", "The location appeared in the series, and an episode title made the landmark easier for viewers to discover."],
  ["13", "Cosmology gives Tulsa a loophole.", "An expanding universe has no ordinary privileged center. So Tulsa is not literally it—but neither is anywhere else."],
] as const;

export default function FunFactsPage() {
  return <><ArticleHero eyebrow="Thirteen small surprises" title="The facts are almost as odd as the echo." intro="A tiny marker, a former road bridge, a 72.5-foot steel cloud and one scientifically convenient cosmic loophole." current="Fun facts" /><ArticleShell><div className="fun-facts-grid">{facts.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div><NextLinks links={[{ label: "Understand the echo", href: "/how-it-works" }, { label: "Read the timeline", href: "/history" }, { label: "Meet the sculpture", href: "/artificial-cloud" }]} /></ArticleShell></>;
}
