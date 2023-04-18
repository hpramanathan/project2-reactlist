import './App.css'
import React, { useState } from "react"

const initialWordList = []

function App() {
  const [word, setWord] = useState('')
  const [wordList, setWordList] = useState(initialWordList)

  const handleChange = e => {
    setWord(e.target.value)
  }

  const handleSubmit = e => {
    if (word) {
      setWordList(wordList.concat(word))
    }

    setWord('')

    e.preventDefault()
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
                value={word}
                onChange={handleChange}>
              </input>
              
              <button
                id="homeSearchButton" 
                type="submit"
                onClick={handleSubmit}>SEARCH</button>
            </form>
        </body>
        <footer className="App-footer">
          <h1 className="App-h1">MOST RECENT SEARCHES</h1>
            <div className='App-div'>
              <ul>
                {wordList.map(item => (
                  <li key={item}>{item}</li>
                ))}
                <input type="checkbox" />
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default App;
