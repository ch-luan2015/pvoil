import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const checkAuth = () => {
    const token = localStorage.getItem("accessTokenLogin");
    if(token) return true;
    return false;
}

const AuthLogin = ({children,...rest }) => {
    const history = useHistory();

    const invalidLogin = () => {
      return history.push('/admin');
    }

  return(
    <Route {...rest} render={() =>
           checkAuth() ? invalidLogin() : (children)
      } />
  );
}

AuthLogin.propTypes = {
    children: PropTypes.any,
};

export default AuthLogin;
