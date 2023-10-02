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
  async ({ data, id }) => {
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

// get all tag
export const getAllTags = createAsyncThunk("tag/getAllTags", async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/v1/tag", {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Create a new tag
export const createTag = createAsyncThunk("tag/createTag", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/tag",
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// update  tag
export const updateTag = createAsyncThunk(
  "tag/updateTag",
  async ({ id, tagData }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/tag/${id}`,
        tagData,
        { withCredentials: true }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Delete tag
export const deleteTag = createAsyncThunk("tag/deleteTag", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/v1/tag/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.respnse.data.message);
  }
});

// update status tag
export const updateStatusTag = createAsyncThunk(
  "tag/updateStatusTag",
  async ({ status, id }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/tag/status/${id}`,
        { status },
        { withCredentials: true }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all user
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/category",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Create a new brand
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/category",
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
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ data, id }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/category/${id}`,
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
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/category/${id}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.respnse.data.message);
    }
  }
);

// update status brand
export const updateStatusCategory = createAsyncThunk(
  "brand/updateStatusCategory",
  async ({ status, id }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/category/status/${id}`,
        { status },
        { withCredentials: true }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// get all products
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/product",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);