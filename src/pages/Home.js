import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <div className='baap'>
      <h1>Spardha 2023 Candidate Registration</h1>
      <Link to="/login"><button>LogIn</button></Link>
      <Link to="/signup"><button>SignUp</button></Link>
    </div>
  );
};

export default Home;
