import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { MaskedLine, Eyebrow, fadeUp } from "../components/Reveal";
import { UNIVERSITIES, IMAGES } from "../data/content";

const FILTERS = [
  { id: "all", label: "All Nations", testId: "university-filter-all" },
  { id: "germany", label: "Germany", testId: "university-filter-germany" },
  { id: "netherlands", label: "Netherlands", testId: "university-filter-netherlands" },
  { id: "italy", label: "Italy", testId: "university-filter-italy" },
  { id: "nordics", label: "Nordics", testId: "university-filter-nordics" },
  { id: "austria-belgium", label: "Austria & Belgium", testId: "university-filter-austria-belgium" },
];

const Universities = () => {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return UNIVERSITIES.filter(
      (u) =>
        (filter === "all" || u.region === filter) &&
        (!q ||
          u.name.toLowerCase().includes(q) ||
          u.location.toLowerCase().includes(q) ||
          u.focus.toLowerCase().includes(q))
    );
  }, [filter, query]);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden cadastral-grid" data-testid="universities-hero">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <MaskedLine delay={0.05}>
            <Eyebrow>European Institutions Directory</Eyebrow>
          </MaskedLine>
          <h1 className="font-serif font-medium tracking-tight text-[#0F1722] leading-[1.06] text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl">
            <MaskedLine delay={0.15}>Explore Europe's</MaskedLine>
            <MaskedLine delay={0.25}>
              <span className="italic text-[#D94828]">Premier</span> Academies
            </MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base sm:text-lg text-[#414D5D] leading-relaxed max-w-2xl"
          >
            Over 1,200 partner faculties and world-ranked public institutions
            across Germany, the Netherlands, Italy, and the Nordics.
          </motion.p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] z-30 backdrop-blur-xl bg-[#FBF9F4]/90 border-y border-[#0F1722]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex flex-wrap gap-2 flex-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                data-testid={f.testId}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  filter === f.id
                    ? "bg-[#112233] text-[#FBF9F4] border-[#112233]"
                    : "bg-white text-[#414D5D] border-[#0F1722]/12 hover:border-[#D94828]/40 hover:text-[#0F1722]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#758295]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search university, city, or subject…"
              data-testid="university-search-input"
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#0F1722]/12 text-sm text-[#0F1722] placeholder:text-[#758295] focus:outline-none focus:border-[#D94828]/60 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-14 sm:py-20" data-testid="university-catalog">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#758295]" data-testid="university-count">
            {results.length} institution{results.length !== 1 ? "s" : ""} shown
          </p>

          <motion.div layout className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {results.map((u) => (
                <motion.article
                  layout
                  key={u.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#0F1722]/8 rounded-3xl p-7 hover:border-[#D94828]/40 transition-colors flex flex-col"
                  data-testid={`university-card-${u.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#D94828]/8 text-[10px] font-mono uppercase tracking-wider text-[#D94828]">
                      {u.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[#758295] text-right shrink-0">
                      {u.coords}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl text-[#0F1722] mt-5 leading-snug">
                    {u.name}
                  </h2>
                  <p className="text-sm text-[#758295] mt-1.5">{u.location}</p>
                  <p className="font-mono text-[11px] tracking-wide text-[#C89538] mt-4">
                    {u.ranking}
                  </p>
                  <p className="text-[13px] text-[#414D5D] leading-relaxed mt-3 flex-1">
                    {u.focus}
                  </p>
                  <p className="mt-5 pt-4 border-t border-[#0F1722]/8 font-mono text-[11px] tracking-wide text-[#0F1722]">
                    {u.tuition}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {results.length === 0 && (
            <div className="mt-10 text-center py-20 border border-dashed border-[#0F1722]/15 rounded-3xl" data-testid="university-empty-state">
              <p className="font-serif text-2xl text-[#0F1722]">No institutions match your search.</p>
              <p className="text-sm text-[#758295] mt-2">Try a different city, subject, or nation filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Eligibility CTA */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28">
        <motion.div
          {...fadeUp}
          className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[32px] border border-[#0F1722]/10"
          data-testid="universities-cta"
        >
          <img
            src={IMAGES.copenhagen}
            alt="Modern Scandinavian university library interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1722]/90 via-[#0F1722]/70 to-[#0F1722]/30" />
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 max-w-2xl">
            <Eyebrow light>Free Eligibility Assessment</Eyebrow>
            <h2 className="font-serif tracking-tight text-[#FBF9F4] text-3xl sm:text-4xl leading-[1.12] mt-5">
              Not Sure Which Academy Fits Your Profile?
            </h2>
            <p className="mt-5 text-base text-[#FBF9F4]/70 leading-relaxed">
              Share your transcripts and ambitions — we will return a candid,
              tiered shortlist of institutions where your profile genuinely
              competes.
            </p>
            <Link
              to="/contact"
              data-testid="universities-cta-button"
              className="group inline-flex items-center gap-2.5 mt-8 px-7 py-3.5 rounded-full bg-[#D94828] text-white text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#BD3A1D] transition-colors"
            >
              Check My Eligibility
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Universities;
