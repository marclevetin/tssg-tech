import React, { Component } from 'react';
import CalendarItem from '../components/CalendarItem'

class Calendar extends Component {
  // eslint-disable-next-line
  // The linter warns against useless constructors.  We need to keep the
  // constructor to pass props and generate the Calendar Items in the render
  // method.  We could pass it down from <App /> through props, but this seemed
  // like the simpler refactor for now.
  constructor(props) {
    super(props)

  }

  render() {
    let calendaritems = this.props.data.map(item => {
      return (
        <CalendarItem
          key = {item.id}
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
