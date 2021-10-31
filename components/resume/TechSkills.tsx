import React from 'react';

import { ResumeSection } from '../reusable';

const technologies = [
  'AWS',
  'JavaScript',
  'React',
  'Redux',
  'Next.js',
  'Node.js',
  'HTML',
  'CSS',
  'Webpack',
  'Parcel',
  'Babel',
  'ESLint',
  'Jest',
  'Git',
  'Docker',
  'NoSQL',
  'SQL',
  'TypeScript',
  'React Native',
  'Java',
  'and Python',
];

const tools = [
  'Jenkins',
  'GitHub',
  'Bitbucket',
  'Confluence',
  'JIRA',
  'Splunk',
  'PagerDuty',
  'ServiceNow',
  'SignalFX',
  'New Relic',
  'Adobe Analytics',
  'Akamai',
  'mPulse',
  'Mural',
  'Aha',
  'Figma',
  'Sketch',
  'and more!',
];

const methodologies = [
  'Agile',
  'Scrum',
  'Kanban',
  'Lean',
  'CI/CD',
  'DevOps',
  'Functional Programming',
  'OOP',
  'TDD',
  'Chaos Engineering',
  'SEO',
  'and Product Management',
];

const techSkills = [
  { id: 'technologies', other: technologies, title: 'Technologies' },
  { id: 'tools', other: tools, title: 'Tools' },
  { id: 'methodologies', other: methodologies, title: 'Methodologies' },
];

const TechSkills = () => (
  <ResumeSection
    information={techSkills}
    title="TECHNICAL SKILLS"
  />
);

export default TechSkills;
