import React from 'react';

import { NikeIcon, OregonIcon, ResumeSection } from '../reusable';

const experiences = [
  {
    icon: <NikeIcon />,
    id: 'Nike FTE II',
    other: ['AWS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript'],
    subtitles: [
      'NIKE, Inc.',
      'November 2021 - Present',
    ],
    title: 'Senior Software Engineer II',
  },
  {
    icon: <NikeIcon />,
    id: 'Nike FTE I',
    other: ['AWS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Java'],
    subtitles: [
      'NIKE, Inc.',
      'November 2020 - October 2021',
    ],
    title: 'Software Engineer I',
  },
  {
    icon: <NikeIcon />,
    id: 'Nike ETW',
    other: ['AWS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    subtitles: [
      'Insight Global - Contracted at NIKE, Inc.',
      'June 2019 - October 2020',
    ],
    title: 'Software Engineer',
  },
  {
    icon: <NikeIcon />,
    id: 'Nike Intern',
    other: ['JavaScript', 'React', 'Redux', 'Node.js'],
    subtitles: [
      'PRO Unlimited - Contracted at NIKE, Inc.',
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
