import React, {Component} from 'react';
import Team from '../components/Team';
import Project from '../components/Project';

class Teams extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let allTeams = this.props.data.map(team => {
      return (
        <Team
          name = {team.name}
        />
      )
    })

    let teamProjects = this.props.projectsdata.map(project => {
      return (
        <Project
          team = {project.team}
          project = {project.project}
        />
      )
    })

    return(
      <div>
        {allTeams}
        {teamProjects}
      </div>
    )
  }
}

export default Teams;
