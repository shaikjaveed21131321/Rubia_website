import React from "react";
import Banner1 from "../assets/Card143.png";
import Banner2 from "../assets/Frame 236.png"
import Banner3 from "../assets/Frame 234.png"
import { Link } from "react-router-dom";
const graphic = () => {
  return (
    <>
    
      <div className="graphic-text">
        <div className="graphic1">
          <div className="banners" >
            <Link className="contact_btn" to='/contact/'><button className="btn_contact">contact us</button></Link>
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
      </div>
    </>
  );
};

export default graphic;
