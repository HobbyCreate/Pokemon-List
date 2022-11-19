import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard';
import ButtonNextPrev from './components/ButtonNextPrev';
import PokeDataCard from './components/PokeDataCard'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeInfo, setPokeInfo] = useState([]);
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextURL, setNextURL] = useState(null);
  const [prevURL, setPrevURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(currentURL)
      .then(async res => await res.json())
      .then(data => {
        setLoading(false);
        loadPokeinfo(data.results)
        setNextURL(data.next)
        setPrevURL(data.previous)
      })
  }, [currentURL]);

  const loadPokeinfo = (pokemon) => {
    pokemon.forEach(p => fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
      .then(async res => await res.json())
      .then(data => {
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

  const onClickBack = () => {
    setClick(!click)
  }

  const onClick = (e) => {
    setPokeInfo(e.target.getAttribute('value') - 1)
    setClick(!click)
  }

  return (
    !click ? (loading ? <div className="loading">Loading ...</div>
      : (<div className="App">
        <h1>Pokemon List</h1>
        <ButtonNextPrev
          onPrevClick={prevURL ? onPrevClick : null}
          onNextClick={nextURL ? onNextClick : null} />
        <PokeCard
          pokemon={pokemon}
          onClick={onClick}
        />
      </div>)
    ) :
      (
        <div className="App">
          <h1>Pokemon List</h1>
          <PokeDataCard pokeInfo={pokemon} onClickBack={onClickBack} idx={pokeInfo} />
        </div>
      )
  );
}

export default App;