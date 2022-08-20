import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemsList from "./components/ItemsList";
import { useState } from "react"

function App() {
  const [items, setItems] = useState([])
  return (
    <div className="App">
      <Header />
      <AddItem setItems={setItems} />
      <ItemsList items={items} />
    </div>
  );
}

export default App;
