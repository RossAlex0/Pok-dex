import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {

  const [pokemonIndex, setpokemonIndex] = useState(0);
  
  const clickMoins = () =>{
    setpokemonIndex((index) => index - 1);
  };
  const clickPlus = () =>{
    setpokemonIndex((index) => index + 1);
  };
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  return (
    <>
      { pokemonIndex > 0 &&
      (<button type='button' onClick={clickMoins}>Précédent</button>  )}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      { pokemonIndex < pokemonList.length - 1 &&
      (<button type='button' onClick={clickPlus}>Suivant</button> )}
    </>
  )
}

export default App
