import React from 'react';

function dateDiff(startDate: Date, endDate: Date) {
  // Calculate the time difference between the two dates
  const timeDiff = endDate.getTime() - startDate.getTime();

  // Calculate the number of milliseconds in a year, month, and day
  const yearInMillis = 1000 * 60 * 60 * 24 * 365;
  const monthInMillis = 1000 * 60 * 60 * 24 * 30;
  const dayInMillis = 1000 * 60 * 60 * 24;

  // Calculate the number of years between the two dates
  const years = Math.floor(timeDiff / yearInMillis);

  // Subtract the number of years from the time difference and calculate the number of months
  const months = Math.floor((timeDiff - years * yearInMillis) / monthInMillis);

  // Subtract the number of years and months from the time difference and calculate the number of days
  const days = Math.floor((timeDiff - years * yearInMillis - months * monthInMillis) / dayInMillis);

  // Return an object with the year, month, and day values
  return {
    years: years,
    months: months,
    days: days,
  };
}

const startDate = new Date('1999-09-20');
const endDate = new Date();
const diff = dateDiff(startDate, endDate);

interface ColoredProps {
  children: React.ReactNode;
}

function Colored(props: ColoredProps) {
  return <span className='text-blue-500 dark:text-blue-400'>{props.children}</span>;
}

export const timelineData = [
  {
    title: (
      <>
        It has been <Colored>{diff.years}</Colored> years <Colored>{diff.months}</Colored> months and{' '}
        <Colored>{diff.days}</Colored> days since I was born.
      </>
    ),
    location: 'Vadodara, Gujarat',
    year: 'September 1999',
  },
  {
    title: (
      <>
        Completed my <Colored>diploma</Colored> in information technology
      </>
    ),
    location: 'Maharaja Sayajirao University, Vadodara',
    year: 'June 2019',
  },
  {
    title: (
      <>
        Have been working for <Colored>{new Date().getFullYear() - 2019} years</Colored> as a{' '}
        <Colored>freelance</Colored> frontend developer
      </>
    ),
    location: 'Vadodara, Gujarat',
    year: 'January 2019',
  },
  {
    title: (
      <>
        Completed my <Colored>engineering</Colored> degree in information technology
      </>
    ),
    location: 'Sigma Institute of Engineering, Bakrol',
    year: 'May 2022',
  },
  {
    title: (
      <>
        Joined <Colored>Simform Solutions</Colored> as a <Colored>trainee</Colored> software engineer
      </>
    ),
    location: 'Ahmedabad, Gujarat',
    year: 'February 2022',
  },
  {
    title: (
      <>
        Joined <Colored>Simform Solutions</Colored> as a <Colored>frontend</Colored> software engineer
      </>
    ),
    location: 'Ahmedabad, Gujarat',
    year: 'July 2022',
  },
];
