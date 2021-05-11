import React, {Component} from "react";
import AddRecipe from "./AddRecipe";
import AdminForm from "./AdminForm";

class Admin extends Component {

    render() {

        const {allRecipes, updateRecipe, addRecipe, deleteRecipe, loadExample} = this.props

        return (
            <div className="cards">
                <AddRecipe
                    addRecipe={addRecipe}
                />
                {
                    Object.keys(allRecipes)
                        .map(key =>
                            <AdminForm
                                key={key}
                                id={key}
                                updateRecipe={updateRecipe}
                                deleteRecipe={deleteRecipe}
                                allRecipes={allRecipes}
                            />)
                }

                <footer>
                    <button
                        onClick={loadExample}
                    >
                        Fill raw data
                    </button>
                </footer>
            </div>
        );
    }
}

export default Admin