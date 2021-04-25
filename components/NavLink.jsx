import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const NavLink = ({ children, href }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a className={`nav-item${router.pathname === href ? ' active' : ''}`} href={href}>{children}</a>
    </Link>
  );
};

NavLink.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavLink;
