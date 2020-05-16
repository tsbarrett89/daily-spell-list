import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SpellCard from './SpellCard'

const SpellList = () => {
    const [spells, setSpells] = useState([])

    useEffect(() => {
        axios
            .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells')
            .then(res => {
                console.log(res.data)
                setSpells(res.data.results)
            })
            .catch(err => console.log(err.response))
    }, [])

    return (
        <section>
            {spells.map((spell, index) => <SpellCard key={index} spell={spell} />)}
        </section>
    )
}

export default SpellList