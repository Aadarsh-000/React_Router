import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <Link to='/'>Logo</Link>
       <nav>
           <ul>
               
              <NavLink to='/'><li>Home</li></NavLink> 
              <NavLink to='/about'><li>About</li></NavLink> 
              <NavLink to='/contact'><li>Contact</li></NavLink> 

           </ul>
       </nav>
   </header>
  )
}

export default Header