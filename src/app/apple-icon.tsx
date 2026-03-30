export default function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      width="180"
      height="180"
    >
      {/* Background */}
      <defs>
        <linearGradient id="appleBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        <linearGradient id="appleRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="50%" stopColor="#cc0000" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>
      </defs>
      
      <rect width="180" height="180" rx="40" fill="url(#appleBg)" />
      
      {/* Clapperboard */}
      <g transform="translate(30, 45)">
        {/* Base */}
        <rect x="0" y="45" width="120" height="75" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
        
        {/* Top with stripes */}
        <path d="M0 45 L120 45 L115 15 L5 15 Z" fill="url(#appleRed)" />
        
        {/* Stripes */}
        <line x1="25" y1="15" x2="20" y2="45" stroke="#1a1a1a" strokeWidth="8" />
        <line x1="55" y1="15" x2="50" y2="45" stroke="#1a1a1a" strokeWidth="8" />
        <line x1="85" y1="15" x2="80" y2="45" stroke="#1a1a1a" strokeWidth="8" />
        <line x1="115" y1="15" x2="110" y2="45" stroke="#1a1a1a" strokeWidth="8" />
        
        {/* Play button */}
        <path 
          d="M45 60 L45 105 L85 82.5 Z" 
          fill="url(#appleRed)"
        />
      </g>
    </svg>
  )
}
