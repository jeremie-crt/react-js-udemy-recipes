import React from "react";

const Header = ({ username }) => {

    //For French version
    const formatUsername = username => /[aeiouy]/i.test(username[0]) ?
        `d'${username}` : `de ${username}`

    const ucfirst = username[0].toUpperCase() + username.slice(1)

    return (
        <header>
            <h1>The Pot Recipes of: {ucfirst}</h1>
        </header>
    )
}

export default Header