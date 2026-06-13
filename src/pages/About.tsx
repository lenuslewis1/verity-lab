import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import aboutDetail from "@/assets/verity-corridor.webp";
import heroLab from "@/assets/verity-lab-room.webp";

const values = [
  {
    title: "Transparency",
    copy: "Clear methods, clear reporting, and clear accountability from sample receipt to signed result.",
  },
  {
    title: "Traceability",
    copy: "Documented custody, calibrated instruments, and records that connect every result back to the work performed.",
  },
  {
    title: "Certainty",
    copy: "Reliable results delivered with the technical discipline clients need to make confident decisions.",
  },
];

const storyParagraphs = [
  "Verity Labs was born from a visionary idea to tackle a complex challenge head-on. We recognized the need for a comprehensive, Africa-based solution that would eliminate the reliance on outsourcing petroleum and petroleum testing services to facilities beyond the continent's borders.",
  "With an unwavering commitment to harnessing the exceptional talent and expertise available within Africa, we set out to create a platform that would revolutionize the industry. Our vision is to seamlessly connect cutting-edge infrastructure, robust capacity development initiatives, and strategic partnerships to achieve this ambitious goal.",
  "At the heart of Verity Labs lies a team of passionate experts who have poured their collective knowledge and experience into developing a truly independent testing facility. This state-of-the-art facility represents the first step in our exciting journey to transform the petroleum testing landscape across Africa.",
  "As we embark on this transformative path, we remain dedicated to our core mission: empowering African nations and businesses with the tools, resources, and expertise they need to thrive in the global marketplace. By providing reliable, accurate, and efficient testing services, we aim to catalyze growth, foster innovation, and contribute to the continent's economic development.",
  "Through our work, we aspire to not only meet the evolving needs of our clients but also to set a new standard for excellence in the industry. We believe that by investing in the future of Africa's petroleum sector, we can create a ripple effect of positive change that will benefit generations to come.",
  "At Verity Labs, we are more than just a testing facility - we are a catalyst for progress, a partner in success, and a beacon of hope for a brighter, more sustainable future.",
];

export default function About() {
  return (
    <Layout>
      <section className="container-wide pb-20 pt-20 lg:pb-28 lg:pt-28">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-eyebrow text-secondary">
              About Us
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              Reliable &amp; High-Quality Laboratory
            </h1>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="text-lg leading-8 text-foreground/65">
              At Verity Labs, Transparency, Traceability, and Certainty are the bedrock of our business and our utmost priority. We refuse to compromise on the exacting standards we have set for ourselves, as these core values shape our thinking, define our company culture, and permeate every aspect of our operations.
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground/65">
              We are more than just a testing facility - we are a partner in our clients&apos; success, dedicated to providing the highest level of service and reliability of results.
            </p>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#1f231e] px-6 text-sm font-semibold text-white transition hover:bg-[#343a31]"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-border/40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[480px] lg:min-h-[760px]"
          >
            <img
              src={aboutDetail}
              alt="Verity Labs corridor and laboratory rooms"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="bg-muted/10 px-6 py-20 lg:px-20 lg:py-32"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-eyebrow text-secondary">
              Our Story
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
              Built to transform petroleum testing across Africa.
            </h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="mt-10 space-y-6"
            >
              {storyParagraphs.map((paragraph) => (
                <motion.p 
                  key={paragraph} 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="text-base leading-8 text-foreground/65"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-20 lg:py-28">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
          >
            <div>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-eyebrow text-secondary">
                Our principles
              </p>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                Transparency, Traceability, Certainty.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-foreground/58 lg:ml-auto">
              These are not slogans. They are the operating principles behind how we receive samples, perform analysis, review results, and support every client decision.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value, idx) => (
              <motion.article 
                key={value.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[2rem] bg-white p-7 shadow-[0_18px_65px_rgba(31,35,30,0.08)] transition duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f231e] text-[#d9ff75]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-foreground/56">{value.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 border-t border-border/40 px-4 py-20 lg:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="container-wide overflow-hidden rounded-[2.6rem] bg-[#1f231e] text-white"
        >
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[360px]">
              <img
                src={heroLab}
                alt="Verity Labs analytical laboratory"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[#1f231e]/35" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#d9ff75]">
                Get in touch
              </p>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                Partner with a laboratory built for reliable, traceable results.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/58">
                Tell us what you need to test and the standard you need to meet. We will confirm the method, turnaround, and next steps.
              </p>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="mailto:results@veritylabs.com?subject=About%20Verity%20Labs"
                className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-[#d9ff75] px-6 text-sm font-semibold text-[#1f231e] transition hover:bg-white"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
