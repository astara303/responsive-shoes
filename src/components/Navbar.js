import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiRunningShoe } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'

//React hooks declare state variables
function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  //if hamburger menu is clicked, icon changes
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  //function that shows the button depending on screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  //call the function
  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <GiRunningShoe className="navbar-icon" />
            Golden Shoe
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Account
              </Link>
            </li>
            <li className='nav-btn'>
              {button ? (
                <Link to='/' className='btn-link'>
                  <Button buttonStyle='btn--outline'>
                    SUBSCRIBE
                  </Button>
                </Link>
              ) : (
                <Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline'
                    buttonSize='btn--mobile'>
                    SUBSCRIBE
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
