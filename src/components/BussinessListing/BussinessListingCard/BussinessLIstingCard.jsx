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

const BussinessLIstingCard = () => {
  const card = [
    {
      CardImg: DoctorImg,
      CardHeader: "Svv Ayurvedic Piles Fissure Fistula Clinic",
      CardFullAddress:
        "flat no.107, Rams enclave, Vikaspuri colony, Erragada, Hyderabad - 500018 ",
      CardTiming: "sunday : Holiday",
    },
    {
      CardImg: DoctorImg,
      CardHeader: "Svv Ayurvedic Piles Fissure Fistula Clinic",
      CardFullAddress:
        "flat no.107, Rams enclave, Vikaspuri colony, Erragada, Hyderabad - 500018 ",
    },
  ];

  return (
    <>
      <div className="bussinesslisting_card_container">
        <div className="bussinesslisting_card_sub_container">
          {card.map((c) => (
            <div className="bussinesslistingCard">
              <div>
                <img
                  className="card_img"
                  src={DoctorImg}
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
                  <div className="card_header">{c.CardHeader}</div>
                  <div id="card_rating">
                    <img src={Rating} alt="" className="card_rating" />
                  </div>
                </div>
                <div className="card_address">
                  <div>
                    <img src={LocationIcon} alt="" className="location_icon" />
                  </div>
                  <div className="card_fulladdress">{c.CardFullAddress}</div>
                </div>
                <div className="card_DayTime">
                  <div>
                    <img src={Clock} alt="" className="Timer_icon" />
                  </div>
                  <div className="card_day">Time :</div>
                  <div className="card_timing"></div>
                </div>
                <div className="card_contact">
                  <a className="card_sub_contact">
                    <div>
                      <img src={Call} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Call</div>
                  </a>
                  <a className="card_sub_contact">
                    <div>
                      <img src={Whatapp} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Chat</div>
                  </a>
                  <a className="card_sub_contact">
                    <div>
                      <img src={Map} alt="" className="card_contact_logo" />
                    </div>
                    <div id="card_contact_text" >Directions</div>
                  </a>
                  <a className="card_sub_contact">
                    <div>
                      <img
                        src={Services}
                        alt=""
                        className="card_contact_logo"
                      />
                    </div>
                    <div className="card_contact_text">Services</div>
                  </a>
                  <a className="card_sub_contact">
                    <div>
                      <img src={Share} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">Share</div>
                  </a>
                  <a className="card_sub_contact">
                    <div>
                      <img src={Wesite} alt="" className="card_contact_logo" />
                    </div>
                    <div className="card_contact_text">website</div>
                  </a>
                  <a className="card_sub_contact">
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
