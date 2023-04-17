import logo from './logo.svg';
import './App.css';

const API_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/curfew?key=1ae97b82-bd14-46a8-a87d-e1082c1300b4`

fetch(API_URL)
    .then((response) => {
        return response.json()
})
    .then((response) => {
        console.log(response)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>What's the origin of...</h1>

        </>
      </header>
    </div>
  );
}

export default App;
