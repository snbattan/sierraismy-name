/* eslint-disable max-len */

'use client';

import React from 'react';

import Education from '../../components/education';
import Experiences from '../../components/experiences';
import TechSkills from '../../components/skills';
import { Carousel } from '../../components';

const testimonials = [
  "Sierra's attention to detail and constant striving for perfection allows teams to ascend to a higher standard in coding practices, overall quality of work, and team organization.  I believe every team should have someone like her to keep their company on the right track.",
  'Sierra has such a strong sense of what is right and the will and organization to do it.  Every time.',
  'Sierra is such an incredible champion for the organization. She spends not only a ton of time raising the bar for our technical knowledge and decisions, but also makes sure to think about how we can continue to strive to be a better group. She finds a way to imbue that in all aspects, not just the code.',
  // (continues below) Sierra has shown us that engineers are more than code wizards.
  "Her passion for trying new ideas and pushing boundaries is truly infectious! But what really sets Sierra apart is her dedication to teamwork and collaboration. She has completely changed our perspective on what real partner collaboration looks like, and it's incredibly inspiring.",
  /*
   * 'Sierra has always made herself extremely available as our team\'s unofficial front-end coach and last sprint that meant putting a ton of energy into helping me and another teammate with our work, while also completing a huge amount of her own work to a very high quality standard.  Her constant dedication to teamwork makes her an invaluable asset.',
   * 'I wanted to create visibility for one of the best pieces of work I have observed at this company and express my gratitude and appreciation for Sierra\'s awesome work and effort.',
   * 'Sierra went above and beyond with helping a huge integration of teams with debugging an external application to get everyone the information they needed to move forward as quickly as possible. Sierra put in a very dedicated effort over the weekend and was able to cobble together a very useful deduction from many different sources of partial truth.  Her investigation was invaluable.',
   * 'Sierra makes the Engineering Forum better, month after month, and I appreciate her willingness to work with those in later forums to make sure they\'re able to execute their jobs better, based on her learnings.  So great how she is able and willing to reach across defined roles to make sure the event is pulled off without a hitch.',
   */
  // "I am confident that Sierra will be a valued team member wherever she goes, and I'm so glad that we have the chance to work with her.",
  // "Sierra took to a stretch role and knocked it out of the park.  Her organization, proactive attitude, work ethic, and ability to quickly adapt were very apparent as she has produced high-quality work and documentation.",
  // 'Sierra\'s organizing skills along with attention to detail and coordination with the team has helped this forum to be successful and impactful.',
  "When there is a team of 10 or more with 100+ ideas with a mixture of different conversations, it takes an accountable and knowledgeable person to maintain patience and composure and still execute on the bigger vision! That's what Sierra has done.",
  // "She is absolutely amazing and impresses me all of the time.  She has taken it upon herself to ensure the documentation is current and accurate.  In a community format like the forum it is so important that the documentation be right. Sierra sees where the work needs to be done and just does it. The whole community is so much better because of her part in it.',
  // "Sierra was instrumental in translating the business cases to actionable stories, and contributed greatly to delivering a high-quality product in a timely manner.",
  // (continues below) "Sierra is an extremely organized, driven, and passionate engineer.  She has an amazing ability to always be giving 100% effort, every single day.",
  'The speed with which Sierra is able to deliver solutions is remarkable and her attention to detail is unmatched.  She has an excellent eye for UI design and user functionality and also a very strong sense of code readability and maintainability.', //  She is an exceptional engineer.',
  "Sierra has put a lot of work into improving team morale. I know I can't see everything she's doing, but I'm still constantly seeing her going out of her way to make sure our teammates and stakeholders feel appreciated.",
  // "Sierra, thank you for your diligence and your commitment to do the right thing, in the right way, and demonstrating the "Act like an Owner" leadership principle.",
  // 'Due to a miscommunication we all ended up in a tricky situation. With Sierra\'s careful planning, quick thinking, expert knowledge, and excellent communication, we were able to fix a high-priority bug in time for the holidays.',
];

/*
 * https://www.google.com/amp/s/www.themuse.com/amp/advice/6-things-you-should-put-on-your-personal-websiteand-6-things-to-avoid-at-all-costs
 * https://business.tutsplus.com/articles/what-to-include-on-your-personal-resume-website--cms-28052
 * https://collegeinfogeek.com/essential-components-of-personal-websites/
 * https://www.quora.com/What-should-I-put-on-my-personal-website
 * https://www.devonstank.com/
 * https://simonsinek.com/
 */

/*
 * Throughout my career, I tend to gravitate towards what others avoid.
 * Jumping in to the unknown has often resulted in strong employer and personal growth.
 * In my experience, the most successful projects take equal parts technical excellence
 * and coordination, and I strive to provide both wherever possible.
 */

/*
 * Technical specializations include:
 * - Full stack web app development using Javascript/Typescript, Node, React, HTML5, CSS, NextJS
 * - Microservice development in NodeJS, Java
 * - Build tooling and pipelines, especially Linux/macOS, NPM, Jenkins, GitHub Actions
 * - CDNs, caching, and web performance
 * - Serverless technologies, such as AWS Lambda, Fargate, Cloudflare Workers, and Firebase
 * - AWS cloud compute, networking, DNS, and other services
 */

/*
 * Leadership experience:
 * - Inner source project and community development
 * - Technical lead duties, such as code reviews, mentoring, release coordination,
 *     requirements gathering, aligning developers with management, product, and program
 * - Practitioner of agile, scrum, and lean methodologies / ceremonies
 * - Close collaboration with senior management to develop strategic project and resourcing plans
 */

/*
 * Slack messages of support/shout outs August 2020
 * C&M Slack Takeover challenge for International Women’s Month March 23rd
 */

// const getExperience = () => {
//   const oneDay = 1000 * 60 * 60 * 24;
//   const oneMonth = oneDay * 30.4375;
//   const oneYear = oneMonth * 12;

//   const today = new Date();
//   const firstDay = new Date('09/19/2016');

//   const experience = today.getTime() - firstDay.getTime();
//   const experienceYears = Math.floor(experience / oneYear);
//   const experienceMonths = Math.floor((experience % oneYear) / oneMonth);
//   const experienceDays = Math.ceil((experience % oneMonth) / oneDay);

//   return `${experienceYears} years ${experienceMonths} month${
//     experienceMonths === 1 ? '' : 's'
//   } and ${experienceDays} day${experienceDays === 1 ? '' : 's'}`;
// };

export default function Resume() {
  // const experience = useMemo(() => getExperience(), []);
  return (
    <>
      {/* <Head>
        <title>Sierra&apos;s Resume</title>
      </Head> */}
      <h3 className="text-2xl">Testimonials</h3>
      <Carousel
        slides={testimonials.map((quote) => ({
          id: quote.substring(0, 20),
          value: (
            <blockquote key={quote}>
              &ldquo;
              {quote}
              &rdquo;
            </blockquote>
          ),
        }))}
      />
      <TechSkills />
      <Experiences />
      <Education />
    </>
  );
}
