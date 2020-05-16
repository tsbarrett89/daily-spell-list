import React, { useState } from 'react'
import axios from 'axios'

const SpellCard = props => {
    const [spellDetails, setSpellDetails] = useState({})

    return (
        <div>
            <h3>{props.spell.name}</h3>
        </div>
    )
}

export default SpellCard