'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Page = { title: string; path: string };
const pages: Page[] = [
  { title: 'Home', path: '/' },
  { title: 'Resume', path: '/resume' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex place-items-center gap-4">
      {pages.map(({ title, path }) => (
        <Link
          key={path}
          href={path}
          className={`${pathname === path ? 'decoration-sierra underline decoration-wavy underline-offset-4' : ''} hover:text-sierra hover:font-medium`}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
