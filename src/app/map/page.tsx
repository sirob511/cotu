import { ArticleHero } from "@/components/ArticleHero";
import { ArticleSection, ArticleShell, NextLinks } from "@/components/ArticleBlocks";
import { OrbitMap } from "@/components/OrbitMap";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Center of the Universe Tulsa Map | Attractions & Walking Guide", "An interactive map with 30-minute, 90-minute and half-day walking orbits around the Center of the Universe in downtown Tulsa.", "/map");

export default function MapPage() {
  return <><ArticleHero eyebrow="Walking guide" title="Pick an orbit around the Center." intro="The echo is a point on the map. The richer visit is a loop through public art, music history, green space and Greenwood." current="Map" /><div className="shell full-map-section"><OrbitMap /></div><ArticleShell><ArticleSection eyebrow="30-minute orbit" title="Circle, steel and green space"><p>Start at the acoustic marker, look up at Artificial Cloud, then walk toward Guthrie Green. This is the right scale for a brief downtown stop once the bridge is accessible.</p></ArticleSection><ArticleSection eyebrow="90-minute orbit" title="Add two rooms of music history"><p>Continue from the green to the Bob Dylan Center and Woody Guthrie Center. Museum time can expand this well beyond 90 minutes, so treat the label as walking context rather than a promise of total visit duration.</p></ArticleSection><ArticleSection eyebrow="Half-day orbit" title="Carry the story into Greenwood"><p>Add Cain&apos;s Ballroom and Greenwood Rising, with time for lunch or a slow Arts District walk. Check each organization&apos;s official site for current admission, hours and closures.</p></ArticleSection><NextLinks links={[{ label: "Nearby attraction guide", href: "/things-to-do-nearby" }, { label: "Directions to the bridge", href: "/directions" }, { label: "Parking resources", href: "/parking" }]} /></ArticleShell></>;
}
