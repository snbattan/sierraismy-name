import React from 'react';

import memoji from '../images/memoji.png';

const Header = () => (
  <article className="col-12 ta-c">
    <h2>Welcome!</h2>
    <img alt="Sierra Memoji" src={memoji} style={{ width: '150px' }} />
  </article>
);

export default Header;
