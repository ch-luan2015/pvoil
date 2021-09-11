import axios from "axios"
import Swal from "sweetalert2"
import { EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS } from "./ActionType"

export const editProductRequest = () => {
  return {
    type: EDIT_PRODUCT_REQUEST
  }
}

export const editProductSuccess = () => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
  }
}

export const editProduct = (id,infoChange,callBack) => {
  return (dispatch) => {
    dispatch(editProductRequest)
    axios.put(`http://localhost:3000/posts/${id}`,infoChange)
    .then(() => {
      dispatch(editProductSuccess())
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sửa thành công',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
          callBack()
        })
      })
      .catch(err => {
          Swal.fire("Sửa thất bại", err.response.data.message, "error");
      })
  }
}
