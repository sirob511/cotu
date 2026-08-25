import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>{current}</span>
      </nav>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: current }])} />
    </>
  );
}
