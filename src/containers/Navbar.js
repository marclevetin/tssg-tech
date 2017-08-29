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
            <Navmenu>
              <NavmenuItem><Link to="/">Home</Link></NavmenuItem>
              <NavmenuItem><Link to="/about">About</Link></NavmenuItem>
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
    )
  }

}

export default Navbar;
