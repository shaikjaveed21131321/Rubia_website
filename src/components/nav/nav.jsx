import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.jpg";
import Profile from "./Profile_icon.png";
import "../leftside/leftside.css";
import profile from "./img/profile.png";
import profile1 from "./img/profile1.png";
import Cookies from "universal-cookie";

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
  };
  const profile = [
    {
      Profile: Profile,
    },
  ];

  const cookie = new Cookies();
  const jwttoken = cookie.get("jwttoken");

  return (
    <>
      <div id="navbar1">
        <div>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        
        <div className={Text} id="text">
          <NavLink
            className="navbar-link"
            id="Link"
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "orange" : "" };
            }}
          >
            HOME
          </NavLink>
          <NavLink
            className="navbar-link  "
            id="Link1"
            to="/service/"
            style={({ isActive }) => {
              return { color: isActive ? "orange" : "" };
            }}
          >
            service
          </NavLink>
          <NavLink
            className="navbar-link"
            id="Link2"
            to="/about/"
            style={({ isActive }) => {
              return { color: isActive ? "orange" : "" };
            }}
          >
            about
          </NavLink>
          <NavLink
            className="navbar-link"
            id="Link3"
            to="/contact/"
            style={({ isActive }) => {
              return { color: isActive ? "orange" : "" };
            }}
          >
            contact
          </NavLink>
          
        </div>
        
        <div className="profile-icon">
        {(jwttoken)?<button style={{border:"2px solid #dedede",color:"#144273" }} className='mx-3 py-2 px-3 rounded-5 fw-bold shadow-lg'>Logout</button>:<NavLink className="navbar-link" id='Link3' to='/profile/' 
        style={({isActive})=>{return {color:isActive?'orange':''}}}><img src={profile1} alt=''></img></NavLink>}
        </div>
        <div className="burger_menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
