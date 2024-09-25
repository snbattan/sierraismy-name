import React from 'react';

const NOW = new Date();

const month = NOW.getMonth() + 1;
const MONTH = month > 9 ? month.toString() : `0${month}`;

const day = NOW.getDate();
const DAY = day > 9 ? day.toString() : `0${day}`;

const YEAR = NOW.getFullYear().toString().slice(2);

function DateComponent() {
  return (
    <>
      {`${MONTH} `}
      &bull;
      {` ${DAY} `}
      &bull;
      {` ${YEAR}`}
    </>
  );
}

export default DateComponent;
