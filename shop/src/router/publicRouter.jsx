import Cart from "../pages/cart/Cart.jsx";
import Checkout from "../pages/checkout/Checkout.jsx";
import Home from "../pages/home/Home.jsx";
import Shop from "../pages/shop/Shop.jsx";
import ShopSingle from "../pages/shop/single/ShopSingle.jsx";

// create public router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <ShopSingle />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

// export router
export default publicRouter;
