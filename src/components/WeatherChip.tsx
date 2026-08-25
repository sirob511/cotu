"use client";

import { useEffect, useState } from "react";
import { CloudSun, ExternalLink, Umbrella } from "lucide-react";

type Weather = {
  current: number;
  high: number;
  low: number;
  rain: number;
};

export function WeatherChip() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.search = new URLSearchParams({
      latitude: "36.15689",
      longitude: "-95.99153",
      current: "temperature_2m",
      daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max",
      temperature_unit: "fahrenheit",
      timezone: "America/Chicago",
      forecast_days: "1",
    }).toString();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Weather unavailable");
        return response.json();
      })
      .then((data) => {
        setWeather({
          current: Math.round(data.current.temperature_2m),
          high: Math.round(data.daily.temperature_2m_max[0]),
          low: Math.round(data.daily.temperature_2m_min[0]),
          rain: Math.round(data.daily.precipitation_probability_max[0]),
        });
      })
      .catch((error) => {
        if (error.name !== "AbortError") setFailed(true);
      });

    return () => controller.abort();
  }, []);

  if (failed) {
    return <a className="weather-fallback" href="https://forecast.weather.gov/MapClick.php?lat=36.15689&lon=-95.99153" target="_blank" rel="noreferrer">Tulsa weather <ExternalLink size={14} /></a>;
  }

  return (
    <details className="weather-chip">
      <summary><CloudSun size={18} /> {weather ? `${weather.current}°F · Tulsa` : "Tulsa weather"}</summary>
      <div className="weather-popover">
        {weather ? (
          <>
            <strong>Right now: {weather.current}°F</strong>
            <span>Today {weather.high}° / {weather.low}°</span>
            <span><Umbrella size={14} /> {weather.rain}% rain chance</span>
          </>
        ) : <span>Loading local conditions…</span>}
        <a href="https://forecast.weather.gov/MapClick.php?lat=36.15689&lon=-95.99153" target="_blank" rel="noreferrer">Full forecast <ExternalLink size={13} /></a>
        <small>Weather: Open-Meteo</small>
      </div>
    </details>
  );
}
