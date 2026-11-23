export const LogoMark = ({ className = "w-9 h-9", id = "logo" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="24"
      cy="24"
      r="20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="2 3"
      opacity="0.4"
    />
    <path
      d="M14 34V22C14 16.477 18.477 12 24 12C29.523 12 34 16.477 34 22V34"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M12 28L36 18"
      stroke="#D94828"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="36" cy="18" r="3" fill="#D94828" />
  </svg>
);

export const Wordmark = ({ light = false }) => (
  <div className="flex flex-col leading-none">
    <span
      className={`font-serif font-semibold tracking-[0.28em] text-sm ${
        light ? "text-[#FBF9F4]" : "text-[#0F1722]"
      }`}
    >
      EUROPA FUSION
    </span>
    <span
      className={`font-mono text-[9px] tracking-[0.34em] uppercase mt-1 ${
        light ? "text-[#FBF9F4]/50" : "text-[#758295]"
      }`}
    >
      Academic Advisory
    </span>
  </div>
);
