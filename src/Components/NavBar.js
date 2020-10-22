import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
 return (
  <div>
   <NavLink to="/home">
    <p>home</p>
   </NavLink>
   <NavLink to="/recipes">
    <p>index</p>
   </NavLink>
   {/* <NavLink to="/favorites">
    <p>favorite Page</p>
   </NavLink> */}
  </div>
 )
}

export default NavBar