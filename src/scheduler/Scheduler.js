
import React from 'react';
import './Scheduler.css';
import weekdays from '../calender/weekdays';
import Timeline from '../timeline/Timeline';

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
      { reminders? <Timeline reminders={reminders.reminders}/>
       : <h1 className="empty-note">No Reminders Yet</h1>
      }
    </section>
  );
}

export default Scheduler;