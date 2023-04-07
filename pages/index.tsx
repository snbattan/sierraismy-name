import React from 'react';

const colors = ['bg-lnavy', 'bg-mnavy', 'bg-dnavy', 'bg-lblue', 'bg-mblue', 'bg-dblue', 'bg-lpink', 'bg-mpink', 'bg-dpink']; // , 'bg-lgold', 'bg-mgold', 'bg-dgold']; // , 'bg-white', 'bg-black'];
const passions = [
  'Fitness',
  'Sustainability',
  'Organization',
  'Simplicity',
  'Reading',
  'and Traveling',
];

const Home = () => (
  <article>
    <h3>Welcome!</h3>
    <p>This is Sierra&apos;s website.</p>
    <pre>Please explore and reach out on LinkedIn if you want to connect.</pre>
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', maxWidth: '700px' }}>
      {colors.map((c) => <span key={c} className={`card ${c}`} />)}
    </section>
    <h4>Passions</h4>
    <p>{passions.join(', ')}.</p>
  </article>
);

export default Home;
