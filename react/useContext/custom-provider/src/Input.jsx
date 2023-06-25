import { useContext, useState } from "react";
import { ProductContext } from "./Context/ProductProvider";

function Input({ category }) {
  const [input, setInput] = useState("");
  const { setProducts } = useContext(ProductContext);

  // that is only for demo purpose
  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSetProduct() {
    setProducts((draft) => {
      const productCategory = draft.find(
        (product) => product.category === category
      ).products;
      productCategory.push({
        // with useImmer we don't mutate the original array
        // only for demo purpose, you can use useState for all key
        brand: "Toyota",
        price: 30000,
        model: input,
        discount: 0.05,
      });
    });
  }

  return (
    <div>
      <input value={input} type="text" onChange={handleInput} />
      <button onClick={handleSetProduct}>Add a new Car</button>
    </div>
  );
}

export default Input;
