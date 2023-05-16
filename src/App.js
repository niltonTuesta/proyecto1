import "./reset.css";
import "./styles.css";
import { Card } from "./components/Card/Card";

function App() {
  const listPokemons = [
    {
      id: "001",
      name: "Bulbasaur",
      height: 0.7,
      weight: 6.9,
      types: ["grass", "poison"],
      src: "imagenes/pokemons/bulbasaur.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus.",
    },
    {
      id: "004",
      name: "Charmander",
      height: 0.6,
      weight: 8.5,
      types: ["fire"],
      src: "imagenes/pokemons/charmander.svg",
      description:
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    },
    {
      id: "007",
      name: "Squirtle",
      height: 0.5,
      weight: 9.0,
      types: ["water"],
      src: "/imagenes/pokemons/squirtle.svg",
      description:
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    },
    {
      id: "012",
      name: "Butterfree",
      height: 1.1,
      weight: 32.0,
      types: ["bug", "flying"],
      src: "/imagenes/pokemons/butterfree.svg",
      description:
        "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    },
    {
      id: "025",
      name: "Pikachu",
      height: 0.4,
      weight: 6.0,
      types: ["electric"],
      src: "/imagenes/pokemons/pikachu.svg",
      description:
        "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    },
    {
      id: "092",
      name: "Gastly",
      height: 1.3,
      weight: 0.1,
      types: ["ghost", "type"],
      src: "/imagenes/pokemons/gastly.svg",
      description:
        "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
    },
  ];

  return (
    <div className="App">
      {listPokemons.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default App;
