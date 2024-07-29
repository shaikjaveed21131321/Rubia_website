import React, { useState } from "react";
import Ambulencelogo from "../assets/ambulence.png";
import Doctor from "../assets/doctor.png";
import PoliceMan from "../assets/police.png";
import Lawyer from "../assets/lawyer.png";
import Accountent from "../assets/accountent.png";
import Secretary from "../assets/Secretary.png";
import SoftwareGuy from "../assets/softeware_guy.png";
import Atm from "../assets/atm.png";
import Temple from "../assets/temple.png";
import Pandit from "../assets/Poojary.png";
import Automobile from "../assets/Automobile.png";
import SuperMarket from "../assets/SuperMarkets.png";
import MedicalShop from "../assets/MedicalShops.png";
import DigitalMarket from "../assets/DigitalMarke.png";
import Hotels from "../assets/Hostels.png";
import FruitsShop from "../assets/fruiteshop.png";
import Toys from "../assets/toyshop.png";
import Clothes from "../assets/clothshop.png";
import MobileShop from "../assets/mobieshop.png";
import Stationary from "../assets/StationaryShop.png";
import Liqour from "../assets/LiquorShops.png";
import Saloon from "../assets/saloon.png";
import Beauty from "../assets/Beautyparlour.png";
import Theatre from "../assets/Therater.png";
import Hotel from "../assets/Hotels&Restaurants.png";
import Pubs from "../assets/Pubs.png";
import Petrol from "../assets/PetrolPumps.png";
import ShoppingMall from "../assets/Shopping Mall.png";
import "../PrivateServices/PrivateServices.css";

const PrivateServices = ({ handleClick }) => {
  const [title, setTitle] = useState("view more  \u2193");  
  const [activeButton, setActiveButton] = useState(null);
  const [noOfElements, setElements] = useState(12);

  const toggle = () => {
    if (noOfElements >= pvtlabels.length) {
      setTitle("view more \u2193");
      setElements(12);
    } else {
      setElements(noOfElements + 12);
      if (noOfElements + 12 >= pvtlabels.length) {
        setTitle("view less \u2191");
      }
    }
  };
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const pvtlabels = [
    { image: Ambulencelogo, name: "Ambulance" },
    { image: Doctor, name: "Hospitals" },
    { image: Lawyer, name: "Lawyers" },
    { image: PoliceMan, name: "Police Station" },
    { image: Accountent, name: "Charted Accounts" },
    { image: Secretary, name: "Company Secretary" },
    { image: SoftwareGuy, name: "Software Companies" },
    { image: Atm, name: "Bank & ATM" },
    { image: Temple, name: "Temples" },
    { image: Pandit, name: "Poojary (Pandit)" },
    { image: Automobile, name: "Automobile Service" },
    { image: SuperMarket, name: "Super Markets" },
    { image: MedicalShop, name: "Medical Shops" },
    { image: DigitalMarket, name: "Digital Market" },
    { image: Hotels, name: "Hostels" },
    { image: FruitsShop, name: "Fruit Shops" },
    { image: Toys, name: "Toy Shops" },
    { image: Clothes, name: "Cloth Shops" },
    { image: MobileShop, name: "Mobile Stores" },
    { image: Stationary, name: "Stationary Shop" },
    { image: Saloon, name: "Saloon" },
    { image: Beauty, name: "Beauty Parlour" },
    { image: Theatre, name: "Theatres" },
    { image: Hotel, name: "Hotels & Restaurants" },
    { image: Pubs, name: "Pubs" },
    { image: Petrol, name: "Petrol Pumps" },
    { image: ShoppingMall, name: "Shopping Mall" },
    {image:Liqour,name:"Liqour"},
  ];
  const slice = pvtlabels.slice(0, noOfElements);
  return (
    <>
    <div className="header_pvt">
    Private <span style={{color:"#C68643",fontWeight:"700"}}>Organizations :</span>
    </div>
      <div id="pvt_container">
        <div className="pvt_sub_container">
          {slice.map((e, index) => (
            <form action="" key={index}>
              <div
                className="pvt_labels"
                key={index}
                onClick={() => handleButtonClick(index,e.name)}
                style={{
                  backgroundColor:
                    activeButton === index ? "#144273" : "#FAF2EB",
                }}
              >
                <div id="pvt_img">
                  <img className="pvt_img" src={e.image} alt="" />
                </div>
                <div
                  className="pvt_text"
                  key={index}
                  style={{
                    color: activeButton === index ? "white" : "#650000",
                  }}
                >
                  {e.name}
                </div>
              </div>
            </form>
          ))}
        </div>
        <button type="button" className="view" onClick={toggle}>
        {title}
      </button>
      </div>
     
      <br />
      <div className="header_b1">
            {" "}
            Best Gynaecologist Doctors{" "}
            <span style={{ color: "#C68643" }}>in Hyderabad :</span>{" "}
          </div>
      
    </>
  );
};

export default PrivateServices;
