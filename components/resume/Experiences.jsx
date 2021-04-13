import React from 'react';

import { NikeIcon, OregonIcon, ResumeSection } from '../reusable';

const experiences = [
  {
    icon: <NikeIcon />,
    id: 'Nike FTE',
    other: ['AWS', 'Java', 'Node', 'React'],
    subtitles: [
      'Nike, Inc.',
      'November 2020 - Present',
    ],
    title: 'Software Engineer I',
  },
  {
    icon: <NikeIcon />,
    id: 'Nike ETW',
    other: ['AWS', 'Node', 'React'],
    subtitles: [
      'Insight Global - Contracted at Nike, Inc.',
      'June 2019 - October 2020',
    ],
    title: 'Software Engineer',
  },
  {
    icon: <NikeIcon />,
    id: 'Nike Intern',
    other: ['Node', 'React'],
    subtitles: [
      'PRO Unlimited - Contracted at Nike, Inc.',
      'June 2018 - September 2018',
    ],
    title: 'Junior Software Engineer',
  },
  {
    icon: <OregonIcon />,
    id: 'UO Research',
    other: ['Java', 'Python'],
    subtitles: [
      'University of Oregion - Computer & Information Science Department',
      'September 2016 - June 2018',
    ],
    title: 'Undergraduate Research Assistant',
  },
];

const Experiences = () => (
  <ResumeSection
    isChronological
    information={experiences}
    title="EXPERIENCE"
  />
);

export default Experiences;
