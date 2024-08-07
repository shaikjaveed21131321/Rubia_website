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
import Cookies from 'universal-cookie';

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

  const cookie = new Cookies();
  const jwttoken = cookie.get('jwttoken')
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
              {(!jwttoken || jwttoken===undefined)?<Link to="/profile/"><button>Make Your Bussiness List</button></Link>:<Link to="/Bregistration/"><button>Make Your Bussiness List</button></Link>}
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

          <div className="bussiness_banner1">
           <div className="bussiness_banner_img">
            <img src={Bussinessbanner2} alt="" />
           </div>
           <div className="bussiness_banner_text">
            <p className="bussiness_banner_text_header">Welcome to Rubia Listings: Your Gateway to Business Success</p>
            <p className="bussiness_banner_text_content">Are you looking to boost your business's visibility and attract more customers? Look no further! Rubia Listings offers a comprehensive platform for posting and searching business listings, tailored to meet your unique needs.</p>
           <p className="bussiness_banner_text_header">Why Choose Rubia Listings?</p>
           <p className="bussiness_banner_text_content"><span style={{fontSize:"12px",fontWeight:"600"}}>Easy Posting:</span> Effortlessly post your business information with our user-friendly interface. Add details like your business name, description, location, contact information, and more.</p>
           <p className="bussiness_banner_text_content"><span style={{fontSize:"12px",fontWeight:"600"}}>Enhanced Visibility:</span> Our platform ensures your business is seen by a wide audience, increasing your chances of attracting new customers and growing your client base.</p>
           <p className="bussiness_banner_text_content"><span style={{fontSize:"12px",fontWeight:"600"}}>Advanced Search:</span> Easily search for businesses by category, location, or keywords. Find the services you need quickly and efficiently.</p>
           <p className="bussiness_banner_text_content"><span style={{fontSize:"12px",fontWeight:"600"}}>SEO Optimization:</span> Our expert team uses the latest SEO techniques to ensure your business listing ranks high on search engines, driving more traffic to your profile.</p>
           <p className="bussiness_banner_text_content"><span style={{fontSize:"12px",fontWeight:"600"}}>Regular Updates:</span> Keep your business information up-to-date with our easy-to-use management tools. Make changes anytime to ensure your customers have the most accurate information.</p>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessListing;
