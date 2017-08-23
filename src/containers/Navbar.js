import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: ''
    }
  }

  render() {
    return (
      <div className="navbar">
      <div className="App-header">
        <h1>Technical Skills Share Group</h1>
      </div>
        <ul>
          <li>About</li>
          <li>Calendar</li>
          <li>Teams</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }

}

export default Navbar;
