import React, {Component} from 'react';
import Team from '../components/Team';
import Project from '../components/Project';

class Projects extends Component {
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
    let allProjects = this.props.projects.map(project => {
      if (this.props.activeTeam === project.team) {
        return (
          <Project
          key = {project.id}
          id = {project.id}
          project = {project.name}
          description = {project.description}
          />
        )
      }
    })

    return(
      <div>
      <h3>Projects</h3>
      <ul>
        {allProjects}
      </ul>
      </div>
    )
  }
}

export default Projects;
