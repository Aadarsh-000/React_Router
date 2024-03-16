import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  }

  return (
    <div>
        
        <h1>Welcome to Contact page.</h1>
        <button onClick={function(){
          return gotoAbout()
          }}>Go to About page..</button>
    </div>
  )
}
