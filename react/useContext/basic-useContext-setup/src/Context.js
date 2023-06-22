import { createContext } from "react";

export const productContext = createContext();

export const productsData = {
  cars: {
    Mercedes: {
      price: 50000,
      model: "C-Class",
      discount: 0.1,
    },
    BMW: {
      price: 60000,
      model: "3 Series",
      discount: 0.15,
    },
    Toyota: {
      price: 30000,
      model: "Camry",
      discount: 0.05,
    },
  },
  computers: {
    Apple: {
      price: 1500,
      model: "MacBook Pro",
      discount: 0.2,
    },
    Dell: {
      price: 1200,
      model: "XPS 13",
      discount: 0.1,
    },
    HP: {
      price: 900,
      model: "Pavilion",
      discount: 0.05,
    },
  },
  phones: {
    iPhone: {
      price: 1000,
      model: "iPhone 12",
      discount: 0.1,
    },
    Samsung: {
      price: 800,
      model: "Galaxy S21",
      discount: 0.15,
    },
    "Google Pixel": {
      price: 700,
      model: "Pixel 5",
      discount: 0.2,
    },
  },
};
