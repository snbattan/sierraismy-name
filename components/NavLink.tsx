import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink = ({ children, href }: {
  children: string,
  href: string
}) => {
  const router = useRouter();

  return (
    <div className="nav-item">
      <Link href={href} passHref>
        <a className={router.pathname === href ? 'active' : ''} href={href}>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
