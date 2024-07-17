import React from 'react';
import HomeSlider from './Home_slider/Home_slider';
import Home_banner from './Home_slider/Frame 15.png';
import './home.css'; // Assuming you have a CSS file for styles
import HomeServicesSliders from './Home_services_sliders/HomeServicesSliders';
import "./Home_services_sliders/HomeServicesSliders.css"


const Home = () => {


  return (
    <div className="home-text">
      <div className="Home1">
        <div className="slider_services">
          <HomeSlider />
          <br />
        </div>
        <div><HomeServicesSliders/></div>
        <br />
          <div className="homebanners">
          <img className="homebanner" src={Home_banner} alt="Banner" />
        </div>
       
         
      </div>
    </div>
  );
};

export default Home;

