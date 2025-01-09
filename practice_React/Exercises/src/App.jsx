import { useState } from "react";
import { PokeCard } from "./components/pokemon/pokeCard/PokeCard";
import Product from "./components/shoppingList/Product";
import PropertyList from "./components/rentProperty/PropertyList.jsx";
import Slots from "./components/Slots/Slots";
import Clicker from "./components/event/Clicker.jsx";
import Counter from "./components/state/counter/Counter.jsx";
import Toggler from "./components/state/toggler/Toggler.jsx";
import ContainerBox from "./components/state/box/ContainerBox.jsx";
import StateDemo from "./components/stateDemo/StateDemo.jsx";
import ScoreKeeper from "./components/scoreKeeper/ScoreKeeper.jsx";
import EmojiCliker from "./components/emojiCliker/EmojiCliker.jsx";
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

  const listColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "indigo",
    "violet",
    "gold",
    "silver",
    "beige",
    "coral",
    "navy",
    "maroon",
    "olive",
    "turquoise",
  ];

  return (
    <>
      <h1>🔽🌌Excersices for Practice📝🕋</h1>
      <h5>Using Array in State</h5>
      <EmojiCliker />
      <h5>Using Objects in State</h5>
      <ScoreKeeper />
      <h5>State Intermediate</h5>
      <StateDemo />
      <h5>States Basics</h5>
      <ContainerBox colors={listColors} />
      <Toggler />
      <Counter />
      <h5>Events basics</h5>
      <Clicker message="Hi there" />
      <h5>More about Props..</h5>
      <PropertyList properties={apiProperties} />
      <h5>Props, types, key & more..</h5>
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

