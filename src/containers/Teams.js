import React, {Component} from 'react';
import Team from '../components/Team';
import Project from '../components/Project';

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

    let teamProjects = this.props.projects.map(project => {
      if (this.state.activeTeam === project.team) {
        return (
          <Project
            key = {project.id}
            id = {project.id}
            team = {project.team}
            project = {project.project}
            description = {project.description}
          />
        )
      }
    })

    return(
      <div>
      <h2>Teams</h2>
        {allTeams}
      <h3>Current Projects</h3>
        {teamProjects}
      </div>
    )
  }
}

export default Teams;
