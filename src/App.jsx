import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
    {
      name: 21,
      imgSrc: 20,
    }
  ];

  return (
    <>
      <PokemonCard pokemon={pokemonList[2]} />
    </>
  )
}

export default App
