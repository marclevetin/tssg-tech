import React, {Component} from 'react';
import Platform from '../components/Platform';

class Platforms extends Component {
  constructor(props) {
    super(props)
    this.state ={
      activeTeam: ''
    }
  }

  render() {
    let allPlatforms = this.props.platforms
      .filter(platform => platform.team === this.props.activeTeam)
      .map(platform => {
        return (
          <Platform
            key = {platform.id}
            id = {platform.id}
            platform = {platform.name}
            description = {platform.description}
          />
        )
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
