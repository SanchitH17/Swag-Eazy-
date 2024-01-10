import React from 'react';
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from '../Assests/logo-black-2.png';

const Navbar = () => {
  return (
    <div id='container' className="navbar-container">
      <div className="navbar-part">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-part nav-center">
        <nav className="nav-container">
          <ul className="nav-list">
            <a href='#'> <b><li>Products</li></b></a>
            <a href='#'> <b><li>Packs for you</li></b></a>
            <a href='#'> <b><li>Services</li></b></a>
            <a href='#'> <b><li>Company</li></b></a>
          </ul>
        </nav>
      </div>

      <div className="navbar-part nav-right">
        <div className="nav-icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          <Wrap>
            <WrapItem>
              <Avatar size={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </WrapItem>
          </Wrap>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
