import { useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductsList({ products }) {
  const [isSortedByName, setIsSortedByName] = useState(true);

  const sortedByName = products.toSorted((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const topThreeSortedByName = sortedByName.slice(0, 3);

  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

  const topThreeSortedByPrice = sortedByPrice.slice(0, 3);

  function handleSortPrice() {
    setIsSortedByName(false);
  }

  function handleSortName() {
    setIsSortedByName(true);
  }

  return (
    <div>
      <div>
        {isSortedByName
          ? topThreeSortedByName.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))
          : topThreeSortedByPrice.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
      </div>
      <button onClick={handleSortPrice}>Sort By Price</button>
      <button onClick={handleSortName}>Sort By Name</button>
    </div>
  );
}

export default ProductsList;
