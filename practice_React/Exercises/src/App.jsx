import { useState } from "react";
import { PokeCard } from "./components/pokemon/pokeCard/PokeCard";
import Product from "./components/shoppingList/Product";
import PropertyList from "./components/rentProperty/PropertyList.jsx";
import Slots from "./components/Slots/Slots";
import Clicker from "./components/Event/Clicker.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const api = [
    { id: 1, name: "Egss", price: 10, quantity: 12, completed: true },
    { id: 2, name: "Tomato", price: 20, quantity: 2, completed: false },
    { id: 3, name: "Cherms", price: 30, quantity: 14, completed: true },
    { id: 4, name: "CocaCola", price: 40, quantity: 1, completed: false },
  ];

  const apiProperties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];
  return (
    <>
      <h1>🔽Excersices for Practice👆</h1>
      <h5>Events</h5>
      <Clicker message="Hi there" />
      <h1>🕋Excersices for Practice🌌</h1>
      <h5>props</h5>
      <PropertyList properties={apiProperties} />
      <h5>props, types, key & more</h5>
      <Product data={api} />
      <h5>Rendering Arrays</h5>
      <Slots />
      <PokeCard />
      <h5>Default</h5>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

