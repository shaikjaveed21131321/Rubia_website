import React from 'react';
import Banner7 from "../assets/Frame 1431.png";
import Banner8 from "../assets/Frame ui.jpg";
import Banner9 from "../assets/Frame ux.jpg";
import { Link } from 'react-router-dom';

const UiUx = () => {
  return (
    <>
    <div className="uiux-text">
        <div className="uiux1">
          <div className="banners" >
          <Link className="contact_btn" to='/contact/'><button className="btn_contact2">contact us</button></Link>
            <img src={Banner7} className='uxui_banner1' alt=""  />
            <br />
            <br />
            <img src={Banner8} className='uxui_banner' alt=""  />
            <br />
            <br />
            <img src={Banner9} className='uxui_banner' alt=""  />
            <br />
         </div>
        </div>
      </div>
    </>
  )
}

export default UiUx