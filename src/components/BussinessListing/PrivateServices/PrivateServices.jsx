import React, { useState } from "react";
import Ambulencelogo from "../assets/ambulence.png";
import Doctor from "../assets/doctor.png";
import PoliceMan from "../assets/police.png";
import Lawyer from "../assets/lawyer.png";
import Accountent from "../assets/accountent.png";
import Secretray from "../assets/Secretary.png";
import SoftwareGuy from "../assets/softeware_guy.png";
import Atm from "../assets/atm.png";
import Tempule from "../assets/temple.png";
import Pandit from "../assets/Poojary.png";
import Automobile from "../assets/Automobile.png";
import SuperMarket from "../assets/SuperMarkets.png";
import MedicalShop from "../assets/MedicalShops.png";
import DigitalMarket from "../assets/DigitalMarke.png";
import Hotels from "../assets/Hostels.png";
import Fruitsshop from "../assets/fruiteshop.png";
import Toys from "../assets/toyshop.png";
import Cloths from "../assets/clothshop.png";
import Mobileshop from "../assets/mobieshop.png";
import Stationary from "../assets/StationaryShop.png";
import Liqour from "../assets/LiquorShops.png";
import Saloon from "../assets/saloon.png";
import Beauty from "../assets/Beautyparlour.png";
import Theartre from "../assets/Therater.png";
import Hotel from "../assets/Hotels&Restaurants.png";
import Pubs from "../assets/Pubs.png";
import Petrol from "../assets/PetrolPumps.png";
import ShoppingMall from "../assets/Shopping Mall.png";
import "../PrivateServices/PrivateServices.css";

