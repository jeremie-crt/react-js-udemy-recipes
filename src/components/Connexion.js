import React from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends React.Component {
  state = {
    username: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const username = event.target.value
    this.setState({ username })
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/username/${this.state.username}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>Pot Recipes Hub</h1>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
            placeholder='Chef username will be ?'
            pattern='[A-Za-z-]{1,}'
            required />
          <button type='submit'>GO</button>
          <p>No specials characters</p>
        </form>
      </div>
    )
  }
}

export default Connexion
