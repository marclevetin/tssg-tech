import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// components needed for router
import Calendar from './containers/Calendar';
import Teams from './containers/Teams';
import Intro from './containers/Intro'

// styled components
import Title from './components/styled/Title'
import Motto from './components/styled/Motto'
import Navmenu from './components/styled/Navmenu'
import NavmenuItem from './components/styled/NavmenuItem'

class App extends Component {
  render() {
    return (
      <div>
        <Title>Technical Skills Share Group</Title>
        <Motto>learn by doing; share what you learn</Motto>
        <Router>
          <div>
            <Navmenu>
              <NavmenuItem><Link to="/">Home</Link></NavmenuItem>
              <NavmenuItem><Link to="/calendar">Calendar</Link></NavmenuItem>
              <NavmenuItem><Link to="/teams">Teams</Link></NavmenuItem>
              <NavmenuItem><Link to="/contact">Contact</Link></NavmenuItem>
            </Navmenu>

            <hr/>

            <Route exact path="/" component={Intro}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/teams" component={Teams}/>
            <Route path="/contact" component={Intro}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
