import { useState } from "react";
import ProductsList from "./components/ProductsList";
import productList from "./data/productList";

function App() {
  const [showCreator, setShowCreator] = useState(false);

  function handleToggleCreator() {
    setShowCreator((prev) => !prev);
  }

  return (
    <>
      <h1>Welcome our Shop</h1>
      <ProductsList products={productList} />
      {showCreator && <p>Berat Yilmaz</p>}
      <button onClick={handleToggleCreator}>Toggle Creator</button>
    </>
  );
}

export default App;
