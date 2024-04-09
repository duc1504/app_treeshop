import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login,signup ,editProfile} from "./UserApi";
import { getProducts, getCategories,getProductsByCategory, getDetailProduct,purchaseCart } from "./MainApi";

const appSlice = createSlice({
    name: "app",
    initialState: {
       user:null, // chưa login
       products:[], // danh sách sản phẩm
       errorLogin:'',
       statusSignup: '',
       categories: [],
       product:{},
       loading: true,
       statusEditProfile: null,
       loadingEditProfile: false,
       paymentProductIds: [],
        // historyCart: [],
      
    },
    reducers: {
        clearLogin: (state, action) => {
            state.user = null;
        },
        // lưu paymentProductIds
        setPaymentProductIds: (state, action) => {
            state.paymentProductIds = action.payload;
            // console.log(state.paymentProductIds);
        },
    },
    extraReducers: (builder) => {
        builder
        // login
            .addCase(login.pending, (state) => {
              
            })
            .addCase(login.fulfilled, (state, action) => {
              state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
            state.errorLogin = 'Sai thông tin đăng nhập'
            })
        // signup
            .addCase(signup.pending, (state, action) => {
                
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                // console.log(action.payload.status)
            if (!action.payload.status) {
                state.statusSignup = 'Đăng kí thất bại';
            } else {
                state.statusSignup = 'Tài khoản đã tồn tại';
            }
            })
            // getProducts
            .addCase(getProducts.pending, (state) => {
                state.products = [];
                state.loading = true;
                
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
               
                
            })
            .addCase(getProducts.rejected, (state) => {
                state.products = [];
                state.loading = false;
               
            })
            // getCategories
            .addCase(getCategories.pending, (state) => {
                state.categories = [];
                state.loading = true;

            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            })
            .addCase(getCategories.rejected, (state) => {
                state.categories = [];
                state.loading = false;
            })
            //getProductsByCategory
            .addCase(getProductsByCategory.pending, (state) => {
                state.products = [];
                state.loading = true;
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(getProductsByCategory.rejected, (state) => {
                state.products = [];
            })
            // getDetailProduct
            .addCase(getDetailProduct.pending, (state) => {
                state.product = {};
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            })
            .addCase(getDetailProduct.rejected, (state) => {
                state.product = {};
            })
            // editProfile
            .addCase(editProfile.pending, (state) => {
                // state.loadingEditProfile = true;
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.statusEditProfile = true;
                state.loadingEditProfile = false;
                
            })
            .addCase(editProfile.rejected, (state) => {
                state.statusEditProfile = false;
                state.loadingEditProfile = false;
            })
            // purchaseCart
            // .addCase(purchaseCart.pending, (state) => {
            //     state.historyCart = [];
               
            // })
            // .addCase(purchaseCart.fulfilled, (state, action) => {
            //     state.historyCart = action.payload;
            // })
            // .addCase(purchaseCart.rejected, (state) => {
            //     state.historyCart = [];
            // })
    },
});
export const { clearLogin,setPaymentProductIds } = appSlice.actions;
export default appSlice.reducer;