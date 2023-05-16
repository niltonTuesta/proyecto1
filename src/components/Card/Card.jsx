import "./Card.css";

export function Card({ pokemon }) {
  const cssVars = {
    "--card-color": `var(--color-${pokemon.types[0]}`,
  };
  return (
    <article className="box-card " style={cssVars}>
      <div className="card-header">
        <h3 className="card-title">{pokemon.name}</h3>
        <h5 className="card-identify">#{pokemon.id}</h5>
      </div>
      <img className="pokemon-icon" src={pokemon.src} alt="icono de pokemon" />
      <div className="card-description">
        <div className="powers-header">
          {pokemon.types.map((power) => {
            return <p className={`power power-${power}`}> {power} </p>;
          })}
        </div>
        <p className="card-about">About</p>
        <div className="card-characteristic-contents">
          <div className="characteristic-item">
            <div className="characteristic-icon-value">
              <img
                className="characteristic-icon"
                src="/imagenes/icons/masa.svg"
                alt="icono de bascula"
              />
              <p className="characteristic-value">6.9 kg</p>
            </div>
            <p className="characteristic-name">Weight</p>
          </div>
          <div className="characteristic-line"></div>
          <div className="characteristic-item">
            <div className="characteristic-icon-value">
              <img
                className="characteristic-icon"
                src="/imagenes/icons/ruler.svg"
                alt="icono de regla"
              />
              <p className="characteristic-value">0.7 m</p>
            </div>
            <p className="characteristic-name">Height</p>
          </div>
        </div>
        <p className="card-text">
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </p>
      </div>
    </article>
  );
}
