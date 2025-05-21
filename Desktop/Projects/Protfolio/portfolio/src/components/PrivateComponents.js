import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';


function PrivateComponents() {
    const auth = localStorage.getItem('Admin');
  return auth?<Outlet/>:<Navigate to={'/'}/>
}

export default PrivateComponents
