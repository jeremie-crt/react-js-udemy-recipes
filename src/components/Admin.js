import React, {Component} from "react";
import AddRecipe from "./AddRecipe";
import AdminForm from "./AdminForm";
import Login from "./Login";

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from "../base";

class Admin extends Component {

    state = {
        uid: null,
        chef: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.handleAuth({ user })
            }
        })
    }

    handleAuth = async authData => {
        const box = await base.fetch(this.props.username, { context: this })

        if(!box.chef) {
            await base.post(`${this.props.username}/chef`,
                {
                    data: authData.user.uid
                })
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    logout = async () => {
        await firebase.auth().signOut()
        this.setState({ uid: null })
    }

    render() {

        const {allRecipes, updateRecipe, addRecipe, deleteRecipe, loadExample} = this.props

        const logout = <button onClick={this.logout}>LOGOUT</button>

        //if user is not connected
        if(!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }

        if(this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>You're not the Chef of this Pot! </p>
                    {logout}
                </div>
            )
        }

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
                    {logout}
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