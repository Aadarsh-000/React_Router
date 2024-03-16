import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  }

  const gotoHome = () =>{
    navigate("/");
  }

  return (
    <div>
       
        <h1>Welcome to About page.</h1>
        <button onClick={()=>{gotoContact()}}>Go to Contact page</button>
        <button onClick={()=>{gotoHome()}}>Go TO Home</button>
    </div>
  )
}
