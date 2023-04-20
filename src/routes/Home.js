import "./Home.css"
import ManualAdd from "../ManualAdd";
import Term from "../Term";
import { useState } from "react";

export default function Home(props) {

  const [searchTermList, setSearchTermList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [removeSelectedTerms, setRemoveSelectedTerms] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    getList(searchTerm)
    setSearchTerm("")
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleChecked = (id, checked) => {
    if (checked) {
      setRemoveSelectedTerms([...removeSelectedTerms, id])
    } else {
      setRemoveSelectedTerms(removeSelectedTerms.filter((uncheckedId) => uncheckedId !== id))
    }
  }

  const handleAddManualTerm = (newTerm) => {
    setSearchTermList([newTerm, ...searchTermList])
  }

  function getList(searchTerm) {
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        const newTerm = {
          id: data[0].meta.uuid,
          name: searchTerm,
          etym: data[0].et[0][1]
        }
        // console.log(newTerm)
        setSearchTermList([newTerm, ...searchTermList])
        // console.log(uuid())
      })
  }

  function removeTerms(ids) {
    const tempSearchTermList = [...searchTermList]
    ids.forEach((id) => {
      const indexToRemove = tempSearchTermList.findIndex((term) => term.id === id)
      if (indexToRemove !== -1) {
        tempSearchTermList.splice(indexToRemove, 1)
      }
    })
    setSearchTermList(tempSearchTermList)
  }

  function removeCheckedTerms() {
    removeTerms(removeSelectedTerms);
    setRemoveSelectedTerms([]);
  }

  function clearAll() {
    setSearchTermList([])
    setRemoveSelectedTerms([])
  }

  return (
    <>
      <div className="Home">
        <div className="Home-formleft">
          <h1 className="Home-h1">What's the origin of ...</h1>
          <form className="Home-form1" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="eg. Opportunity"
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>
        <h1 className="Home-h1-or">OR</h1>
        <div><ManualAdd handleAddManualTerm={handleAddManualTerm} /></div>
      </div>
      <div className="RecentList">
        <h1 className="Home-RecentList-h1">WORD SEARCH LIST</h1>
        <button onClick={removeCheckedTerms}>Clear Selected</button>
        <span>&nbsp; </span>
        <button onClick={clearAll}>Clear All</button>
        <span>&nbsp; </span>
        {/* <button onClick={props.handleAddManualTerm}>Add Your Own</button> */}
        {/* <ManualAdd handleAddManualTerm={handleAddManualTerm} /> */}
        <ul>
          {searchTermList.map((term) => (
            <Term
              key={term.id}
              term={term}
              removeTerms={removeTerms}
              removeSelectedTerms={removeSelectedTerms}
              setRemoveSelectedTerms={setRemoveSelectedTerms}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      </div>
    </>
  )
}