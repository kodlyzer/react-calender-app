import React from 'react';
import './Calender.css'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Calender() {
  const [dateObj, setDateObj] = React.useState(new Date());

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
		for (let x = dateObj.getDay() +1 ; x > 0; x--) {
			days.push(<div key={x + Math.random} className="prev-date">{prevLastDay - x + 1}</div>);
		}
    console.log(days);
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
				days.push(<div key={i + Math.random} className="today">{i}</div>);
			} else {
				days.push(<div key={i + Math.random}>{i}</div>);
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
			days.push(<div key={j + Math.random} className="next-date">{j}</div>);
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
				<div>Mon</div>
				<div>Tue</div>
				<div>Wed</div>
				<div>Thu</div>
				<div>Fri</div>
				<div>Sat</div>
        <div>Sun</div>
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