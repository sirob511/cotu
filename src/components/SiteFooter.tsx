import Link from "next/link";

const groups = [
  { title: "Visit", links: [["Plan your visit", "/visit"], ["Directions", "/directions"], ["Parking", "/parking"], ["Map", "/map"]] },
  { title: "Discover", links: [["Why it echoes", "/how-it-works"], ["History", "/history"], ["Artificial Cloud", "/artificial-cloud"], ["Fun facts", "/fun-facts"]] },
  { title: "Nearby", links: [["Things to do", "/things-to-do-nearby"], ["Tulsa King", "/tulsa-king"]] },
  { title: "About", links: [["About this guide", "/about"], ["Sources", "/sources"], ["Renovation", "/renovation"]] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-statement">
          <span className="eyebrow">36.15689° N · 95.99153° W</span>
          <p>One small circle.<br />A very strange echo.</p>
        </div>
        {groups.map((group) => (
          <div key={group.title} className="footer-group">
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
        ))}
      </div>
    </footer>
  );
}
