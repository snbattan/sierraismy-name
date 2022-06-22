import React from 'react';

const Information = ({ i, info, isChronological }: {
  i: number,
  info: {
    icon?: JSX.Element,
    id: string,
    other: Array<string>,
    subtitles?: Array<string>,
    title: string,
  },
  isChronological?: boolean,
}) => (
  <>
    {isChronological && i !== 0 && <i className="fas fa-2x fa-chevron-circle-up" />}
    <section className="resume-section-info col-7">
      <h4>{info.title}</h4>
      {info.icon}
      {info.subtitles?.map((s) => <p key={s}>{s}</p>)}
      <pre>{info.other?.join(', ')}</pre>
    </section>
  </>
);

Information.defaultProps = {
  isChronological: false,
};

const ResumeSection = ({ information, isChronological, title }: {
  information: Array<{
    icon?: JSX.Element,
    id: string,
    other: Array<string>,
    subtitles?: Array<string>,
    title: string,
  }>,
  isChronological?: boolean,
  title: string,
}) => (
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

export default ResumeSection;
