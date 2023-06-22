import { useContext } from "react";
import { productContext } from "./Context";

function Computers() {
  const { computers } = useContext(productContext);

  return (
    <div>
      <h3>Computers</h3>
      {Object.entries(computers).map(([brand, detail]) => (
        <>
          <h4 key={brand}>{brand}</h4>
          <ul>
            {Object.entries(detail).map(([key, value]) => (
              <li key={key + value}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}

export default Computers;
