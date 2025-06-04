import React from 'react'
import "./Popx.css";
import { useNavigate } from 'react-router-dom';
function Popx() {
    const navigate = useNavigate()
  return (

    <div className='container'>
        <h1>Welcome to PopX</h1>
        <h4>Welcome back user!</h4>
        <div className="button-section">
            <button className="login-btn" onClick={()=>navigate("/signup")}>Create Account</button>
            <button className="sign-up" onClick={()=>navigate("/login")}>Already Registered? Login</button>

        </div>
        
    </div>
  )
}

export default Popx