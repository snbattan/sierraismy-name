/* eslint-disable line-comment-position */
/* eslint-disable multiline-comment-style */
/* eslint-disable max-len */
import Head from 'next/head';
import React from 'react';

import { Carousel } from '../components/reusable';

const testimonials = [
  'Sierra\'s attention to detail and constant striving for perfection allows teams to ascend to a higher standard in coding practices, overall quality of work, and team organization.  I believe every team should have someone like her to keep their company on the right track.',
  // (new quote) 'Sierra embodies the value we place on teamwork and community of practices.',
  // 'Sierra is doing such a great job between her responsibilities as an engineer and teammate to her squad, and also "putting on the blazer" and fulfilling her stretch into product, being meticulous in note taking and hard working, knocking items out fast!',
  'Sierra has such a strong sense of what is right and the will and organization to do it.  Every time.',
  'Sierra has always made herself extremely available as our team\'s unofficial front-end coach and last sprint that meant putting a ton of energy into helping me and another teammate with our work, while also completing a huge amount of her own work to a very high quality standard.  Her constant dedication to teamwork makes her an invaluable asset.',
  'I wanted to create visibility for one of the best pieces of work I have observed at this company and express my gratitude and appreciation for Sierra\'s awesome work and effort.',
  'Sierra went above and beyond with helping a huge integration of teams with debugging an external application to get everyone the information they needed to move forward as quickly as possible.',
  // (continued from above) 'Sierra put in a very dedicated effort over the weekend and was able to cobble together a very useful deduction from many different sources of partial truth.  Her investigation was invaluable.',
  // 'Sierra makes the Engineering Forum better, month after month, and I appreciate her willingness to work with those in later forums to make sure they\'re able to execute their jobs better, based on her learnings.  So great how she is able and willing to reach across defined roles to make sure the event is pulled off without a hitch.',
  'I am confident that Sierra will be a valued team member wherever she goes, and I\'m so glad that we have the chance to work with her.',
  'Sierra took to a stretch role and knocked it out of the park.  Her organization, her proactive attitude, her work ethic, and ability to quickly adapt were very apparent as she has produced high-quality work and documentation.',
  // (new quote) 'Sierra\'s organizing skills along with attention to detail and coordination with the team has helped this forum to be successful and impactful.',
  'When there is a team of 10 or more with 100+ ideas with a mixture of different conversations - it takes an accountable and knowledgeable person to maintain the patience, composure and still execute for bigger vision! That\'s what Sierra has done.',
  // (continues below) 'She is absolutely amazing and impresses me all of the time.  She has taken it upon herself to ensure the documentation is current and accurate.  In a community format like the forum it is so important that the documentation be right.'
  'Sierra sees where the work needs to be done and just does it.', // The whole community is so much better because of her part in it.',
  'Sierra is an extremely organized, driven, and passionate engineer.  She has an amazing ability to always be giving 100% effort, every single day.  The speed with which she is able to deliver solutions is remarkable and her attention to detail is unmatched.  Sierra has an excellent eye for UI design and user functionality and also a very strong sense of code readability and maintainability.', //  She is an exceptional engineer.',
  'Sierra was instrumental in translating the business cases to actionable stories, and contributed greatly to delivering a high - quality product in a timely manner.',
  'Sierra has put a lot of work into improving team morale. I know I can\'t see everything she\'s doing, but I\'m still constantly seeing her going out of her way to make sure our teammates and stakeholders feel appreciated.',
  'Sierra, thank you for your diligence and your commitment to do the right thing, in the right way, and demonstrating the "Act like an Owner" leadership principle.',
  // (continues below) 'Due to a miscommunication we all ended up in a tricky situation.'
  'With Sierra\'s careful planning, quick thinking, expert knowledge, and excellent communication, we were able to fix a high-priority bug in time for the holidays.',
];

const hobbies = [
  'Fitness',
  'Reading',
  'Organization',
  'Design',
  'Dance',
  'and Travel - but not right now :)',
];

const About = () => (
  <>
    <Head>
      <title>About Sierra</title>
      <link rel="canonical" href="https://sierraismy.name/about" />
    </Head>
    <article className="col-12">
      <h2>Who is Sierra?</h2>
      <p>Good question. If you know the answer, please let her know! Here are some clues.</p>
      <h3>Testimonials</h3>
      <Carousel
        slides={testimonials.map((quote) => ({
          id: quote.substring(0, 20),
          value: <blockquote key={quote}>&ldquo;{quote}&rdquo;</blockquote>,
        }))}
      />
      <h3>Hobbies</h3>
      <blockquote>{hobbies.join(', ')}</blockquote>
    </article>
  </>
);

export default About;
