import logo from "./logo.svg";
import "./reset.css";
import { Card } from "./components/Card";

function App() {
  const pokemon = [
    { name: "Bulbasaur", reference: "#001", image: "bulbasaur.svg" },
  ];

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
