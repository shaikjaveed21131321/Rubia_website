import React from "react";
import Banner1 from "../assets/Card143.png";
import Banner2 from "../assets/Frame 236 (1).png"
import Banner3 from "../assets/Frame 234.png"
import { Link } from "react-router-dom";
const graphic = () => {
  return (
    <>
    
      <div className="graphic-text">
        <div className="graphic1">
          <div className="banners" >
            <Link className="contact_btn" to='/contact/'><button className="btn_contact">Contact Us</button></Link>
            <img  className="Banner1_graphic" src={Banner1} alt="" />
            <br />
            <br />
            <img className="Banner2_graphic" src={Banner2} alt="" />
            <br />
            <br />
            <img src={Banner3} className="Banner3_graphic" alt="" />
            <br />
         </div>
        </div>
        <div className='w-100 d-flex flex-row justify-content-between align-item-center mt-5'>
            <Link to="/contact/"  className='rounded-2 fw-bold' style={{height:"49px" ,border:"none" ,background: "#C68643",color: "#FFF" ,padding:"10px 10px",fontSize:"20px" , margin:"auto", textDecoration:"none"}}>Contact us for more details</Link>
        </div>
      </div>
    </>
  );
};

export default graphic;
