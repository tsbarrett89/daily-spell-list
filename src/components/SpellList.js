import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SpellCard from './SpellCard'
import SearchBar from './SearchBar'

const SpellList = () => {
    const [spells, setSpells] = useState([])
    const [query, setQuery] = useState('')
    const [filteredSpells, setFilteredSpells] = useState(spells)

    useEffect(() => {
        axios
            .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells')
            .then(res => {
                setSpells(res.data.results)
            })
            .catch(err => console.log(err.response))
    }, [])

    useEffect(() => {
        setFilteredSpells(spells.filter(spell => 
            spell.name.toLowerCase().includes(query.toLowerCase())))
    }, [spells, query])

    return (
        <section>
            <SearchBar query={query} setQuery={setQuery} />
            {filteredSpells.map((spell, index) => <SpellCard key={index} spell={spell} />)}
        </section>
    )
}

export default SpellList