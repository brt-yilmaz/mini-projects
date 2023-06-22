const generateRandomProductName = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const nameLength = Math.floor(Math.random() * 6) + 4; // Random name
  let productName = "";
  for (let i = 0; i < nameLength; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    productName += alphabet[randomIndex];
  }
  return productName;
};

const productList = Array.from({ length: 1000000 }, (_, index) => ({
  id: index + 1,
  name: generateRandomProductName(),
  price: Math.floor(Math.random() * 1000) + 30, // Random price
}));

export default productList;
