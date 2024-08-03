import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import Logo from './logo.jpg';
import Profile from "./Profile_icon.png"
import "../leftside/leftside.css"

const Nav = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [Text, setText] = useState("navbar visible");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setText("navbar hidden");
    } else {
      setBurgerClass("burger-bar unclicked");
      setText("navbar visible");
    }
    setIsMenuClicked(!isMenuClicked);
  }
  const profile=[
    {
      Profile:Profile,
    }
  ]

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
        <NavLink className="navbar-link" id='Link'  to='/home/'
        style={({isActive})=>{return {color:isActive?'orange':''}}} >HOME</NavLink>
          <NavLink className="navbar-link  " id='Link1'    to='/service/'
        style={({isActive})=>{return {color:isActive?'orange':''}}} >service</NavLink>
           <NavLink className="navbar-link" id='Link2' to='/about/' 
        style={({isActive})=>{return {color:isActive?'orange':''}}}>about</NavLink>
          <NavLink className="navbar-link" id='Link3' to='/contact/' 
        style={({isActive})=>{return {color:isActive?'orange':''}}}>contact</NavLink>
        <div>
          
        </div>
        </div>
      
      </div>
    </>
  );
}

export default Nav;
