import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCESS,
  REGISTER_FAIL,
} from "./types";
import { returnErrors } from "../errors/actions";
import axios from "axios";

//CHECK TOKEN AND LOAD USER
const loadUser = () => (dispatch, getState) => {
  //USer loading
  dispatch({ type: USER_LOADING });

  axios
    .get(`${process.env.REACT_APP_BACKEND_URI}/api/user`, tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

const register = ({ name, email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //Requestr Body

  const body = JSON.stringify({ name, email, password });
  axios
    .post(
      `${process.env.REACT_APP_BACKEND_URI}/api/user/register`,
      body,
      config
    )
    .then((res) => {
      dispatch({
        type: REGISTER_SUCESS,
        payload: res.data,
      });
      // console.log(typeof res.data.user, res.data.user);
      alert("Registered  Succesfully");
    })
    .catch((err) => {
      alert(err.response.data.error);
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

const login = ({ email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //Request Body
  const body = JSON.stringify({ email, password });
  axios
    .post(`${process.env.REACT_APP_BACKEND_URI}/api/user/login`, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      // console.log(typeof res.data.user, res.data.user);
      alert("Login  Succesfull");
    })
    .catch((err) => {
      alert(err.response.data.error);
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const tokenConfig = (getState) => {
  //GEt token from localstorage
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["auth-token"] = token;
  }

  return config;
};

export default {
  loadUser,
  register,
  login,
  logoutUser,
};
