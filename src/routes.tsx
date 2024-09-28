import { createBrowserRouter } from "react-router-dom";
import Product from "./views/product";
import Cart from "./views/cart";
import Checkout from "./views/checkout";
import Payment from "./views/payment";
import { Layout } from "./components/Layout";

export const RoutesConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);
