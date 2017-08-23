import React, {Component} from 'react';
import Team from '../components/Team';
import Platform from '../components/Platform';

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
    let allPlatforms = this.props.platforms.map(platform => {
      if (this.props.activeTeam === platform.team) {
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

    return(
      <div>
      <h3>Platforms</h3>
      <ul>
        {allPlatforms}
      </ul>
      </div>
    )
  }
}

export default Platforms;
