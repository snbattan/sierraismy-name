import React from 'react';

const passions = [
  'do things that spark joy',
  'prioritize physical and mental health',
  'and try new restaurants in San Diego',
];

function Home() {
  return (
    <>
      <h3 className="text-2xl">Welcome!</h3>
      <p>
        Sierra is a spirited full-stack engineer, project coordinator, and
        technical leader who enjoys collaborating with diverse teams on
        consumer-facing applications.
      </p>
      <p>In her free time Sierra loves to {passions.join(', ')}.</p>
      <p>
        Please explore and reach out to her on{' '}
        <a
          className="hover:font-medium hover:text-blue-500 dark:hover:text-blue-300"
          href="https://www.linkedin.com/in/snbattan/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>{' '}
        if you would like to connect.
      </p>
      <aside>
        Happy{' '}
        {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
          new Date()
        )}
        !
      </aside>
    </>
  );
}

export default Home;
