import React, { useContext } from 'react'

import { SavedSpellsContext } from '../context/SavedSpellsContext'

import SpellCard from './SpellCard'

const SavedSpellList = () => {
    const { savedSpells } = useContext(SavedSpellsContext)

    console.log(savedSpells)

    return (
        <section>
            <h2>Saved Spells</h2>
            {savedSpells.map((spell, index) => {
                return <SpellCard key={index} spell={spell} />
            })}
        </section>
    )
}

export default SavedSpellList