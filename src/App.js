import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard';
import ButtonNextPrev from './components/ButtonNextPrev';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextURL, setNextURL] = useState(null);
  const [prevURL, setPrevURL] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(currentURL)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setNextURL(data.next)
        setPrevURL(data.previous)
        loadPokeinfo(data.results)
      })
  }, [currentURL]);

  const loadPokeinfo = (pokemon) => {
    pokemon.forEach(p => fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPokemon(state => {
          state = [...state, data]
          state.sort((a, b) => a.id > b.id ? 1 : -1)
          return state
        })
      })
    )
  }

  const onPrevClick = () => {
    setPokemon([])
    setCurrentURL(prevURL);

  }

  const onNextClick = () => {
    setPokemon([])
    setCurrentURL(nextURL);

  }

  const onClick = (e) => {
    if (typeof e.target.value === "undefined") {
      console.log(e.target.alt);
    } else {
      console.log(e.target.value)
    }

  }


  return (
    loading ? <div className="loading">Loading ...</div>
      : <div className="App">
        <h1>Pokemon List</h1>
        <ButtonNextPrev
          onPrevClick={prevURL ? onPrevClick : null}
          onNextClick={nextURL ? onNextClick : null} />
        <PokeCard
          pokemon={pokemon}
          onClick={onClick}
        />
      </div>
  );
}

export default App;
