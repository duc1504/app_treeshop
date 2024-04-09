import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

// login
export const login = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            // http://192.168.28.1:3000/users/login
            const response = await AxiosInstance().post(`/user/login`, data);
          
            const result = response.data;
            return result; // { }
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
// signup
export const signup = createAsyncThunk(
    "user/signup",
    async (data, { rejectWithValue }) => {
        try {
            // http://192.168.28.1:3000/users/signup
            const response = await AxiosInstance().post(`/user/signup`, data);
            
            const result = response.data;
            return result; // { }
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
// chỉnh sửa thông tin người dùng
// http://localhost:5000/user/edit/:id
// body {addres,numberMobile}
export const editProfile = createAsyncThunk(
    "user/editProfile",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().patch(`/user/edit/${data.id}`, data);
            const result = response.data;
            return result;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);