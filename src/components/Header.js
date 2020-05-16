import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <h1>Spell List Generator</h1>
            <nav>
                <NavLink to='/'>Spells</NavLink>
                <NavLink to='/saved-spells'>Spell List</NavLink>
            </nav>
        </header>
    )
}

export default Header