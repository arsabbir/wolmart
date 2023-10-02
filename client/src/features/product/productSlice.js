import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand,
  createCategory,
  createTag,
  deleteBrand,
  deleteCategory,
  deleteTag,
  getAllBrands,
  getAllCategory,
  getAllProduct,
  getAllTags,
  updateBrand,
  updateCategory,
  updateStatusBrand,
  updateStatusCategory,
  updateStatusTag,
  updateTag,
} from "./productApiSlice.js";

// create auth slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    tag: null,
    category: null,
    error: null,
    message: null,
    loader: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all user
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.brand = action.payload;
      })

      // create role
      .addCase(createBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brand = state.brand ?? [];
        state.brand.push(action.payload.brand);
        state.message = action.payload.message;
        state.loader = false;
      })

      // update Brand
      .addCase(updateBrand.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateBrand.fulfilled, (state, action) => {
        state.brand[
          state.brand.findIndex((data) => data._id == action.payload.brand._id)
        ] = action.payload.brand;
        state.message = action.payload.message;
      })

      // delete user
      .addCase(deleteBrand.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.brand = state.brand.filter(
          (data) => data._id != action.payload._id
        );
        state.message = action.payload.message;
      })

      // update status brand
      .addCase(updateStatusBrand.fulfilled, (state, action) => {
        state.brand[
          state.brand.findIndex((data) => data._id == action.payload.brand._id)
        ] = action.payload.brand;
        state.message = action.payload.message;
      })
      // get all TAg
      .addCase(getAllTags.fulfilled, (state, action) => {
        state.tag = action.payload.tags;
      })

      // create tag
      .addCase(createTag.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createTag.fulfilled, (state, action) => {
        state.tag = state.tag ?? [];
        state.tag.push(action.payload.tag);
        state.message = action.payload.message;
        state.loader = false;
      })

      // update tag
      .addCase(updateTag.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateTag.fulfilled, (state, action) => {
        state.tag[
          state.tag.findIndex((data) => data._id == action.payload.tag._id)
        ] = action.payload.tag;
        state.message = action.payload.message;
      })

      // delete tag
      .addCase(deleteTag.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteTag.fulfilled, (state, action) => {
        state.tag = state.tag.filter(
          (data) => data._id != action.payload.tag._id
        );
        state.message = action.payload.message;
      })

      // update status tag
      .addCase(updateStatusTag.fulfilled, (state, action) => {
        state.tag[
          state.tag.findIndex((data) => data._id == action.payload.tag._id)
        ] = action.payload.tag;
        state.message = action.payload.message;
      })
      // get all category
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.category = action.payload.categories;
      })

      // create tag
      .addCase(createCategory.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.category = state.category ?? [];
        state.category.push(action.payload.category);
        state.message = action.payload.message;
        state.loader = false;
      })

      // update tag
      .addCase(updateCategory.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.category[
          state.category.findIndex(
            (data) => data._id == action.payload.category._id
          )
        ] = action.payload.category;
        state.message = action.payload.message;
      })
      // delete category
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.category = state.category.filter(
          (data) => data._id != action.payload.category._id
        );
        state.message = action.payload.message;
      })
      // update status tag
      .addCase(updateStatusCategory.fulfilled, (state, action) => {
        state.category[
          state.category.findIndex(
            (data) => data._id == action.payload.category._id
          )
        ] = action.payload.category;
        state.message = action.payload.message;
      })
      // get all product
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.product = action.payload.products;
      });
  },
});

// export selector
export const getAllProductData = (state) => state.product;
// export actions
export const { setMessageEmpty } = productSlice.actions;

// export
export default productSlice.reducer;
