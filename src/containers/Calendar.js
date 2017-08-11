import React, { Component } from 'react';
import CalendarItem from '../components/CalendarItem'

class Calendar extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let calendaritems = this.props.data.map(item => {
      return (
        <CalendarItem
          title = {item.title}
          when = {item.when}
          where = {item.where}
          join = {item.join}
          details = {item.details}
        />
      )
    })

    return (
      <div>
        <h2>Calendar</h2>
        { calendaritems }
      </div>
    )
  }
}

export default Calendar;
