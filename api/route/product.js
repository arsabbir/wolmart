import express from "express";

import tokenVerity from "../middlewares/verifyToken.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  updateProductStatus,
} from "../controllers/productController.js";
import { ProductMulter } from "../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerity);

// create route
router.route("/").get(getAllProduct).post(ProductMulter, createProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .put(ProductMulter, updateProduct)
  .patch(ProductMulter, updateProduct);
router.route("/status/:id").patch(updateProductStatus);
// export default router
export default router;
