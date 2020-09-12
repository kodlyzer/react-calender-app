import React from 'react';
import './Calender.css';
import months from './months';
import { Reminder, Reminders } from '../scheduler/Reminder';


function Calender(props) {
  const [dateObj, setDateObj] = React.useState(new Date());
  const {selected, setSelectedDate, addReminder} = props;

  const handleDateSelect = (selectedDate) => {
    const reminders = new Reminders(selectedDate);
    const reminder = new Reminder('test', 'place', 'time');
    reminders.reminders.push(reminder);
    reminders.reminders.push(reminder);
    addReminder({
      [reminders.id]: reminders,
    });
    setSelectedDate(selectedDate);
  }

  const moveMonth = (isPrev) => {
    if(isPrev) {
      dateObj.setMonth(dateObj.getMonth() - 1);
    } else {
      dateObj.setMonth(dateObj.getMonth() + 1);
    }
    setDateObj(new Date(dateObj));
  }

	const getDaysInPortal = () => {
    let days = [];
    const lastDateOfMonth = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      0
    ).getDate();
    const date = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);

    const day = date.getDay() || 7;
    for(let i = 1; i < day; i++) {
      days.push(<div className="hidden" key={i}></div>)
    }
    
    while(date.getDate() <= lastDateOfMonth && dateObj.getMonth() === date.getMonth()) {
      const dateValue = date.getDate();
      const selectedDate = new Date(date.getFullYear(), date.getMonth(), dateValue);
      const isToday = dateValue === new Date().getDate() && dateObj.getMonth() === new Date().getMonth();
      const classes = [];
      if (isToday) { 
        classes.push('today') 
      };
      try {
        if (
          selectedDate.getFullYear() === selected.getFullYear()
          && selectedDate.getMonth() === selected.getMonth()
          && selectedDate.getDate() === selected.getDate()
        ) {
          classes.push('selected');
        }
      } catch (e) {}
      if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        classes.push('holiday');
      }
      days.push(<div className={classes.join(' ')} key={dateValue + Math.random} onClick={() => { handleDateSelect(selectedDate) }}>{dateValue}</div>);
      date.setDate(date.getDate() + 1)
    }

    while(date.getDay()) {
      const dateValue = date.getDate();
      const selectedDate = new Date(date.getFullYear(), date.getMonth(), dateValue);
      const classes = [];
      classes.push('next-day') 
      try {
        if (
          selectedDate.getFullYear() === selected.getFullYear()
          && selectedDate.getMonth() === selected.getMonth()
          && selectedDate.getDate() === selected.getDate()
        ) {
          classes.push('selected');
        }
      } catch (e) {}
      if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        classes.push('holiday');
      }
      days.push(<div className={classes.join(' ')}  key={date.getDate() + Math.random()} onClick={() => { handleDateSelect(selectedDate) }}>{dateValue}</div>)
      date.setDate(date.getDate() + 1)
    }

    if(date.getDay() === 0) {
      const dateValue = date.getDate();
      const selectedDate = new Date(date.getFullYear(), date.getMonth(), dateValue);
      const classes = [];
      classes.push('next-day');
      try {
        if (
          selectedDate.getFullYear() === selected.getFullYear()
          && selectedDate.getMonth() === selected.getMonth()
          && selectedDate.getDate() === selected.getDate()
        ) {
          classes.push('selected');
        }
      } catch (e) {}
      if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        classes.push('holiday');
      }
      days.push(<div className={classes.join(' ')} key={date.getDate() + Math.random()} onClick={() => { handleDateSelect(selectedDate) }}>{dateValue}</div>)
    }

		return days;
	}

	return (
		<div className="calendar">
			<div className="month">
				<i className="fas fa-angle-left prev" onClick={() => moveMonth(true)}></i>
				<div className="date">
					<h1>{months[dateObj.getMonth()] + ' ' + dateObj.getFullYear()}</h1>
				</div>
				<i className="fas fa-angle-right next" onClick={() => moveMonth(false)}></i>
			</div>
			<div className="weekdays">
				<div>M</div>
				<div>T</div>
				<div>W</div>
				<div>T</div>
				<div>F</div>
				<div className="weekends">S</div>
        <div className="weekends">S</div>
			</div>
			<div className="days">
				{getDaysInPortal()}
			</div>
		</div>
	);
}

export default Calender;