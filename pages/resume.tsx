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
    <article>
      <TechSkills />
      <Experiences />
      <Education />
    </article>
  </>
);

export default Resume;
