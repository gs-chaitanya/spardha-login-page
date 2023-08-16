import React from 'react';
import { Link } from 'react-router-dom';
import { Loginform } from './Loginform';

const Login = () => {
  return (
    <div className='baap'>
      <Loginform/>
      {/* Login form */}
      <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
  );
};

export default Login;
