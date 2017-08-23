import React, {Component} from 'react';
import Team from '../components/Team';
import Project from '../components/Project';
import Platforms from './Platforms'
import Platform from '../components/Platform'

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
    let allTeams = this.props.data.map(team => {
      return (
        <Team
          key = {team.id}
          name = {team.name}
          handleClick = {() => this.handleClick(team.name)}
        />
      )
    })

    let allPlatforms = this.props.platforms.map(platform => {
      if (this.state.activeTeam === platform.team) {
        return (
          <Platform
            key = {platform.id}
            id = {platform.id}
            platform = {platform.name}
            description = {platform.description}
          />
        )
      }
    })

    let teamProjects = this.props.projects.map(project => {
      if (this.state.activeTeam === project.team) {
        return (
          <div>
          <Project
            key = {project.id}
            id = {project.id}
            team = {project.team}
            project = {project.project}
            description = {project.description}
          />

          </div>
        )
      }
    })

    return(
      <div>
      <h2>Teams</h2>
        {allTeams}
      <h3>Current Projects</h3>
        {teamProjects}
      <h3>Platforms</h3>
        <ul>
          {allPlatforms}
        </ul>
      </div>
    )
  }
}

export default Teams;
