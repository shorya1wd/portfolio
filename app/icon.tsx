import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '7px',
        }}
      >
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 800,
            fontSize: '16px',
            letterSpacing: '-1px',
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
