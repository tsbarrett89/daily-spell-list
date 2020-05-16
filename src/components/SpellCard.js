import React, { useState } from 'react'
import axios from 'axios'

const SpellCard = props => {
    const [spellDetails, setSpellDetails] = useState({})
    const [details, setDetails] = useState(false)

    const getSpellDetails = e => {
        e.preventDefault()
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/${props.spell.index}`)
            .then(res => {
                console.log(res.data)
                setSpellDetails(res.data)
                setDetails(true)
            })
            .catch(err => console.log(err.response))
    }

    const hideDetails = e => {
        e.preventDefault()
        setDetails(false)
    }

    return (
        <div>
            <h3>{props.spell.name}</h3>
            {!details ? <button onClick={getSpellDetails}>details</button> : <button onClick={hideDetails}>hide details</button>}
        </div>
    )
}

export default SpellCard