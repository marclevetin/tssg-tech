import React, { Component } from 'react';

import Navbar from './containers/Navbar';
import Calendar from './containers/Calendar';
import Teams from './containers/Teams';
import Intro from './containers/Intro'
import Textblock from './components/Textblock'
import calendardata from './data/calendardata';
import teamsdata from './data/teamsdata';
import projectsdata from './data/projects'
import platformsdata from './data/platformsdata'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Calendar
          data={calendardata}
        />
        <Teams
          data={teamsdata}
          projects={projectsdata}
          platforms={platformsdata}
        />
      </div>
    );
  }
}

export default App;
