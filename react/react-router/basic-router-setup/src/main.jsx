import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import ProductDetail from "./components/ProductDetail";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  { path: "homepage", element: <Homepage /> },
  { path: "product", element: <Product /> },
  { path: "product/:name", element: <ProductDetail /> },
  { path: "login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
