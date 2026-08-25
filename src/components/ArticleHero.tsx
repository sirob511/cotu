import { Breadcrumbs } from "./Breadcrumbs";

export function ArticleHero({
  eyebrow,
  title,
  intro,
  current,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
}) {
  return (
    <section className="article-hero">
      <div className="shell article-hero-inner">
        <Breadcrumbs current={current} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
