import React, { useContext } from 'react'

import { SavedSpellsContext } from '../context/SavedSpellsContext'

import SpellCard from './SpellCard'

const SavedSpellList = () => {
    const { savedSpells } = useContext(SavedSpellsContext)

    console.log(savedSpells)

    return (
        <div>
            {savedSpells.map((spell, index) => {
                return <SpellCard key={index} spell={spell} />
            })}
        </div>
    )
}

export default SavedSpellList