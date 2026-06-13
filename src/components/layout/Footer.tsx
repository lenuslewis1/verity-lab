import { Link } from "react-router-dom";
import verityLogo from "@/assets/verity-labs-logo.png";

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={verityLogo}
              alt="Verity Labs"
              className="h-16 w-auto max-w-[300px] object-contain brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              An independent laboratory testing fuels, lubricants and water to
              ASTM, IP, ISO and UOP protocols. The last word on what is in your
              fuel, oil and water.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-white/50">
              <span className="border border-white/15 px-2 py-1">ASTM</span>
              <span className="border border-white/15 px-2 py-1">IP</span>
              <span className="border border-white/15 px-2 py-1">ISO 17025</span>
              <span className="border border-white/15 px-2 py-1">UOP</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-eyebrow text-white/40">
              Laboratory
            </p>
            <ul className="space-y-3 text-sm text-white/76">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-eyebrow text-white/40">
              Reception
            </p>
            <address className="space-y-2 text-sm not-italic leading-relaxed text-white/70">
              <div>Verity Lab, Tema Comm. 2</div>
              <div>JXMR+3RJ, Tema, Ghana</div>
              <div>Open today - closes 4 pm</div>
              <div className="pt-3">
                <a href="mailto:results@veritylabs.com" className="hover:text-primary">
                  results@veritylabs.com
                </a>
              </div>
              <div>
                <a href="tel:+233594820008" className="hover:text-primary">
                  059 482 0008
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Verity Labs. All rights reserved.</p>
          <div className="flex gap-6 font-mono uppercase tracking-eyebrow">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accreditation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
