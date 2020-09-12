
import React from 'react';
import './Scheduler.css';
import weekdays from '../calender/weekdays'

function Scheduler ({ reminders }) {
  console.log(reminders);
  const classes = ['scheduler-wrapper'];
  const day = reminders?.date?.getDay();
  const year = reminders?.date?.getFullYear();
  const month = reminders?.date?.getMonth();
  const date = reminders?.date?.getDate();
  const newDate = new Date();
  let title;
  if (day === 0 || day === 6) {
    classes.push('holiday-reminders');
  }
  if (year === newDate.getFullYear() && month === newDate.getMonth() && date === newDate.getDate() ) {
    title = 'Today';
  } else {
    title = weekdays[reminders?.date?.getDay()];
  }
  return (
    <section className={classes.join(' ')}>
      <header>
        <div>
          <h1>{title}</h1>
          <h3>{reminders && reminders?.date?.getDate()+ '/' + reminders?.date?.getMonth()+ '/' +reminders?.date?.getFullYear()}</h3>
        </div>
        <div> 
          <button type="button">Add New</button>
        </div>
        
      </header>
      { reminders? 
      <main className="timeline">
        <ul>
          { reminders?.reminders?.map(reminder => (
            <li key={Math.random()}>
              <div className="timeline-item">
                <h2>{reminder.reminder}</h2>
                <h4>{reminder.place}</h4>
                <h4>{reminder.time}</h4>
              </div>
            </li>)
          )}
        </ul>
      </main> : ''
      }
    </section>
  );
}

export default Scheduler;