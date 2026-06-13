import { ArrowRight, Beaker, CheckCircle2, Droplets, Flame, Fuel, Scale, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

import serviceFuels from "@/assets/service-fuels.jpg";
import serviceLubricants from "@/assets/service-lubricants.jpg";
import serviceWater from "@/assets/service-water.jpg";
import serviceRefinery from "@/assets/service-refinery.jpg";
import serviceMarine from "@/assets/service-marine.jpg";

const testingServices = [
  {
    title: "Fuels",
    copy: "Gasoline, Gasoil, Domestic Kerosene, Aviation Turbine Fuel (Jet A-1), Fuel Oil.",
    image: serviceFuels,
    icon: Fuel,
  },
  {
    title: "Gas",
    copy: "Liquefied Petroleum Gas (LPG), Liquefied Natural Gas (LNG), Compressed Natural Gas (CNG) and Hydrocarbon Gas Mixtures.",
    image: serviceMarine,
    icon: Flame,
  },
  {
    title: "Oils",
    copy: "Lubricants and Grease.",
    image: serviceLubricants,
    icon: Droplets,
  },
  {
    title: "Environmental Testing",
    copy: "Industrial effluents, sewage and non-sewage wastewater.",
    image: serviceWater,
    icon: Beaker,
  },
];

const consultingItems = [
  "Fuel blending & fuel quality standards",
  "Proper product storage",
  "Defining performance requirements of fuels",
  "Onsite testing implementations",
];

const supportServices = [
  {
    eyebrow: "Arbitration and Consulting",
    title: "Our meticulous attention to detail",
    icon: Scale,
    copy: [
      "Our meticulous attention to detail is the hallmark of our work. We provide expert analysis and testimony for mediation, arbitration, and legal cases, both domestically and internationally. Our results are admissible and highly regarded in quality disputes and fuel contamination issues.",
      "We excel in helping clients explore innovative solutions to complex challenges, making our consulting services highly sought-after. Our specialists forge strong partnerships with clients, gaining a deep understanding of their operations to develop tailored solutions that address critical needs head-on.",
      "Working with us means having a dedicated, resourceful ally committed to your success. We pride ourselves on thinking creatively and delivering value that exceeds expectations, stopping at nothing to help you achieve your goals.",
    ],
  },
  {
    eyebrow: "Assurance",
    title: "Expert analysis clients can rely on",
    icon: ShieldCheck,
    copy: [
      "Our meticulous attention to detail is the defining characteristic of our work. We provide expert analysis and testimony for mediation, arbitration, and legal cases, both domestically and internationally. Our results are admissible and highly regarded in matters involving quality disputes and fuel contamination issues.",
      "We help clients explore innovative solutions to complex challenges, which is why our consulting services are in high demand. Our specialists forge strong partnerships with clients, immersing themselves in their operations to develop tailored solutions that directly address critical needs.",
      "Partnering with us means having a dedicated and resourceful ally wholly committed to your success. We take pride in our creative problem-solving abilities and our commitment to delivering value that surpasses expectations. We will stop at nothing to help you achieve your goals.",
    ],
  },
  {
    eyebrow: "Consulting",
    title: "Critical support for operational decisions",
    icon: CheckCircle2,
    copy: [
      "We thrive in helping clients explore options and solve critical needs. We fully engage with our clients to understand their challenges and develop effective solutions.",
      "Our expertise includes fuel blending, fuel quality, proper product storage, and defining performance requirements of fuels. We work closely with clients to optimize their operations and ensure they meet their goals.",
    ],
  },
];

export default function Services() {
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
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-eyebrow text-secondary">
              Services
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              From our proven, dynamic approach
            </h1>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="mb-5 font-mono text-[11px] uppercase tracking-eyebrow text-secondary">
              What we do
            </p>
            <div className="space-y-6 text-lg leading-8 text-foreground/65">
              <p>
                From our proven, dynamic approach to our unwavering commitment to client satisfaction, we stand ready to support you every step of the way. Our comprehensive suite of services is underpinned by deep industry expertise and an unwavering dedication to crafting bespoke solutions that perfectly align with your unique requirements.
              </p>
              <p>
                We recognize that your needs are constantly evolving, and last-minute changes are par for the course. That&apos;s why we&apos;ve built agility into the core of our service offering, enabling us to swiftly pivot and adapt to ensure your continued success. Our flexible, client-centric approach sets us apart, and we take pride in our ability to navigate complex challenges with ease.
              </p>
              <p>
                Explore the full scope of our capabilities and discover how we can help you achieve your goals, no matter how ambitious they may be.
              </p>
            </div>
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
                Testing
              </p>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                Laboratory testing for fuels, gas, oils, and environmental samples.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-foreground/58 lg:ml-auto">
              Our testing services cover the core product groups clients rely on for trade, compliance, operational safety, and dispute resolution.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {testingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article 
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover="hover"
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_65px_rgba(31,35,30,0.08)] transition duration-300"
                >
                  <div className="relative aspect-[1.05] overflow-hidden">
                    <motion.img
                      variants={{
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.6 }}
                      src={service.image}
                      alt={`${service.title} testing`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f231e]/72 via-transparent to-transparent" />
                    <motion.div 
                      variants={{
                        hover: { scale: 1.1, rotate: 5 }
                      }}
                      className="absolute left-5 top-5 rounded-full bg-white/90 p-3 text-[#1f231e]"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </motion.div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em]">{service.title}</h3>
                    <p className="mt-4 min-h-24 text-sm leading-6 text-foreground/56">{service.copy}</p>
                    <motion.a
                      variants={{
                        hover: { x: 4 }
                      }}
                      href="#contact"
                      className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-foreground/62 transition hover:text-[#6f8f2a]"
                    >
                      Get in touch <ArrowRight className="h-3.5 w-3.5" />
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[460px] lg:min-h-[760px]"
          >
            <img
              src={serviceRefinery}
              alt="Refinery and laboratory service support"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1f231e]/22" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="bg-muted/10 px-6 py-20 lg:px-20 lg:py-32"
          >
            <div className="space-y-16">
              {supportServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article 
                    key={service.eyebrow}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f231e] text-[#d9ff75]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="font-mono text-[11px] uppercase tracking-eyebrow text-secondary">
                        {service.eyebrow}
                      </p>
                    </div>
                    <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                      {service.title}
                    </h2>
                    <div className="mt-8 space-y-5">
                      {service.copy.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-foreground/65">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {service.eyebrow === "Arbitration and Consulting" && (
                      <div className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-[0_14px_45px_rgba(31,35,30,0.06)]">
                        <p className="font-mono text-[11px] uppercase tracking-eyebrow text-foreground/38">
                          We consult on
                        </p>
                        <ul className="mt-5 grid gap-3">
                          {consultingItems.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-foreground/68">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6f8f2a]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href="#contact"
                      className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#1f231e] px-6 text-sm font-semibold text-white transition hover:bg-[#343a31]"
                    >
                      Get in touch <ArrowRight className="h-4 w-4" />
                    </motion.a>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 border-t border-border/40 px-4 py-20 lg:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="container-wide overflow-hidden rounded-[2.8rem] bg-[#1f231e] p-8 text-center text-white md:p-14 lg:p-20"
        >
          <p className="text-sm font-medium text-white/46">Request a test</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] md:text-7xl">
            Tell us what you need tested.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/58">
            Share your sample type, testing requirement, and deadline. We will confirm the right method, turnaround, and next steps.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:results@veritylabs.com?subject=Request%20a%20test"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-[#d9ff75] px-6 text-sm font-semibold text-[#1f231e] transition hover:bg-white"
          >
            Request a test <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </section>
    </Layout>
  );
}
