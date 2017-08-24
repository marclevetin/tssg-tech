import React, {Component} from 'react';
import Project from '../components/Project';
import {SectionHeader} from '../components/styled/Header'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state ={
      activeTeam: ''
    }
  }

  render() {
    let allProjects = this.props.projects
      .filter(project => project.team === this.props.activeTeam)
      .map(project => {
        return (
          <Project
            key = {project.id}
            id = {project.id}
            project = {project.project}
            description = {project.description}
          />
        )
      })

    return(
      <div>
      <SectionHeader>Projects</SectionHeader>
      <ul>
        {allProjects}
      </ul>
      </div>
    )
  }
}

export default Projects;
