// Doodle SVG kecil — bintang, hati, awan, kilau — pakai warna token tema.
// Semua mewarisi warna dari className (mis. "text-terracotta").

type DoodleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function DoodleStar({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M12 3l2.2 5.6 6 .4-4.6 3.9 1.5 5.8L12 15.5l-5.1 3.2 1.5-5.8L3.8 9l6-.4L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleHeart({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M12 20s-7.2-4.4-9-9c-1-2.7.7-6 4-6 2.2 0 3.8 1.3 5 3 1.2-1.7 2.8-3 5-3 3.3 0 5 3.3 4 6-1.8 4.6-9 9-9 9z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleCloud({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 20" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M6 16h20a4 4 0 0 0 .8-7.9A6.5 6.5 0 0 0 14.5 6 5 5 0 0 0 6 8.5 3.8 3.8 0 0 0 6 16z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M12 4c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleSquiggle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 12" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M2 8c5-6 9-6 14 0s9 6 14 0 9-6 14 0 9 6 14 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleArrowDown({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M12 4v14m0 0l-5-5m5 5l5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
