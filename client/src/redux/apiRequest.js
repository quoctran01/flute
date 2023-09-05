import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerFailed,
  registerSuccess,
} from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/user/login`,
      user
    );

    dispatch(loginSuccess(res.data));

    if (res.data.admin === true) navigate("/admin");
    else navigate("/");
  } catch (error) {
    dispatch(loginFailed());
    alert("Sai tài khoản hoặc mật khẩu");
  }
};

export const registerAccout = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/user/register`,
      user
    );
    dispatch(registerSuccess(res.data));
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

// export const getAllUsers = async (users) => {
//     try
// }
