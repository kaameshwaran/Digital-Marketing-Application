import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(true); 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  const showNavbar = () => {
      if (window.scrollY >= 70) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
  };
  
  
  window.addEventListener('scroll', showNavbar);
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={navbar ? 'navbar' : 'navbar active'}>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fa-solid fa-earth-americas"></i>
            DIGIX
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
