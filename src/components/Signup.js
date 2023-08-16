import React from 'react';
import { Link } from 'react-router-dom'; 
import { Signupform } from './Signupform';

const Signup = () => {
  return (
    <div className='baap'>
      {/* Signup form */}
    <Signupform />
      <Link to="/login">Already have an account? Log in</Link>
    </div>
  );
};

export default Signup;
