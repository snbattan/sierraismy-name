import React from 'react';

import { ResumeSection } from '../reusable';

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
  'Sass',
  'Redux',
  'Webpack',
  'Parcel',
  'Babel',
  'ESLint',
  'Jest',
  'Git',
  'npm',
  'pnpm',
  'yarn',
  'Docker',
  'NoSQL',
  'SQL',
  'Java',
  'React Native',
  'and Python.',
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
  'Object-Oriented Programming',
  'Test-Driven Development',
  'Chaos Engineering',
  'Search Engine Optimization',
  'and Product Management.',
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
