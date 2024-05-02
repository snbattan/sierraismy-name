import React from "react";

import { DisneyIcon, NikeIcon, OregonIcon, ResumeSection } from "../reusable";

const experiences = [
  {
    icon: <DisneyIcon />,
    id: "Disney Senior",
    other: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Redux",
      "Node.js",
      "Kubernetes",
      "Java",
    ],
    subtitles: ["The Walt Disney Company", "February 2022 - Present"],
    title: "Senior Software Engineer",
  },
  {
    icon: <NikeIcon />,
    id: "Nike FTE II",
    other: ["JavaScript", "Next.js", "React", "Redux", "Node.js", "AWS"],
    subtitles: ["NIKE, Inc.", "November 2021 - January 2022"],
    title: "Senior Software Engineer II",
  },
  {
    icon: <NikeIcon />,
    id: "Nike FTE I",
    other: ["JavaScript", "React", "Redux", "Node.js", "AWS", "Java"],
    subtitles: ["NIKE, Inc.", "November 2020 - October 2021"],
    title: "Software Engineer I",
  },
  {
    icon: <NikeIcon />,
    id: "Nike ETW",
    other: ["JavaScript", "React", "Redux", "Node.js", "AWS"],
    subtitles: [
      "Insight Global - Contracted at NIKE, Inc.",
      "June 2019 - October 2020",
    ],
    title: "Software Engineer",
  },
  {
    icon: <NikeIcon />,
    id: "Nike Intern",
    other: ["JavaScript", "React", "Redux", "Node.js"],
    subtitles: [
      "PRO Unlimited - Contracted at NIKE, Inc.",
      "June 2018 - September 2018",
    ],
    title: "Junior Software Engineer",
  },
  {
    icon: <OregonIcon />,
    id: "UO Research",
    other: ["Java", "Python"],
    subtitles: ["University of Oregon", "September 2016 - June 2018"],
    title: "Computer Science Research Assistant",
  },
];

const Experiences = () => (
  <ResumeSection isChronological information={experiences} title="EXPERIENCE" />
);

export default Experiences;
