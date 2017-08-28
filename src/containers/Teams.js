import React, {Component} from 'react';
import Team from '../components/Team';
import Platforms from './Platforms'
import Projects from './Projects'
import Header from '../components/styled/Header'

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

    return(
      <div>
      <Header>Teams</Header>
        {allTeams}
      <Platforms
        activeTeam={this.state.activeTeam}
        platforms={this.props.platforms}
      />
      <Projects
        activeTeam={this.state.activeTeam}
        projects={this.props.projects}
      />

      </div>
    )
  }
}

export default Teams;
