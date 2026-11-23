import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { LogoMark, Wordmark } from "../components/LogoMark";
import { CONTACT } from "../data/content";

const LINKS = [
  { label: "Overview", path: "/", testId: "nav-link-home" },
  { label: "About & Creed", path: "/about", testId: "nav-link-about" },
  { label: "5-Stage Approach", path: "/approach", testId: "nav-link-approach" },
  { label: "Universities", path: "/universities", testId: "nav-link-universities" },
  { label: "Advisory", path: "/contact", testId: "nav-link-contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FBF9F4]/85 border-b border-[#0F1722]/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" data-testid="brand-logo">
          <LogoMark className="w-9 h-9 text-[#0F1722]" />
          <Wordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              data-testid={l.testId}
              className={({ isActive }) =>
                `px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-full ${
                  isActive
                    ? "text-[#D94828]"
                    : "text-[#414D5D] hover:text-[#0F1722]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-whatsapp-direct"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0F1722] hover:text-[#D94828] transition-colors px-3 py-2 rounded-full border border-[#0F1722]/10"
          >
            <Phone className="w-3.5 h-3.5" />
            {CONTACT.phone}
          </a>
          <Link
            to="/contact"
            data-testid="header-cta-evaluation"
            className="px-5 py-2.5 rounded-full bg-[#D94828] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#BD3A1D] transition-colors shadow-sm"
          >
            Free Evaluation
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-[#0F1722]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-[#0F1722]/10 bg-[#FBF9F4]"
            aria-label="Mobile"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {LINKS.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  data-testid={`mobile-${l.testId}`}
                  className={({ isActive }) =>
                    `px-3 py-3 text-base font-serif ${
                      isActive ? "text-[#D94828]" : "text-[#0F1722]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                data-testid="mobile-header-cta-evaluation"
                className="mt-4 px-5 py-3 rounded-full bg-[#D94828] text-white text-xs font-mono uppercase tracking-wider font-semibold text-center"
              >
                Free Evaluation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
