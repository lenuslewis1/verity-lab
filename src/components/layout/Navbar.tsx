import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import verityLogo from "@/assets/verity-labs-logo.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  return (
    <nav className="absolute inset-x-0 top-4 z-50 px-4">
      <div
        className="mx-auto flex h-16 max-w-[1344px] items-center justify-between border border-white/10 px-4 pl-5 text-white shadow-[0_14px_44px_rgba(6,31,32,0.16)] backdrop-blur-xl md:px-5"
        style={{ backgroundColor: "rgba(26, 65, 67, 0.42)" }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link to="/" className="flex items-center">
            <img
              src={verityLogo}
              alt="Verity Labs"
              className="h-9 w-auto max-w-[190px] object-contain brightness-0 invert"
            />
          </Link>
        </motion.div>

        <div className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHoveredIndex(null)}>
          {navLinks.map((link, idx) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition duration-300"
              >
                {hoveredIndex === idx && !active && (
                  <motion.span
                    layoutId="navHoverBg"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                {active && (
                  <motion.span
                    layoutId="navActiveBg"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    active
                      ? "text-[#1A4143] font-semibold"
                      : hoveredIndex === idx
                      ? "text-white"
                      : "text-white/62"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="rounded-full bg-[#d9ff75] px-5 py-2.5 text-sm font-semibold text-[#1A4143] transition hover:bg-white"
            >
              Request a quote
            </Link>
          </motion.div>
        </div>

        <button
          className="rounded-full p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-[2rem] bg-[#1A4143] p-4 text-white shadow-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-2xl font-semibold tracking-[-0.04em] hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[#d9ff75] px-5 py-3 text-center text-sm font-semibold text-[#1A4143]"
              >
                Request a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
