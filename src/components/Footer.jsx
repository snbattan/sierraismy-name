import PropTypes from 'prop-types';
import React from 'react';

const socialIcons = [
  { link: 'https://www.facebook.com/snbattan', name: 'facebook' },
  { link: 'https://twitter.com/sierrabattan', name: 'twitter' },
  { link: 'https://www.linkedin.com/in/snbattan/', name: 'linkedin' },
  { link: 'https://github.com/snbattan', name: 'github' },
  { link: 'https://www.youtube.com/channel/UCwqywRwVXJpNAL4Zbck245Q', name: 'youtube' },
  { link: 'https://www.instagram.com/sierrabattan/', name: 'instagram' },
  { link: 'https://www.pinterest.com/snbattan/_saved/', name: 'pinterest' },
];

const SocialIcon = ({ social }) => (
  <a href={social.link} rel="noopener noreferrer" label={social.name} target="_blank"><i className={`fa fa-${social.name}`} style={{ fontSize: '24px' }} /></a>
);

SocialIcon.propTypes = {
  social: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Footer = () => (
  <footer className="row">
    <h4 className="col ta-c">
      {socialIcons.map((social) => <SocialIcon key={social.name} social={social} />)}
    </h4>
  </footer>
);

export default Footer;
