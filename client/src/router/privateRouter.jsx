import PageLayout from "../components/PageLayout/PageLayout.jsx";
import Brand from "../pages/brand/Brand.jsx";
import Category from "../pages/category/Category.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Permission from "../pages/permission/Permission.jsx";
import AddProduct from "../pages/product/AddProduct.jsx";
import ProductList from "../pages/product/ProductList.jsx";
import Product from "../pages/product/ProductList.jsx";
import Role from "../pages/role/Role.jsx";
import Tag from "../pages/tag/Tag.jsx";
import User from "../pages/user/User.jsx";
import PrivateGard from "./PrivateGard.jsx";

// create privateRouter
const privateRouter = [
  {
    element: <PageLayout />,

    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <User />,
          },
          {
            path: "/role",
            element: <Role />,
          },
          {
            path: "/permission",
            element: <Permission />,
          },
          {
            path: "/brand",
            element: <Brand />,
          },
          {
            path: "/tag",
            element: <Tag />,
          },
          {
            path: "/category",
            element: <Category />,
          },
          {
            path: "/product",
            element: <AddProduct />,
          },
          {
            path: "/product-list",
            element: <ProductList />,
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
