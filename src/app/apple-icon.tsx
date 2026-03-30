import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
          borderRadius: '40px',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4444" />
              <stop offset="50%" stopColor="#cc0000" />
              <stop offset="100%" stopColor="#990000" />
            </linearGradient>
          </defs>
          {/* Clapperboard */}
          <rect x="4" y="10" width="24" height="14" rx="2" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
          <path d="M4 10 L28 10 L26 6 L6 6 Z" fill="url(#redGrad)" />
          <line x1="8" y1="6" x2="7" y2="10" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="14" y1="6" x2="13" y2="10" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="20" y1="6" x2="19" y2="10" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="26" y1="6" x2="25" y2="10" stroke="#1a1a1a" strokeWidth="2" />
          <path d="M12 13 L12 21 L20 17 Z" fill="url(#redGrad)" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
