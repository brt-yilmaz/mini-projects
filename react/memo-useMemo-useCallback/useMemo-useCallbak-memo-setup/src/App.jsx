import { useState } from "react";
import { MemoizedProductsList } from "./components/ProductsList";
import products from "./data/productList";

const App = function App() {
  const [showCreator, setShowCreator] = useState(false);

  function handleShowCreator() {
    setShowCreator((prev) => !prev);
  }

  return (
    <>
      <h1>Welcome our Shop</h1>

      <MemoizedProductsList products={products} />

      {showCreator && <p>Berat Yilmaz</p>}

      <button onClick={handleShowCreator}>Toggle Creator</button>
    </>
  );
};

export default App;
