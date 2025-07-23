import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setMenu]=useState("home");
   const menuRef=useRef();

   const openMenu=()=>{
    menuRef.current.style.right="0";
   }
   const closeMenu=()=>{
    menuRef.current.style.right="-350px";
   }
  return (
    <div className='navbar'>
      <h1>ANNALAKSHMI</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
   <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
  <li>
    <AnchorLink
      className="anchor-link"
      href="#home"
      offset="50"
      onClick={() => setMenu("home")}
    >
      Home
    </AnchorLink>
    {menu === "home" ? <img src={underline} /> : null}
  </li>

  <li>
    <AnchorLink
      className="anchor-link"
      href="#about"
      offset="50"
      onClick={() => setMenu("about")}
    >
      About Me
    </AnchorLink>
    {menu === "about" ? <img src={underline} /> : null}
  </li>

  <li>
    <AnchorLink
      className="anchor-link"
      href="#project"
      offset="50"
      onClick={() => setMenu("project")}
    >
      Projects
    </AnchorLink>
    {menu === "project" ? <img src={underline} /> : null}
  </li>

  <li>
    <AnchorLink
      className="anchor-link"
      href="#certificate"
      offset="50"
      onClick={() => setMenu("certificate")}
    >
      Certifications
    </AnchorLink>
    {menu === "certificate" ? <img src={underline} /> : null}
  </li>

  <li>
    <AnchorLink
      className="anchor-link"
      href="#contact"
      offset="50"
      onClick={() => setMenu("contact")}
    >
      Contact
    </AnchorLink>
    {menu === "contact" ? <img src={underline} /> : null}
  </li>
</ul>


      <div className="nav-connect"><AnchorLink
      className="anchor-link"
      href="#contact"
      offset="50"
      onClick={() => setMenu("contact")}
    >Connect With Me</AnchorLink> </div>
    </div>
  )
}

export default Navbar
