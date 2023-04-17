import './App.css'
import React, { useState } from "react"

/* const API_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/curfew?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`

fetch(API_URL)
    .then((response) => {
        return response.json()
})
    .then((response) => {
        console.log(response)
}) */

function App() {
  return (
    <div id="recentSearches">
      <PastSearchList />
    </div>
  )
}

function PastSearchList() {
  const [wordSearch, setWordSearch] = useState('')

  return (
      <div className="pastSearchList">
        <header className="pastSearchList-header">
            <h1 className="pastSearchList-h1">What's the origin of...</h1>
              <form>
                  <input
                    name="myInput"
                    value={wordSearch}
                    onChange={e => setWordSearch(e.target.value)}>
                  </input>
                
                <button
                  id="homeSearchButton" 
                  type="submit"
                  onClick={alert}>SEARCH</button>
              </form>
        </header>
        {wordSearch !== '' && <p>You want to search for: {wordSearch}.</p>}
    </div>
    )
  }

export default App;
