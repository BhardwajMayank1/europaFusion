import { MARQUEE_ITEMS } from "../data/content";

const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="relative border-y border-[#0F1722]/10 bg-[#F3EFE6] py-5 overflow-hidden"
      data-testid="editorial-marquee"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center shrink-0 font-mono text-xs uppercase tracking-[0.28em] text-[#112233]"
          >
            <span className="px-6">{item}</span>
            <span className="text-[#D94828] text-base leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
