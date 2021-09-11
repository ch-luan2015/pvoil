import axios from "axios";
import Swal from "sweetalert2";
import { GET_USER_REQUEST, GET_USER_SUCCESS } from './ActionType';


export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  }
}

export const getUserSuccess = (users) => {
  return {
    type: GET_USER_SUCCESS,
    payload: users,
  }
}

export const getUsers = (userInfo,callBack) => {
  return (dispatch) => {
    dispatch(getUserRequest)
    axios.post('http://40.76.136.226:8000/login',userInfo)
    .then(response => {
      const users = response.data;
      dispatch(getUserSuccess(users))
      localStorage.setItem('userLogin', users.admin.username)
      localStorage.setItem('roleIdLogin', users.admin.role_id)
      localStorage.setItem('accessTokenLogin', users.admin.access_token)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng nhập thành công',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        callBack()
      })
    })
     .catch(err => {
        Swal.fire("Đăng nhập thất bại", err.response.data.message, "error");
     })
  }
}
