export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="24" cy="24" r="22" stroke="#003d82" strokeWidth="2" />

      {/* Left electrical panel symbol */}
      <rect x="8" y="14" width="7" height="13" stroke="#003d82" strokeWidth="1.5" />
      <circle cx="11" cy="17" r="1.2" fill="#ff6b35" />
      <circle cx="11" cy="20" r="1.2" fill="#ff6b35" />
      <circle cx="11" cy="23" r="1.2" fill="#ff6b35" />

      {/* Right networking symbol */}
      <circle cx="37" cy="19" r="2" stroke="#003d82" strokeWidth="1.5" />
      <circle cx="31" cy="19" r="2" stroke="#003d82" strokeWidth="1.5" />
      <line x1="33" y1="19" x2="35" y2="19" stroke="#003d82" strokeWidth="1" />

      <circle cx="37" cy="27" r="2" stroke="#003d82" strokeWidth="1.5" />
      <circle cx="31" cy="27" r="2" stroke="#003d82" strokeWidth="1.5" />
      <line x1="33" y1="27" x2="35" y2="27" stroke="#003d82" strokeWidth="1" />

      <line x1="37" y1="21" x2="37" y2="25" stroke="#003d82" strokeWidth="1" />
      <line x1="31" y1="21" x2="31" y2="25" stroke="#003d82" strokeWidth="1" />

      {/* Bottom CCTV symbol */}
      <path
        d="M 18 35 Q 18 32 21 32 Q 24 32 24 35"
        stroke="#003d82"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="24" cy="35" r="1.5" fill="#ff6b35" />

      {/* Text below */}
      <text
        x="24"
        y="44"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#003d82"
      >
        BILUS
      </text>
    </svg>
  );
}
