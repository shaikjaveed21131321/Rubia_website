import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../BussinessListing/BussinessListing.css";
import Locationicon from "./assets/locationicon.png";
import Searchicon from "../BussinessListing/assets/searchicon.png";
import Profileicon from "./assets/profileicon.png";
import BussinessBanner from "./assets/bussiness_banner.png";
import Bussinessbanner2 from "./assets/bussinessnbanner.png";
import BussinessBanner1 from "./assets/bussiness_banner1.png";
import { Link } from "react-router-dom";
import PrivateServices from "./PrivateServices/PrivateServices";
import GovermentServices from "./GovermentServices/GovermentServices";
import Categorie from "./Categories/categorie";
import MobileNavagitor from "./assets/Business List_5.png"

const BussinessListing = () => {
  // const [isVisibleDoctor, setIsVisibleDoctor] = useState(false);
  // const [Doctor,setDoctor]= useState("d-none");
  const [Allservice, setAllService] = useState("All Service ");
  // const doctor = ()=>{
  //   if(isVisibleDoctor){
  //     setDoctor("d-none")
  //   }
  //   else{
  //     setDoctor("d-flex")
  //   }
  //   setIsVisibleDoctor(!isVisibleDoctor)
  // }
  let handleClick = (newserviceName) => { 
      setAllService(newserviceName);
    };
  return (
    <>
      <div className="BussinessListingText">
        <div className="BussinessListing1">
          <div className="searchbar">
            <img src={Locationicon} alt="" className="locationicon" />
            <input
              className="searchbars1"
              type="text"
              name="location"
              id="location"
              placeholder="search your location"
            />
            <input
              className="searchbars2"
              type="text"
              name=""
              id="searchservice"
              placeholder="  search for service"
            />
            <button type="submit" className="searchbtn">
              <img src={Searchicon} alt="" />
            </button>
            <div className="BussinessListing_btn">
              {/* <button className="btn_main2" type="submit">
                <img src={Registationicon} alt="" />
                <span className="btn_id" style={{ color: "#144273" }}>
                  register
                </span>
              </button> */}

              <Link style={{ color: "#144273" ,borderRadius:"8px",border:"#144273",alignContent:"center"}} className="btn_main3" to="/Bregistration/">
                <img src={Profileicon} alt="" className="profileicon" />
                <span className="bussiness_btn" style={{ color: "#144273" ,borderRadius:"8px",border:"#144273"}}>
                  Make Your Bussiness List
                </span>
              </Link>
            </div>
          </div>
          <div className="bussiness_banner">
            <Carousel interval={1500} id="bussinessbanner">
              <Carousel.Item>
                <img
                  src={BussinessBanner}
                  alt=""
                  className="bussiness_banner"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={BussinessBanner1}
                  alt=""
                  className="bussiness_banner"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
              < PrivateServices handleClick={handleClick} />
              <br />
              <GovermentServices handleClick={handleClick} />
              <br />
    <div className="header_b1" style={{ textTransform: "uppercase" }}>
        categories of <span style={{color:"#C68643"}}>{Allservice}</span>
      </div>
    <br />
    <Categorie/>
          <br />
          <div className="header_b1"> Best Gynaecologist Doctors  <span style={{color:"#C68643"}}>in Hyderabad :</span>  </div>
          
                <div className="navagition">
                  
                  <div className="navagition_1">
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
              
                  </div>
                  <div className="navagition_2">
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  <div className="navagition1"><img className="navagition_img" src={MobileNavagitor} alt="" /></div>
                  </div>
                 
                  
                 
                </div>
          <div className="bussiness_banner">
            <img src={Bussinessbanner2} alt="" className="Bussinessbanner2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessListing;
