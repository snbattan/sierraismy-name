import React from 'react';

const colors = ['bg-lblue', 'bg-mblue', 'bg-dblue', 'bg-lnavy', 'bg-mnavy', 'bg-dnavy', 'bg-lpink', 'bg-mpink', 'bg-dpink', 'bg-lgold', 'bg-mgold', 'bg-dgold', 'bg-white', 'bg-black'];

const Home = () => (
  <article className="col-12">
    <h3>Welcome!</h3>
    <p>This is Sierra&apos;s website.</p>
    <pre>Please explore and reach out to her if you have any questions.</pre>
    <blockquote>Get in Touch</blockquote>
    <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '48px' }}>
      {colors.map((c) => <div key={c} className={`card ${c}`}>{c}</div>)}
    </section>
  </article>
);

export default Home;

/*
 * https://www.google.com/amp/s/www.themuse.com/amp/advice/6-things-you-should-put-on-your-personal-websiteand-6-things-to-avoid-at-all-costs
 * https://business.tutsplus.com/articles/what-to-include-on-your-personal-resume-website--cms-28052
 * https://collegeinfogeek.com/essential-components-of-personal-websites/
 * https://www.quora.com/What-should-I-put-on-my-personal-website
 * https://www.devonstank.com/
 * https://simonsinek.com/
 */

/*
 * About
 * Seasoned full stack developer, architect, and technical lead. Worked alongside and led several
 * teams to design, build, operate, and scale multiple cloud-native web applications.
 * I like working on big challenges with good people.
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
