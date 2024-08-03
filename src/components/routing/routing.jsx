import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Nav from '../nav/nav'
import Leftside from "../leftside/leftside";
import Home from "../Home/home";
import Service from "../middlecontent/middlecontent";
import About from "../About/about";
import Contact from "../Contact/Contact";
import BussinessListing from '../BussinessListing/BussinessListing';
import Driver from "../DriverServices/DriverServices"
import Graphic from '../graphicdesiging/graphic';
import Software from '../software/software';
import UiUx from '../uiux/UiUx';
import Taxi from "../taxi/taxi";
import DigitalMarketing from "../Digital_marketing/DigitalMarketing";
import Realstate from '../realstate/realstate';
import JobPortal from '../Job_portal/jobPortal';
import Bregistration from '../BussinessListing/Bregistration/Bregistration';
import DriverRegister from '../DriverServices/DriverRegister'
import PrivateServices from '../BussinessListing/PrivateServices/PrivateServices';
import GovermentServices from '../BussinessListing/GovermentServices/GovermentServices';


const routing = () => {
  return (
   <>
   <BrowserRouter>
   <Leftside/>
  
   <Nav/>
   <ScrollToTop />
   <Routes>
    <Route path='/home/' element={<Home/>}/>
    <Route path='/service/' element={<Service/>}  />
    <Route path='/about/' element={<About/>}/>
    <Route path='/contact/' element={<Contact/>}/>
    <Route path='/businesslisting/' element={<BussinessListing/>}/>
    <Route path='/driver/' element={<Driver/>}/>
    <Route path='/taxi/' element={<Taxi/>}/>
    <Route path='/digital marketing/' element={<DigitalMarketing/>}/>
    <Route path='/graphic desiging/' element={<Graphic/>}/>
    <Route path='/software/' element={<Software/>}/>
    <Route path='ui/ux desigining/' element={<UiUx/>}/>
    <Route path='/job portal/' element={<JobPortal/>}/>
    <Route path='/real state/' element={<Realstate/>}/>
    <Route path='/Bregistration/' element={<Bregistration/>}/>
    <Route path='/driverregister/' element={<DriverRegister/>}/>
    <Route path='/privateservices/' element={<PrivateServices/> }/>
    <Route path='/govermentservices/' element={<GovermentServices/>}/>
   
   </Routes>
   </BrowserRouter>
   
   </>

  )
}

export default routing