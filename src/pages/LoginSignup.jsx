import React from 'react'
import './css/LoginSign.css';
const LoginSignup = () => {
  return (
    
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='password'/>

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account</p>
        <div className="logsig-agrre">
          <input type='checkbox' name='' id=''/>
          <p>By Continuing agree to terms and policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup