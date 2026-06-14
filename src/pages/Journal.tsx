import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import independentMattersImage from "@/assets/independent-matters-lab.png";

const entries = [
  {
    cat: "Method note",
    title: "ISO 8217:2024 - what changed for VLSFO testing",
    excerpt: "A short walk-through of the revised limits and the practical impact on bunker disputes in West African ports.",
    date: "May 2026",
  },
  {
    cat: "Case study",
    title: "A 480-tonne bunker dispute, settled in 48 hours",
    excerpt: "How witnessed sampling and a documented chain-of-custody closed a CCAI argument before it reached arbitration.",
    date: "March 2026",
  },
  {
    cat: "Lab note",
    title: "Wear-metal trending: when 'high' is actually normal",
    excerpt: "Why an isolated ICP result tells you almost nothing, and what to look at instead in used-oil monitoring.",
    date: "February 2026",
  },
  {
    cat: "Standard watch",
    title: "UOP 938 vs ASTM D5762 for nitrogen - which to ask for",
    excerpt: "A practical comparison for refinery process engineers running on different feed slates.",
    date: "January 2026",
  },
];

export default function Journal() {
  return (
    <Layout>
      <PageHero
        eyebrow="Insights"
        title="Method notes from the laboratory"
        description="Short, technical pieces written by our analysts on standards changes, common dispute patterns, and the practical use of test data."
        bgImage={independentMattersImage}
      />

      <section className="border-t border-border/40">
        <div className="container-wide divide-y divide-border/40">
          {entries.map((e, index) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover="hover"
              className="group relative grid cursor-pointer grid-cols-1 gap-6 overflow-hidden py-12 md:grid-cols-12 lg:py-16"
            >
              <motion.div
                variants={{
                  hover: { x: 0 },
                }}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 bg-secondary/10"
              />

              <p className="relative z-10 pl-4 pt-2 font-mono text-[11px] uppercase tracking-eyebrow text-secondary transition-all duration-300 group-hover:pl-6 md:col-span-2">
                {e.cat}
              </p>
              <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 md:col-span-8">
                <h2 className="font-display text-3xl leading-[1.05] transition-colors group-hover:text-secondary lg:text-5xl">
                  {e.title}
                </h2>
                <p className="mt-4 max-w-2xl text-foreground/65">{e.excerpt}</p>
              </div>
              <p className="relative z-10 pr-4 pt-2 font-mono text-xs text-foreground/40 md:col-span-2 md:text-right">
                {e.date}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
