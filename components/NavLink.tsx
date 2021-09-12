import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink = ({ children, href }: {
  children: JSX.Element,
  href: string
}) => {
  const router = useRouter();

  return (
    <div>
      <Link href={href} passHref>
        <a className={`nav-item${router.pathname === href ? ' active' : ''}`} href={href}>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
