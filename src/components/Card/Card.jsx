import "./Card.css";
export function Card() {
  return (
    <article className="box-card">
      <div className="card-header">
        <h3 className="card-title">Bulbasaur</h3>
        <h5 className="card-identify">#001</h5>
      </div>
      <div className="card-image"></div>
      <div className="card-description">
        <div className="powers-header">
          <p className="power"> Grass </p>
          <p className="power"> Poison </p>
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
      </div>
    </article>
  );
}
