import React from 'react';

const socialIcons = [
  { link: 'https://www.linkedin.com/in/snbattan/', name: 'linkedin-in' },
  { link: 'https://github.com/snbattan', name: 'github' },
  { link: 'https://twitter.com/sierrabattan', name: 'twitter' },

  /*
   *{ link: 'https://www.instagram.com/sierrabattan/', name: 'instagram' },
   * { link: 'https://www.youtube.com/channel/UCwqywRwVXJpNAL4Zbck245Q', name: 'youtube' },
   * { link: 'https://www.pinterest.com/snbattan/_saved/', name: 'pinterest-p' },
   * { link: 'https://www.facebook.com/snbattan', name: 'facebook-f' },
   */
];

const SocialIcon = ({ social }: { social: { link: string, name: string } }) => (
  <a aria-label={social.name} href={social.link} rel="noopener noreferrer" target="_blank">
    <i className={`fab fa-${social.name}`} />
  </a>
);

const Footer = () => (
  <footer className="book-end ta-c">
    <pre>{socialIcons.map((social) => <SocialIcon key={social.name} social={social} />)}</pre>
  </footer>
);

export default Footer;
