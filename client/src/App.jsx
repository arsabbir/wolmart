import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "./features/auth/authApiSlice.js";
import {
  getAllPermission,
  getAllRoles,
  getAllUsers,
} from "./features/user/userApiSlice.js";
import {
  getAllBrands,
  getAllCategory,
  getAllProduct,
  getAllTags,
} from "./features/product/productApiSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch]);

  // Load all permissions
  useEffect(() => {
    dispatch(getAllPermission());
    dispatch(getAllRoles());
    dispatch(getAllUsers());
    dispatch(getAllBrands());
    dispatch(getAllTags());
    dispatch(getAllCategory());
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
