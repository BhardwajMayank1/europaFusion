import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { MaskedLine, Eyebrow, fadeUp, stagger, staggerItem } from "../components/Reveal";
import GuillocheSeal from "../components/GuillocheSeal";
import { IMAGES } from "../data/content";

const PILLARS = [
  {
    title: "Our Mission",
    quote: "To Cultivate Scholars, Not Merely Applicants.",
    body: "EUROPA FUSION exists to uphold the seriousness of the academic journey. We believe a university education is among the most consequential commitments a young person will make, and it deserves to be entered with rigor, reflection, and intellectual honesty. We seek to nurture in every student a clear sense of scholarly purpose: the discipline to question, the humility to learn, and the resolve to pursue excellence for its own sake.",
  },
  {
    title: "Our Vision",
    quote: "To Advance the Enduring Ideals of Scholarship.",
    body: "We envision a generation of students who approach the world's great institutions not as destinations to be won, but as communities of thought to join and enrich. Guided by integrity, intellectual independence and a long view of what learning can achieve, we aim to help shape a culture in which education serves both the individual and the wider good.",
  },
];

const CHARTER = [
  "100% free expert counselling for qualified candidates",
  "Zero commissioned steering toward predatory private colleges",
  "Transparent eligibility review before application commitment",
  "Direct student ownership of all official university credentials",
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden cadastral-grid" data-testid="about-hero">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <MaskedLine delay={0.05}>
            <Eyebrow>Our Creed & Foundation</Eyebrow>
          </MaskedLine>
          <h1 className="font-serif font-medium tracking-tight text-[#0F1722] leading-[1.06] text-4xl sm:text-5xl lg:text-6xl mt-6">
            <MaskedLine delay={0.15}>Education Deserves</MaskedLine>
            <MaskedLine delay={0.25}>
              a <span className="italic text-[#D94828]">Considered</span> Choice.
            </MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base sm:text-lg text-[#414D5D] leading-relaxed max-w-xl"
          >
            We reject the conveyor-belt agency model. We see each student as a
            prospective researcher, engineer, and cultural contributor to the
            European sphere.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="arch-frame overflow-hidden border border-[#0F1722]/12 shadow-[0_24px_60px_-16px_rgba(15,23,34,0.18)]">
            <img
              src={IMAGES.heroSecondaryQuad}
              alt="Neoclassical colonnade of Humboldt University, Berlin"
              className="w-full h-[380px] sm:h-[440px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 sm:py-28" data-testid="mission-vision-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <motion.div {...stagger} className="grid lg:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <motion.article
              key={p.title}
              {...staggerItem}
              className="relative bg-white border border-[#0F1722]/8 rounded-3xl p-8 sm:p-12 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 opacity-60 pointer-events-none">
                <GuillocheSeal className="w-44 h-44" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#D94828]">
                {p.title}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0F1722] leading-snug mt-5 max-w-md">
                {p.quote}
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#414D5D] leading-relaxed">
                {p.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    {/* What we do — editorial split with image */}
    <section className="py-20 sm:py-28 bg-[#F3EFE6] border-y border-[#0F1722]/10" data-testid="what-we-do-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div {...fadeUp} className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-[#0F1722]/8">
            <img
              src={IMAGES.students}
              alt="International students collaborating in a European library"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <p className="absolute -bottom-5 left-6 font-mono text-[10px] tracking-[0.2em] text-[#0F1722] bg-[#FBF9F4] border border-[#0F1722]/10 px-4 py-2 rounded-full shadow-sm">
            50.7753° N · 6.0839° E — Aachen
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="lg:col-span-7 lg:pl-6">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-5">
            From Ambition to{" "}
            <span className="italic text-[#D94828]">Academic Direction</span>.
          </h2>
          <div className="mt-7 space-y-5 text-base text-[#414D5D] leading-relaxed max-w-2xl">
            <p>
              European higher education is not a single system. Each country,
              university, and programme brings its own academic structures,
              expectations, and routes to admission. EUROPA FUSION brings these
              elements into perspective.
            </p>
            <p>
              We examine the opportunities available to each student,
              distinguish what is relevant from what is merely possible, and
              shape a coherent pathway from initial exploration through to
              admission.
            </p>
            <p className="font-serif italic text-lg text-[#0F1722]">
              Behind every recommendation is research. Behind every application
              is preparation. And behind every pathway is a reason for choosing
              it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Ethical Charter */}
    <section className="py-20 sm:py-28" data-testid="ethical-charter-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <Eyebrow>Our Ethical Charter</Eyebrow>
          <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl leading-[1.12] mt-5">
            Counsel You Can Hold to Account
          </h2>
          <p className="mt-6 text-base text-[#414D5D] leading-relaxed">
            Our advisory is bound by four commitments, written down and honoured
            in every engagement.
          </p>
        </motion.div>
        <motion.div {...stagger} className="lg:col-span-7 space-y-4">
          {CHARTER.map((point, i) => (
            <motion.div
              key={point}
              {...staggerItem}
              className="flex items-start gap-5 bg-white border border-[#0F1722]/8 rounded-2xl p-6 hover:border-[#D94828]/40 transition-colors"
            >
              <span className="font-serif italic text-2xl text-[#D94828]/40 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3 pt-0.5">
                <Check className="w-4 h-4 text-[#D94828] shrink-0" strokeWidth={2.5} />
                <p className="text-sm sm:text-base text-[#0F1722] font-medium">{point}</p>
              </div>
            </motion.div>
          ))}
          <motion.div {...staggerItem} className="pt-4">
            <Link
              to="/contact"
              data-testid="charter-cta-link"
              className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#D94828]"
            >
              Begin With a Free Evaluation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
