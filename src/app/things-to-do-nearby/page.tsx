import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ArticleHero } from "@/components/ArticleHero";
import { NextLinks } from "@/components/ArticleBlocks";
import { OrbitMap } from "@/components/OrbitMap";
import { attractions } from "@/data/attractions";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Things to Do Near Center of the Universe Tulsa", "Turn the Center of the Universe into a 30-minute, 90-minute or half-day Downtown Tulsa itinerary with music, parks, public art and Greenwood.", "/things-to-do-nearby");

const featured = attractions.filter((item) => item.category !== "center" && item.slug !== "artificial-cloud");

export default function NearbyPage() {
  return <><ArticleHero eyebrow="Downtown micro-adventure" title="Let the Center open the neighborhood." intro="The echo can be tested in minutes. Around it, Tulsa packs public art, music history, Greenwood and green space into a walk that can fill the afternoon." current="Things to do nearby" /><section className="nearby-hero-image"><Image src={images.orbit.src} alt={images.orbit.alt} fill priority sizes="100vw" /></section><div className="shell nearby-page-intro"><div><span className="eyebrow">Start with distance, not stale hours</span><h2>Pick a loop. Check each door.</h2></div><p>Walking context changes slowly; operating hours change quickly. The pairings below link to official attraction sites so you can verify admission, accessibility and current schedules on the day.</p></div><section className="shell attraction-grid">{featured.map((place, index) => <article key={place.slug} className="attraction-card"><div className={`attraction-visual visual-${(index % 4) + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{place.category}</strong></div><div className="attraction-card-copy"><span className="eyebrow">{place.walk}</span><h2>{place.name}</h2><p>{place.pairing}</p>{place.url && <a href={place.url} target="_blank" rel="noreferrer">Official website <ExternalLink size={14} /></a>}</div></article>)}</section><section className="shell nearby-map-block"><div><span className="eyebrow">Choose the scale</span><h2>One Center. Three orbits.</h2></div><OrbitMap compact /></section><div className="shell nearby-page-links"><NextLinks links={[{ label: "Open the full map", href: "/map" }, { label: "Find parking", href: "/parking" }, { label: "Plan the Center stop", href: "/visit" }]} /></div></>;
}
