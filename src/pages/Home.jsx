import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Compass, Landmark, GraduationCap, ShieldCheck } from "lucide-react";
import { MaskedLine, Eyebrow, fadeUp, stagger, staggerItem } from "../components/Reveal";
import Marquee from "../components/Marquee";
import GuillocheSeal from "../components/GuillocheSeal";
import { IMAGES, STAGES, UNIVERSITIES } from "../data/content";

const STATS = [
  { metric: "1,200+", label: "Partner Universities", sub: "Across 18 European Nations", testId: "hero-stat-universities" },
  { metric: "98.4%", label: "Visa Issuance Rate", sub: "Consulate Mock Drills", testId: "hero-stat-visa-rate" },
  { metric: "100%", label: "Free Counselling", sub: "Merit-Driven, No Hidden Cost", testId: "hero-stat-free-counsel" },
  { metric: "€0", label: "Tuition Options", sub: "German Public University Access", testId: "hero-stat-tuition" },
];

const ADVANTAGES = [
  {
    icon: Landmark,
    title: "Zero to Nominal Tuition",
    desc: "German public universities charge a ~€150–€350 semester administrative fee while maintaining global top-100 research labs.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Study Residence Rights",
    desc: "18-month job seeker visa in Germany; 1-year Zoekjaar in the Netherlands; a seamless EU Blue Card path.",
  },
  {
    icon: GraduationCap,
    title: "English-Taught Excellence",
    desc: "Over 2,500+ fully accredited Master's and Bachelor's degrees taught 100% in English across continental Europe.",
  },
  {
    icon: Compass,
    title: "Bologna Accord Harmonization",
    desc: "The ECTS credit framework ensures your qualification is universally recognized across all 48 participating countries.",
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const featured = UNIVERSITIES.slice(0, 6);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden cadastral-grid"
        data-testid="home-hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 relative z-10">
            <MaskedLine delay={0.05}>
              <Eyebrow>European Academic Advisory · Admissions 2026/2027</Eyebrow>
            </MaskedLine>
            <h1 className="font-serif font-medium tracking-tight text-[#0F1722] leading-[1.06] text-4xl sm:text-5xl lg:text-[64px] mt-6">
              <MaskedLine delay={0.15}>Where Academic</MaskedLine>
              <MaskedLine delay={0.25}>
                <span className="italic text-[#D94828]">Ambition</span> Meets
              </MaskedLine>
              <MaskedLine delay={0.35}>European Opportunity</MaskedLine>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 text-base sm:text-lg text-[#414D5D] leading-relaxed max-w-xl"
            >
              Personalised guidance for ambitious students seeking the right
              university and programme across Germany and Europe. Your journey.
              Our guidance. Your global future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/universities"
                data-testid="hero-explore-button"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#112233] text-[#FBF9F4] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0F1722] transition-colors"
              >
                Explore Universities
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-evaluate-button"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#0F1722]/20 text-[#0F1722] text-xs font-mono uppercase tracking-widest font-semibold hover:border-[#D94828] hover:text-[#D94828] transition-colors"
              >
                Begin Profile Evaluation
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {["Trusted European Experts", "Top Global Unis", "Consulate Mock Drills"].map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-full bg-[#D94828]/8 border border-[#D94828]/15 text-[11px] font-mono uppercase tracking-wider text-[#D94828]"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="arch-frame overflow-hidden border border-[#0F1722]/12 shadow-[0_24px_60px_-16px_rgba(15,23,34,0.18)] relative">
                <motion.img
                  src={IMAGES.heroPrimary}
                  alt="Monumental European university architecture in Berlin"
                  style={{ y: imgY, scale: 1.15 }}
                  className="w-full h-[420px] sm:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -left-4 sm:-left-8 bottom-8 bg-[#FBF9F4]/95 backdrop-blur border border-[#0F1722]/10 rounded-2xl px-5 py-4 shadow-[0_16px_40px_-12px_rgba(15,23,34,0.15)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#758295]">
                  Humboldt-Universität
                </p>
                <p className="font-serif text-lg text-[#0F1722] mt-1">
                  Berlin · Est. 1810
                </p>
              </div>
              <p className="absolute -right-2 sm:right-2 top-6 font-mono text-[10px] tracking-[0.2em] text-[#FBF9F4] bg-[#0F1722]/70 backdrop-blur px-3 py-1.5 rounded-full">
                52.5200° N · 13.4050° E
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-[#0F1722]/10 bg-[#FBF9F4]/60 backdrop-blur">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`py-8 sm:py-10 px-4 sm:px-8 ${
                  i > 0 ? "border-l border-[#0F1722]/10" : ""
                } ${i >= 2 ? "border-t lg:border-t-0 border-[#0F1722]/10" : ""}`}
                data-testid={s.testId}
              >
                <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F1722]">
                  {s.metric}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#0F1722]">{s.label}</p>
                <p className="mt-0.5 text-xs text-[#758295]">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── MANIFESTO BENTO ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden" data-testid="manifesto-section">
        <div className="absolute right-0 top-10 opacity-70 hidden lg:block pointer-events-none">
          <GuillocheSeal className="w-72 h-72" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Eyebrow>Our Creed · Student First</Eyebrow>
            <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-5">
              Education Deserves a{" "}
              <span className="italic text-[#D94828]">Considered</span> Choice.
            </h2>
          </motion.div>

          <motion.div {...stagger} className="mt-14 grid lg:grid-cols-12 gap-5">
            <motion.div
              {...staggerItem}
              className="lg:col-span-7 bg-white border border-[#0F1722]/8 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            >
              <span className="absolute -top-4 -left-2 font-serif italic text-[160px] leading-none text-[#D94828]/8 select-none" aria-hidden="true">
                “
              </span>
              <p className="relative font-serif italic text-xl sm:text-2xl lg:text-[28px] leading-relaxed text-[#0F1722]">
                Europa Fusion is a European higher-education advisory built
                around a simple belief: where and what you study deserves
                careful consideration. We bring clarity to the possibilities —
                so students can choose their path with purpose.
              </p>
              <p className="relative mt-8 text-sm text-[#414D5D] leading-relaxed max-w-xl">
                Our counsel is individual, informed and academically grounded,
                shaped by the understanding that no two students arrive with the
                same background or ambition.
              </p>
              <Link
                to="/about"
                data-testid="manifesto-about-link"
                className="relative inline-flex items-center gap-2 mt-8 text-xs font-mono uppercase tracking-widest font-semibold text-[#D94828] hover:text-[#BD3A1D] transition-colors"
              >
                Read Our Creed <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              {...staggerItem}
              className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#0F1722]/8 min-h-[320px]"
            >
              <img
                src={IMAGES.library}
                alt="Grand historic European university library"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/70 via-[#0F1722]/10 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#C89538]">
                  Trusted Advisory
                </p>
                <p className="font-serif text-xl text-[#FBF9F4] mt-2">
                  To Cultivate Scholars, Not Merely Applicants.
                </p>
              </div>
            </motion.div>

            {ADVANTAGES.map((a) => (
              <motion.div
                key={a.title}
                {...staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:col-span-3 bg-[#F7F4EC] border border-[#0F1722]/8 rounded-3xl p-7 hover:border-[#D94828]/40 transition-colors"
              >
                <a.icon className="w-6 h-6 text-[#D94828]" strokeWidth={1.5} />
                <h3 className="font-sans font-semibold text-[#0F1722] text-base mt-4">
                  {a.title}
                </h3>
                <p className="text-sm text-[#414D5D] leading-relaxed mt-2.5">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5-STAGE TEASER ── */}
      <section className="py-20 sm:py-28 bg-[#F3EFE6] border-y border-[#0F1722]/10 cadastral-grid" data-testid="stages-teaser">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div {...fadeUp} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Methodology · 5-Stage Framework</Eyebrow>
              <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-5">
                A Rigorous, Stage-Gated Advisory Method
              </h2>
              <p className="mt-5 text-base text-[#414D5D] leading-relaxed">
                From initial academic diagnostic to arrival in Munich or
                Amsterdam — designed to give clarity, avoid common application
                errors, and keep you confident.
              </p>
            </div>
            <Link
              to="/approach"
              data-testid="stages-explore-link"
              className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#D94828] shrink-0"
            >
              Explore the Framework
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div {...stagger} className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {STAGES.map((stage, i) => (
              <motion.div key={stage.number} {...staggerItem} className="relative">
                {i < STAGES.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-5 h-px bg-[#0F1722]/15" aria-hidden="true" />
                )}
                <Link
                  to="/approach"
                  data-testid={`stage-card-${stage.number}`}
                  className="block h-full bg-white border border-[#0F1722]/8 rounded-3xl p-6 hover:border-[#D94828]/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="font-serif italic text-4xl text-[#D94828]/25 group-hover:text-[#D94828]/50 transition-colors">
                    {stage.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#0F1722] mt-4">{stage.name}</h3>
                  <p className="text-[13px] text-[#414D5D] leading-relaxed mt-2.5">
                    {stage.teaser}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#758295] mt-5">
                    {stage.duration}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED UNIVERSITIES ── */}
      <section className="py-20 sm:py-28" data-testid="featured-universities">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div {...fadeUp} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Curated Selection · 18 Nations</Eyebrow>
              <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-5">
                Explore Leading Universities Across Europe
              </h2>
            </div>
            <Link
              to="/universities"
              data-testid="featured-view-all-link"
              className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#D94828] shrink-0"
            >
              View Full Directory
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div {...stagger} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((u) => (
              <motion.div
                key={u.name}
                {...staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white border border-[#0F1722]/8 rounded-3xl p-7 hover:border-[#D94828]/40 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#D94828]/8 text-[10px] font-mono uppercase tracking-wider text-[#D94828]">
                    {u.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[#758295] text-right">
                    {u.coords}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#0F1722] mt-5 leading-snug">
                  {u.name}
                </h3>
                <p className="text-sm text-[#758295] mt-1.5">{u.location}</p>
                <p className="text-[13px] text-[#414D5D] leading-relaxed mt-4 flex-1">
                  {u.focus}
                </p>
                <p className="mt-5 pt-4 border-t border-[#0F1722]/8 font-mono text-[11px] tracking-wide text-[#0F1722]">
                  {u.tuition}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28">
        <motion.div
          {...fadeUp}
          className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[32px] bg-[#112233] grain"
          data-testid="home-cta-banner"
        >
          <div className="cadastral-grid-navy absolute inset-0 pointer-events-none" />
          <div className="absolute -right-16 -bottom-20 opacity-25 pointer-events-none hidden sm:block">
            <GuillocheSeal className="w-[420px] h-[420px]" />
          </div>
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 max-w-3xl">
            <Eyebrow light>100% Free Expert Counselling</Eyebrow>
            <h2 className="font-serif tracking-tight text-[#FBF9F4] text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-5">
              Book a Free Counselling Session —{" "}
              <span className="italic text-[#C89538]">Get Your Profile Evaluated</span>
            </h2>
            <p className="mt-6 text-base text-[#FBF9F4]/65 leading-relaxed max-w-xl">
              Behind every recommendation is research. Behind every application
              is preparation. Begin with a candid, zero-cost evaluation of your
              academic profile.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid="cta-book-counselling"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D94828] text-white text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#BD3A1D] transition-colors"
              >
                Book Free Counselling <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919974798803"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-whatsapp"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#FBF9F4]/25 text-[#FBF9F4] text-xs font-mono uppercase tracking-widest font-semibold hover:border-[#C89538] hover:text-[#C89538] transition-colors"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;