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
