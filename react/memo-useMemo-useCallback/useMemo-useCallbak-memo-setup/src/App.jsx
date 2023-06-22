import ProductsList from "./components/ProductsList";
import productList from "./data/productList";

function App() {
  return (
    <>
      <h1>Welcome our Shop</h1>
      <ProductsList products={productList} />
    </>
  );
}

export default App;
