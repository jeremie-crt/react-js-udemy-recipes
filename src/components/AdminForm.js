import React from "react";

const AdminForm = ({ id: key, updateRecipe, allRecipes, deleteRecipe }) => {

    const recipe = allRecipes[key]


    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recipe = allRecipes[key]
        recipe[name] = value
        updateRecipe(key, recipe)
    }

    return (
        <div className="card">
            <form
                className="admin-form">
                <input
                    onChange={event => handleChange(event, key)}
                    value={recipe.nom} type="text" name="nom" placeholder="Type a name"/>

                <input
                    onChange={event => handleChange(event, key)}
                    value={recipe.image} type="text" name="image" placeholder="Insert image"/>

                <textarea
                    onChange={event => handleChange(event, key)}
                    value={recipe.ingredients} name="ingredients" rows="3" placeholder="List of ingredients"/>

                <textarea
                    onChange={event => handleChange(event, key)}
                    value={recipe.instructions} name="instructions" rows="15" placeholder="List of instructions"/>

            </form>
            <button onClick={() => deleteRecipe(key)}>DELETE</button>
        </div>
    )
}

export default AdminForm