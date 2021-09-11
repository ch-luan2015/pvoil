import axios from "axios"
import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./ActionType"

export const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST
  }
}

export const getProductSuccess = (info) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: info
  }
}

export const getProduct = () => {
  return (dispatch) => {
    dispatch(getProductRequest)
    axios.get("http://localhost:3000/posts")
    .then((response) => {
      const info = response.data;
      dispatch(getProductSuccess(info))
    }).catch((err) => {
      throw err;
    });
  }
}
