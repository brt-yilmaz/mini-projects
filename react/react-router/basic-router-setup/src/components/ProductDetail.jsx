import { useParams, useSearchParams } from "react-router-dom";

function ProductDetail() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  function handeSearchParams() {
    setSearchParams({ price: 50, brand: "berat" });
  }

  const price = searchParams.get("price");
  const brand = searchParams.get("brand");
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p> {brand} </p>
      <button onClick={handeSearchParams}>set Price to 50</button>
    </div>
  );
}

export default ProductDetail;
