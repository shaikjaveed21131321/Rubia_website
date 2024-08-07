import React from "react";
import Leftside from "./components/leftside/leftside";
import Rightside from "./components/Rightside/rightside";
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
import ReactGA from "react-ga4";

const TRACKING_ID = "G-SGVB46V3TC";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
   <>
   
   
   <Router/>
   
  </>
  )
}

export default App;
