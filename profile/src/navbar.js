import React from 'react';
import './navbar.css';
// import "./bn.css";
 import {Link} from "react-scroll";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src="https://static.vecteezy.com/system/resources/previews/011/311/620/non_2x/sn-logo-sn-design-blue-and-red-sn-letter-sn-letter-logo-design-initial-letter-sn-linked-circle-uppercase-monogram-logo-vector.jpg" alt="" className='logo'/>
      <div className='desktop'>
       <Link activeClass='active' to="introcontent" spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Home</Link>
       <Link  activeClass='active' to="clients" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenulistitem'>Clients</Link>
       <Link  activeClass='active' to="skill" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenulistitem'>About</Link>
       <Link  activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenulistitem'>Portfolio</Link>

      </div>
      <button className='desktopmenubtn' onClick={ ()=>{
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});

      }

      }>
        <img src="https://icon-library.com/images/icon-contact-us/icon-contact-us-22.jpg" alt="" className='img2' />Contact me</button>
    </nav>
  )
}

export default Navbar
