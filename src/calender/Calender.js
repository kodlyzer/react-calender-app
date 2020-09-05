import React from 'react';
import './Calender.css'

function Calender() {
	const date = new Date();
	date.setDate(1);

	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();

	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();

	const firstDayIndex = date.getDay();

	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDay();

	const nextDays = 7 - lastDayIndex - 1;

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

	const getPrevMonthDays = () => {
		let days = [];
		for (let x = firstDayIndex; x > 0; x--) {
			days.push(<div class="prev-date">{prevLastDay - x + 1}</div>);
		}
		return days;
	}

	const getCurrentMonthDays = () => {
		let days = []
		for (let i = 1; i <= lastDay; i++) {
			if (
				i === new Date().getDate() &&
				date.getMonth() === new Date().getMonth()
			) {
				days.push(<div class="today">{i}</div>);
			} else {
				days.push(<div>{i}</div>);
			}
		}
		return days;
	}

	const getNextMonthDays = () => {
		let days = [];
		for (let j = 1; j <= nextDays; j++) {
			days.push(<div class="next-date">{j}</div>);
		}
		return days;
	}

	return (
		<div class="calendar">
			<div class="month">
				<i class="fas fa-angle-left prev"></i>
				<div class="date">
					<h1>{months[date.getMonth()]}</h1>
					<p>{new Date().toDateString()}</p>
				</div>
				<i class="fas fa-angle-right next"></i>
			</div>
			<div class="weekdays">
				<div>Sun</div>
				<div>Mon</div>
				<div>Tue</div>
				<div>Wed</div>
				<div>Thu</div>
				<div>Fri</div>
				<div>Sat</div>
			</div>
			<div class="days">
				{getPrevMonthDays()}
				{getCurrentMonthDays()}
				{getNextMonthDays()}
			</div>
		</div>
	);
}

export default Calender;