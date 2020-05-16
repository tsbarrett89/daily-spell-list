import React, { useState } from 'react'
import axios from 'axios'

const SpellCard = props => {
    const [spellDetails, setSpellDetails] = useState({})

    const getSpellDetails = e => {
        e.preventDefault()
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/${props.spell.index}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <h3>{props.spell.name}</h3>
            <button onClick={getSpellDetails}>details</button>
        </div>
    )
}

export default SpellCard