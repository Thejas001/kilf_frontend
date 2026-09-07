export default function WaveBand({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 100"
      preserveAspectRatio="none"
      className={`block h-24 w-full max-[640px]:h-16 ${flip ? "-scale-y-100" : ""}`}
    >
      <rect width="1600" height="100" fill="#F7DFB0" />

      <path
        d="M0,20 C100,20 300,0 400,0 S700,45 800,45 S1100,5 1200,5 S1500,25 1600,25 L1600,90 C1500,90 1300,70 1200,70 S900,110 800,110 S500,65 400,65 S100,85 0,85 Z"
        fill="#33B7A6"
      />
      <path
        d="M0,15 C100,15 300,45 400,45 S700,5 800,5 S1100,42 1200,42 S1500,12 1600,12 L1600,72 C1500,72 1300,102 1200,102 S900,65 800,65 S500,105 400,105 S100,75 0,75 Z"
        fill="#3D5FC4"
      />
      <path
        d="M0,55 C100,55 300,75 400,75 S700,50 800,50 S1100,80 1200,80 S1500,58 1600,58 L1600,93 C1500,93 1300,115 1200,115 S900,85 800,85 S500,110 400,110 S100,90 0,90 Z"
        fill="#F0876B"
      />

      <ellipse cx="620" cy="42" rx="120" ry="12" fill="#E8447A" opacity="0.92" transform="rotate(-4 620 42)" />
      <ellipse cx="1260" cy="62" rx="95" ry="11" fill="#E8447A" opacity="0.92" transform="rotate(3 1260 62)" />

      <path
        d="M1300,8 C1365,-12 1465,-2 1502,30 C1540,58 1518,88 1465,92 C1415,96 1355,80 1328,50 C1312,34 1288,20 1300,8 Z"
        fill="#9B4FC7"
      />

      <ellipse cx="1558" cy="16" rx="62" ry="26" fill="#33B7A6" />

      <path d="M-20,72 C22,54 74,60 92,80 C104,96 62,108 18,100 C-4,96 -18,86 -20,72 Z" fill="#2E8B4E" />
      <path d="M1562,58 C1594,48 1624,64 1618,86 C1612,102 1580,106 1553,96 C1541,90 1548,70 1562,58 Z" fill="#2E8B4E" />

      <path
        d="M-20,28 C100,8 190,52 320,30 S500,14 610,34"
        fill="none"
        stroke="#D2374A"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M1372,18 L1452,56" fill="none" stroke="#D2374A" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
