import React from 'react';
import './Calender.css';
import months from './months';


function Calender(props) {
  const [dateObj, setDateObj] = React.useState(new Date());
  const [reminders, setReminders] = React.useState({}); 

  const handleDateSelect = (dateObj, selectedDate, selectedMonth = 'current') => {
    const clickedDayReminders = {
      ['' + dateObj.getFullYear() + dateObj.getMonth() + selectedDate]: {
        heading: '',
        date: selectedDate+'/'+dateObj.getMonth()+'/'+dateObj.getFullYear(),
        remindersForDay: [{
          title: 'asdf',
          place: 'asdf',
          time: 'asdf'
        }]
      }
    };
    setReminders({...reminders, ...clickedDayReminders});
    console.log(reminders);
  }

  const moveMonth = (isPrev) => {
    if(isPrev) {
      dateObj.setMonth(dateObj.getMonth() - 1);
    } else {
      dateObj.setMonth(dateObj.getMonth() + 1);
    }
    setDateObj(new Date(dateObj));
  }

  const getPrevMonthDays = () => {
    let days = [];
    const prevLastDay = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth(),
      0
    ).getDate();
		for (let x = dateObj.getDay() ; x > 0; x--) {
			days.push(<div key={x + Math.random} className="prev-date" onClick={() => { handleDateSelect(dateObj, prevLastDay - x + 1, 'prev') }}>{prevLastDay - x + 1}</div>);
		}
    return days;
	}

	const getCurrentMonthDays = () => {
    let days = [];
    const lastDay = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      0
    ).getDate();
    
    for (let i = 1; i <= lastDay; i++) {
			if (
				i === new Date().getDate() &&
				dateObj.getMonth() === new Date().getMonth()
			) {
				days.push(<div key={i + Math.random} className="today" onClick={() => { handleDateSelect(dateObj, i) }}>{i}</div>);
			} else {
				days.push(<div key={i + Math.random} onClick={() => { handleDateSelect(dateObj, i) }}>{i}</div>);
			}
		}
		return days;
	}

	const getNextMonthDays = () => {
    const lastDayIndex = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      0
    ).getDay();
    const nextDays = 7 - lastDayIndex;
		let days = [];
		for (let j = 1; j <= nextDays; j++) {
			days.push(<div key={j + Math.random} className="next-date" onClick={() => { handleDateSelect(dateObj, j, 'next') }}>{j}</div>);
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
				{getPrevMonthDays()}
				{getCurrentMonthDays()}
				{getNextMonthDays()}
			</div>
		</div>
	);
}

export default Calender;