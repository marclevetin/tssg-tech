import React, { Component } from 'react';
import CalendarItem from '../components/CalendarItem'
import Header from '../components/styled/Header'

import calendardata from '../data/calendardata';

class Calendar extends Component {
  // The linter warns against useless constructors.  We need to keep the
  // constructor to pass props and generate the Calendar Items in the render
  // method.  We could pass it down from <App /> through props, but this seemed
  // like the simpler refactor for now.
  // eslint-disable-next-line
  constructor(props) {
    super(props)

  }

  render() {
    let calendaritems = {calendardata}.calendardata.map(item => {
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
        <Header>Calendar</Header>
        { calendaritems }
      </div>
    )
  }
}

export default Calendar;
