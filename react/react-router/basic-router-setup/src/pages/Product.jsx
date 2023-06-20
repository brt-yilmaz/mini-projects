import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h2>Product Page</h2>
      <Link to={"/homepage"}>Go to Homepage</Link>
    </div>
  );
}

export default Product;
