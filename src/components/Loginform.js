import React from 'react'
import { Link } from 'react-router-dom'

export const Loginform = () => {
  return (
    <div className='baap'>
        <h1>Login Here</h1>
        <input className = "email" placeholder='email' type='email'></input>
        <br></br>
        <input className = "password" placeholder='password' type='password'></input>
        <br></br>
        < Link to="/dashboard" ><button>Submit</button></Link>
        

    </div>
  )
}
