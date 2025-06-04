import React from 'react'
import { useContext } from 'react';
import "./FinalOP.css"
import NameContext from './ContextName';
function FinalOP() {
    const {name} = useContext(NameContext);
    const {email} = useContext(NameContext);
  return (
    <div className='outer-display'>
      <div className="actual-content">
        <h3>Account Settings</h3>
        <hr></hr>
        <div className="profile-section">
          <img src="profile.png"></img>
          <div className="text-seen">
              <h1>Welcome , {name}</h1>
               <h7>{email}</h7>
          </div>
      
        </div>
        <p>PopX is a sleek, user-friendly platform designed to simplify account creation and management for individuals and agencies, offering seamless onboarding with a modern interface.</p>
        <hr></hr>
      </div>
        

    </div>
  )
}

export default FinalOP