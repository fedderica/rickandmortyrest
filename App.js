import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
         setCharacters(data.results);
         setInfo(data.info);
      })
    
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {

    
  }

  const onNext = () => {
    
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} />
        <Characters characters={characters} />
<Pagination />
      </div>
    </>
  );
}

export default App;
