import React from 'react';

import { OregonIcon, ResumeSection } from '.';

const schools = [
  {
    icon: <OregonIcon />,
    id: 'BS',
    other: ['Applied Mathematics', 'Computer & Information Science'],
    subtitles: ['University of Oregon', 'Robert D. Clark Honors College'],
    title: 'Bachelor of Science',
  },
];

function Education() {
  return <ResumeSection information={schools} title="Education" />;
}

export default Education;
