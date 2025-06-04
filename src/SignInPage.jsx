import React, { useContext } from 'react'
import NameContext from './ContextName'
import "./SignInPage.css"
import { useNavigate } from 'react-router-dom'
function SignInPage() {
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Account Created!")
        navigate("/display");
    }
    const {name,setname}=useContext(NameContext)
    const {email,setemail}=useContext(NameContext)
  return (
    <div className='outer-signup-page'>
        <form className="inner-input-cont" onSubmit={handleSubmit}>

            <h1>Create your PopX account</h1>
            <label>Full Name</label>
            <input
            type='text'
            placeholder='Name'
            onChange={(e)=>setname(e.target.value)}
            value={name}
            required/>
            <label>Phone-number</label>
            <input
            type='text'
            placeholder='Phone-number' required/>
            <label>Email address</label>
            <input
            type='text'
            placeholder='Email' 
            onChange={(e)=>setemail(e.target.value)}
            value={email}
            required/>
            <label>Password</label>
            <input
            type='password'
            placeholder='Password' required/>
            <label>Company name</label>
            <input
            type='text'
            placeholder='Company name' required/>
            <label>Are you an agency?</label>
            <div className="check-radio-btn">
                <div className="radio-1">
                     <input
                        type='radio'
                        name='agency'
                        id="agency-yes"/><label htmlFor="agency-yes">Yes</label>
                </div>
            <div className="radio-1">
                <input
                type='radio'
                name='agency'
                id='agency-no'/><label htmlFor="agency-no">No</label>
            </div>
            </div>
            
            <button type="submit" className="signup-btn">Create Account and Login</button>
            
        </form>
    </div>
  )
}

export default SignInPage