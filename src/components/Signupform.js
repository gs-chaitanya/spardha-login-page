import React from 'react'
import { Link } from 'react-router-dom'

export const Signupform = () => {
  return (
    <div className='baap'>
        <h1>Signup Here</h1>
        <input className = "firstname" placeholder='First Name'></input>
        <br></br>
        <input className = "lastname" placeholder='Last Name' type='email'></input>
        <br></br>
        <input className = "email" placeholder='email' type='email'></input>
        <br></br>
        <input className = "password" placeholder='password' type='password'></input>
        <br></br>
        <Link to="/dashboard" ><button>Submit</button></Link>
    </div>
  )
}
