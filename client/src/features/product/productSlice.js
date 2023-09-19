import { createSlice } from "@reduxjs/toolkit";
import { createBrand, deleteBrand, getAllBrands, updateBrand, updateStatusBrand } from "./productApiSlice.js";

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
      });
  },
});

// export selector
export const getAllProductData = (state) => state.product;
// export actions
export const { setMessageEmpty } = productSlice.actions;

// export
export default productSlice.reducer;
