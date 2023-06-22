import { productContext, productsData } from "./Context";
import Products from "./Products";

function App() {
  return (
    <productContext.Provider value={productsData}>
      <h1> Welcome to our Shop</h1>
      <Products />
    </productContext.Provider>
  );
}

export default App;
