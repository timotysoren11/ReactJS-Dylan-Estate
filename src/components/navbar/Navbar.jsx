import React from 'react';
import './Navbar.css'
import LOGO from '../../assests/logo.png'
import { IoLanguageSharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={LOGO} alt="" className='logo-image'/>
      <ul>
        <li>Properties</li>
        <li>My Dashboard/Activity</li>
        <li>List your property</li>
        <li>CONTACT US</li>
        <li>More</li>
        <li>|</li>
        <li><button><IoLanguageSharp size="17px"/></button></li>
        <li><button><GoPerson size="17px"/></button></li>
      </ul>
    </div>
  );
}

export default Navbar;