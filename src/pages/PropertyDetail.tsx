import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import { getServiceBySlug, services } from "@/data/properties";
import { toast } from "@/hooks/use-toast";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(1, "Please enter your company").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);
  const [submitting, setSubmitting] = useState(false);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      name: form.get("name"),
      company: form.get("company"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0]?.message ?? "Invalid input", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Enquiry received", description: `Thank you. A laboratory manager will respond about ${service.name}.` });
    }, 600);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          src={service.image} 
          alt={service.name} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/30 to-dark/95" />
        <div className="relative h-full container-wide flex flex-col justify-end pb-16 lg:pb-24 text-dark-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-dark-foreground/70 hover:text-secondary mb-8 w-fit transition-colors">
              <ArrowLeft className="w-4 h-4" /> All services
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {service.status}
              </span>
              <span className="text-sm text-dark-foreground/70">
                {service.category} · {service.matrix}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl font-medium">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-dark-foreground/80">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-t border-border/40">
        <div className="container-wide py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          <Spec label="Turnaround" value={service.turnaround} index={0} />
          <Spec label="Sample volume" value={service.sample_volume} index={1} />
          <Spec label="Deliverable" value={service.deliverable} index={2} />
          <Spec label="Accreditation" value={service.accreditation} index={3} />
        </div>
      </section>

      {/* Description + parameters */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-[11px] uppercase tracking-eyebrow font-mono text-secondary">The scope</p>
            {service.description.map((p, i) => (
              <p key={i} className="font-display text-2xl lg:text-3xl leading-snug text-foreground/85">
                {p}
              </p>
            ))}

            <div className="pt-8">
              <p className="text-[11px] uppercase tracking-eyebrow font-mono text-secondary mb-4">Reference methods</p>
              <div className="flex flex-wrap gap-2">
                {service.methods.map((m) => (
                  <span key={m} className="font-mono text-xs border border-border/60 px-3 py-1.5 text-foreground/80">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] uppercase tracking-eyebrow font-mono text-secondary mb-6">Parameters reported</p>
            <ul className="divide-y divide-border/40 border-t border-b border-border/40">
              {service.parameters.map((f) => (
                <li key={f} className="py-4 text-sm text-foreground/80 flex gap-3">
                  <span className="text-secondary font-mono mt-0.5">·</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Quote form */}
      <section id="enquire" className="border-t border-border/40 section-padding bg-muted/20">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-eyebrow font-mono text-secondary mb-6">Request a quote</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02]">
              Quote for<br />
              <span className="text-secondary">{service.name}</span>
            </h2>
            <p className="mt-8 text-foreground/65 leading-relaxed max-w-md">
              A laboratory manager will respond within one working day with a
              quotation, sample submission instructions and expected turnaround.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            <Field label="Name" name="name" required maxLength={100} />
            <Field label="Company" name="company" required maxLength={120} />
            <Field label="Email" name="email" type="email" required maxLength={255} />
            <Field label="Phone" name="phone" type="tel" maxLength={40} />
            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-eyebrow font-mono text-foreground/50 mb-3">
                Sample details
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                placeholder={`Number of samples, matrix, deadline, witnessed sampling required, etc.`}
                className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30 resize-none transition-colors"
              />
            </div>
            <div className="sm:col-span-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 px-10 py-4 text-[11px] uppercase tracking-eyebrow font-mono bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Send enquiry"} <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Related */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-3xl lg:text-5xl">Related services</h2>
            <Link to="/services" className="text-[11px] uppercase tracking-eyebrow font-mono text-foreground/70 hover:text-secondary transition-colors">
              Full scope →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {related.map((s, index) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link to={`/services/${s.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-5 rounded-2xl">
                    <img src={s.image} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-foreground/40">{s.category}</p>
                  <h3 className="font-display text-2xl mt-2 group-hover:text-secondary transition-colors">{s.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{s.matrix}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Spec({ label, value, index = 0 }: { label: string; value: string | number; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <p className="font-mono text-[10px] uppercase tracking-eyebrow text-foreground/40 mb-2">{label}</p>
      <p className="font-display text-base lg:text-lg leading-snug">{value}</p>
    </motion.div>
  );
}

function Field({
  label, name, type = "text", placeholder, required, maxLength,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-eyebrow font-mono text-foreground/50 mb-3">
        {label}{required && <span className="text-secondary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
      />
    </div>
  );
}
