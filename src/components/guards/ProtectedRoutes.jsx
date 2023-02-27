import { LOGIN } from 'navigation/CONSTANTS';
import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return true;
  }
  return false;
};

function ProtectedRoutes({ redirectPath = LOGIN, children }) {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}
ProtectedRoutes.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.element
};

export default ProtectedRoutes;
