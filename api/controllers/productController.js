import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import fs from "fs/promises";
import path from "path";
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
import { createSlug } from "../helper/slug.js";
import { v2 as cloudinary } from "cloudinary";
import { log } from "console";

cloudinary.config({
  cloud_name: "drq2ieflq",
  api_key: "718961483599887",
  api_secret: "zaM4dfcS2djdofxgDNhLla_tABk",
});

/**
 * @DESC Get all products data
 * @ROUTE /api/v1/product
 * @method GET
 * @access public
 */

export const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (products.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }
  res.status(200).json(products);
});

/**
 * @DESC Get Single products data
 * @ROUTE /api/v1/product/:id
 * @method GET
 * @access public
 */
export const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product data not found" });
  }

  res.status(200).json(product);
});

/**
 * @DESC Create new Product
 * @ROUTE /api/v1/product
 * @method POST
 * @access public
 */
export const createProduct = asyncHandler(async (req, res) => {
  // get values
  const {
    name,
    productType,
    productSimple,
    productVariable,
    productGroup,
    productExternal,
    shortDesc,
    longDesc,
  } = req.body;

  console.log(req.body);

  // validations
  if (!name) {
    return res.status(400).json({ message: "product name is required" });
  }
  // email check
  const nameCheck = await Product.findOne({ name });

  if (nameCheck) {
    return res.status(400).json({ message: "Product already exists" });
  }

  // file manage
  let productPhotos = [];
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      const result = await cloudinary.uploader.upload(req.files[i].path);
      productPhotos.push(result.secure_url);
    }
  }
  //   const result = await cloudinary.uploader.upload(req.file.path);

  // create new product
  const product = await Product.create({
    name,
    slug: createSlug(name),
    productPhotos,
    productType,
    productSimple: productType === "simple" ? JSON.parse(productSimple) : null,
    productVariable: productType === "variable" ? productVariable : null,
    productGroup: productType === "group" ? productGroup : null,
    productExternal: productType === "external" ? productExternal : null,
    shortDesc,
    longDesc,
  });

  res.status(200).json({ product, message: "product created successfully" });
});

/**
 * @DESC Delete Product
 * @ROUTE /api/v1/product/:id
 * @method DELETE
 * @access public
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const productDelete = await Product.findByIdAndDelete(id);
  if (product.photo) {
    const publicId = product.photo.match(/\/([^/]+)$/)[1].split(".")[0];
    await cloudinary.uploader.destroy(publicId);
  }
  console.log(productDelete);
  res.status(200).json(productDelete);
});

/**
 * @DESC Update Product
 * @ROUTE /api/v1/product/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Product name is required" });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product data not found" });
  } else {
    // Check if a file was uploaded
    if (req.file) {
      console.log("product file done");
      // Delete the previous photo if it exists
      if (product.photo) {
        const publicId = product.photo.match(/\/([^/]+)$/)[1].split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }
      const result = await cloudinary.uploader.upload(req.file.path);
      // Update the product's photo field with the new photo data
      product.photo = result.secure_url;
    }

    // Update the product's name and slug
    product.name = name;
    product.slug = createSlug(name);

    res
      .status(200)
      .json({ product, message: "Product data updated successfully" });
  }
});
/**
 * @DESC Update Product Status
 * @ROUTE /api/v1/product/status/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProductStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const product = await Product.findByIdAndUpdate(
    id,
    {
      status: !status,
    },
    { new: true }
  );

  res.status(200).json({ product, messgae: "Status updated successfully" });
});
