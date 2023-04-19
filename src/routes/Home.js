import "./Home.css"
import Term from "../Term";
import { useState } from "react";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermList, setSearchTermList] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    getList(searchTerm)
    setSearchTerm("")
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  function getList(searchTerm) {
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const newTerm = {
          id: data[0].meta.uuid,
          name: searchTerm,
          etym: data[0].et[0][1]
        }
        // console.log(newTerm)
        setSearchTermList([newTerm, ...searchTermList])
      })
  }

  function removeTerms(ids) {
    const tempSearchTermList = [...searchTermList]
    ids.forEach((id) => {
      const indexToRemove = tempSearchTermList.findIndex((term) => term.id === id)
      if (indexToRemove !== -1) {
        tempSearchTermList.splice(indexToRemove,1)
      }
    })
    setSearchTermList(tempSearchTermList)
  }

  return (
    <>
      <div className="Home">
        <h1 className="Home-section-h1">What's the origin of ...</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      <div className="RecentList">
        <h2 className="Home-h2">WORD SEARCH LIST</h2>
        <ul>
          {searchTermList.map((term, index) => (
            <Term key={term.id} term={term} removeTerms={removeTerms} />
          ))}
          
        </ul>
      </div>
    </>
  )
}