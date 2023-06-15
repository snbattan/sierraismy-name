import React from 'react';

const colors = ['bg-lnavy', 'bg-mnavy', 'bg-dnavy', 'bg-lblue', 'bg-mblue', 'bg-dblue', 'bg-lpink', 'bg-mpink', 'bg-dpink']; // , 'bg-lgold', 'bg-mgold', 'bg-dgold']; // , 'bg-white', 'bg-black'];
const passions = [
  'Lifting',
  'Dancing',
  'Cheese',
  'Sustainability',
  'Organization',
  'Simplicity',
  'Reading',
  'Traveling',
  'Pets'
];

const Home = () => (
  <article className="content">
    <h3>Welcome!</h3>
    <p>This is Sierra&apos;s website.</p>
    <pre>Please explore and reach out on <a href="https://www.linkedin.com/in/snbattan/" rel="noopener noreferrer" target="_blank">LinkedIn</a> if you want to connect.</pre>
    <h4>Passions</h4>
    <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', width: '100%' }}>
      {colors.map((c, i) => (
        <p key={c} className={`card ${c} tc-${i < 3 || i === 8 ? 'white' : 'navy'}`}>
          {passions[i]}
        </p>
      ))}
    </section>
  </article >
);

export default Home;
