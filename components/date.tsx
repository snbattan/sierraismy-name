import React from 'react';

const NOW = new Date();
const DATE = new Date(NOW.setFullYear(NOW.getFullYear() + 3));

const month = DATE.getMonth() + 1;
const MONTH = month > 9 ? month.toString() : `0${month}`;

const day = DATE.getDate();
const DAY = day > 9 ? day.toString() : `0${day}`;

const YEAR = DATE.getFullYear().toString().slice(2);

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
