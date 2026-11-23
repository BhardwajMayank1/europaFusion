import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import { LogoMark, Wordmark } from "../components/LogoMark";
import { CONTACT } from "../data/content";

const Footer = () => (
  <footer className="relative bg-[#0F1722] text-[#FBF9F4] overflow-hidden grain">
    <div className="cadastral-grid-navy absolute inset-0 pointer-events-none" />

    <div className="relative border-b border-[#FBF9F4]/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C89538] mb-6">
          Europa Fusion · Academic Advisory
        </p>
        <h2 className="font-serif font-medium text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#FBF9F4]/90 max-w-5xl">
          Where Ambition Meets{" "}
          <span className="italic text-[#C89538]">Opportunity</span>
        </h2>
        <Link
          to="/contact"
          data-testid="footer-cta-evaluation"
          className="inline-flex mt-10 px-7 py-3.5 rounded-full bg-[#D94828] text-white text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#BD3A1D] transition-colors"
        >
          Begin Free Evaluation
        </Link>
      </div>
    </div>

    <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <LogoMark className="w-9 h-9 text-[#FBF9F4]" />
          <Wordmark light />
        </div>
        <p className="text-sm text-[#FBF9F4]/60 leading-relaxed">
          A specialized European academic advisory cultivating scholars for
          Germany, the Netherlands, Italy, and Scandinavia. Ethical,
          merit-based, and student-owned.
        </p>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-[#C89538] mb-5">
          Advisory Hubs
        </h3>
        <ul className="space-y-2.5 text-sm text-[#FBF9F4]/70">
          <li>Heidelberg, Germany</li>
          <li>Munich, Germany</li>
          <li>Amsterdam, Netherlands</li>
          <li>Ahmedabad, India</li>
        </ul>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-[#C89538] mb-5">
          Direct Contact
        </h3>
        <ul className="space-y-3 text-sm text-[#FBF9F4]/70">
          <li>
            <a
              href={CONTACT.phoneHref}
              data-testid="footer-phone-link"
              className="inline-flex items-center gap-2 hover:text-[#D94828] transition-colors"
            >
              <Phone className="w-4 h-4" /> {CONTACT.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${CONTACT.email}`}
              data-testid="footer-email-link"
              className="inline-flex items-center gap-2 hover:text-[#D94828] transition-colors"
            >
              <Mail className="w-4 h-4" /> {CONTACT.email}
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> {CONTACT.hours}
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-[#C89538] mb-5">
          Navigation
        </h3>
        <ul className="space-y-2.5 text-sm text-[#FBF9F4]/70">
          <li><Link to="/" className="hover:text-[#D94828] transition-colors">Overview</Link></li>
          <li><Link to="/about" className="hover:text-[#D94828] transition-colors">About & Creed</Link></li>
          <li><Link to="/approach" className="hover:text-[#D94828] transition-colors">5-Stage Approach</Link></li>
          <li><Link to="/universities" className="hover:text-[#D94828] transition-colors">Partner Universities</Link></li>
          <li><Link to="/contact" className="hover:text-[#D94828] transition-colors">Free Evaluation</Link></li>
        </ul>
      </div>
    </div>

    <div className="relative border-t border-[#FBF9F4]/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-wider text-[#FBF9F4]/40">
          © 2026 Europa Fusion Education Advisory. All rights reserved.
        </p>
        <p className="font-mono text-[11px] tracking-wider text-[#FBF9F4]/40">
          EHEA & Bologna Accord Compliant
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
