import { createContext } from "react";
import { useImmer } from "use-immer";
import { productsData } from "../data/productsData";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useImmer(productsData);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <div>
        <p>{"< Custom context provider >"}</p>
        {children}
        <p>{"< / Custom context provider >"}</p>
      </div>
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
