import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";

const labDetails = {
  name: "Verity Lab, Tema Comm. 2",
  address: "JXMR+3RJ, Tema",
  phone: "059 482 0008",
  tel: "+233594820008",
  hours: "Open today - closes 4 pm",
  mapQuery: "Verity Lab, Tema Comm. 2, JXMR+3RJ, Tema",
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(labDetails.mapQuery)}&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(labDetails.mapQuery)}`;

export default function Contact() {
  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-eyebrow font-mono text-secondary mb-6">Enquiries</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl">
            Send a sample.<br />
            <span className="text-secondary">Get an answer.</span>
          </h1>
        </motion.div>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-12"
          >
            <ContactDetails />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. A laboratory manager will respond within one working day.");
            }}
          >
            <Field label="Name" name="name" />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Service required" name="service" placeholder="e.g. ISO 8217 bunker analysis" />
            <Field label="Sample count" name="count" placeholder="Optional" />
            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-eyebrow font-mono text-foreground/50 mb-3">
                Sample details
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30 resize-none transition-colors"
                placeholder="Matrix, parameters, deadline, witnessed sampling required, etc."
              />
            </div>
            <div className="sm:col-span-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center px-10 py-4 text-[11px] uppercase tracking-eyebrow font-mono bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Send enquiry
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
}

function ContactDetails() {
  return (
    <>
      <div>
        <p className="text-[11px] uppercase tracking-eyebrow font-mono text-foreground/40 mb-3">Sample reception</p>
        <p className="font-display text-2xl leading-snug">
          {labDetails.name}<br />
          {labDetails.address}<br />
          Ghana
        </p>
        <div className="mt-5 space-y-3 text-sm text-foreground/62">
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>{labDetails.address}</span>
          </p>
          <p className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-secondary" />
            <span>{labDetails.hours}</span>
          </p>
          <a href={`tel:${labDetails.tel}`} className="flex items-center gap-3 transition-colors hover:text-secondary">
            <Phone className="h-4 w-4 text-secondary" />
            <span>{labDetails.phone}</span>
          </a>
          <p className="flex items-center gap-3">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span>5.0 Google rating</span>
          </p>
        </div>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-eyebrow font-mono text-foreground/40 mb-3">Results & quotations</p>
        <a href="mailto:results@veritylabs.com" className="font-display text-2xl hover:text-secondary block transition-colors">results@veritylabs.com</a>
        <a href={`tel:${labDetails.tel}`} className="font-display text-2xl hover:text-secondary block mt-1 transition-colors">{labDetails.phone}</a>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-eyebrow font-mono text-foreground/40 mb-3">Office hours</p>
        <p className="text-foreground/65">{labDetails.hours}</p>
        <p className="text-foreground/65">Call ahead for sample drop-off and expedited testing.</p>
      </div>

      <div className="overflow-hidden rounded-[1.8rem] border border-border/50 bg-foreground/[0.03]">
        <iframe
          title="Google Map showing Verity Lab, Tema Comm. 2"
          src={mapSrc}
          className="h-[360px] w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-foreground/40">Interactive map</p>
            <p className="mt-1 text-sm text-foreground/62">{labDetails.address}</p>
          </div>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-secondary px-5 text-xs font-semibold text-secondary-foreground transition hover:bg-foreground hover:text-background"
          >
            Get directions
          </a>
        </div>
      </div>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-eyebrow font-mono text-foreground/50 mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
      />
    </div>
  );
}
