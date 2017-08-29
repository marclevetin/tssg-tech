import React, {Component} from 'react';
import Team from '../components/Team';
import Platforms from './Platforms'
import Projects from './Projects'
import Header from '../components/styled/Header'

import teamsdata from '../data/teamsdata'
import projectsdata from '../data/projects'
import platformsdata from '../data/platformsdata'

class Teams extends Component {
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
    let allTeams = {teamsdata}.teamsdata.map(team => {
      return (
        <Team
          key = {team.id}
          name = {team.name}
          handleClick = {() => this.handleClick(team.name)}
        />
      )
    })
    let platforms = {platformsdata}.platformsdata
    let projects = {projectsdata}.projectsdata
    debugger;
    return(
      <div>
      <Header>Teams</Header>
        {allTeams}
      <Platforms
        activeTeam={this.state.activeTeam}
        platforms={platforms}
      />
      <Projects
        activeTeam={this.state.activeTeam}
        projects={projects}
      />

      </div>
    )
  }
}

export default Teams;
