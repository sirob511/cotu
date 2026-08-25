"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MapClient = dynamic(() => import("./MapClient").then((mod) => mod.MapClient), {
  ssr: false,
  loading: () => <div className="map-loading"><span>36.15689° N</span><strong>Loading the orbit…</strong><span>95.99153° W</span></div>,
});

export function OrbitMap({ compact = false }: { compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {isNearViewport ? <MapClient compact={compact} /> : (
        <div className="map-loading" aria-label="Map loading near the viewport">
          <span>36.15689° N</span>
          <strong>The downtown orbit</strong>
          <span>95.99153° W · Map loads as you approach</span>
        </div>
      )}
    </div>
  );
}
