import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, Clock, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { MaskedLine, Eyebrow, fadeUp, stagger, staggerItem } from "../components/Reveal";
import { CONTACT, FAQS, IMAGES } from "../data/content";

const DEGREES = [
  "Master of Science (M.Sc)",
  "Bachelor of Science / Arts",
  "Doctoral / PhD Fellowship",
  "MBA / Management Master",
];

const COUNTRIES = [
  "Germany (Tuition-Free Public Focus)",
  "Netherlands (English-Taught Hub)",
  "Italy (Design & Tech with DSU Grants)",
  "Nordic Countries (Finland / Sweden)",
  "Austria & Belgium",
  "Open to Best European Fit",
];

const INTAKES = [
  "Winter 2026 (Sep/Oct)",
  "Summer 2027 (Mar/Apr)",
  "Winter 2027",
  "Exploring Options",
];

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#0F1722]/12 text-sm text-[#0F1722] placeholder:text-[#758295] focus:outline-none focus:border-[#D94828]/60 transition-colors";

const labelCls =
  "block font-mono text-[11px] uppercase tracking-[0.18em] text-[#414D5D] mb-2";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    degree: DEGREES[0],
    country: COUNTRIES[0],
    gpa: "",
    intake: INTAKES[0],
    questions: "",
  });
  const [errors, setErrors] = useState({});

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (form.phone.replace(/\D/g, "").length < 8) errs.phone = "Valid number required";
    return errs;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) {
      toast.error("Please complete the highlighted fields.");
      return;
    }
    toast.success("Evaluation request received", {
      description: `Thank you, ${form.name.split(" ")[0]}. Our advisory desk will reach you within one working day.`,
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      degree: DEGREES[0],
      country: COUNTRIES[0],
      gpa: "",
      intake: INTAKES[0],
      questions: "",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden cadastral-grid" data-testid="contact-hero">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <MaskedLine delay={0.05}>
            <Eyebrow>Advisory Desk · Free Profile Evaluation</Eyebrow>
          </MaskedLine>
          <h1 className="font-serif font-medium tracking-tight text-[#0F1722] leading-[1.06] text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl">
            <MaskedLine delay={0.15}>Begin With a</MaskedLine>
            <MaskedLine delay={0.25}>
              <span className="italic text-[#D94828]">Candid</span> Evaluation
            </MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base sm:text-lg text-[#414D5D] leading-relaxed max-w-2xl"
          >
            Tell us where you stand academically — we will tell you, honestly,
            where you can go.
          </motion.p>
        </div>
      </section>

      {/* Desk + Form */}
      <section className="pb-20 sm:pb-28" data-testid="contact-main">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
          {/* Left: dossiers */}
          <motion.div {...stagger} className="lg:col-span-5 space-y-5">
            <motion.div {...staggerItem} className="bg-[#112233] rounded-3xl p-8 sm:p-10 text-[#FBF9F4] relative overflow-hidden grain">
              <div className="cadastral-grid-navy absolute inset-0 pointer-events-none" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#C89538]">
                  Direct Lines
                </p>
                <a
                  href={CONTACT.phoneHref}
                  data-testid="contact-phone-link"
                  className="flex items-center gap-4 mt-6 group"
                >
                  <span className="w-11 h-11 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center shrink-0 group-hover:border-[#D94828] transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-serif text-xl">{CONTACT.phone}</p>
                    <p className="text-xs text-[#FBF9F4]/50 mt-0.5">Call or WhatsApp</p>
                  </div>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  data-testid="contact-email-link"
                  className="flex items-center gap-4 mt-5 group"
                >
                  <span className="w-11 h-11 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center shrink-0 group-hover:border-[#D94828] transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-serif text-xl">{CONTACT.email}</p>
                    <p className="text-xs text-[#FBF9F4]/50 mt-0.5">Counselling desk</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 mt-5">
                  <span className="w-11 h-11 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-serif text-xl">{CONTACT.hours}</p>
                    <p className="text-xs text-[#FBF9F4]/50 mt-0.5">Advisory hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-5">
                  <span className="w-11 h-11 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-serif text-xl">Heidelberg · Munich · Ahmedabad · Amsterdam</p>
                    <p className="text-xs text-[#FBF9F4]/50 mt-0.5">Advisory hubs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.a
              {...staggerItem}
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-direct-button"
              className="flex items-center justify-between gap-4 bg-[#D94828] rounded-3xl p-7 text-white hover:bg-[#BD3A1D] transition-colors group"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                  Fastest Response
                </p>
                <p className="font-serif text-2xl mt-1.5">Chat With Us on WhatsApp</p>
              </div>
              <ArrowUpRight className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <motion.div {...staggerItem} className="relative rounded-3xl overflow-hidden border border-[#0F1722]/8 min-h-[220px]">
              <img
                src={IMAGES.humboldtFacade}
                alt="Historic European university entrance with Corinthian columns"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/75 to-transparent" />
              <div className="absolute bottom-0 p-7 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C89538] mt-0.5 shrink-0" />
                <p className="font-serif italic text-lg text-[#FBF9F4] leading-snug">
                  Zero-commission pledge — we never steer scholars toward
                  fee-paying private colleges.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-white border border-[#0F1722]/8 rounded-3xl p-8 sm:p-12"
              data-testid="evaluation-form"
            >
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0F1722]">
                Profile Evaluation
              </h2>
              <p className="text-sm text-[#758295] mt-2">
                Two minutes of detail, one working day to a candid answer.
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-x-5 gap-y-6">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>Full Scholarly Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Aarav Sharma"
                    data-testid="contact-form-name"
                    className={`${inputCls} ${errors.name ? "border-[#D94828]" : ""}`}
                  />
                  {errors.name && <p className="text-xs text-[#D94828] mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelCls}>Email Address</label>
                  <input
                    id="cf-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="aarav.sharma@example.com"
                    data-testid="contact-form-email"
                    className={`${inputCls} ${errors.email ? "border-[#D94828]" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-[#D94828] mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelCls}>Phone / WhatsApp Number</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+91 98765 43210"
                    data-testid="contact-form-phone"
                    className={`${inputCls} ${errors.phone ? "border-[#D94828]" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-[#D94828] mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="cf-gpa" className={labelCls}>Current Degree & GPA / Percentage</label>
                  <input
                    id="cf-gpa"
                    type="text"
                    value={form.gpa}
                    onChange={set("gpa")}
                    placeholder="B.Tech Computer Science — 8.4 CGPA"
                    data-testid="contact-form-gpa"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="cf-degree" className={labelCls}>Intended Degree</label>
                  <select
                    id="cf-degree"
                    value={form.degree}
                    onChange={set("degree")}
                    data-testid="contact-form-degree"
                    className={inputCls}
                  >
                    {DEGREES.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="cf-country" className={labelCls}>Primary Country Preference</label>
                  <select
                    id="cf-country"
                    value={form.country}
                    onChange={set("country")}
                    data-testid="contact-form-country"
                    className={inputCls}
                  >
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-intake" className={labelCls}>Intended Intake</label>
                  <select
                    id="cf-intake"
                    value={form.intake}
                    onChange={set("intake")}
                    data-testid="contact-form-intake"
                    className={inputCls}
                  >
                    {INTAKES.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-questions" className={labelCls}>Academic Interests or Specific Universities</label>
                  <textarea
                    id="cf-questions"
                    rows={4}
                    value={form.questions}
                    onChange={set("questions")}
                    placeholder="Looking for English-taught Data Science or Robotics programs with research assistantship options…"
                    data-testid="contact-form-questions"
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                data-testid="contact-form-submit"
                className="mt-9 w-full sm:w-auto px-10 py-4 rounded-full bg-[#D94828] text-white text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#BD3A1D] transition-colors"
              >
                Request Free Evaluation
              </button>
              <p className="mt-4 text-xs text-[#758295]">
                By submitting, you agree to be contacted by our advisory desk. No
                fees, ever, for public-university counselling.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-[#F3EFE6] border-t border-[#0F1722]/10" data-testid="faq-section">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <motion.div {...fadeUp} className="text-center">
            <Eyebrow>Common Queries</Eyebrow>
            <h2 className="font-serif tracking-tight text-[#0F1722] text-3xl sm:text-4xl leading-[1.12] mt-5">
              Questions Scholars Ask Us
            </h2>
          </motion.div>
          <motion.div {...stagger} className="mt-12 space-y-4">
            {FAQS.map((f, i) => (
              <motion.details
                key={f.q}
                {...staggerItem}
                className="group bg-white border border-[#0F1722]/8 rounded-2xl open:border-[#D94828]/30 transition-colors"
                data-testid={`faq-item-${i + 1}`}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 sm:p-7 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-lg text-[#0F1722]">{f.q}</span>
                  <span className="font-serif italic text-2xl text-[#D94828] transition-transform duration-300 group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 sm:px-7 pb-7 text-sm sm:text-base text-[#414D5D] leading-relaxed -mt-1">
                  {f.a}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
  };

export default Contact;
