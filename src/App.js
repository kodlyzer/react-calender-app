import React from 'react';
import './App.css';
import Calender from './calender/Calender';
import Scheduler from './scheduler/Scheduler';

function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [reminders, setReminders] = React.useState(); 
  const [selectedDayReminders, setSelectedDayReminder] = React.useState();

  React.useEffect(() => {
    setSelectedDayReminder(reminders && reminders['' + selectedDate?.getFullYear() + selectedDate?.getMonth() + selectedDate?.getDate()]);
  }, [selectedDate])

  const addReminder = (newReminder) => {
    setReminders({...reminders, ...newReminder});
  }

  return (
    <div className="container">
      <Calender reminders={reminders} setSelectedDate={setSelectedDate} selected={selectedDate} addReminder={addReminder}/>
      <Scheduler selectedDayReminders={selectedDayReminders} addReminder={addReminder}/>
    </div>
  );
}

export default App;
