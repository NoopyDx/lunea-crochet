export default function CrochetPattern({ className = '', opacity = 0.06 }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern id="crochet-v" x="0" y="0" width="30" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M5 18 C5 8, 15 8, 15 18 M15 18 C15 8, 25 8, 25 18"
              stroke="#C4A08A"
              strokeWidth="0.8"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crochet-v)" />
      </svg>
    </div>
  )
}
