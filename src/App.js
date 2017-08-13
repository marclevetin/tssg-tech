import React, { Component } from 'react';
import Navbar from './containers/Navbar';
import Calendar from './containers/Calendar';
import Teams from './containers/Teams';
import calendardata from './data/calendardata';
import teamsdata from './data/teamsdata';
import projectsdata from './data/projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Technical Skills Share Group</h1>
        </div>
        <Navbar />
        <div>
          <p>TECHNICAL SKILLS SHARE GROUP (TSSG)
          IS A PURELY VOLUNTEER ORGANIZATION CREATED FOR
          TECHNICAL PROFESSIONALS EITHER IN-TRANSITION OR ENTHUSIASTS
          SEEKING PEER-BASED ACTIVE LEARNING
          we develop mobile, web, software quality assurance and data analytics applications with the purpose of keeping members current in the latest software technologies
          must attend, in-person, one TSSG general meeting on a WEDNESDAY before joining
          anyone interested in any aspect of the software development life cycle is welcome to attend
          developers, web designers, project managers, support persons and those interested in learning about these and other roles are welcome
          if you are not sure where you may fit in, we will help you to figure it out
          see below for the weekly schedule
          </p>
        </div>
        <Calendar
          data={calendardata}
        />
        <div>
        <Teams
          data={teamsdata}
          projects={projectsdata}
        />
          <h2>Teams</h2>
          <h3>Web team details</h3>
          <p>
            Tools and Platforms
            Current Projects
          </p>
        </div>
        <div>
          <h3>Mobile team details</h3>
          <p>
            Tools and Platforms
            Current Projects
          </p>
        </div>
        <div>
          <h3>SQA team details</h3>
          <p>
            Tools and Platforms
            Current Projects
          </p>
        </div>
        <div>
          <h3>Data Analytics team details</h3>
          <p>
            Tools and Platforms
            Current Projects
          </p>
        </div>
        <div>
          <h2>Project details</h2>
        </div>
      </div>
    );
  }
}

export default App;
