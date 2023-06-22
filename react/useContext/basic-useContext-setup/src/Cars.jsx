import { useContext } from "react";
import { productContext } from "./Context";

function Cars() {
  const { cars } = useContext(productContext);

  return (
    <div>
      <h3>Cars</h3>
      {Object.entries(cars).map(([brand, detail]) => (
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

export default Cars;
