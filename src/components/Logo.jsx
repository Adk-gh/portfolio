
import React from 'react';

const Logo = ({ className = '', size = 44 }) => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Tagalog&display=swap');
        `}
      </style>

      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        role="img"
        aria-label="Aderik Bermas monogram logo"
        style={{
          display: 'inline-block',
          flexShrink: 0,
          overflow: 'visible',
          verticalAlign: 'middle',
        }}
      >
        <title>Aderik Bermas monogram logo</title>

        {/* Open architectural ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#234B3B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="100 32"
          transform="rotate(-35 50 50)"
          opacity="0.88"
        />

        {/* Bronze accent node */}
        <circle
          cx="80.5"
          cy="19.5"
          r="4"
          fill="#9A6B36"
        />

        {/* Primary Baybayin character */}
        <text
          x="19"
          y="55"
          fontFamily="'Noto Sans Tagalog', sans-serif"
          fontSize="47"
          fontWeight="500"
          fill="#234B3B"
        >
          ᜀ
        </text>

        {/* Secondary Baybayin character */}
        <text
          x="47"
          y="72"
          fontFamily="'Noto Sans Tagalog', sans-serif"
          fontSize="40"
          fontWeight="500"
          fill="#234B3B"
          stroke="#F4F1E9"
          strokeWidth="1.5"
          paintOrder="stroke fill"
          strokeLinejoin="round"
        >
          ᜊ᜔
        </text>
      </svg>
    </>
  );
};

export default Logo;
