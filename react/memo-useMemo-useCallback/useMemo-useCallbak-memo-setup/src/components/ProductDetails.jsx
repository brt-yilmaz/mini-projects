function ProductDetails({ product }) {
  const { name, price } = product;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductDetails;
