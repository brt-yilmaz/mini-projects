import React, { useState, useMemo } from "react";
import ProductDetails from "./ProductDetails";

function ProductsList({ products }) {
  console.log("inside ProductsList");
  const [isSortedByName, setIsSortedByName] = useState(true);

  const sortedByName = useMemo(() => {
    return products.toSorted((a, b) => {
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
  }, [products]);

  const topThreeSortedByName = sortedByName.slice(0, 3);

  const sortedByPrice = useMemo(
    () => products.toSorted((a, b) => a.price - b.price),
    [products]
  );

  const topThreeSortedByPrice = sortedByPrice.slice(0, 3);

  const handleSortPrice = () => setIsSortedByName(false);

  const handleSortName = () => setIsSortedByName(true);

  const sortedProducts = isSortedByName
    ? topThreeSortedByName
    : topThreeSortedByPrice;

  return (
    <div>
      <div>
        <p style={{ color: "green" }}>
          Sorted By {isSortedByName ? "Name" : "Price"}
        </p>
        {sortedProducts.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
      <button onClick={handleSortPrice}>Sort By Price</button>
      <button onClick={handleSortName}>Sort By Name</button>
    </div>
  );
}

export const MemoizedProductsList = React.memo(ProductsList);
