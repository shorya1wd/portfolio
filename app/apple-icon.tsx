import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

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
          background: '#0a0a0a',
          borderRadius: '40px',
        }}
      >
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 800,
            fontSize: '88px',
            letterSpacing: '-6px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'baseline',
            lineHeight: 1,
          }}
        >
          SB
          <span style={{ color: '#a78bfa' }}>.</span>
        </span>
      </div>
    ),
    { ...size }
  );
}
