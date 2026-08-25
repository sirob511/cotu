import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function ArticleShell({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return <div className={`shell article-layout${aside ? " has-aside" : ""}`}><article className="article-body">{children}</article>{aside && <aside className="article-aside">{aside}</aside>}</div>;
}

export function ArticleSection({ eyebrow, title, children, id }: { eyebrow?: string; title: string; children: React.ReactNode; id?: string }) {
  return <section className="article-section" id={id}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2><div>{children}</div></section>;
}

export function SourceNote({ href, children }: { href: string; children: React.ReactNode }) {
  return <p className="source-note"><span>SOURCE</span>{children} <a href={href} target="_blank" rel="noreferrer">View source <ExternalLink size={13} /></a></p>;
}

export function NextLinks({ links }: { links: { label: string; href: string }[] }) {
  return <nav className="next-links" aria-label="Continue exploring"><span className="eyebrow">Keep exploring</span>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}<ArrowRight size={16} /></Link>)}</nav>;
}

export function FactRow({ label, value }: { label: string; value: React.ReactNode }) {
  return <div className="fact-row"><span>{label}</span><strong>{value}</strong></div>;
}
