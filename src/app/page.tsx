import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Cloud, ExternalLink, MapPin, MoveRight, Navigation, ParkingCircle, Ruler, TrainFront } from "lucide-react";
import { AcousticDemo } from "@/components/AcousticDemo";
import { OrbitMap } from "@/components/OrbitMap";
import { StatusPanel } from "@/components/StatusPanel";
import { WeatherChip } from "@/components/WeatherChip";
import { attractions } from "@/data/attractions";
import { cotu, directionsUrl, googleMapsUrl, site } from "@/data/site";
import { siteStatus } from "@/data/site-status";
import { images } from "@/data/images";

const homeTitle = "Center of the Universe Tulsa | Visitor Guide";
const homeDescription = "Visit Tulsa's Center of the Universe, the downtown acoustic anomaly where your voice echoes back in a strange new way. Get current access status, directions, parking, history, maps and nearby attractions.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: site.url },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: images.hero.src,
        width: 1680,
        height: 945,
        alt: images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [images.hero.src],
  },
};

const nearby = attractions.filter((item) => ["guthrie-green", "bob-dylan-center", "woody-guthrie-center", "greenwood-rising", "cains-ballroom"].includes(item.slug));

const facts = [
  { value: "30", unit: "inches", text: "Approximate width of the worn center marker", icon: Ruler },
  { value: "13", unit: "rows", text: "Concentric brick rings around the center", icon: MoveRight },
  { value: "72.5", unit: "feet", text: "Published height of Artificial Cloud", icon: Cloud },
  { value: "1930s", unit: "origin", text: "The first bridge carried cars over the tracks", icon: TrainFront },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image src={images.hero.src} alt={images.hero.alt} fill fetchPriority="high" loading="eager" quality={60} sizes="100vw" className="home-hero-image" />
        <div className="home-hero-shade" />
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="shell home-hero-inner">
          <div className="home-hero-copy">
            <span className="hero-kicker">Tulsa&apos;s famous acoustic anomaly</span>
            <h1><span>Center of the</span>Universe</h1>
            <p className="hero-location">Tulsa, Oklahoma</p>
            <p className="hero-deck">Stand on one small circle in downtown Tulsa and your own voice comes back strangely changed.</p>
            <div className="hero-actions">
              <Link className="button button-rust" href="/visit">Plan your visit <ArrowRight size={17} /></Link>
              <Link className="button button-ghost" href="/how-it-works">Why does it echo?</Link>
            </div>
          </div>
          <div className="hero-coordinates">
            <span>{cotu.coordinatesLabel}</span>
            <span>THE BOSTON AVENUE BRIDGE</span>
          </div>
          <a className="hero-scroll" href="#experience" aria-label="Scroll to the experience"><ArrowDown size={18} /></a>
        </div>
      </section>

      <section id="experience" className="home-intro">
        <div className="shell home-intro-grid">
          <span className="section-index">THE INDEPENDENT GUIDE TO TULSA&apos;S STRANGEST LANDMARK</span>
          <p>The center itself is modest: a worn patch of concrete, a field of brick and a peculiar return of sound. The setting opens outward—to rail history, public art, music, Greenwood and the Tulsa Arts District.</p>
          <Link href="/visit">Start with the practical guide <ArrowRight size={16} /></Link>
        </div>
      </section>

      <AcousticDemo />

      <section className="history-band">
        <div className="shell history-band-grid">
          <div className="history-visual">
            <div className="rail-lines" aria-hidden="true"><i /><i /><i /></div>
            <span className="history-year">1930</span>
            <span className="history-year now">NOW</span>
            <div className="history-stamp"><TrainFront size={28} /><span>Above the<br />railroad tracks</span></div>
          </div>
          <div className="history-copy">
            <span className="section-index">02 / A HAPPY ACCIDENT</span>
            <h2>A bridge first.<br />A mystery later.</h2>
            <p>Long before anyone called this the Center of the Universe, Boston Avenue crossed the tracks by car. A fire, a pedestrian rebuild and one remarkably lucky piece of geometry changed what happened next.</p>
            <div className="mini-timeline">
              <span><strong>1930s</strong>Vehicular bridge</span>
              <span><strong>1980s</strong>Fire and rebuild</span>
              <span><strong>Afterward</strong>The echo finds its audience</span>
            </div>
            <Link className="text-link" href="/history">Read the full story <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="cloud-feature">
        <div className="cloud-image-wrap">
          <Image src={images.cloud.src} alt={images.cloud.alt} fill quality={60} sizes="(max-width: 900px) 100vw, 50vw" className="cloud-image" />
        </div>
        <div className="cloud-copy">
          <span className="section-index">03 / THEN LOOK UP</span>
          <p className="cloud-number">72.5 <small>FT</small></p>
          <h2>The echo is only half the strangeness.</h2>
          <p>Robert Haozous&apos;s <em>Artificial Cloud</em> has stood beside the circle since 1991. Its rusting steel is not neglect dressed up as art; weathering is part of the work&apos;s ongoing idea.</p>
          <blockquote>Not a spire. Not a totem. <em>Artificial Cloud.</em></blockquote>
          <Link className="text-link" href="/artificial-cloud">Meet the artwork <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="renovation-home">
        <div className="shell renovation-head">
          <span className="section-index">04 / THE NEXT CENTER</span>
          <h2>The Center is changing.<br /><em>The echo is staying.</em></h2>
        </div>
        <div className="shell renovation-grid">
          <div className="renovation-list">
            <span><b>01</b> Structural bridge repairs</span>
            <span><b>02</b> New paths and lighting</span>
            <span><b>03</b> Landscape and green space</span>
            <span><b>04</b> Preserved acoustic walls</span>
            <span><b>05</b> Preserved Artificial Cloud</span>
          </div>
          <StatusPanel compact />
        </div>
        <div className="shell renovation-cta"><Link className="button button-dark" href="/renovation">See the renovation <ArrowRight size={17} /></Link></div>
      </section>

      <section className="orbit-section">
        <div className="shell section-heading-row">
          <div><span className="section-index">05 / ORBIT THE CENTER</span><h2>The attraction takes minutes.<br />The neighborhood can take the afternoon.</h2></div>
          <Link className="text-link" href="/things-to-do-nearby">Explore what&apos;s nearby <ArrowRight size={16} /></Link>
        </div>
        <div className="shell"><OrbitMap compact /></div>
        <div className="shell nearby-strip">
          {nearby.map((place, index) => (
            <a key={place.slug} href={place.url} target="_blank" rel="noreferrer" className="nearby-item">
              <span>0{index + 1}</span><strong>{place.name}</strong><small>{place.walk}</small><ExternalLink size={15} />
            </a>
          ))}
        </div>
      </section>

      <section className="fact-section">
        <div className="shell fact-intro"><span className="section-index">06 / SIZE OF THE MYSTERY</span><h2>Small circle.<br />Long shadow.</h2><Link href="/fun-facts">More curious facts <ArrowRight size={16} /></Link></div>
        <div className="shell fact-grid">
          {facts.map((fact) => <article key={fact.value} className="fact-card"><fact.icon size={22} /><p><strong>{fact.value}</strong><span>{fact.unit}</span></p><small>{fact.text}</small></article>)}
        </div>
      </section>

      <section className="visit-home">
        <div className="shell visit-home-grid">
          <div className="visit-home-title"><span className="section-index">07 / FIND THE CENTER</span><h2>It&apos;s on the bridge,<br /><em>not at street level.</em></h2><p>Approach from Boston Avenue or the Arts District side and look for the elevated pedestrian plaza above the railroad tracks.</p></div>
          <div className="visit-utility">
            <div className="visit-utility-head"><span className="status-dot" /><strong>{siteStatus.shortLabel}</strong><span>Expected {siteStatus.expected}</span></div>
            <div className="visit-address"><MapPin size={22} /><div><span>ADDRESS</span><strong>{cotu.address}</strong><small>{cotu.coordinatesLabel}</small></div></div>
            <div className="visit-links">
              <a href={directionsUrl} target="_blank" rel="noreferrer"><Navigation size={18} />Directions</a>
              <Link href="/parking"><ParkingCircle size={18} />Parking</Link>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer">Google Maps <ExternalLink size={15} /></a>
            </div>
            <div className="visit-weather"><WeatherChip /><span>Weather loads after the page</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
