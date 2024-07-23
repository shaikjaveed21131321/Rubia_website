import React from "react";
import "../BussinessListingCard/BussinessLIstingCard.css";
import DoctorImg from "./assets/Mask group.png"

const BussinessLIstingCard = () => {
  return (
    <>
      <div className="Bsn_list_card_container">
            <div className="container1">
                <span></span>
                <span>Svv Ayurvedic Piles Fissure Fistula Clinic</span>
                <span></span>
            </div>
            <div className="container2">
              <div><img src={ DoctorImg} alt="" /></div>
              <div></div>
            </div>
            <div className="container3">
                <div></div>
                <div></div>
            </div>
      </div>
    </>
  );
};

export default BussinessLIstingCard;
