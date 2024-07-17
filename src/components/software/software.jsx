import React from 'react'
import Banner4 from "../assets/Frame 1432.png"
import Banner5 from "../assets/Frame 236.jpg"
import Banner6 from "../assets/Frame 248.jpg"
import { Link } from 'react-router-dom'
const software = () => {
  return (
    <>
    <div className="software-text">
        <div className="software1">
          <div className="banners" >
          <Link className="contact_btn" to='/contact/'><button className="btn_contact1">contact us</button></Link>
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
      </div>
    </>
  )
}

export default software