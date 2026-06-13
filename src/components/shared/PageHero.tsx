import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage?: string;
}

export default function PageHero({ title, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative bg-dark overflow-hidden">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/95" />
      <div className="relative container-wide py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark-foreground">
            {title}
          </h1>
          <p className="mt-4 text-lg text-dark-foreground/70 leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
