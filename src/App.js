import './App.css'
import React, { useState } from "react"

export function App() {
  return fetch('https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4')
    .then(data => data.json())
}

const [word, setWord] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
}


/* const initialWordList = []
const api_endpoint = `https://dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`

function App() {
  const [word, setWord] = useState('')
  const [wordList, setWordList] = useState(initialWordList)
  const [url, setUrl] = React.useState(
    `${api_endpoint}${wordList}`
  )

  const handleChange = e => {
    setWord(e.target.value)
  }

  const handleSubmit = e => {
    if (word) {
      setWordList(wordList.concat(word))
    }

    setUrl(`${api_endpoint}${wordList}`)
    // setWord('')

    e.preventDefault()
  }

  const handleClick = id => {
    setWordList(wordList.filter(item => item.id !== id))
  }

  fetch(api_endpoint)
    .then((response) => response.json())
    .then((results) => console.log(results))

  return (
    <div id="recentSearches">
        <header className="App-header">
            
        </header>
        <section className="App-section">
          <h1 className="App-section-h1">What's the origin of ...</h1>
            <form>
              <input
                name="myInput"
                value={word}
                onChange={handleChange}>
              </input>
              
              <button
                id="homeSearchButton" 
                type="submit"
                disabled={!wordList}
                onClick={handleSubmit}>SEARCH</button>
            </form>
        </section>
        <footer className="App-footer">
          <h1 className="App-h1">MOST RECENT SEARCHES</h1>
            <div className='App-div'>
              <ul>
                {wordList.map(item => (
                  <li className="App-list" key={item.id}>
                    {item}
                    <input type="checkbox" />
                    <button type="button" onClick={() => handleClick(item.id)}>
                      X
                    </button>
                    </li>
                ))}
                
              </ul>
            </div>
        </footer>
    </div>
  )
} */

export default App;
