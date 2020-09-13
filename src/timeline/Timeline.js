import React from 'react';
import './Timeline.css';

function Timeline({ reminders }) {
  return (
    <main className="timeline">
      <ul>
        {reminders?.map(reminder => (
          <li key={Math.random()}>
            <div className="timeline-item">
              <h2>{reminder.reminder}</h2>
              <h4><i class="fa fa-map-marker" aria-hidden="true"></i><span>{reminder.place}</span></h4>
              <h4><i class="fa fa-clock" aria-hidden="true"></i><span>{reminder.time}</span></h4>
            </div>
          </li>)
        )}
      </ul>
    </main>
  )
}

export default Timeline;