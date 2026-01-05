import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <>
      <div className='Navbar'>
        <img src={logo} alt="" className='logo'/>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='Nav-menu'>
          <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close'/>
            <li className='list'><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink> </li>
            <li className='list'><AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink> </li>
            <li className='list'><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink> </li>
            <li className='list'><AnchorLink className='anchor-link' offset={50} href='#work'>Portfolio</AnchorLink> </li>
            <li className='list'><AnchorLink className='anchor-link' offset={50} href='#contact'>Contect</AnchorLink> </li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      </div>
    </>
  )
}

export default Navbar
