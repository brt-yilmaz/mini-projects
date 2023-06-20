import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={"/product"}>Go to product page</Link>
    </div>
  );
}

export default Homepage;
