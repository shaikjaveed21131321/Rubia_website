import React, { useState } from "react";
import { Link, NavLink ,useNavigate } from "react-router-dom";
import Logo from "./logo.jpg";
import Profile from "./Profile_icon.png";
import "../leftside/leftside.css";
import profile from "./img/profile.png";
import profile1 from "./img/profile1.png";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import swal from "sweetalert";

const Nav = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [Text, setText] = useState("navbar visible");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
 

  const cookie = new Cookies();
  const jwttoken = cookie.get("jwttoken");

  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();

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


  const handleLogout =(event)=>{
    event.preventDefault();
    setIsLoading(true);
   
    setTimeout(()=>{
      cookie.remove("jwttoken");
      setIsLoading(false);
      navigate("/");
    },2000)

  //  if (!loggedUser) {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   let data = JSON.stringify(
  //     {
  //       email: loggedUser.usr_email,
  //       logType:"LogOut",
  //     }
  //   )
  //   let config = {
  //     method: "POST",
  //     maxBodyLength: Infinity,
  //     body: data,
  //     redirect: "follow",
  //     headers: myHeaders,
  //   };

  //   setTimeout(()=>{
  //     fetch(`${process.env.REACT_APP_BASE_URL}/user/logout/`, config)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.success) {
  //         //custom Alert Message
          
  //         swal("successful registerd", result.message, "successfully Logout");
  //         cookie.remove("jwttoken")
  //         navigate("/");
  //       }
  //       else {
  //         swal("error", result.message, "error")
  //       }
  //     }).catch((error) => swal("Error", error, "error"))
  //     .finally(()=>{
  //       setIsLoading(false);
  //     });
  //   },1000);
  //  }
  }

 

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
        
        <div  className="profile-icon ">
        {(jwttoken || jwttoken!==undefined )?<button disabled={isLoading} onClick={handleLogout} style={{border:"2px solid #dedede",color:"#144273" }} className='mx-3 mt-3 py-2 px-3 rounded-5 fw-bold shadow-lg'>
        {(isLoading)?<><span style={{color:"#144273"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
        <span className="mx-2" style={{color:"#144273"}} role="status">Loading...</span></>:<span  style={{color:"#144273"}} role="status">Logout</span>}

        </button>:<NavLink className="navbar-link" id='Link3' to='/profile/' 
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
