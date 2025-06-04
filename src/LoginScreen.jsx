import { useState } from 'react'
import React, { useContext } from 'react';
import "./LoginScreen.css"
import { useNavigate } from 'react-router-dom';
import NameContext from './ContextName';

function LoginScreen() {
    const{email,setemail}=useContext(NameContext)
    const{name,setname}=useContext(NameContext)
    const navigate=useNavigate();
  return (
    <div className='outer-login'>
        <div className="form-login">
            <h1>Sign-In to your PopX account</h1>
            <h4>Sign-in here!</h4>
        <div className="input-section">
            <label>Enter email</label>
            <input 
            type='email'
            placeholder='Enter email Address'
            onChange={(e)=>setemail(e.target.value)}
            />
            <label>Enter password</label>
            <input
            type='password'
            placeholder='Enter Password'/>
            <label>Enter name</label>
            <input
            type='text'
            placeholder='Enter Name'
            onChange={(e)=>setname(e.target.value)}/>
            <button className="login-inside" onClick={()=>navigate("/display")}>Login</button>

  
            
        </div>
        </div>
        
    </div>
  )
}

export default LoginScreen