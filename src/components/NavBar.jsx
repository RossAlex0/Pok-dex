export default function NavBar({pokemonIndex, setpokemonIndex, pokemonList}) {
    const clickMoins = () =>{
        setpokemonIndex((index) => index - 1);
      };
      const clickPlus = () =>{
        setpokemonIndex((index) => index + 1);
      };
    return (
    <>
      {pokemonList.map((pokemon, index) => {
        return <button key={pokemon.name} onClick={() => setpokemonIndex(index)}>{pokemon.name}</button>
      })}
        {/* { pokemonIndex > 0 &&
            (<button type='button' onClick={clickMoins}>Précédent</button>  )}
        { pokemonIndex < pokemonList.length - 1 &&
            (<button type='button' onClick={clickPlus}>Suivant</button> )} */}
    </>
    );
};