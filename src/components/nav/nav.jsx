import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';
import Logo from './logo.jpg';
import "../leftside/leftside.css"

const Nav = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [Text, setText] = useState("navbar hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setText("navbar visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setText("navbar hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <div id="navbar1">
        <div>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="burger_menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
        <div className={Text} id='text'>
        <NavLink className="navbar-link" id='Link'  to='/'
        style={({isActive})=>{return {color:isActive?'orange':''}}} >HOME</NavLink>
          <NavLink className="navbar-link  " id='Link1'    to='/service/'
        style={({isActive})=>{return {color:isActive?'orange':''}}} >service</NavLink>
           <NavLink className="navbar-link" id='Link2' to='/about/' 
        style={({isActive})=>{return {color:isActive?'orange':''}}}>about</NavLink>
          <NavLink className="navbar-link" id='Link3' to='/contact/' 
        style={({isActive})=>{return {color:isActive?'orange':''}}}>contact</NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
