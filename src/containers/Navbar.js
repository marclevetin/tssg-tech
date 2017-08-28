import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Intro from './Intro'
import Calendar from './Calendar';
import Teams from './Teams';

import Title from '../components/styled/Title'
import Motto from '../components/styled/Motto'
import Navmenu from '../components/styled/Navmenu'
import NavmenuItem from '../components/styled/NavmenuItem'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: ''
    }
  }

  render() {
    return (
      <div>
      <Title>Technical Skills Share Group</Title>
      <Motto>learn by doing; share what you learn</Motto>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Intro}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/teams" component={Teams}/>
            <Route path="/contact" component={Intro}/>
          </div>
        </Router>
        <Navmenu>
          <NavmenuItem>About</NavmenuItem>
          <NavmenuItem>Calendar</NavmenuItem>
          <NavmenuItem>Teams</NavmenuItem>
          <NavmenuItem>Contact</NavmenuItem>
        </Navmenu>
      </div>
    )
  }

}

export default Navbar;
