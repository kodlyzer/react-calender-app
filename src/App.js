import React from 'react';
import './App.css';
import Calender from './calender/Calender';
import Scheduler from './scheduler/Scheduler';

function App() {
  return (
    <div className="container">
      <Calender />
      <Scheduler />
    </div>
  );
}

export default App;
