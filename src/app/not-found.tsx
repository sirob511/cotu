import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><div className="not-found-rings" aria-hidden="true"><i /><i /><i /></div><div className="shell not-found-inner"><span className="eyebrow">404 · OFF CENTER</span><p className="not-found-code">36.15689° N<br />95.99153° W</p><h1>This is not<br />the Center.</h1><p>The place you followed is outside the circle. Return to the guide or use the map to get properly oriented.</p><div><Link className="button button-rust" href="/"><ArrowLeft size={16} />Back to the Center</Link><Link className="button button-ghost" href="/map"><MapPin size={16} />Open the map</Link></div></div></section>;
}
