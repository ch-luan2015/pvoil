import axios from "axios"
import Swal from "sweetalert2"
// import Swal from "sweetalert2"
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS } from "./ActionType"

export const deleteProductRequest = () => {
  return {
    type: DELETE_PRODUCT_REQUEST
  }
}

export const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  }
}

export const deleteProduct = (id,callBack) => {
  return (dispatch) => {
    dispatch(deleteProductRequest)
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(() => {
      Swal.fire('Đã xóa!', '', 'success').then(() => {
        callBack()
      })
    })
     .catch(err => {
        throw err
    })
  }
}
