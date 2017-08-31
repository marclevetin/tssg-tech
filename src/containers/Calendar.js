import React, { Component } from 'react';
import axios from 'axios';

import CalendarItem from '../components/CalendarItem'
import Header from '../components/styled/Header'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };

    this.loadCalendarItemsFromServer = this.loadCalendarItemsFromServer.bind(this);
  }

  loadCalendarItemsFromServer() {
    axios.get('http://localhost:3001/api/calendar')
      .then(res => {
        this.setState({data: res.data});
      })
  }

  componentDidMount() {
    this.loadCalendarItemsFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  }

  render() {
    let calendaritems = this.state.data.map(item => {
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
