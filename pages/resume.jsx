import Head from 'next/head';
import React from 'react';

import Education from '../components/resume/Education';
import Experiences from '../components/resume/Experiences';
import TechSkills from '../components/resume/TechSkills';

const Resume = () => (
  <>
    <Head>
      <title>Sierra&apos;s Resume</title>
      <link rel="canonical" href="https://sierraismy.name/resume" />
    </Head>
    <article className="col-12">
      <h2>What does Sierra do?</h2>
      <p>Sierra does a lot of things. Let&apos;s focus on what she does professionally.</p>
      <section className="ta-c">
        <TechSkills />
        <Experiences />
        <Education />
        <img alt="work illustration" src="/work.png" style={{ maxWidth: '480px', width: '48vw' }} />
      </section>
    </article>
  </>
);

export default Resume;
