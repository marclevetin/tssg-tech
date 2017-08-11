import React, {Component} from 'react'

const CalendarItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>When</h4>
      {props.when}
      <h4>Where</h4>
      {props.where}
      <h4>Join Us</h4>
      {props.join}
      <p>{props.details}</p>
    </div>
  )
}

export default CalendarItem;
