import { Link, useSearchParams } from "react-router-dom";

const productArray = [
  {
    name: "mouse",
    description: "A computer mouse for precise cursor control.",
    price: 29.99,
    brand: "Apple",
  },
  {
    name: "keyboard",
    description: "A mechanical keyboard for a satisfying typing experience.",
    price: 99.99,
    brand: "Microsoft",
  },
  {
    name: "computer",
    description: "A powerful computer for all your computing needs.",
    price: 999.99,
    brand: "Dell",
  },
];

function Product() {
  return (
    <div>
      <h2>Product Page</h2>
      <ul>
        {productArray.map((product) => (
          <li key={product.name}>
            <Link
              to={`/product/${product.name}?price=${product.price}&brand=${product.brand}`}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link to={"/homepage"}>Go to Homepage</Link>
    </div>
  );
}

export default Product;
