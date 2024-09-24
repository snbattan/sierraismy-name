import React from 'react';

import { ResumeSection } from '.';

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'AWS',
  'HTML',
  'CSS',
  'Stitches',
  'Emotion',
  'Sass',
  'Redux',
  'Jotai',
  'Turbopack',
  'Webpack',
  'Parcel',
  'ESLint',
  'Jest',
  'Cypress',
  'Git',
  'npm',
  'pnpm',
  'yarn',
  'Docker',
  'NoSQL',
  'SQL',
  'Java',
  'Python',
  'React Native',
];

const tools = [
  'Jenkins',
  'GitHub',
  'Bitbucket',
  'Confluence',
  'JIRA',
  'Slack',
  'Datadog',
  'Splunk',
  'PagerDuty',
  'ServiceNow',
  'SignalFX',
  'New Relic',
  'Adobe Analytics',
  'Akamai',
  'Figma',
  'AirTable',
];

const methodologies = [
  'Agile',
  'Scrum',
  'Kanban',
  'Lean',
  'CI/CD',
  'DevOps',
  'Story Writing & Estimation',
  'Prioritization',
  'Product Management',
  'Refactoring',
  'Functional Programming',
  'Test-Driven Development',
  'Chaos Engineering',
  'Search Engine Optimization',
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
