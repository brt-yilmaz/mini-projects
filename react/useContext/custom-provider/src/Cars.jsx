import { useContext } from "react";
import { ProductContext } from "./Context/ProductProvider";
import Input from "./Input";

function Cars() {
  const { products } = useContext(ProductContext);

  const cars = products.find((product) => product.category === "cars");

  return (
    <div>
      <h3>Here you can find all of our cars</h3>
      <ul>
        {cars.products.map((item) => (
          <li key={item.price + item.brad + item.model}>
            <p>Brand: {item.brand}</p>
            <p>Price: {item.price}</p>
            <p>Model: {item.model}</p>
            <p>Discount: {item.discount}</p>
          </li>
        ))}
      </ul>
      <Input category={"cars"} />
    </div>
  );
}

export default Cars;
