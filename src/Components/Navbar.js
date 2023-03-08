import React from 'react'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='nav'>
        <ul>
            <li className='nav-item'><a href='home' className='nav-link'>HOME</a></li>
            <li className='nav-item'><a href='about' className='nav-link'>ABOUT</a></li>
            <li className='nav-item'><a href='contact' className='nav-link'>CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Navbar