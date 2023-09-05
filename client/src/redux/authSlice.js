import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      curretUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      currentInformation: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    loginStart: (state) => {
        state.login.isFetching =true;
    },
    loginSuccess: (state, action) => {
        state.login.isFetching = false;
        state.login.currectUser = action.payload;
        state.login.error = false
        localStorage.setItem("user", JSON.stringify(action.payload));
      //   toast.success('Success Notification !', {
      //     position: toast.POSITION.TOP_RIGHT
      // });
    },
    loginFailed: (state) => {
        state.login.isFetching=false;
        state.login.error=true
    },
    logout: () => {
        localStorage.removeItem("user")
        localStorage.removeItem("totalBill")
        localStorage.removeItem("cartList")
    },
    registerStart:(state) => {
      state.register.isFetching = false;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.currentInformation = action.payload;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.error=false;
    }
  },
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logout
} = authSlice.actions;

export default authSlice.reducer;
