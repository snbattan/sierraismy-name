// import PropTypes from 'prop-types';
import React from 'react';

import { ResumeSection } from '../reusable';

const languages = [
  'JavaScript',
  'HTML',
  'CSS',
  'NoSQL',
  'SQL',
  'Java',
  'and Python.',
];

const tools = [
  'AWS',
  'Node',
  'React',
  'Redux',
  'Jenkins',
  'Splunk',
  'PagerDuty',
  'ServiceNow',
  'JIRA',
  'Confluence',
  'Bitbucket',
  'GitHub',
  'NextJS',
  'Docker',
  'Figma',
  'Sketch',
  'SignalFX',
  'NewRelic',
  'React Native',
  'SEO',
  'and more!',
];

/*
 * const methodologies = [
 *   'Agile',
 *   'Scrum',
 *   'Kanban',
 *   'CI/CD',
 *   'DevOps',
 *   'Lean',
 *   'KT',
 *   'TDD',
 *   'OOP',
 *   'Functional Programming',
 *   'Product Management',
 * ];
 */

const techSkills = [
  { id: 'languages', other: languages, title: 'Languages' },
  { id: 'tools', other: tools, title: 'Tools' },
  // { id: 'methodologies', other: methodologies, title: 'Methodologies' },
];

const TechSkills = () => (
  <>
    <ResumeSection
      information={techSkills}
      title="TECHNICAL SKILLS"
    />
  </>
);

export default TechSkills;
