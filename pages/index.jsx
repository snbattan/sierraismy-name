import React from 'react';

import { Button } from '../components/reusable';

const Home = () => (
  <article className="col-12">
    <h2>Welcome!</h2>
    <p>
      This is Sierra&apos;s website to share with the world whatever she pleases,{' '}
      while also learning new technologies like TypeScript and NextJS!
    </p>
    <p>Please explore the site and reach out to her if you have any questions!</p>
    <Button isEmail label="Get in Touch" />
    <aside className="ta-c">
      <img alt="Sierra Memoji" src="/memoji.png" style={{ width: '24vw' }} />
    </aside>
  </article>
);

export default Home;
