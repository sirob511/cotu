import Link from "next/link";
import { AlertTriangle, CalendarDays, ExternalLink } from "lucide-react";
import { siteStatus } from "@/data/site-status";

export function StatusPanel({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`status-panel${compact ? " compact" : ""}`}>
      <div className="status-panel-icon"><AlertTriangle size={22} /></div>
      <div>
        <span className="eyebrow">Current access</span>
        <h2>{siteStatus.label}</h2>
        <p>The bridge and plaza are under active rehabilitation. Expected completion is {siteStatus.expected}, subject to the project schedule. Verify before setting out.</p>
        <div className="status-meta">
          <span><CalendarDays size={15} /> Checked {siteStatus.lastVerified}</span>
          <a href={siteStatus.source} target="_blank" rel="noreferrer">Official project source <ExternalLink size={14} /></a>
          {!compact && <Link href="/renovation">Full renovation update →</Link>}
        </div>
      </div>
    </aside>
  );
}
