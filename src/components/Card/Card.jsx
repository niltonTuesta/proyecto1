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
      </div>
    </article>
  );
}
