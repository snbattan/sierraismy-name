import React from 'react';

import { ResumeSection } from '.';

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML',
  'CSS',
  'Tailwind',
  'Stitches',
  'Emotion',
  'Sass',
  'ESLint',
  'Jest',
  'Cypress',
  'Redux',
  'Jotai',
  'npm',
  'pnpm',
  'yarn',
  'Turbopack',
  'Webpack',
  'Parcel',
  'Docker',
  'NoSQL',
  'SQL',
  'Java',
  'Python',
  'React Native',
];

const tools = [
  'AWS',
  'Jenkins',
  'GitHub',
  'Bitbucket',
  'Atlassian',
  'Slack',
  'Datadog',
  'Splunk',
  'PagerDuty',
  'ServiceNow',
  'SignalFX',
  'New Relic',
  'Akamai',
  'Figma',
  'AirTable',
];

const methodologies = [
  'Product Management',
  'DevOps',
  'SEO',
  'Agile',
  'Scrum',
  'Kanban',
  'Lean',
  'TDD',
  'CI/CD',
  'Functional Programming',
  'Chaos Engineering',
];

const techSkills = [
  { id: 'technologies', other: technologies, title: 'Technologies' },
  { id: 'tools', other: tools, title: 'Tools' },
  { id: 'methodologies', other: methodologies, title: 'Methodologies' },
];

const TechSkills = () => (
  <ResumeSection information={techSkills} title="Technical Skills" />
);

export default TechSkills;
