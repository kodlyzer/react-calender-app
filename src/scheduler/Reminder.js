class Reminders {
  id;
  date;
  reminders;
  constructor(date) {
    this.id = '' + date.getFullYear() + date.getMonth() + date.getDate();
    this.date = date;
    this.reminders = []; 
  }
}

class Reminder {
  reminder;
  place;
  time;
  constructor(reminder, place, time) {
    this.reminder = reminder;
    this.place = place;
    this.time = time;
  }
}

export { Reminders, Reminder };