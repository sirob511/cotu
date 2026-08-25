"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

export function AcousticDemo() {
  const [pulse, setPulse] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function clap() {
    setPulse((value) => value + 1);
    if (timer.current) clearTimeout(timer.current);

    try {
      const AudioContextClass = window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        const context = new AudioContextClass();
        const now = context.currentTime;
        [0, 0.12, 0.23].forEach((delay, index) => {
          const buffer = context.createBuffer(1, context.sampleRate * 0.045, context.sampleRate);
          const channel = buffer.getChannelData(0);
          for (let i = 0; i < channel.length; i += 1) {
            channel[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / channel.length, 3);
          }
          const source = context.createBufferSource();
          const gain = context.createGain();
          source.buffer = buffer;
          gain.gain.value = [0.28, 0.11, 0.05][index];
          source.connect(gain).connect(context.destination);
          source.start(now + delay);
        });
        timer.current = setTimeout(() => void context.close(), 800);
      }
    } catch {
      // The visual explanation still works when Web Audio is unavailable.
    }
  }

  return (
    <div className="acoustic-stage">
      <div className="acoustic-copy">
        <span className="section-index">01 / THE EXPERIENCE</span>
        <h2>Say something.</h2>
        <p>You do not see the trick first. You hear it. From the center marker, a clap or a few ordinary words return with a tight, metallic character that seems to belong to the circle alone.</p>
        <ol className="experience-steps">
          <li><span>1</span>Stand in the center.</li>
          <li><span>2</span>Speak or clap.</li>
          <li><span>3</span>Listen for the return.</li>
        </ol>
      </div>
      <div className="ring-demo" data-pulse={pulse}>
        <div key={pulse} className="pulse-field" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <button type="button" className="clap-button" onClick={clap}>
          <Volume2 size={22} />
          <span>CLAP</span>
        </button>
        <span className="ring-label">Illustrative sound + wave demo</span>
      </div>
    </div>
  );
}
