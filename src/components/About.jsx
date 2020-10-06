/* eslint-disable comma-dangle */
/* eslint-disable line-comment-position */
/* eslint-disable max-len */
/* eslint-disable multiline-comment-style */
import React from 'react';

const testimonials = [
  // 'Sierra embodies the value we place on teamwork and community of practices.',
  'Sierra’s attention to detail and constant striving for perfection [allows teams] to ascend to a higher standard in coding practices, overall quality of work, and team organization. I believe every team should have someone like her to keep [their company] on the right track.',
  '[Sierra] has such a strong sense of what is right and the will and organization to do it.  Every time.',
  'I am confident that [Sierra will be] a valued team member wherever she goes, and I\'m so glad that we have the chance to work with her.',
  // 'I wanted to create visibility for one of the best pieces of work I have observed at [this company] and express my gratitude and appreciation for [Sierra\'s] awesome work and effort.',
  // '[Sierra went] above and beyond with helping a huge integration of teams with debugging an external application to get everyone the information they needed to move forward as quickly as possible.  Sierra put in a very dedicated effort over the weekend and was able to cobble together a very useful deduction from many different sources of partial truth.  Her investigation was invaluable.',
  // '[Sierra makes] the Engineering Forum better, month after month, and I appreciate [her] willingness to work with those in later forums to make sure they\'re able to execute their jobs better, based on [her] learnings.  So great how [she\'s] able and willing to reach across defined roles to make sure the event is pulled off without a hitch.',
  'Sierra took to a stretch role and knocked it out of the park.  Her organization, her proactive attitude, her work ethic, and ability to quickly adapt were very apparent as she has produced high-quality work and documentation.' // I look forward to seeing where she carries this in the next few quarters!',
  // '[Sierra is] doing such a great job between her responsibilities as an engineer and teammate to her squad, and also \'putting on the blazer\' and fulfilling her stretch into product, being meticulous in note taking and hard working, knocking items out fast!',
  // '[Sierra\'s] organizing skills along with attention to detail and coordination with the team has helped this forum to be successful and impactful.',
  // 'When there is a team of 10 or more with 100+ ideas with a mixture of different conversations - it takes an accountable and knowledgeable person to maintain the patience, composure and still execute for bigger vision! That\'s what [Sierra has] has done.',
];

const AboutMe = () => (
  <article className="col ta-c va-t">
    <h2>Who is Sierra?</h2>
    <p>Good question. If you know the answer, please let her know! In the mean time, feel free to explore this page for some clues.</p>
    <br />
    <section className="col">
      <h3>Testimonials</h3>
      {testimonials.map((quote) => <blockquote key={quote}>&ldquo;{quote}&rdquo;</blockquote>)}
    </section>
  </article>
);

export default AboutMe;
