import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const search = () => {
    axios.get("https://api.datamuse.com/words?rel_syn=" + searchWord).then((response) => {
      setSynonyms(response.data);
    })
  }

  return (
    <div className="App">
      <input type="text" placeholder="search for synonyms..." onChange={(event) => {setSearchWord(event.target.value)}} />
      <button onClick={search}>Search</button>

      <h1>Synonyms for {searchWord}:</h1>
      {synonyms.map((word => {
        return <div>{word.word}</div>;
      }))}
    </div>
  );
}

export default App;
