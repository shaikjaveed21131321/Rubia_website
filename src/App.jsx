import React from "react";
import Rightside from "./components/Rightside/rightside";
import Applink from "./components/AppLinks/applink";
import Footer from "./components/footer/footer";
import Router from "./components/routing/routing";
import "./components/graphicdesiging/graphic.css";
import "./components/leftside/leftside.css";
import "./components/Rightside/rightside.css";
import "./components/Home/home.css"
import "./components/footer/footer.css";
import "./components/mediaQuerys/media.css";

import "./components/AppLinks/applink.css";
import "./components/Contact/contact.css";
import "./components/Home/Home_slider/Home_slider.css";
import "./components/nav/nav.css";
import "./components/software/software.css";
import "./components/uiux/UiUx.css"
import "./components/taxi/taxi.css"
import "./components/About/about.css"
import "./components/Digital_marketing/DigitalMarketing.css"
import "./components/DriverServices/DriverServices.css"
import "./components/ServiceCard/ServiceCard.css"
import "./components/Job_portal/jobPortal.css"
import "./components/realstate/realstate.css"
import "./components/nav/nav.css"
import "./components/BussinessListing/Bregistration/Bregistration.css"


function App() {
  return (
   <>
  <Rightside/>
  {/* <div className='about_text  '>
  <div className='about1 '> */}
   <Router/>
   {/* </div>
   </div> */}
   <Applink/>
   <Footer/>
  
   
   
   </>
  );
}

export default App;
