import { useRef } from "react";
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
import heroLab from "@/assets/verity-distillation.webp";
import heroLabPortrait from "@/assets/hero-lab-portrait.png";

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

const serviceCardStyles = [
  {
    shell: "bg-[#1A4143] text-white",
    number: "text-[#d9ff75]",
    muted: "text-white/62",
    icon: "bg-[#d9ff75] text-[#1A4143]",
    tag: "bg-white/10 text-white/72",
    line: "bg-white/12",
  },
  {
    shell: "bg-[#d9ff75] text-[#1A4143]",
    number: "text-[#1A4143]/56",
    muted: "text-[#1A4143]/66",
    icon: "bg-white/80 text-[#1A4143]",
    tag: "bg-[#1A4143]/10 text-[#1A4143]/74",
    line: "bg-[#1A4143]/14",
  },
  {
    shell: "bg-white text-[#1A4143]",
    number: "text-[#1A4143]/42",
    muted: "text-[#1A4143]/58",
    icon: "bg-[#1A4143] text-white",
    tag: "bg-[#f1eadc] text-[#1A4143]/70",
    line: "bg-[#1A4143]/10",
  },
  {
    shell: "bg-[#cfe5e3] text-[#1A4143]",
    number: "text-[#1A4143]/50",
    muted: "text-[#1A4143]/62",
    icon: "bg-[#1A4143] text-white",
    tag: "bg-white/55 text-[#1A4143]/74",
    line: "bg-[#1A4143]/12",
  },
];

