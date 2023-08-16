import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='baap'>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <Link to="/"><button>Log Out</button> </Link>
      
    </div>
  );
};

export default Dashboard;
