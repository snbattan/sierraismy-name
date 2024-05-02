import React from "react";

import { OregonIcon, ResumeSection } from "../reusable";

const schools = [
  {
    icon: <OregonIcon />,
    id: "BS",
    other: ["Applied Mathematics", "Computer & Information Science"],
    subtitles: ["University of Oregon", "Robert D. Clark Honors College"],
    title: "Bachelor of Science",
  },
];

const Education = () => (
  <ResumeSection information={schools} title="EDUCATION" />
);

export default Education;
