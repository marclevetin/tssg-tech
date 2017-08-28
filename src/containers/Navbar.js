import React, { Component } from 'react';
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
