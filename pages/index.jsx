import Image from 'next/image';
import React from 'react';

const Home = () => (
  <article className="col-12 ta-c">
    <h2>Welcome!</h2>
    <Image priority alt="Sierra Memoji" src="/images/memoji.png" width={150} height={200} />
  </article>
);

export default Home;
