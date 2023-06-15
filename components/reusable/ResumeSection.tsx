import React from 'react';

const Information = ({ i, info, isChronological }: {
  i: number,
  info: {
    icon?: React.ReactNode,
    id: string,
    other: Array<string>,
    subtitles?: Array<string>,
    title: string,
  },
  isChronological?: boolean,
}) => (
  <>
    {isChronological && i !== 0
      ? <span className='material-icons'>expand_less</span>
      : <br />}
    <section className="resume-section-info">
      <h5>{info.title}</h5>
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
    icon?: React.ReactNode,
    id: string,
    other: Array<string>,
    subtitles?: Array<string>,
    title: string,
  }>,
  isChronological?: boolean,
  title: string,
}) => (
  <section className="content">
    <h4>{title}</h4>
    {information.map((info, i) => (
      <Information
        key={info.id}
        i={i}
        info={info}
        isChronological={isChronological}
      />
    ))}
  </section>
);

ResumeSection.defaultProps = {
  isChronological: false,
};

export default ResumeSection;
