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
      className="container relative flex grow flex-col place-items-center overflow-hidden rounded-t-full bg-blue-100 pt-24 ring-2 ring-blue-900 before:pointer-events-none before:absolute before:inset-[-1px] before:z-[1] before:select-none before:bg-[radial-gradient(5000px_circle_at_var(--x)_var(--y),_transparent_0%,_#60a5fa_30%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] before:hover:opacity-75 dark:bg-blue-950 dark:ring-blue-300 dark:before:bg-[radial-gradient(5000px_circle_at_var(--x)_var(--y),_#60a5fa_0%,_transparent_30%)] dark:before:hover:opacity-25"
    >
      {children}
    </div>
  );
}
