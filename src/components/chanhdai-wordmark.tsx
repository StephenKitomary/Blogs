import React from 'react';
export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
      <svg
        viewBox="0 0 2411.64 837.46"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <style>
            {`
              .cls-1, .cls-2, .cls-3 { isolation: isolate; }
              .cls-4 { fill: none; stroke: currentColor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 12px; }
              .cls-2 { font-family: 'JetBrains Mono', monospace; font-size: 612.6px; }
              .cls-2, .cls-3 { fill: currentColor; }
              .cls-3 { font-family: 'Century Gothic', Arial, sans-serif; font-size: 182px; }
            `}
          </style>
        </defs>
        {/* Logo elements */}
        <g id="Layer_1-2">
          <g>
            {/* Paper airplane icon */}
            <polyline className="cls-4" points="277.09 379.01 497.32 429.16 541.23 64.35 18.07 311.9 192.1 352.82" />
            <polyline className="cls-4" points="277.09 379.01 541.23 64.35 192.1 352.82 259.73 544.79 348.12 395.19" />
            <line className="cls-4" x1="277.09" y1="379.01" x2="259.73" y2="544.79" />
          
            {/* "Notes" text */}
            <g className="cls-1">
              <text className="cls-2" transform="translate(573.87 529.89)">Notes</text>
            </g>
          </g>
        
          {/* "by teKsafari" text */}
          <g className="cls-1">
            <text className="cls-3" transform="translate(701.25 781.65)">by teKsafari</text>
          </g>
        </g>
      </svg>
    );
  }
