import './App.css'
import React, { useState } from "react"

function App() {
  const [wordSearch, setWordSearch] = useState([])

  function addWordSearch(e) {
    e.preventDefault()
    setWordSearch([...wordSearch, e])
  }

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
              {wordSearch !== '' && <p className="App-footer-p">{wordSearch}</p>}
            </div>
        </footer>
    </div>
  )
}

function AddToList(props) {
  const searchList = props.wordSearch.map(function(item, index) {
    return AddToList() 
  })
}

export default App;
