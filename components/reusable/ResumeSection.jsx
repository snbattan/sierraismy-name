import PropTypes from 'prop-types';
import React from 'react';

const Information = ({ isChronological, i, info }) => (
  <>
    {isChronological && i !== 0 && <i className="fas fa-2x fa-chevron-circle-up" />}
    <section className="resume-section-info col-7">
      <h3>{info.title}</h3>
      {info.icon}
      {info.subtitles?.map((s) => <p key={s}>{s}</p>)}
      <pre>{info.other?.join(', ')}</pre>
    </section>
  </>
);

Information.defaultProps = {
  isChronological: false,
};

Information.propTypes = {
  i: PropTypes.number.isRequired,
  info: PropTypes.shape().isRequired,
  isChronological: PropTypes.bool,
};

const ResumeSection = ({ information, isChronological, title }) => (
  <article className="resume-section">
    <h3>{title}</h3>
    {information.map((info, i) => (
      <Information
        key={info.id}
        i={i}
        info={info}
        isChronological={isChronological}
      />
    ))}
  </article>
);

ResumeSection.defaultProps = {
  isChronological: false,
};

ResumeSection.propTypes = {
  information: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isChronological: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default ResumeSection;
