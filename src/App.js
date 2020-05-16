import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { SavedSpellsContext } from './context/SavedSpellsContext'

import SpellList from './components/SpellList'
import SavedSpellList from './components/SavedSpellList'
import Header from './components/Header'


function App() {
  const [savedSpells, setSavedSpells] = useState([])

  const saveSpell = spell => {
    setSavedSpells([...savedSpells, spell])
    console.log(savedSpells)
  }

  return (
    <div>
      <SavedSpellsContext.Provider value={{ savedSpells, saveSpell }} >
        <Header />

        <Route exact path='/' component={SpellList} />
        <Route path='/saved-spells' component={SavedSpellList} />
      </SavedSpellsContext.Provider>
    </div>
    
  );
}

export default App;
