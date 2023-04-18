import "./Home.css"
import { useState } from "react";

export default function Home() {

const [word, setWord] = useState("");
// const [wordList, setWordList] = useState(
//   {id: null, name: "", etym: ""}
// )

const handleSubmit = (e) => {
  e.preventDefault();
  getList(word)
};

const handleChange = (e) => {
  setWord(e.target.value)
}

function getList(word) {
  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

return (
<div className="Home">
  <h1 className="App-section-h1">What's the origin of ...</h1>
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={word}
        onChange={handleChange}
    />
    <button type="submit">SEARCH</button>
    </form>
</div>
)

}