import React from "react";
import "../BussinessListingCard/BussinessLIstingCard.css";
import DoctorImg from "./assets/Rectangle 130.png";
import ThumbUp from "./assets/ri_thumb-down-fill.png";
import Rating from "./assets/Frame 578.png";
import LocationIcon from "./assets/carbon_location-filled.png";
import Clock from "./assets/icon-park-solid_time.png";
import Call from "./assets/material-symbols_call-sharp.png";
import Whatapp from "./assets/dashicons_whatsapp.png";
import Map from "./assets/ri_direction-line.png";
import Services from "./assets/Frame 586.png";
import Share from "./assets/mdi_share.png";
import Wesite from "./assets/material-symbols_globe.png";
import Details from "./assets/material-symbols_globe (1).png";

const BussinessLIstingCard = ({myArray}) => {
  

  return (
    <>
      <div className="bussinesslisting_card_container">
        <div className="bussinesslisting_card_sub_container">
          {myArray===undefined?<><h1 className="mx-auto">Loading...</h1></>:myArray.map((item) => (
            <div className="bussinesslistingCard">
              <div>
                <img
                  className="card_img"
                  src={(!item.bsn_img1)?'http://localhost:4000/uploads/noimg.jpg':'http://localhost:4000/uploads/'+item.bsn_img1}
                  alt=""
                  style={{
                    borderRadius: "8px",
                    marginTop: "-0.5%",
                  }}
                />
              </div>
              <div className="card_content">
                <div className="card_heading">
                  <button id="thumbup_icon">
                    {" "}
                    <img src={ThumbUp} alt="" className="thumbup_icon" />{" "}
                  </button>
                  <div className="card_header">{item.bsn_name}</div>
                  <div id="card_rating">
                    <img src={Rating} alt="" className="card_rating" />
                  </div>
                </div>
                
                <div className="card_address">
                  <div>
                    <img src={LocationIcon} alt="" className="location_icon" />
                  </div>
                  <div className="card_fulladdress">{item.bsn_bnum_bname+", "+item.bsn_area+", "+item.bsn_city+", "+item.bsn_state+", "+item.bsn_pincode+"."}</div>
                </div>
                <div className="card_DayTime">
                  <div className="my-auto">
                    <img src={Clock} alt="" className="Timer_icon" />
                  </div>
                  <div className="card_day my-auto"  >Time : </div>
                  <div className="card_timing">
                    <select name="" style={{background:"#FFF5EB", border:"1px solid #AFAAA5 "}} id="" className="p-2">
                      <option value=""><span> Monday: {item.bsn_tm_mon_op} - {item.bsn_tm_mon_cl}</span></option>
                      <option value=""><span> Tuesday: {item.bsn_tm_tue_op} - {item.bsn_tm_tue_cl}</span></option>
                      <option value=""><span> Wednesday: {item.bsn_tm_wed_op} - {item.bsn_tm_wed_cl}</span></option>
                      <option value=""><span> Thusday: {item.bsn_tm_thus_op} - {item.bsn_tm_thus_cl}</span></option>
                      <option value=""><span> Friday: {item.bsn_tm_fri_op} - {item.bsn_tm_fri_cl}</span></option>
                      <option value=""><span> Staurday: {item.bsn_tm_sat_op} - {item.bsn_tm_sat_cl}</span></option>
                      <option value=""><span> Sunday: {item.bsn_tm_sun_op} - {item.bsn_tm_sun_cl}</span></option>
                      
                    </select>
                    
                  </div>
                </div>
                <div className="card_contact">
                  <a className="card_sub_contact" href={"tel:+91"+item.bsn_con_num}>
                    <div>
                      <img src={Call} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Call</div>
                  </a>
                  <a className="card_sub_contact" target="_blank" href={`https://wa.me/${item.bsn_whs_app_num}?text=Hii`}>
                    <div>
                      <img src={Whatapp} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Chat</div>
                  </a>
                  <a className="card_sub_contact" target="_blank" href={item.bsn_gmap_link}>
                    <div>
                      <img src={Map} alt="" className="card_contact_logo" />
                    </div>
                    <div id="card_contact_text" >Directions</div>
                  </a>
                  <a className="card_sub_contact" href="#">
                    <div>
                      <img
                        src={Services}
                        alt=""
                        className="card_contact_logo"
                      />
                    </div>
                    <div className="card_contact_text">Services</div>
                  </a>
                  <a className="card_sub_contact" href="#">
                    <div>
                      <img src={Share} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Share</div>
                  </a>
                  <a className="card_sub_contact" target="_blank" href={item.bsn_website_link}>
                    <div>
                      <img src={Wesite} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">website</div>
                  </a>
                  <a className="card_sub_contact" href="#">
                    <div>
                      <img src={Details} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Details</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BussinessLIstingCard;
