import Cars from "./Cars";
import { ProductProvider } from "./Context/ProductProvider";

function App() {
  return (
    <div>
      <h1>Welcome !!!</h1>
      <ProductProvider>
        <Cars />
      </ProductProvider>
    </div>
  );
}

export default App;
