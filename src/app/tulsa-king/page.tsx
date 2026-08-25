import Image from "next/image";
import Link from "next/link";
import { CirclePlay, ExternalLink } from "lucide-react";
import { ArticleHero } from "@/components/ArticleHero";
import {
  ArticleSection,
  ArticleShell,
  NextLinks,
  SourceNote,
} from "@/components/ArticleBlocks";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Center of the Universe in Tulsa King | Filming Location Guide",
  "How the Center of the Universe connects to Tulsa King, what visitors recognize and how to plan a respectful location stop without show screenshots.",
  "/tulsa-king",
);

export default function TulsaKingPage() {
  return (
    <>
      <ArticleHero
        eyebrow="On screen"
        title="A Tulsa landmark with a television afterlife."
        intro="Tulsa King introduced another audience to the bridge, circle and skyline. The real location has a longer story than its screen time."
        current="Tulsa King"
      />

      <section className="shell tk-location-gallery" aria-label="Official Tulsa King media">
        <figure className="tk-location-wide">
          <a
            className="tk-trailer-link"
            href="https://www.youtube.com/watch?v=aaQSScwZPbA"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch the official Tulsa King trailer on YouTube"
          >
            <Image
              src={images.tulsaKingTrailer.src}
              alt={images.tulsaKingTrailer.alt}
              fill
              priority
              quality={70}
              sizes="(max-width: 760px) 100vw, 72vw"
            />
            <span className="tk-play" aria-hidden="true">
              <CirclePlay size={42} />
            </span>
          </a>
          <figcaption>
            <strong>Official trailer</strong>
            <span>Paramount+ · watch on YouTube <ExternalLink size={11} /></span>
          </figcaption>
        </figure>
        <figure className="tk-location-detail">
          <div className="tk-location-detail-media">
            <Image
              src={images.tulsaKingEpisode.src}
              alt={images.tulsaKingEpisode.alt}
              fill
              quality={70}
              sizes="(max-width: 760px) 100vw, 28vw"
            />
          </div>
          <figcaption>
            <strong>Season 1 · Episode 2</strong>
            <span>
              Sylvester Stallone and Jay Will. Photo: Brian Douglas/Paramount+. © 2022 Viacom
              International Inc. All Rights Reserved.{" "}
              <a
                href="https://www.paramountpressexpress.com/paramount-plus/shows/tulsa-king/photos?episode=22834"
                target="_blank"
                rel="noreferrer"
              >
                Press source <ExternalLink size={11} />
              </a>
            </span>
          </figcaption>
        </figure>
      </section>

      <ArticleShell>
        <ArticleSection eyebrow="The connection" title="The location and the episode title">
          <p>
            The Center of the Universe was used as a Tulsa filming location, and the series includes an
            episode titled “Center of the Universe.” For visitors arriving through the show, the
            recognizable ingredients are the elevated plaza, downtown context and unusual name—not a
            recreated set.
          </p>
          <SourceNote href="https://www.okfilmmusic.org/location-of-the-month/location-of-the-month-for-november-2022-center-of-the-universe">
            The Oklahoma Film + Music Office documents the location&apos;s screen connection.
          </SourceNote>
        </ArticleSection>

        <ArticleSection
          eyebrow="Visit the place, not a screenshot"
          title="The acoustic experiment is the better souvenir"
        >
          <p>
            This guide uses credited official promotional material instead of captured dialogue, episode
            footage or unofficial screenshots. Once access returns, stand at the marker, listen to the
            actual acoustic effect and look at Artificial Cloud. Then use the{" "}
            <Link href="/map">walking map</Link> to connect the location to the real downtown around it.
          </p>
        </ArticleSection>

        <div className="trademark-note">
          <strong>Independence note</strong>
          <p>
            <em>Tulsa King</em> is a trademark and copyrighted property of its respective owners.
            CenterOfTheUniverseTulsa.org is not affiliated with or endorsed by the series, Paramount, its
            producers or rights holders.
          </p>
        </div>

        <NextLinks
          links={[
            { label: "Plan the real-world visit", href: "/visit" },
            { label: "Read the bridge history", href: "/history" },
            { label: "Explore nearby Tulsa", href: "/things-to-do-nearby" },
          ]}
        />
      </ArticleShell>
    </>
  );
}
