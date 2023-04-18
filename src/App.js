import './App.css'
import React, { useState } from "react"

function App() {
  const [wordSearch, setWordSearch] = useState([])

  return (
    <div id="recentSearches">
        <header className="App-header">
            
        </header>
        <body className="App-body">
          <h1 className="App-body-h1">What's the origin of ...</h1>
            <form>
              <input
                name="myInput"
                value={wordSearch}
                onChange={e => setWordSearch(e.target.value)}>
              </input>
              
              <button
                id="homeSearchButton" 
                type="submit"
                onClick={() => setWordSearch(!wordSearch)}>SEARCH</button>
            </form>
        </body>
        <footer className="App-footer">
          <h1 className="App-h1">MOST RECENT SEARCHES</h1>
            <div className='App-div'>
              <ul>
                {wordSearch !== '' && <p className="App-footer-p">{wordSearch}
                <input type="checkbox" /></p>}
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default App;
