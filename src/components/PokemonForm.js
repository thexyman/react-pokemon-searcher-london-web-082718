import React from 'react'
import { Form } from 'semantic-ui-react'
import API from '../API';

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = this.getInitialState()
  }


  getInitialState = () => ({ name: '', hp: '', frontUrl: '', backUrl: '' })

  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState(this.getInitialState())
        this.props.addPokemon(pokemon)
      })
      .catch(error => console.error(error))
    
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   API.createPokemon(this.state)
  //     .then(pokemon => this.props.addPokemon(pokemon))
  // }

  // const { name, hp, frontUrl, backUrl } = this.state


  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={ (e) => this.handleSubmit(e) }>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onKeyUp={(e) => this.handleChange(e)} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onKeyUp={(e) => this.handleChange(e)} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onKeyUp={(e) => this.handleChange(e)} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onKeyUp={(e) => this.handleChange(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
