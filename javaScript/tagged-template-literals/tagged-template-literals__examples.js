function formatDate(strings, ...values) {
  const outputArray = values.map(
    (value, index) =>
      `${strings[index]}${
        value instanceof Date ? value.toLocaleDateString() : value
      }`
  );
  return outputArray.join("") + strings[strings.length - 1];
}

const myDate = new Date();
console.log(formatDate`Today's date is ${myDate}.`); // Today's date is 7/3/2023.

function formatNumber(strings, ...values) {
  const outputArray = values.map(
    (value, index) =>
      `${strings[index]}${
        typeof value === "number" ? value.toLocaleString() : value
      }`
  );
  return outputArray.join("") + strings[strings.length - 1];
}

const myNumber = 1000000;
console.log(formatNumber`The number is ${myNumber}.`); // The number is 1,000,000.

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ color }) => color};
  padding: 20px;
`;

const App = () => {
  return (
    <StyledDiv color="blue">
      This is a styled div with a blue background color.
    </StyledDiv>
  );
};

export default App;
