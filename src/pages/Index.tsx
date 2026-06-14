import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Microscope,
  Scale,
  TestTube2,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

import aboutDetail from "@/assets/verity-lab-room.webp";
import heroBackgroundVideo from "@/assets/hero-background.mp4";
import independentMattersImage from "@/assets/independent-matters-lab.png";
import crudeAnalysisImage from "@/assets/crude-lubricants-oil.jpg";
import fuelsAnalysisImage from "@/assets/fuel-distillates-nozzle.jpg";
import waterAnalysisImage from "@/assets/water-environment-lab.webp";

const heroStatementLines = [
  "Verity Labs is an independent multi-purpose laboratory",
  "testing fuels, lubricants, and water to ASTM, IP, ISO, and UOP protocols",
  "so you can settle a dispute, clear a cargo, or sign off a batch",
  "with evidence, not assumptions.",
];

const heroStats = [
  ["17025", "ISO/IEC accredited testing"],
  ["9001", "ISO certified quality system"],
  ["24h", "Standard cargo turnaround"],
  ["100%", "Independent of trade interest"],
];

const heroHeadline = "The last word on what's in your fuel, oil, and water.";
const heroHeadlineWords = heroHeadline.split(" ");

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.055,
    },
  },
};

const headlineWord = {
  hidden: {
    y: "115%",
    opacity: 0,
    filter: "blur(10px)",
  },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const services = [
  {
    number: "01 / TESTING",
    title: "Testing",
    copy: "Physical and chemical analysis of fuels, gases, oils, and water against the international standard your contract or regulator requires.",
    tags: ["Fuels & bunkers", "Lubricants", "Crude & condensate", "Water"],
    icon: FlaskConical,
  },
  {
    number: "02 / ASSURANCE",
    title: "Assurance",
    copy: "We go beyond a single result - sampling, chain-of-custody, and witnessed testing that hold up to audit and counterparty scrutiny.",
    tags: ["Witnessed sampling", "Chain of custody", "Batch certification"],
    icon: ClipboardCheck,
  },
  {
    number: "03 / ARBITRATION",
    title: "Arbitration",
    copy: "When two parties disagree on quality, we serve as the independent referee. Sealed samples, dual analysis, and a result both sides agreed to accept in advance.",
    tags: ["Umpire analysis", "Dispute resolution", "Referee sampling"],
    icon: Scale,
  },
  {
    number: "04 / CONSULTING",
    title: "Consulting",
    copy: "Method selection, specification design, and lab set-up advice for clients building their own quality programs from the ground up.",
    tags: ["Spec design", "Method validation", "Programme set-up"],
    icon: Microscope,
  },
];

const catalogue = [
  {
    title: "Fuels & Distillates",
    image: fuelsAnalysisImage,
    imageAlt: "Fuel sample analysis in a Verity Labs testing environment",
    rows: [
      ["Gasoline", "D4814"],
      ["Diesel / gas oil", "EN590"],
      ["Aviation turbine fuel", "D1655"],
      ["Bunker / residual fuel", "ISO 8217"],
      ["Biofuels - ethanol, biodiesel", "D6751"],
    ],
  },
  {
    title: "Crude, Gas & Lubricants",
    image: crudeAnalysisImage,
    imageAlt: "Lubricant oil pouring from a bottle for crude and lubricant analysis",
    rows: [
      ["Crude oil & condensate", "D5002"],
      ["Natural gas mixtures", "GPA 2261"],
      ["Refined petroleum gas", "D2163"],
      ["Engine & industrial lubricants", "D445"],
      ["Used oil analysis", "D7720"],
    ],
  },
  {
    title: "Water & Environmental",
    image: waterAnalysisImage,
    imageAlt: "Water testing sample prepared for environmental analysis",
    rows: [
      ["Potable water", "ISO 5667"],
      ["Produced / process water", "D1129"],
      ["Effluent & discharge", "D1252"],
      ["Heavy metals", "ICP-OES"],
      ["Microbiological screen", "ISO 6222"],
    ],
  },
];

const process = [
  ["STEP 01", "Sample & seal", "Witnessed or client-supplied sampling, logged under a unique custody number the moment it reaches us."],
  ["STEP 02", "Analyse", "Run against the agreed methods by accredited analysts on calibrated, traceable instruments."],
  ["STEP 03", "Verify", "Independent review and QC check before any result leaves the building. No single analyst signs alone."],
  ["STEP 04", "Certify", "A certificate of analysis with method, result, and uncertainty - defensible in audit or arbitration."],
];

const credentials = [
  {
    number: "17025",
    label: "Technical competence",
    title: "ISO/IEC 17025 - Accredited",
    copy: "The international benchmark for testing and calibration laboratories. It certifies that our methods, equipment, and analysts produce results that are technically valid and traceable - the credential that makes a Verity certificate defensible in audit and arbitration.",
  },
  {
    number: "9001",
    label: "Quality management",
    title: "ISO 9001 - Certified",
    copy: "The standard for how the business itself is run: documented processes, consistent service, and continual improvement. It assures clients that the rigour in the lab extends to every engagement, every time.",
  },
];

const valueChain = ["TRADERS", "REFINERS", "BUNKERING", "REGULATORS", "INSURERS", "SURVEYORS"];

const catalogueGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const catalogueCard = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.985,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ScrollRevealLine({
  line,
  index,
  progress,
}: {
  line: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.2;
  const end = start + 0.18;
  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  const y = useTransform(progress, [start, end], [34, 0]);
  const blur = useTransform(progress, [start, end], ["blur(8px)", "blur(0px)"]);

  return (
    <span className="block overflow-hidden">
      <motion.span
        style={{ opacity, y, filter: blur }}
        className="block text-2xl font-semibold leading-[1.16] tracking-[-0.035em] text-foreground md:text-4xl lg:text-5xl"
      >
        {line}
      </motion.span>
    </span>
  );
}

function ScrollRevealStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 42%"],
  });

  return (
    <section ref={sectionRef} className="px-4 py-8 lg:py-12">
      <div className="container-wide min-h-[150vh]">
        <div className="sticky top-24 flex min-h-[68vh] items-center">
          <div className="mx-auto max-w-4xl text-center">
            {heroStatementLines.map((line, index) => (
              <ScrollRevealLine
                key={line}
                line={line}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndependentMattersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["circle(2% at 50% 50%)", "circle(28% at 50% 50%)", "circle(150% at 50% 50%)"]
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-[260vh] text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ clipPath }} className="absolute inset-0">
          <motion.img
            src={independentMattersImage}
            alt="Independent laboratory instruments and sample preparation"
            style={{ scale: imageScale }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A4143]/56" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061f20]/86 via-[#1A4143]/56 to-[#061f20]/74" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        </motion.div>

        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[76%]"
          style={{
            background:
              "linear-gradient(270deg, rgba(6,31,32,0.76) 0%, rgba(18,52,53,0.58) 34%, rgba(26,65,67,0.28) 68%, rgba(26,65,67,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[58%]"
          style={{
            background:
              "radial-gradient(ellipse at 58% 42%, rgba(6,31,32,0.58) 0%, rgba(6,31,32,0.34) 40%, rgba(6,31,32,0.12) 70%, rgba(6,31,32,0) 100%)",
          }}
        />

        <div className="container-wide relative z-10 flex min-h-screen items-center">
          <div className="ml-auto max-w-2xl py-10 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:py-16">
            <p className="text-sm font-semibold text-white/70">Why independent matters</p>
            <blockquote className="mt-6 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
              &quot;We built Verity Labs so quality could be settled at home - with talent and instruments that already existed locally, instead of shipping samples overseas and waiting weeks for an answer.&quot;
            </blockquote>
            <p className="mt-7 font-mono text-xs uppercase tracking-eyebrow text-white/60">- On the origin of Verity Labs</p>
            <div className="mt-10 flex flex-wrap gap-2">
              {valueChain.map((item) => (
                <span key={item} className="border border-white/18 bg-[#1A4143]/48 px-4 py-2 font-mono text-[11px] font-semibold tracking-eyebrow text-white/78 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/76">
              Trusted across the value chain by parties who can&apos;t afford to be wrong about what&apos;s in the tank - and who need a result the other side will accept.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRevealCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[number];
  index: number;
  isVisible: boolean;
}) {
  const Icon = service.icon;
  const [, label] = service.number.split(" / ");

  return (
    <motion.article
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 58,
        scale: isVisible ? 1 : 0.96,
      }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      className="verity-radius-md group flex min-h-[340px] flex-col border border-white/10 bg-white/[0.08] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur transition duration-300 hover:bg-white/[0.12]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-eyebrow text-[#d9ff75]">
            {label}
          </p>
        </div>
        <span className="verity-radius-full flex h-11 w-11 shrink-0 items-center justify-center bg-[#d9ff75] text-[#1A4143] transition duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
      </div>

      <div className="my-7 h-px w-full bg-white/14" />
      <p className="text-sm leading-6 text-white/72">{service.copy}</p>

      <div className="mt-auto pt-10">
        <div className="h-px w-full bg-white/14" />
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#d9ff75]"
        >
          Request this service
          <span className="verity-radius-full flex h-5 w-5 items-center justify-center bg-[#d9ff75] text-[#1A4143]">
            <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCardCount, setVisibleCardCount] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const revealThresholds = [0.18, 0.52, 0.72, 0.9];
      setVisibleCardCount(revealThresholds.filter((threshold) => progress >= threshold).length);
    };

    updateVisibleCards();
    window.addEventListener("scroll", updateVisibleCards, { passive: true });
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("scroll", updateVisibleCards);
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-4 py-20 lg:min-h-[320vh] lg:py-28">
      <div
        className="container-wide verity-radius-lg relative overflow-hidden bg-[#062f33] px-6 py-14 text-white shadow-[0_28px_90px_rgba(6,31,32,0.16)] md:px-10 lg:sticky lg:top-4 lg:px-16 lg:py-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 44% 8%, rgba(217,255,117,0.14), transparent 30%), linear-gradient(135deg, rgba(26,65,67,0.98), rgba(6,47,51,0.98)), radial-gradient(circle at 1px 1px, rgba(217,255,117,0.18) 1px, transparent 1px), linear-gradient(60deg, rgba(217,255,117,0.07) 1px, transparent 1px), linear-gradient(120deg, rgba(217,255,117,0.06) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 72px 72px, 72px 72px, 72px 72px",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(217,255,117,0.08),transparent_32%),linear-gradient(180deg,rgba(6,31,32,0)_0%,rgba(6,31,32,0.48)_100%)]" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start"
        >
          <div>
            <span className="verity-radius-full inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/86 backdrop-blur">
              <span className="verity-radius-full h-1.5 w-1.5 bg-[#d9ff75]" />
              What we do
            </span>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-6xl">
              Reliable testing, assurance &{" "}
              <span className="font-serif-italic text-[#d9ff75]">quality resolution</span>
            </h2>
          </div>
          <div className="max-w-2xl lg:pt-8">
            <p className="text-base font-medium leading-7 text-white/76">
              From routine batch testing to acting as the neutral referee in a commercial dispute, every engagement ends with a defensible result you can stand behind.
            </p>
            <a
              href="#capabilities"
              className="verity-radius-full mt-7 inline-flex h-12 items-center gap-3 bg-[#d9ff75] px-5 text-sm font-semibold text-[#1A4143] transition hover:bg-white"
            >
              View test catalogue
              <span className="verity-radius-full flex h-7 w-7 items-center justify-center bg-[#1A4143] text-white">
                <ArrowRight className="h-4 w-4 -rotate-45" />
              </span>
            </a>
          </div>
        </motion.div>

        <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceRevealCard
              key={service.title}
              service={service}
              index={index}
              isVisible={index < visibleCardCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const [activeProcessStep, setActiveProcessStep] = useState<number | null>(null);

  return (
    <Layout transparentNav>
      <section className="relative overflow-hidden px-4 pb-16 pt-12 text-white md:pt-16 lg:min-h-[860px] lg:pb-24" style={{ backgroundColor: "#1A4143" }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroBackgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#061f20]/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061f20]/50 via-[#1A4143]/40 to-[#061f20]/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(217,255,117,0.16),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[82%] bg-gradient-to-t from-[#1A4143] via-[#1A4143]/50 to-transparent" />
        <div className="container-wide relative flex min-h-[760px] flex-col justify-end lg:min-h-[860px]">
          <div className="flex flex-1 items-end pb-8 pt-32 lg:pb-10 lg:pt-40">
          <div className="max-w-4xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex border border-white/18 bg-white/[0.13] px-3 py-1.5 text-sm font-semibold text-white/72 shadow-[0_12px_34px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-md"
            >
              Independent · Accredited · Impartial
            </motion.p>
            <motion.h1
              aria-label={heroHeadline}
              initial="hidden"
              animate="show"
              variants={headlineContainer}
              className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-[4.8rem]"
            >
              {heroHeadlineWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  aria-hidden="true"
                  className={`inline-block overflow-hidden align-top ${index < heroHeadlineWords.length - 1 ? "mr-[0.18em]" : ""}`}
                >
                  <motion.span variants={headlineWord} className="inline-block will-change-transform">
                    {word}
                  </motion.span>
                  {index < heroHeadlineWords.length - 1 ? " " : ""}
                </span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-5 max-w-xl text-sm font-medium leading-6 text-white/58 md:text-base"
            >
              Fast, independent lab results for cargo clearance, disputes, and quality checks across fuels, lubricants, and water.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.28 }} className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <motion.a 
                whileHover={{ scale: 1.04 }} 
                whileTap={{ scale: 0.96 }}
                href="#contact" 
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#d9ff75] px-6 text-sm font-semibold text-[#1A4143] transition hover:bg-white"
              >
                Request a test <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.2)" }} 
                whileTap={{ scale: 0.96 }}
                href="#capabilities" 
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-white shadow-sm transition"
              >
                View test catalogue
              </motion.a>
            </motion.div>
          </div>

          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-3 animate-marquee-rtl hover:[animation-play-state:paused] cursor-pointer">
              {[...heroStats, ...heroStats].map(([value, label], index) => (
                <div key={`${label}-${index}`} className="w-[248px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.07] p-5 text-center shadow-sm backdrop-blur">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                  <p className="mt-2 text-xs font-medium leading-5 text-white/52">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollRevealStatement />

      <WhatWeDoSection />

      <section id="capabilities" className="scroll-mt-28 px-4 py-20 lg:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl text-center">
            <TestTube2 className="mx-auto h-8 w-8 text-[#7a9b2f]" strokeWidth={1.5} />
            <p className="mt-6 text-sm font-semibold text-foreground/45">Test catalogue</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">The matrices we analyse.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-foreground/58">A representative slice of our accredited methods. Need something not listed? We validate new methods on request.</p>
          </div>

          <motion.div
            variants={catalogueGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid gap-5 lg:grid-cols-3"
          >
            {catalogue.map((group, index) => (
              <motion.article 
                key={group.title} 
                variants={catalogueCard}
                whileHover={{ y: -6, scale: 1.008 }}
                className="group relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#1A4143] shadow-[0_18px_65px_rgba(26,65,67,0.08)] transition duration-300"
              >
                <motion.img
                  src={group.image}
                  alt={group.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020d0e]/92 via-[#071d1e]/48 to-[#1A4143]/18 transition duration-500 group-hover:opacity-0" />
                <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-6 text-white md:p-7">
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-eyebrow text-white/64">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">{group.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 z-20 flex flex-col justify-between bg-[#1A4143]/90 p-6 text-white opacity-0 shadow-[inset_0_0_120px_rgba(6,31,32,0.42)] backdrop-saturate-150 transition duration-500 group-hover:opacity-100 md:p-7">
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-eyebrow text-[#d9ff75]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">{group.title}</h3>
                  </div>
                  <div className="mt-12 divide-y divide-white/12 border-y border-white/12">
                    {group.rows.map(([name, method]) => (
                      <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-4 py-4">
                        <span className="text-sm font-medium leading-5 text-white/78">{name}</span>
                        <span className="font-mono text-xs font-semibold text-[#d9ff75]">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 lg:py-28">
        <div className="container-wide overflow-hidden rounded-[2.6rem] bg-[#1A4143] text-white">
          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div className="relative flex min-h-[540px] overflow-hidden rounded-[2rem] p-7 text-white md:p-10">
              <img
                src={aboutDetail}
                alt="Laboratory instrument used for analytical testing"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(26, 65, 67, 0.36)" }} />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,70,42,0.68) 0%, rgba(55,116,60,0.42) 48%, rgba(4,40,30,0.66) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 28% 18%, rgba(217,255,117,0.18) 0%, rgba(14,70,42,0.28) 36%, rgba(0,0,0,0) 68%)",
                }}
              />
              <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/62">How an engagement runs</p>
                  <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-6xl">From sample to signed certificate.</h2>
                  <p className="mt-6 max-w-md text-sm leading-6 text-white/68">A typed sequence, because chain-of-custody only means something if every step is ordered and recorded.</p>
                </div>
                <div className="h-px w-full bg-white/24" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {process.map(([step, title, copy], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveProcessStep(index)}
                  onMouseLeave={() => setActiveProcessStep(null)}
                  onFocus={() => setActiveProcessStep(index)}
                  onBlur={() => setActiveProcessStep(null)}
                  tabIndex={0}
                  className="group rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:bg-white/[0.1] focus:bg-white/[0.1] focus:outline-none focus:ring-1 focus:ring-[#d9ff75]/60"
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d9ff75] text-[#1A4143] transition duration-300 group-hover:scale-105 group-focus-within:scale-105">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-white/42">{step}</p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                      <p
                        className={`max-w-xl overflow-hidden text-sm leading-6 text-white/64 transition-all duration-300 ${
                          activeProcessStep === index ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-foreground/45">Credentials</p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">Accredited to the standards that settle arguments.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/58">Two independent stamps cover the two questions every counterparty asks: are the results technically valid, and is the lab run properly?</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {credentials.map((credential, index) => (
                <motion.article 
                  key={credential.number} 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[2rem] bg-[#d9ff75] p-7 text-[#1A4143] shadow-[0_18px_60px_rgba(26,65,67,0.12)] transition duration-300"
                >
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-[#1A4143] text-white">
                    <span className="font-mono text-xs text-white/46">ISO</span>
                    <span className="text-3xl font-semibold tracking-[-0.04em]">{credential.number}</span>
                  </div>
                  <p className="mt-7 text-sm font-semibold text-[#1A4143]/54">{credential.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1A4143]">{credential.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#1A4143]/70">{credential.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndependentMattersSection />

      <section id="contact" className="scroll-mt-28 px-4 pb-24 pt-10 lg:pb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="container-wide overflow-hidden rounded-[2.8rem] bg-[#1A4143] p-8 text-center text-white md:p-14 lg:p-20"
        >
          <p className="text-sm font-medium text-white/46">Get in touch</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] md:text-7xl">Send us a sample. Get back certainty.</h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/58">Tell us what you&apos;re testing and the standard you need to meet. We&apos;ll confirm method, turnaround, and price the same day.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a 
              whileHover={{ scale: 1.04 }} 
              whileTap={{ scale: 0.96 }}
              href="mailto:results@veritylabs.com?subject=Request%20a%20test" 
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#d9ff75] px-6 text-sm font-semibold text-[#1A4143] transition hover:bg-white"
            >
              Request a test <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.2)" }} 
              whileTap={{ scale: 0.96 }}
              href="#capabilities" 
              className="inline-flex h-12 items-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition"
            >
              Talk to a chemist
            </motion.a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
