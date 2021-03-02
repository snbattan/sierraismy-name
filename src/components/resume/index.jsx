import React from 'react';

import Education from './Education';
import Experiences from './Experiences';
import TechSkills from './TechSkills';

import work from '../../images/work.png';

const Resume = () => (
  <article className="col-12">
    <h2>What does Sierra do?</h2>
    <p>Sierra does a lot of things. Let&apos;s focus on what she does professionally.</p>
    <section className="ta-c">
      <TechSkills />
      <Experiences />
      <Education />
      <img alt="work" src={work} style={{ width: '46vw' }} />
    </section>
  </article>
);

export default Resume;
