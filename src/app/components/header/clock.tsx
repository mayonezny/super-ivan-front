/* eslint-disable no-magic-numbers */
'use client';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const Clock = () => {
  const [time, setTime] = useState({ hours: '', minutes: '' });
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(timezone);

    const interval = setInterval(() => {
      const zonedTime = toZonedTime(new Date(), timezone);
      setTime({
        hours: format(zonedTime, 'HH'),
        minutes: format(zonedTime, 'mm'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col'>
      <span className='text-3xl'><span className='text-5xl'>{time.hours}</span><span className="blink">:</span>{time.minutes}</span>
      <span className='text-xs text-gray-500'>{timezone}</span>
    </div>
  );
};

export default Clock;
