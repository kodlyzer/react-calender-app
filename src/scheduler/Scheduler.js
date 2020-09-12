
import React from 'react';
import './Scheduler.css';
import weekdays from '../calender/weekdays'

function Scheduler ({ reminders }) {
  console.log(reminders);
  const classes = ['scheduler-wrapper'];
  const day = reminders?.date?.getDay();
  if (day === 0 || day === 6) {
    classes.push('holiday-reminders');
  }
  return (
    <section className={classes.join(' ')}>
      <header>
        <div>
          <h2>{weekdays[reminders?.date?.getDay()]}</h2>
        </div>
        <div>
          {reminders?.date?.getDate()}/{reminders?.date?.getMonth()}/{reminders?.date?.getFullYear()}
        </div>
        <button type="button">Add new</button>
      </header>
      <main>
      <ul className="timeline">
        <li className="timeline-item">
          
        </li>
        <li className="timeline-item">
          
        </li>
        <li className="timeline-item">
          
        </li>
        <li className="timeline-item">
          
        </li>
        <li className="timeline-item">
          
        </li>
      </ul>
      </main>
    </section>
  );
}

export default Scheduler;