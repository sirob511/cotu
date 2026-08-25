"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { attractions, orbitPlans, type Attraction } from "@/data/attractions";

type OrbitKey = keyof typeof orbitPlans;

function getStops(orbit: OrbitKey) {
  return orbitPlans[orbit].flatMap((slug) => {
    const attraction = attractions.find((item) => item.slug === slug);
    return attraction ? [attraction] : [];
  });
}

function placeQuery(attraction: Attraction) {
  return `${attraction.name}, Tulsa, Oklahoma`;
}

function buildEmbedUrl(stops: Attraction[]) {
  const [origin, ...remainingStops] = stops;
  const destination = remainingStops.at(-1);

  if (!origin || !destination) {
    return "https://www.google.com/maps?q=36.15689,-95.99153&z=16&output=embed";
  }

  // Google Maps share embeds accept chained walking stops in the destination parameter.
  const route = remainingStops.map(placeQuery).join("+to:");
  const params = new URLSearchParams({
    saddr: placeQuery(origin),
    daddr: route,
    dirflg: "w",
    output: "embed",
  });

  return `https://maps.google.com/maps?${params.toString().replaceAll("%2B", "+").replaceAll("%3A", ":")}`;
}

function buildOpenUrl(stops: Attraction[]) {
  const [origin, ...remainingStops] = stops;
  const destination = remainingStops.at(-1);

  if (!origin || !destination) {
    return "https://www.google.com/maps/search/?api=1&query=36.15689,-95.99153";
  }

  const params = new URLSearchParams({
    api: "1",
    origin: placeQuery(origin),
    destination: placeQuery(destination),
    travelmode: "walking",
  });
  const waypoints = remainingStops.slice(0, -1).map(placeQuery);
  if (waypoints.length) params.set("waypoints", waypoints.join("|"));

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function orbitLabel(orbit: OrbitKey) {
  return orbit === "half" ? "Half-day" : `${orbit} min`;
}

export function MapClient({ compact = false }: { compact?: boolean }) {
  const [orbit, setOrbit] = useState<OrbitKey>(compact ? "30" : "90");
  const stops = getStops(orbit);
  const embedUrl = buildEmbedUrl(stops);
  const openUrl = buildOpenUrl(stops);

  return (
    <div className={`map-experience${compact ? " compact" : ""}`}>
      <div className="map-toolbar">
        <div className="segmented" aria-label="Choose a walking orbit">
          {(["30", "90", "half"] as OrbitKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className={orbit === key ? "active" : ""}
              aria-pressed={orbit === key}
              onClick={() => setOrbit(key)}
            >
              {orbitLabel(key)}
            </button>
          ))}
        </div>
        <a className="map-open-link" href={openUrl} target="_blank" rel="noreferrer">
          Open in Google Maps <ExternalLink size={14} />
        </a>
      </div>
      <div className="map-frame">
        <iframe
          key={embedUrl}
          src={embedUrl}
          title={`Google Maps walking route for the ${orbitLabel(orbit)} orbit`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="map-caption">
        <span>ORBIT {orbitLabel(orbit).toUpperCase()}</span>
        <strong>{stops.length} stops around the Center</strong>
      </div>
    </div>
  );
}
