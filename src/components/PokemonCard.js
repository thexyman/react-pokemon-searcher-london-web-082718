import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    facing: "front" 
  }

  toggleImage = () => {
    if (this.state.facing === "front") {
      this.setState({ facing: "back" })
    } else {
      this.setState({ facing: "front" })
    }
  }

  hpPoints = () => {
    const hpStat = this.props.pokemon.stats.find(stat => stat.name === "hp")
    return hpStat.value
  }


  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage} >   
            <img src={this.props.pokemon.sprites[this.state.facing]} alt="pokemon image"/>   
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hpPoints()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
