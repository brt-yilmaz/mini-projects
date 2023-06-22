import { useContext } from "react";
import { productContext } from "./Context";

function Phones() {
  const { phones } = useContext(productContext);

  return (
    <div>
      <h3>Phones</h3>
      {Object.entries(phones).map(([brand, detail]) => (
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

export default Phones;
