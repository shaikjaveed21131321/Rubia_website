import React from "react";
import Banner1 from "../assets/Card143.png";
import Banner2 from "./assets/Mask group.png"
import Banner3 from "../assets/Frame 234.png"
import { Link } from "react-router-dom";
const graphic = () => {
  return (
    <>
    
      <div className="graphic-text">
        <div className="graphic1">
          <div className="banners" >
            <Link className="contact_btn" to='/contact/'><button className="btn_contactg">Contact Us</button></Link>
            <img  className="Banner1_graphic" src={Banner1} alt="" />
            <br />
            <br />
            <div className="graphic_banner_content">
              <div className="graphic_banner_content_img"><img src={Banner2} alt="" className="graphic_banner_img2" /></div>
              <div className="graphic_banner_content_text">
                    <p className="graphic_banner_header1">WHY GRAPHIC DESIGNING?</p>
                    <p className="graphic_banner_header2">WHY CHOOSE RUBIA FOR GRAPHIC 
                    DESIGNER SERVICES?</p>
                    <p className="graphic_banner_simpleText">Why choose Rubia for graphic design services? At Rubia, we combine creativity and precision to deliver stunning, custom visual solutions that elevate your brand. Our experienced team ensures every project meets your unique needs and goals. With a commitment to quality, attention to detail, and timely delivery, Rubia transforms your vision into captivating designs. Choose Rubia for professional, personalized graphic design services that make your brand shine.Why choose Rubia for graphic design services? At Rubia, we combine creativity and precision to deliver stunning, custom visual solutions that elevate your brand. Our experienced team ensures every project meets your unique needs and goals. With a commitment to quality, attention to detail, and timely delivery, Rubia transforms your vision into captivating designs. Choose Rubia for professional, personalized graphic design services that make your brand shine.</p>
              </div>
            </div>
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
