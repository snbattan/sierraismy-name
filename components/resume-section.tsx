import React from 'react';

const Information = ({
  i,
  info,
  isChronological = false,
}: {
  i: number;
  info: {
    icon?: React.ReactNode;
    id: string;
    other: Array<string>;
    subtitles?: Array<string>;
    title: string;
  };
  isChronological?: boolean;
}) => (
  <>
    {i !== 0 && (isChronological ? (<p aria-hidden className='p-2'>^</p>) : (<br aria-hidden />))}
    <div className='flex flex-col place-items-center gap-1 ring-2 w-full p-4'>
      <h5 className='text-xl font-medium'>{info.title}</h5>
      {Boolean(info.icon) && <p aria-hidden className='h-8'>{info.icon}</p>}
      {info.subtitles?.map((s) => <p key={s}>{s}</p>)}
      <p className='text-xs'>{info.other?.join(', ')}</p>
    </div>
  </>
);

const ResumeSection = ({
  information,
  isChronological = false,
  title,
}: {
  information: Array<{
    icon?: React.ReactNode;
    id: string;
    other: Array<string>;
    subtitles?: Array<string>;
    title: string;
  }>;
  isChronological?: boolean;
  title: string;
}) => (
  <section className="w-full py-4">
    <h4 className='text-2xl pb-4'>{title}</h4>
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

export default ResumeSection;
