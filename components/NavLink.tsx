import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink = ({ children, href }: {
  children: React.ReactNode,
  href: string,
}) => {
  const router = useRouter();

  return (
    <div className="nav-item">
      <Link href={href} passHref>
        <a href={href} className={router.pathname === href ? '' : 'inactive'}>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
