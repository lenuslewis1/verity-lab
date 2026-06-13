import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 lg:mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? "text-dark-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base lg:text-lg leading-relaxed ${
            light ? "text-dark-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
