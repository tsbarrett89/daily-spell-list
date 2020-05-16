import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <h1>Spell List Generator</h1>
            <nav>
                <NavLink to='/'>Spells</NavLink>
                <NavLink to='/saved-spells'>Spell List</NavLink>
            </nav>
        </div>
    )
}

export default Header