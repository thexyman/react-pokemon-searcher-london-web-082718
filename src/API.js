class API {

    static fetchPokemons () {
      return fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
    }


    static createPokemon (object) {
        return fetch('http://localhost:3000/pokemon', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'name': object.name,
            'stats': [
                {
                name: 'hp',
                value: object.hp
            } ],
            'sprites': {
              'front': object.frontURL,
              'back': object.backUrl
            }
          })
        }).then(resp => resp.json())
      }

  }

  
  export default API


 