const catalogue = [
  {
    title: "Fuels & Distillates",
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

function CertificatePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="relative w-full overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(26,65,67,0.24)]"
    >
      <div className="overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: "#1A4143" }}>
        <div className="relative min-h-[380px] overflow-hidden md:min-h-[520px] lg:min-h-[620px]">
          <img
            src={heroLabPortrait}
            alt="Laboratory analyst preparing fuel and oil samples"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

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

export default function Index() {
  return (
    <Layout transparentNav>
      <section className="relative overflow-hidden px-4 pb-16 pt-12 text-white md:pt-16 lg:min-h-[860px] lg:pb-24" style={{ backgroundColor: "#1A4143" }}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(217,255,117,0.18),transparent_34%),linear-gradient(180deg,#1A4143_0%,#1A4143_62%,#1A4143_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
        <div className="container-wide relative">
          <div className="grid items-center gap-10 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:pt-[8rem]">
          <div className="max-w-4xl text-center lg:max-w-none lg:text-left">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-sm font-semibold text-white/55">
              Independent · Accredited · Impartial
            </motion.p>
            <motion.h1
              aria-label={heroHeadline}
              initial="hidden"
              animate="show"
              variants={headlineContainer}
              className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:mx-0 lg:text-[4.8rem]"
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
              className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-white/58 md:text-base lg:mx-0"
            >
              Fast, independent lab results for cargo clearance, disputes, and quality checks across fuels, lubricants, and water.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.28 }} className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
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

          <CertificatePanel />
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

      <section className="px-4 py-20 lg:py-28">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
          >
            <div>
              <p className="text-sm font-semibold text-foreground/45">What we do</p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">Four ways we put a number on quality.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-foreground/58 lg:ml-auto">
              From routine batch testing to acting as the neutral referee in a commercial dispute, every engagement ends the same way: a defensible result you can stand behind.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const style = serviceCardStyles[index % serviceCardStyles.length];
              const [number, label] = service.number.split(" / ");
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover="hover"
                  className={`group relative min-h-[330px] overflow-hidden rounded-[2.25rem] p-7 shadow-[0_22px_70px_rgba(26,65,67,0.08)] transition duration-300 hover:-translate-y-1 ${style.shell}`}
                >
                  <div className={`absolute left-0 top-0 h-full w-1.5 ${style.line}`} />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className={`font-mono text-[11px] font-semibold uppercase tracking-eyebrow ${style.number}`}>
                          {number}
                        </p>
                        <p className={`mt-2 font-mono text-[11px] font-semibold uppercase tracking-eyebrow ${style.muted}`}>
                          {label}
                        </p>
                      </div>
                      <motion.div 
                        variants={{
                          hover: { scale: 1.1, rotate: 10 }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.icon}`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </motion.div>
                    </div>

                    <div className="mt-12 max-w-xl">
                      <h3 className="text-4xl font-semibold tracking-[-0.045em]">{service.title}</h3>
                      <p className={`mt-5 text-sm leading-7 ${style.muted}`}>{service.copy}</p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-10">
                      {service.tags.map((tag) => (
                        <span key={tag} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${style.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={`pointer-events-none absolute -bottom-8 right-6 text-[9rem] font-semibold leading-none tracking-[-0.08em] opacity-[0.06] ${index === 0 ? "text-white" : "text-[#1A4143]"}`}>
                    {number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 px-4 py-20 lg:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl text-center">
            <TestTube2 className="mx-auto h-8 w-8 text-[#7a9b2f]" strokeWidth={1.5} />
            <p className="mt-6 text-sm font-semibold text-foreground/45">Test catalogue</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">The matrices we analyse.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-foreground/58">A representative slice of our accredited methods. Need something not listed? We validate new methods on request.</p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {catalogue.map((group, index) => (
              <motion.article 
                key={group.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-80px" }} 
                transition={{ duration: 0.55, delay: index * 0.08 }} 
                whileHover={{ y: -6, scale: 1.008 }}
                className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_65px_rgba(26,65,67,0.08)] transition duration-300"
              >
                <div className="border-b border-[#1A4143]/10 p-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                </div>
                <div className="divide-y divide-[#1A4143]/8">
                  {group.rows.map(([name, method]) => (
                    <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-4 px-7 py-4">
                      <span className="text-sm font-medium text-foreground/70">{name}</span>
                      <span className="font-mono text-xs font-semibold text-foreground/44">{method}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:py-28">
        <div className="container-wide overflow-hidden rounded-[2.6rem] bg-[#1A4143] text-white">
          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div className="flex min-h-[540px] flex-col justify-between rounded-[2rem] bg-[#d9ff75] p-7 text-[#1A4143] md:p-10">
              <div>
                <p className="text-sm font-semibold text-[#1A4143]/55">How an engagement runs</p>
                <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-6xl">From sample to signed certificate.</h2>
                <p className="mt-6 max-w-md text-sm leading-6 text-[#1A4143]/62">A typed sequence, because chain-of-custody only means something if every step is ordered and recorded.</p>
              </div>
              <img src={aboutDetail} alt="Laboratory instrument used for analytical testing" className="mt-10 h-72 rounded-[1.7rem] object-cover" />
            </div>

            <div className="flex flex-col justify-center gap-4">
              {process.map(([step, title, copy], index) => (
                <motion.div key={title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: index * 0.08 }} className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1A4143]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-white/42">{step}</p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/58">{copy}</p>
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
                  className="rounded-[2rem] bg-white p-7 shadow-[0_16px_50px_rgba(26,65,67,0.07)] transition duration-300"
                >
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-[#1A4143] text-white">
                    <span className="font-mono text-xs text-white/45">ISO</span>
                    <span className="text-3xl font-semibold tracking-[-0.04em]">{credential.number}</span>
                  </div>
                  <p className="mt-7 text-sm font-semibold text-foreground/45">{credential.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{credential.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/56">{credential.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:py-28">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.6rem] bg-white shadow-[0_20px_70px_rgba(26,65,67,0.07)]"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <img src={heroLab} alt="Independent laboratory instruments and sample preparation" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#1A4143]/35" />
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <p className="text-sm font-semibold text-foreground/45">Why independent matters</p>
                <blockquote className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                  &quot;We built Verity Labs so quality could be settled at home - with talent and instruments that already existed locally, instead of shipping samples overseas and waiting weeks for an answer.&quot;
                </blockquote>
                <p className="mt-7 font-mono text-xs uppercase tracking-eyebrow text-foreground/42">- On the origin of Verity Labs</p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {valueChain.map((item) => (
                    <span key={item} className="rounded-full border border-[#1A4143]/10 bg-[#f7f3ea] px-4 py-2 font-mono text-[11px] font-semibold tracking-eyebrow text-foreground/58">{item}</span>
                  ))}
                </div>
                <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/58">
                  Trusted across the value chain by parties who can&apos;t afford to be wrong about what&apos;s in the tank - and who need a result the other side will accept.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
