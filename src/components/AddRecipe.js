import React, {Component} from "react";

class AddRecipe extends Component {

    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: '',
    }

    handleChange = event => {
        const {name, value} = event.target
        //[name] add a variable into object
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const recipe = { ...this.state }
        this.props.addRecipe(recipe)

        //Reset
        Object
            .keys(recipe)
            .forEach(item => {
                recipe[item] = ''
            })

        this.setState({ ...recipe })
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="admin-form ajouter-recette">
                    <input
                        value={this.state.nom}
                        onChange={this.handleChange}
                        type="text" name="nom" placeholder="Type a name"/>

                    <input
                        value={this.state.image}
                        onChange={this.handleChange}
                        type="text" name="image" placeholder="Insert image"/>

                    <textarea
                        value={this.state.ingredients}
                        onChange={this.handleChange}
                        name="ingredients" rows="3" placeholder="List of ingredients"/>

                    <textarea
                        value={this.state.instructions}
                        onChange={this.handleChange}
                        name="instructions" rows="15" placeholder="List of instructions"/>

                    <button type="submit">SAVE</button>
                </form>
            </div>
        );
    }
}

export default AddRecipe