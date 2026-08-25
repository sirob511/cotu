import Link from "next/link";
import { siteStatus } from "@/data/site-status";

export function StatusBar() {
  return (
    <div className="status-bar">
      <div className="shell status-inner">
        <span className="status-copy">
          <span className="status-dot" aria-hidden="true" />
          <strong>{siteStatus.label}</strong>
          <span className="status-expected">Expected {siteStatus.expected}</span>
        </span>
        <Link href="/renovation">View update <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  );
}
