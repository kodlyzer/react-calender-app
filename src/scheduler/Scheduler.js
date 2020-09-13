
import React from 'react';
import './Scheduler.css';
import weekdays from '../calender/weekdays';
import Timeline from '../timeline/Timeline';
import AddNewReminder from '../add-reminder/AddReminder';

function Scheduler ({ selectedDayReminders,  addReminders}) {
  console.log(selectedDayReminders);
  const classes = ['scheduler-wrapper'];
  const day = selectedDayReminders?.date?.getDay();
  const year = selectedDayReminders?.date?.getFullYear();
  const month = selectedDayReminders?.date?.getMonth();
  const date = selectedDayReminders?.date?.getDate();
  const newDate = new Date();
  let title;
  if (day === 0 || day === 6) {
    classes.push('holiday-reminders');
  }
  if (year === newDate.getFullYear() && month === newDate.getMonth() && date === newDate.getDate() ) {
    title = 'Today';
  } else {
    title = weekdays[selectedDayReminders?.date?.getDay()];
  }
  return (
    <section className={classes.join(' ')}>
      <header>
        <div>
          <h1>{title}</h1>
          <h3>{selectedDayReminders && selectedDayReminders?.date?.getDate()+ '/' + selectedDayReminders?.date?.getMonth()+ '/' +selectedDayReminders?.date?.getFullYear()}</h3>
        </div>
        <div> 
          <AddNewReminder />
        </div>
      </header>
      { selectedDayReminders? <Timeline selectedDayReminders={selectedDayReminders.reminders}/>
       : <h1 className="empty-note">No Reminders Yet</h1>
      }
    </section>
  );
}

export default Scheduler;