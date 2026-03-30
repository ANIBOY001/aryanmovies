import { Clapperboard } from 'lucide-react'

export default function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="50%" stopColor="#cc0000" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="32" height="32" rx="6" fill="url(#bgGradient)" />
      
      {/* Film reel / clapperboard icon */}
      <g transform="translate(4, 4) scale(0.75)">
        {/* Clapperboard base */}
        <rect x="2" y="8" width="24" height="14" rx="2" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
        
        {/* Clapperboard top (striped) */}
        <path d="M2 8 L26 8 L24 4 L4 4 Z" fill="url(#redGradient)" />
        
        {/* Stripes on top */}
        <line x1="6" y1="4" x2="5" y2="8" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="12" y1="4" x2="11" y2="8" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="18" y1="4" x2="17" y2="8" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="24" y1="4" x2="23" y2="8" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Play button triangle */}
        <path 
          d="M10 11 L10 19 L18 15 Z" 
          fill="url(#redGradient)" 
          filter="url(#glow)"
        />
      </g>
      
      {/* Corner accent */}
      <circle cx="28" cy="4" r="2" fill="#ff4444" opacity="0.8" />
    </svg>
  )
}
