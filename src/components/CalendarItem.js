import React from 'react';

const CalendarItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>When</h4>
      {props.when}
      <h4>Where</h4>
      <p>{props.where}</p>
      <p>Eventually this will be a map of some kind</p>
      <h4>Join Us</h4>
      <p>Contact {props.join} to learn about attend.</p>
      <p>{props.details}</p>
    </div>
  )
}

export default CalendarItem;
