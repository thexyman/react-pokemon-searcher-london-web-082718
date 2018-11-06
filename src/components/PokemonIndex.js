import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import API from '../API'

class PokemonPage extends React.Component {


  // Fetching and adding pokemons to state

  constructor() {
    super()
    this.state = {
      pokemons: [],
      filter: ""
    }
  }

  fetchPokemons = () => {
    API.fetchPokemons()
      .then(pokemons => { this.setState({ pokemons }) })
  }

  componentDidMount() {
    this.fetchPokemons()
  }

  // searchfunctionality 

  updateFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  filterPokemon = () => {
    const pokemons = this.state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return pokemons
  }

  // add single pokemon to PokemonPage
  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] })
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} onKeyUp={(e) => this.updateFilter(e.target.value)} />
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon} fetchPokemons={this.fetchPokemons}/>
      </div>
    )
  }
}

export default PokemonPage


