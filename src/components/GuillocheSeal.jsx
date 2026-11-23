import { motion } from "framer-motion";

const GuillocheSeal = ({ className = "w-40 h-40" }) => (
  <motion.svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} seal-spin`}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="96" stroke="#C89538" strokeWidth="0.75" opacity="0.5" />
    <circle cx="100" cy="100" r="88" stroke="#C89538" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.5" />
    <circle cx="100" cy="100" r="64" stroke="#C89538" strokeWidth="0.75" opacity="0.4" />
    <circle cx="100" cy="100" r="40" stroke="#C89538" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x1 = 100 + 64 * Math.cos(angle);
      const y1 = 100 + 64 * Math.sin(angle);
      const x2 = 100 + 88 * Math.cos(angle);
      const y2 = 100 + 88 * Math.sin(angle);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#C89538"
          strokeWidth="0.4"
          opacity="0.35"
        />
      );
    })}
    <path
      d="M76 128V92C76 78.745 86.745 68 100 68C113.255 68 124 78.745 124 92V128"
      stroke="#D94828"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M70 106L132 86" stroke="#D94828" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="132" cy="86" r="4" fill="#D94828" />
  </motion.svg>
);

export default GuillocheSeal;
