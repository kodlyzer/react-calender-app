import React from 'react';
import './App.css';
import Calender from './calender/Calender';
import Scheduler from './scheduler/Scheduler';
import { Reminders, Reminder } from './scheduler/Reminder';

function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [reminders, setReminders] = React.useState({}); 
  const [selectedDayReminders, setSelectedDayReminders] = React.useState();
  const addReminder = (newReminder) => {
    console.log(newReminder);
    const reminderDayKey = '' + newReminder?.date?.getFullYear() + newReminder?.date?.getMonth() + newReminder?.date?.getDate();
    let xreminders;
    if (reminders && reminders[reminderDayKey]) {
      xreminders = reminders[reminderDayKey];
    } else {
      xreminders = new Reminders(newReminder.date);
    }
    newReminder.reminder && xreminders.reminders.push(newReminder.reminder);
    setReminders({...reminders, ...{ [xreminders.id]: xreminders}});
  }

  React.useEffect(() => {
    const selectedDayKey = '' + selectedDate?.getFullYear() + selectedDate?.getMonth() + selectedDate?.getDate();
    if (!reminders[selectedDayKey]) {
      addReminder({
        date: selectedDate
      });
    }
    setSelectedDayReminders(reminders && reminders[selectedDayKey]);
  }, [selectedDate, reminders]);

  return (
    <div className="container">
      <Calender reminders={reminders} setSelectedDate={setSelectedDate} selected={selectedDate} addReminder={addReminder}/>
      <Scheduler selectedDayReminders={selectedDayReminders} addReminder={addReminder}/>
    </div>
  );
}

export default App;
