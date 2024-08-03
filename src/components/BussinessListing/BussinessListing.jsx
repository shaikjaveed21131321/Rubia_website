import React, { useEffect, useState } from "react";
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
import BussinessLIstingCard from "./BussinessListingCard/BussinessLIstingCard";
import axios from 'axios'

const BussinessListing = () => {


  const [business, setBusiness] = useState({}); 

  const fetchBusiness = async () => { 
    try {
      const config = {
        method: 'get',
        maxBodyLength: Infinity, 
        url: `${process.env.REACT_APP_BASE_URL}/business/get`,
        headers: {},
      };

      const response = await axios.request(config);

      setBusiness(response.data);
      
    } catch (error) {
      console.error(error); 
    }
  };

  useEffect(() => {
    fetchBusiness(); 
  }, []);

  console.log(business.data);

  for (let index = 0; index < business.length; index++) {
    const element = business.data[index];
    console.log(element);
  }
  
 
  
  // const [Allservice, setAllService] = useState("All Service ");
  // const [CurrentPage, setCurrentPage]=useState('PrivateServices');
 
  // const renderpage = () =>{
  //   switch(CurrentPage){
  //     case 'PrivateServices':  
  //       return <PrivateServices/>;
  //     case 'GovermentServices':
  //       return <GovermentServices/>;
  //   }
  // }
  // let handleClick = (newserviceName) => {
  //   setAllService(newserviceName);
  // };
  const [selected, setSelected] = useState('PrivateServices');

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
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
            

              <Link
                style={{
                  color: "#144273",
                  borderRadius: "8px",
                  
                  alignContent: "center",
                }}
                className="btn_main3"
                to="/Bregistration/"
              >
                <img src={Profileicon} alt="" className="profileicon" />
                
                  Make Your Bussiness List
                
              </Link>
            </div>
          </div>
{/* searchbtn_mobile */}
          <div className="searchbar_mobile">
            <div className="searchbar_mobile1">
              <input type="search" placeholder="Search Location"   />
            
              <input type="search" placeholder="Search for Service" />
            </div>

            <div className="searchbar_mobile2">
              <Link to="/Bregistration/"><button>Make Your Bussiness List</button></Link>
            </div>
          </div>
{/* searchbtn_mobile */}
          
          <div className="bussiness_banner">
            <Carousel interval={1500} id="bussinessbanner">
              <Carousel.Item>
                <img
                  src={BussinessBanner}
                  alt=""
                  className="bussiness_banner1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={BussinessBanner1}
                  alt=""
                  className="bussiness_banner1"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
          {/* <div>
            <div className="bsn_btn_container">
           <button className="bsn_pvt_btn" onClick={()=> setCurrentPage('PrivateServices')}>For <br /> PrivateServices <br /> Click Here</button>
           <button className="bsn_govt_btn" onClick={()=> setCurrentPage('GovermentServices')}> GovermentServices</button>
           </div>
           <br />
           <br />
           <div>
            {renderpage()}
           </div>
          </div> */}
          <div className="bsn-main-container">
      <div  className="bsn_btn_container">
        <label id="bsn_pvt_btn" className={`radio-label ${selected === 'PrivateServices' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="content"
            value="PrivateServices"
            checked={selected === 'PrivateServices'}
            onChange={handleRadioChange}
            
          />
          PrivateServices
        </label>
        <label id="bsn_govt_btn" className={`radio-label ${selected === 'GovermentServices' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="content"
            value="GovermentServices"
            checked={selected === 'GovermentServices'}
            onChange={handleRadioChange}
            
          />
          GovermentServices
        </label>
      </div><div className="content">
        {selected === 'PrivateServices' && <PrivateServices />}
        {selected === 'GovermentServices' && <GovermentServices />}
      </div>
    </div>
          <br />
          {/* <div className="header_b1" style={{ textTransform: "uppercase" }}>
            categories of <span style={{ color: "#C68643" }}></span>
          </div>
          <br />
          <Categorie />
          <br />
          <div className="header_b1">
            {" "}
            Best Gynaecologist Doctors{" "}
            <span style={{ color: "#C68643" }}>in Hyderabad :</span>{" "}

          </div>
                
     
                
            <BussinessLIstingCard myArray={business.data}/>

          </div> */}
            <BussinessLIstingCard  myArray={business.data}/>

          <div className="bussiness_banner">
            <img src={Bussinessbanner2} alt="" className="Bussinessbanner2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessListing;
