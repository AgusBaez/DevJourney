import { useState } from "react";
import { PokeCard } from "./components/pokemon/pokeCard/PokeCard";
import Product from "./components/shoppingList/Product";
import Slots from "./components/Slots/Slots";
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
  return (
    <>
      <Product data={api} />
      <Slots />
      <Slots />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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

