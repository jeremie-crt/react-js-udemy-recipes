import React, {Component} from 'react'
// CSS
import './App.css'

import recipes from "./recipes";

import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";

import base from './base'

class App extends Component {
    state = {
        username: this.props.match.params.username,
        recipes: {}
    }

    componentDidMount() {
       this.ref = base.syncState(`/${this.state.username}/recipes`, {
            context: this,
            state: 'recipes'
        })
    }

    componentWillUnMount() {
        base.removeBinding(this.ref)
    }

    addRecipe = recipe => {
        const recipes = { ...this.state.recipes }
        recipes[`recipe-${Date.now()}`] = recipe
        this.setState({ recipes })
    }

    updateRecipe = (key, recipe) => {
        const recipes = { ...this.state.recipes }
        recipes[key] = recipe
        this.setState({ recipes })
    }

    deleteRecipe = (key) => {
        const recipes = { ...this.state.recipes }
        recipes[key] = null
        this.setState({ recipes })
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
                <Admin
                    allRecipes={this.state.recipes}
                    updateRecipe={this.updateRecipe}
                    addRecipe={this.addRecipe}
                    deleteRecipe={this.deleteRecipe}
                    loadExample={this.loadExample}/>
            </div>
        )
    }
}

export default App
