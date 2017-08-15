import React, {Component} from 'react';
import Team from '../components/Team';
import Project from '../components/Project';

class Platforms extends Component {
  constructor(props) {
    super(props)
    this.state ={
      activeTeam: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(team) {
    if(this.state.activeTeam !== team) {
      this.setState({activeTeam: team })
    }
  }

  render() {
    return(
      <div>
      This is Platforms
      </div>
    )
  }
}

export default Platforms;
