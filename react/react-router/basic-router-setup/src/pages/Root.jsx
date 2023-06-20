import { Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <h1>Root router</h1>
      <Link to={"homepage"}>Go to Homepage</Link>
    </div>
  );
}

export default Root;