const PrivateServices = ({handleClick}) => {
  const [title, setTitle] = useState("view more  \u2193");
  const [show, setShow] = useState("d-none");
  const [isVisible, setIsVisible] = useState(false);
  // const [privateservice, setPrivateService] = useState("All Service ");
  // let handleClick = (newserviceName) => {
  //   setPrivateService(newserviceName);
  // };

  const toggle = () => {
    if (isVisible) {
      setTitle("view more \u2193");
      setShow("d-none");
    } else {
      setTitle("view less \u2191");
      setShow("d-flex");
    }
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div>
        <div className="header_b1">Private <span style={{color:"#C68643"}}> Organizations :</span></div>
        <br />
        <div className="public_services">
          <div className="private_list1">
            <button
              className="services_btn"
              onClick={() => handleClick("Ambulance")}
            >
              <input type="radio" name="lang" id="lang-1" className="radio" />

              <label
                htmlFor="lang-1"
                className="lable label-1"
                id="lableprivateservice"
              >
                <br />
                <img
                  className="serviceLogoBackground"
                  src={Ambulencelogo}
                  alt=""
                />
                <br />
                Ambulance
              </label>
            </button>



            <button
              className="services_btn"
              onClick={() => handleClick("Doctor")}
            >
              <input type="radio" name="lang" id="lang-2" className="radio" />

              <label
                htmlFor="lang-2"
                className="lable label-2"
                id="lableprivateservice"
              >
                <br />
                <img className="serviceLogoBackground" src={Doctor} alt="" /><br />
                Hospitals
              </label>
            </button>
            <button
              className="services_btn"
              onClick={() => handleClick("Lawyer")}
            >
              <input type="radio" name="lang" id="lang-3" className="radio" />
              <label
                htmlFor="lang-3"
                className="lable label-3"
                id="lableprivateservice"
              >
                <br />
                <img className="serviceLogoBackground" src={Lawyer} alt="" />
                <br />
                Lawyers
              </label>
            </button>
            <button
              className="services_btn"
              onClick={() => handleClick("Police")}
            >
              <input type="radio" name="lang" id="lang-4" className="radio" />
              <label
                htmlFor="lang-4"
                className="lable label-4"
                id="lableprivateservice"
              >
                <img
                  className="serviceLogoBackground"
                  src={PoliceMan}
                  alt=""
                  style={{ marginTop: "17px" }}
                />
                <br />
                Police <br />station
              </label>
            </button>
            <button
              className="services_btn"
              onClick={() => handleClick("Accountent")}
            >
              <input type="radio" name="lang" id="lang-5" className="radio" />
              <label
                htmlFor="lang-5"
                className="lable label-5"
                id="lableprivateservice"
              >
                <img
                  className="serviceLogoBackground"
                  src={Accountent}
                  alt=""
                  style={{ marginTop: "17px" }}
                />
                <br />
                Charted Accounts
              </label>
            </button>
            <button
              className="services_btn"
              onClick={() => handleClick("Company Secretary")}
            >
              <input type="radio" name="lang" id="lang-6" className="radio" />
              <label
                htmlFor="lang-6"
                className="lable label-6"
                id="lableprivateservice"
              >
                <img
                  className="serviceLogoBackground"
                  src={Secretray}
                  alt=""
                  style={{ marginTop: "17px" }}
                />
                <br />
                Company Secretary
              </label>
            </button>

          </div>

          <div className={show}>
           
            <div className="private_list2">
              <button
                className="services_btn"
                onClick={() => handleClick("Temples")}
              >
                {" "}
                <input type="radio" name="lang" id="lang-9" className="radio" />
                <label
                  htmlFor="lang-9"
                  className="lable label-9"
                  id="lableprivateservice"
                >
                  <br />
                  <img
                    className="serviceLogoBackground"
                    src={Tempule}
                    style={{ marginTop: "0px" }}
                    alt=""
                  />
                  <br />
                  Temples{" "}
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Bant & A.T.M")}
              >
                {" "}
                <input type="radio" name="lang" id="lang-8" className="radio" />
                <label
                  htmlFor="lang-8"
                  className="lable label-8"
                  id="lableprivateservice"
                >
                  <img className="serviceLogoBackground" src={Atm} alt="" />{" "} <br />
                  Bank & <br />A.T.M
                </label>
              </button>

              <button
                className="services_btn"
                onClick={() => handleClick("Poojary (Pandit")}
              >
                {" "}
                <input
                  type="radio"
                  name="lang"
                  id="lang-10"
                  className="radio"
                />
                <label
                  htmlFor="lang-10"
                  className="lable label-10"
                  id="lableprivateservice"
                >
                  <img className="serviceLogoBackground" src={Pandit} alt="" /><br />
                  Poojary (Pandit)
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Automobile Services")}
              >
                {" "}
                <input
                  type="radio"
                  name="lang"
                  id="lang-11"
                  className="radio"
                />
                <label
                  htmlFor="lang-11"
                  className="lable label-11"
                  id="lableprivateservice"
                >
                  <img
                    className="serviceLogoBackground"
                    src={Automobile}
                    alt=""
                  />
                  <br />
                  Automobile Service{" "}
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Super Markets")}
              >
                {" "}
                <input
                  type="radio"
                  name="lang"
                  id="lang-12"
                  className="radio"
                />
                <label
                  htmlFor="lang-12"
                  className="lable label-12"
                  id="lableprivateservice"
                >
                  <img
                    className="serviceLogoBackground"
                    src={SuperMarket}
                    alt=""
                  />
                  <br />
                  Super Markets{" "}
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Medical shops")}
              >
                {" "}
                <input
                  type="radio"
                  name="lang"
                  id="lang-13"
                  className="radio"
                />
                <label
                  htmlFor="lang-13"
                  className="lable label-13"
                  id="lableprivateservice"
                >
                  <img
                    className="serviceLogoBackground"
                    src={MedicalShop}
                    alt=""
                  />{" "} <br />
                  Medical Shops
                </label>
              </button>
             
            </div>

            
            <div className="private_list3">
              <button
                className="services_btn"
                onClick={() => handleClick("Hotels")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-15"
                  className="radio"
                />
                <label
                  htmlFor="lang-15"
                  className="lable label-15"
                  id="lableprivateservice"
                >
                  <br />
                  <img className="serviceLogoBackground" src={Hotels} alt="" /> <br />
                  Hostels
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Fruits Shop")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-16"
                  className="radio"
                />
                <label
                  htmlFor="lang-16"
                  className="lable label-16"
                  id="lableprivateservice"
                >
                  <br />
                  <img
                    className="serviceLogoBackground"
                    src={Fruitsshop}
                    alt=""
                  />  
                  <br />
                  Fruit Shops
                </label>
              </button>


              <button
                className="services_btn"
                onClick={() => handleClick("Toy Shops")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-17"
                  className="radio"
                />
                <label
                  htmlFor="lang-17"
                  className="lable label-17"
                  id="lableprivateservice"
                >
                  <br />
                  <img className="serviceLogoBackground" src={Toys} alt="" />
                  <br />
                  Toy Shops
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Cloths Shops")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-18"
                  className="radio"
                />
                <label
                  htmlFor="lang-18"
                  className="lable label-18"
                  id="lableprivateservice"
                >
                  <br />
                  <img className="serviceLogoBackground" src={Cloths} alt="" />
                  <br />
                  Cloth <br />Shops
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Mobile Shop")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-19"
                  className="radio"
                />
                <label
                  htmlFor="lang-19"
                  className="lable label-19"
                  id="lableprivateservice"
                >
                  <img
                    className="serviceLogoBackground"
                    src={Mobileshop}
                    alt=""
                  /> <br />
                  Mobile <br /> Stores
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Stationary shop")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-20"
                  className="radio"
                />
                <label
                  htmlFor="lang-20"
                  className="lable label-20"
                  id="lableprivateservice"
                >
                  <img
                    className="serviceLogoBackground"
                    src={Stationary}
                    alt=""
                  />
                  <br />
                  Stationary Shop
                </label>
              </button>
              
            </div>
      
            <div className="private_list4">
              <button
                className="services_btn"
                onClick={() => handleClick("Saloon")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-22"
                  className="radio"
                />
                <label
                  htmlFor="lang-22"
                  className="lable label-22"
                  id="lableprivateservice"
                >
                  <br />
                  <img className="serviceLogoBackground" src={Saloon} alt="" /> <br />
                  Saloon
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Theartre")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-23"
                  className="radio"
                />
                <label
                  htmlFor="lang-23"
                  className="lable label-23"
                  id="lableprivateservice"
                >
                  <br />
                  <img
                    className="serviceLogoBackground"
                    src={Theartre}
                    alt=""
                  /> <br />
                  Theatres
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Pubs")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-24"
                  className="radio"
                />
                <label
                  htmlFor="lang-24"
                  className="lable label-24"
                  id="lableprivateservice"
                >
                  <br />
                  <img className="serviceLogoBackground" src={Pubs} alt="" />
                  <br />
                  Pubs{" "}
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Beauty")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-25"
                  className="radio"
                />
                <label
                  htmlFor="lang-25"
                  className="lable label-25"
                  id="lableprivateservice"
                >
                  <img className="serviceLogoBackground" src={Beauty} alt="" /><br />
                  Beauty parlour{" "}
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Hotels & Restaurants")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-26"
                  className="radio"
                />
                <label
                  htmlFor="lang-26"
                  className="lable label-26"
                  id="lableprivateservice"
                >
                  <img className="serviceLogoBackground" src={Hotel} alt="" /><br />
                  Hotels & Restaurants
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Petrol")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-27"
                  className="radio"
                />
                <label
                  htmlFor="lang-27"
                  className="lable label-27"
                  id="lableprivateservice"
                >
                  <img className="serviceLogoBackground" src={Petrol} alt="" /> <br />
                  Petrol <br />Pumps
                </label>
              </button>

              
            </div>
            <div className="private_list4">
            <button
              className="services_btn"
              onClick={() => handleClick("Software Companies")}
            >
              <input type="radio" name="lang" id="lang-7" className="radio" />
              <label
                htmlFor="lang-7"
                className="lable label-7"
                id="lableprivateservice"
              >
                <img
                  className="serviceLogoBackground"
                  src={SoftwareGuy}
                  alt=""
                  style={{ marginTop: "17px" }}
                />
                <br />
                Software Companies
              </label>
            </button>
            <button
                className="services_btn"
                onClick={() => handleClick("Digital Market")}
              >
                {" "} 
                <input
                  type="radio"
                  name="lang"
                  id="lang-14"
                  className="radio"
                />
                <label
                  htmlFor="lang-14"
                  className="lable label-14"
                  id="lableprivateservice"
                >
                  <img
                    className="serviceLogoBackground"
                    src={DigitalMarket}
                    alt=""
                  /> <br />
                  Digital Market{" "}
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("Liquor shops")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-21"
                  className="radio"
                />
                <label
                  htmlFor="lang-21"
                  className="lable label-21"
                  id="lableprivateservice"
                >
                  <img className="serviceLogoBackground" src={Liqour} alt="" /> <br />
                  Liquor Shops
                </label>
              </button>
              <button
                className="services_btn"
                onClick={() => handleClick("ShoppingMall")}
              >
                <input
                  type="radio"
                  name="lang"
                  id="lang-28"
                  className="radio"
                />
                <label
                  htmlFor="lang-28"
                  className="lable label-28"
                  id="lableprivateservice"
                  style={{textAlign:"center"}}
                >
                  <img
                  style={{textAlign:"center"}}
                    className="serviceLogoBackground"
                    src={ShoppingMall}
                    alt=""
                  /> <br />
                  Shopping <br /> Mall
                </label>
              </button>
            </div>
          </div>
        </div>
        <button type="button" className="view" onClick={toggle}>
          {title}
        </button>
      </div>
      {/* <br />
      <div className="header_b1" style={{ textTransform: "uppercase" }}>
        categories of {privateservice}{" "}
      </div>
      <br /> */}
    </>
  );
};

export default PrivateServices;
