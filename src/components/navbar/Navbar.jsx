import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>
                KomalBooking
            </span>

            {/* 2nd navbar for login */}
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
