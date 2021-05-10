import React, {Component} from 'react'
// CSS
import './App.css'

import recipes from "./recipes";

import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";

class App extends Component {
    state = {
        username: this.props.match.params.username,
        recipes: {}
    }

    //Load raw data list recipes
    loadExample = () => this.setState({ recipes })

    render() {

        const cards = Object.keys(this.state.recipes)
            .map(key => (
                <Card
                    key={key}
                    details={this.state.recipes[key]} />
            ))

        return (
            <div className='box'>
                <Header username={this.state.username}/>
                <div className='cards'>
                    {cards}
                </div>
                <Admin loadExample={this.loadExample}/>
            </div>
        )
    }
}

export default App
