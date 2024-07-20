import React from 'react'
import Banner4 from "../assets/Frame 1432.png"
import Banner5 from "../assets/Frame 236.png"
import Banner6 from "../assets/Frame 248.png"
import { Link } from 'react-router-dom'
const software = () => {
  return (
    <>
    <div className="software-text">
        <div className="software1">
          <div className="banners" >
          <Link className="contact_btn" to='/contact/'><button className="btn_contact_sw">contact us</button></Link>
            <img src={Banner4} className='software_banners1' alt=""  />
            <br />
            <br />
            <img src={Banner5} className='software_banners' alt=""  />
            <br />
            <br />
            <img src={Banner6} className='software_banners' alt=""  />
            <br />
         </div>
        </div>
        <div className='w-100 d-flex flex-row justify-content-between align-item-center mt-5'>
            <Link to="/contact/"  className='rounded-2 fw-bold' style={{height:"49px" ,border:"none" ,background: "#C68643",color: "#FFF" ,padding:"10px 10px",fontSize:"20px" , margin:"auto", textDecoration:"none"}}>Contact us for more details</Link>
        </div>
      </div>
    </>
  )
}

export default software