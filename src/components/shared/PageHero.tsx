import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  bgImage?: string;
}

export default function PageHero({ title, description, eyebrow, bgImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#1A4143] px-4 text-white lg:min-h-[680px]">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-[#061f20]/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061f20]/94 via-[#1A4143]/76 to-[#1A4143]/22" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
      <div className="relative container-wide flex min-h-[560px] items-end pb-20 pt-32 lg:min-h-[680px] lg:pb-28 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-5xl"
        >
          {eyebrow && (
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-eyebrow text-[#d9ff75]">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-white/72 md:text-lg md:leading-8">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
