import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all user
export const getAllBrands = createAsyncThunk("brand/getAllBrands", async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/v1/brand", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Create a new brand
export const createBrand = createAsyncThunk(
  "brand/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/brand",
        data,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// update  Brand
export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async ({data,id}) => {

    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/brand/${id}`,
        data,
        { withCredentials: true }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Delete Permission
export const deleteBrand = createAsyncThunk("brand/deleteBrand", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/v1/brand/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.respnse.data.message);
  }
});

// update status brand
export const updateStatusBrand = createAsyncThunk(
  "brand/updateStatusBrand",
  async ({ status, id }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/brand/status/${id}`,
        { status },
        { withCredentials: true }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
