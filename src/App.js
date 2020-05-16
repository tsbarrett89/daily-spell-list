import React, { useState } from 'react';

import { SavedSpellsContext } from './context/SavedSpellsContext'

import SpellList from './components/SpellList'


function App() {
  const [savedSpells, setSavedSpells] = useState([])

  const saveSpell = spell => {
    setSavedSpells([...savedSpells, spell])
    console.log(savedSpells)
  }

  return (
    <div>
      <SavedSpellsContext.Provider value={{ savedSpells, saveSpell }} >
        <SpellList />
      </SavedSpellsContext.Provider>
    </div>
    
  );
}

export default App;
