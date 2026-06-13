import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const entries = [
  {
    cat: "Method note",
    title: "ISO 8217:2024 — what changed for VLSFO testing",
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
    title: "UOP 938 vs ASTM D5762 for nitrogen — which to ask for",
    excerpt: "A practical comparison for refinery process engineers running on different feed slates.",
    date: "January 2026",
  },
];

export default function Journal() {
  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-eyebrow font-mono text-secondary mb-6">Insights</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl">
            Method notes<br />
            <span className="text-secondary">from the laboratory.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-foreground/65 leading-relaxed">
            Short, technical pieces written by our analysts — on standards changes,
            common dispute patterns and the practical use of test data.
          </p>
        </motion.div>
      </section>

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
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 lg:py-16 cursor-pointer overflow-hidden relative"
            >
              {/* Subtle hover background slide-in */}
              <motion.div 
                variants={{
                  hover: { x: 0 }
                }}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 bg-secondary/10 pointer-events-none"
              />
              
              <p className="relative z-10 md:col-span-2 font-mono text-[11px] uppercase tracking-eyebrow text-secondary pt-2 pl-4 group-hover:pl-6 transition-all duration-300">{e.cat}</p>
              <div className="relative z-10 md:col-span-8 group-hover:translate-x-2 transition-transform duration-300">
                <h2 className="font-display text-3xl lg:text-5xl group-hover:text-secondary transition-colors leading-[1.05]">
                  {e.title}
                </h2>
                <p className="mt-4 text-foreground/65 max-w-2xl">{e.excerpt}</p>
              </div>
              <p className="relative z-10 md:col-span-2 font-mono text-xs text-foreground/40 md:text-right pt-2 pr-4">{e.date}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
