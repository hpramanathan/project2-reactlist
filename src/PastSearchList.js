import React, { useState } from "react"

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

export default PastSearchList