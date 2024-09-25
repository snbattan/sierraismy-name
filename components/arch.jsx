'use client';

import React from 'react';
import { useMouseHovered } from 'react-use';

export default function Arch({ children }) {
  const ref = React.useRef(null);
  const { elX, elY } = useMouseHovered(ref, {
    whenHovered: true,
  });
  return (
    <div
      ref={ref}
      style={{ '--x': `${elX}px`, '--y': `${elY}px` }}
      className="ring-sierra container relative flex grow flex-col place-items-center overflow-hidden rounded-t-full bg-blue-100 pt-24 ring-2 before:pointer-events-none before:absolute before:inset-[-1px] before:z-[1] before:select-none before:bg-[radial-gradient(300px_circle_at_var(--x)_var(--y),_#80b0f8_0%,_transparent_100%)] before:opacity-0 before:transition-opacity before:duration-75 before:content-[''] before:hover:opacity-75 dark:bg-blue-950 dark:before:hover:opacity-25"
    >
      {children}
    </div>
  );
}
