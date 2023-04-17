import './App.css'
import React, { useState } from "react"

const API_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/curfew?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`

fetch(API_URL)
    .then((response) => {
        return response.json()
})
    .then((response) => {
        console.log(response)
})

function App() {

  const [wordSearch, setWordSearch] = useState('Word...')

  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1 className="App-h1">What's the origin of...</h1>
            <form>
              <label>Type word here:
                <input 
                  value={wordSearch}
                  onChange={e => setWordSearch(e.target.value)}></input>
              </label>
              {wordSearch !== '' && <p>You want to search for: {wordSearch}.</p>}
              <button 
                type="submit"
                onClick={alert}>SEARCH</button>
            </form>
        </>
      </header>
    </div>
  );
}

export default App;




/**
 * Doc comment
 */

// Who wants this

/*
 * Block comment
 */
