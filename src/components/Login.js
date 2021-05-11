import React from "react";

const Login = ({ authenticate }) => {
    return (
        <div className="login">
            <h2>Log in to bring your recipes!</h2>
            <button
                onClick={authenticate}
                className="facebook-button">
                CONNECTION WITH FACEBOOK
            </button>
        </div>
    )
}

export default Login