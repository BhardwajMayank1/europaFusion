import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { MaskedLine, Eyebrow, fadeUp } from "../components/Reveal";
import { STAGES, IMAGES } from "../data/content";

const COMPARISON = [
  {
    aspect: "University Recommendations",
    us: "Curated top public research universities based strictly on academic fit",
    others: "Commission-paying private institutes with low entry bars",
  },
  {
    aspect: "Counselling Fee",
    us: "100% free expert guidance for public university aspirants",
    others: "Hefty upfront consulting fees plus hidden document surcharges",
  },
  {
    aspect: "SOP & Essay Guidance",
    us: "Scholarly critique tailored to specific European faculty chairs",
    others: "Copy-pasted generic templates flagged by plagiarism checks",
  },
  {
    aspect: "Visa Guidance",
    us: "98.4% verified consular success with strict financial audits",
    others: "Generic checklists causing avoidable rejections",
  },
];

const Approach = () => {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden cadastral-grid" data-testid="approach-hero">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 max-w-4xl lg:max-w-none">
          <MaskedLine delay={0.05}>
            <Eyebrow>Methodology · Stage-Gated Advisory</Eyebrow>
          </MaskedLine>
          <h1 className="font-serif font-medium tracking-tight text-[#0F1722] leading-[1.06] text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl">
            <MaskedLine delay={0.15}>The 5-Stage Framework for</MaskedLine>
            <MaskedLine delay={0.25}>
              <span className="italic text-[#D94828]">European</span> Admissions
            </MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base sm:text-lg text-[#414D5D] leading-relaxed max-w-2xl"
          >
            A systematic, audited pathway designed to eliminate ambiguity,
            safeguard document integrity, and secure unconditional admissions.
          </motion.p>
        </div>
      </section>

      {/* Interactive stage explorer */}
      <section className="py-16 sm:py-24" data-testid="stage-explorer">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          {/* Tabs */}
          <motion.div {...fadeUp} className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[#0F1722]/12" aria-hidden="true" />
            <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {STAGES.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  data-testid={`stage-tab-${s.number}`}
                  className={`relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                    active === i
                      ? "bg-[#112233] border-[#112233] text-[#FBF9F4] shadow-[0_16px_40px_-12px_rgba(17,34,51,0.4)]"
                      : "bg-white border-[#0F1722]/10 text-[#0F1722] hover:border-[#D94828]/40"
                  }`}
                >
                  <span
                    className={`font-serif italic text-2xl ${
                      active === i ? "text-[#C89538]" : "text-[#D94828]/40"
                    }`}
                  >
                    {s.number}
                  </span>
                  <p className="font-serif text-lg mt-2">{s.name}</p>
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] mt-2 ${
                      active === i ? "text-[#FBF9F4]/50" : "text-[#758295]"
                    }`}
                  >
                    {s.duration}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid lg:grid-cols-12 gap-5"
              data-testid="stage-detail-panel"
            >
              <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-[#0F1722]/8 min-h-[280px]">
                <img
                  src={active % 2 === 0 ? IMAGES.library : IMAGES.campusAutumn}
                  alt={`Stage ${stage.number} — ${stage.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/80 via-[#0F1722]/20 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#C89538]">
                    Stage {stage.number}
                  </p>
                  <p className="font-serif text-3xl text-[#FBF9F4] mt-2">{stage.name}</p>
                </div>
              </div>
              <div className="lg:col-span-8 bg-white border border-[#0F1722]/8 rounded-3xl p-8 sm:p-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F1722]">
                  {stage.tagline}
                </h2>
                <p className="mt-3 text-sm text-[#758295] font-mono tracking-wide">
                  Timeline · {stage.duration}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {stage.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#D94828] mt-1 shrink-0" strokeWidth={2.5} />
                      <span className="text-sm text-[#414D5D] leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-testid="stage-detail-cta"
                  className="group inline-flex items-center gap-2.5 mt-10 text-xs font-mono uppercase tracking-widest font-semibold text-[#D94828]"
                >
                  Start Stage 01 — Free
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 sm:py-28 bg-[#F3EFE6] border-t border-[#0F1722]/10" data-testid="comparison-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div {...fadeUp} className="max-w-2xl">
            <Eyebrow>The Honest Ledger</Eyebrow>
            <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-5">
              What We Do vs. What Traditional Agents Do
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse" data-testid="comparison-table">
              <thead>
                <tr className="border-b border-[#0F1722]/15">
                  <th className="text-left py-5 pr-6 font-mono text-xs uppercase tracking-[0.2em] text-[#758295] w-1/4">
                    Dimension
                  </th>
                  <th className="text-left py-5 pr-6 font-mono text-xs uppercase tracking-[0.2em] text-[#D94828] w-[38%]">
                    Europa Fusion
                  </th>
                  <th className="text-left py-5 font-mono text-xs uppercase tracking-[0.2em] text-[#758295]">
                    Traditional Agents
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.aspect} className="border-b border-[#0F1722]/8 align-top">
                    <td className="py-6 pr-6 font-serif text-lg text-[#0F1722]">
                      {row.aspect}
                    </td>
                    <td className="py-6 pr-6">
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#D94828] mt-1 shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#0F1722] leading-relaxed">{row.us}</p>
                      </div>
                    </td>
                    <td className="py-6 text-sm text-[#758295] leading-relaxed">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
