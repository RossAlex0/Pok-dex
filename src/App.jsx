import { useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {

  useEffect(() => {
    alert('Hello pokemon trainer :)');
  },[]
);

  const [pokemonIndex, setpokemonIndex] = useState(0);
  
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
    <NavBar pokemonIndex={pokemonIndex} 
            setpokemonIndex={setpokemonIndex} 
            pokemonList={pokemonList}
              />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </>
  )
}

export default App
