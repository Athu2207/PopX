import React, { useState } from 'react'
import Popx from './Popx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen'
import NameContext from './ContextName';
import FinalOP from './FinalOP';
import SignInPage from './SignInPage';
function App() {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  return (
     <NameContext.Provider value={{ name, setname ,email, setemail}}>

    <Router>
      <Routes>
         <Route path="/" element={<Popx />} />
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path="/display" element={<FinalOP/>}/>
        <Route path="/signup" element={<SignInPage/>}/>
      </Routes>
    </Router>
    </NameContext.Provider>

  )
}

export default App