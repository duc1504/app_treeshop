import {createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

// getProducts
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (data, {rejectWithValue}) => {
    try {
      // http://192.168.28.1:3000/products
      const response = await AxiosInstance().get('product');
      const result = response.products;
      return result; // { }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

//getCategories
export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (data, {rejectWithValue}) => {
    try {
      // http://192.168.28.1:3000/categories
      const response = await AxiosInstance().get('category');
      const result = response.categories;
      return result; // { }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
//getProductsByCategory
export const getProductsByCategory = createAsyncThunk(
  'products/getProductsByCategory',
  async (data, {rejectWithValue}) => {
    try {
      if (!data) {
        // http://192.168.28.1:3000/products/
        const response = await AxiosInstance().get('product');
        const result = response.products;
        return result;
      } else {
        // http://192.168.28.1:3000/products/category/1
        const response = await AxiosInstance().get(`product/category/${data}`);
        const result = response.products;
        return result; // { }
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// getDetailProduct
export const getDetailProduct = createAsyncThunk(
  'products/getDetailProduct',
  async (data, {rejectWithValue}) => {
    try {
      // http://localhost:6000/product/detail/:productId
      const response = await AxiosInstance().get(`product/detail/${data}`);
      const result = response.product;
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
// Mua hàng
// POST: http://localhost:5000/cart/purchase/:userId
// body: {
//   "shippingFee": 20000,
// "selectedProducts":[]
//}
export const purchaseCart = createAsyncThunk(
  'cart/purchase',
  async (data, {rejectWithValue}) => {
    try {
      const response = await AxiosInstance().post(`cart/purchase/${data.userId}`, {
        shippingFee: data.shippingFee,
        selectedProducts: data.selectedProducts,
      });
      const result = response.data;
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
