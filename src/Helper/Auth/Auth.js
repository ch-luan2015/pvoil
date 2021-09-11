import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const checkAuth = () => {
    const token = localStorage.getItem("accessTokenLogin");
    if(token) return true;
    return false;
}

const Auth = ({children,...rest }) => {
    const history = useHistory();
    const invalidAuth = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Token hết hạn',
            showConfirmButton: true,
        }).then((result)=>{
            if(result) return history.push('/login');
        })
    }

  return(
    <Route {...rest} render={() =>
           checkAuth() ? (children): invalidAuth()
      } />
  );
}

Auth.propTypes = {
    children: PropTypes.any,
};

export default Auth;
