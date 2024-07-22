import React,{ useEffect, useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import DriverServiceProfile from '../../components/DriverServiceProfile/DriverServiceProfile';
import DriverServiceTableCard from '../../components/DriverServiceTableCard/DriverServiceTableCard';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';


const DriverServices = () => {


    const amtTableObj = {
        id:1,
        incity:{
            oneway:{
                bt:"1hr",
                bf:300,
                em:"₹3 per min",
                nc:200,
                rc:"",

            },
            roadtrip:{
                bt:"2hr",
                bf:260,
                em:"₹2 per min",
                nc:200,
                rc:"",

            },
            
        },
        outstation:{
            oneway:{
                bt:"3hr",
                bf:900,
                em:"₹3 per min",
                nc:0,
                rc:1000 +"  + Food & Accomodation",

            },
            roadtrip:{
                bt:"4hr",
                bf:900,
                em:"₹1 per min",
                nc:500,
                rc:"Food & Accomodation",

            },
        }
    }


    const detailsObj=  {
        name:"Kaza Veera Sudhakara rao",
        pn:"8978345314 8978345314",
        dob:"23/07/1991",
        dln:"AP70720130001146",
        noye:"5 Years",
        trantyp:"Manual,A.M.T",
        vehtyp:"Hatchback, SUV"
    } 
    
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
    
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    
    }, []);
    

   
  return (
   <>
 
   <div style={{minWidth:"510px" , width:"65%" ,margin:"auto",overflowX:"hidden" }} className='container h-auto px-3'>
   <main className='w-100 h-auto  d-flex flex-column gap-3 align-items-center justify-content-start '>
    <header  className='w-100 h-auto mt-4 mb-3 d-flex flex-row justify-content-end align-items-center align-center justify-end'>
        <div className='p-3 d-flex flex-row align-items-center justify-content-center gap-3 shadow rounded-3'  
                style={{width: "430px",font:"19px",background: "#D7C3A4"}}> 
            <span style={{color: "#650000"}}>Driver Registration Form</span> 
            <Link to='/DriverRegister/' style={{width:"150px", height: "50px",background: "#650000" ,border:"0px", color:"#FFFFFF",padding:"12px" ,}} 
                    className='p-2 rounded text-center fw-bold rounded-3'>Click Here</Link></div>
    </header>
    <section style={{textAlign: "justify"}} className='w-100 d-flex  flex-column '>
        <h1 style={{fontSize: "27",color:"#650000" }} className='fw-bold'>1. B2C [ Business to Customer ]</h1>
        <br />
        <br />
        <h2 className='fw-semibold mt-2 mb-2' style={{fontSize: "25px",color:"#650000"}}>a&#41;<u> Hire a Temporary  / Halting Drivers:</u></h2><br/>
        <p style={{fontSize: "16px", marginRight: "30px"}} >Explore Our Services & Book a Driver <br />
            Rubia  offers top-notch car driver services for all your needs. Whether it’s a daily commute, an airport
            transfer, or a special occasion, we have the right driver for you.</p>
        <div>
            <ol>
                <li>Download the RUBIA App</li>
                <br></br>
                <ul style={{listStyle:"disc"}}>
                    <li>Available on the App Store and Google Play.</li>
                    <li><a href="https://apps.apple.com/in/app/rubia/id6459829353" target='blank'><button className='btn btn-primary w-auto d-btn-d'>Download for iOS</button></a>  <a href="https://play.google.com/store/apps/details?id=com.rubia.user&pcampaignid=web_share " target='blank'><button className='btn btn-primary w-auto d-btn-d'>Download for Android</button></a></li>
                </ul>
                <br></br>
                <li>Sign Up & Book a Driver</li>
                <br></br>
                <ul style={{listStyle:"disc"}}>
                    <li>Easy registration process.</li>
                    <li>Choose your ride, select your driver, and confirm your booking.</li>
                </ul>
                <br></br>
                <li>Driver Payment by the Hour</li>
                <br></br>
                <ul style={{listStyle:"disc"}}>
                    <li>Transparent hourly rates.</li>
                    <li>Pay only for the time you use.</li>
                </ul>
            </ol>
        </div>
    </section>

    <section className='w-100 d-flex flex-row justify-content-evenly align-items-center text-center m-3'>
        <div className='d-flex  justify-content-center align-items-center pt-2 text-start '>
            <p style={{font: "16px"}}>
            <b>Download the App Now! <br />
            Experience the convenience and reliability of Ride.</b>
            </p>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center '>
        <a href="https://play.google.com/store/apps/details?id=com.rubia.user&pcampaignid=web_share " target='_blank'><button style={{ padding:"10px",width:"234px",height:"50px" ,background:"#650000" , color:"#FFF"}} className='rounded-3'>Download Rubia App</button></a>
        </div>
    </section>

    <section className='w-60 d-flex justify-content-center align-items-center'>
        <DriverServiceTableCard amtTableObj={amtTableObj} />
    </section>
      <br></br>
    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>b&#41; <u>Hire a Permanent / montly Drivers:</u></h2><br></br>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>

    <section style={{ textAlign: "justify",background:"#FFF9F3", }} className='w-100 h-auto d-flex  flex-column p-2 mt-5'>
        <br></br>
        <h1 style={{font: "27",color:"#650000" }} className='fw-bold'>2. B2B [ Business to Business ]</h1>
        <br /><br />
        <p style={{font: "16px", marginRight: "30px"}} >
        <b style={{color:"#650000"}}>Introduction:</b> Explain the services offered specifically for software companies, servicing centers, and used vehicle dealerships.</p>
        <div>
            <h5 style={{color:"#650000"}} className='fw-bold'>Detailed Services Sections:</h5><br></br>
            <ul style={{color:"#650000"}}>
                <li><b >For Software Companies:</b> <label style={{color:"#212529"}}>Emphasize driver reliability and scheduling flexibility.</label></li>
                <li><b >For Servicing Centers:</b> <label style={{color:"#212529"}}>Highlight customer satisfaction and prompt services.</label></li>
                <li><b >For Used Vehicle Dealerships:</b> <label style={{color:"#212529"}}>Focus on safe and timely vehicle transportation.</label></li>
            </ul>
        </div>
        <br></br>
        <div className='w-100 d-flex flex-row justify-content-between align-item-center'>
            <button className='rounded-2 fw-bold' style={{height:"49px" ,border:"none" ,background: "#C68643",color: "#FFF" ,padding:"10px 10px",fontSize:"20px"}}>BUSINESS ENTITY LOGIN</button>
            <button className='rounded-2 fw-bold' style={{height:"47px" ,border:"none" ,background: "#650000",color: "#FFF" ,padding:"10px 10px"}}>Contact us for more details</button>
        </div>
    </section>

    <section style={{ textAlign: "justify",background:"#FFF9F3"}} className='w-100 h-auto d-flex  flex-column p-2 mt-5'><br></br>
        <h1 style={{font: "27",color:"#650000" }} className='fw-bold'>3. Valet Parking Drivers</h1>
        <br /><br />
        <ul style={{listStyle:"none"}}>
            <li >-Pubs</li>
            <li>-Hospitals</li>
            <li>-Restaurant</li>
            <li>-Showrooms</li>
            <li>-Hotels</li>
            <li>-Functions/Party</li>
            <li>-Businesses</li>
        </ul>
        <div  className='w-100 d-flex flex-row justify-content-end align-item-center'>
            <button className='rounded-2 fw-bold' style={{height:"47px" ,border:"none" ,background: "#650000",color: "#FFF" ,padding:"10px 10px"}}>Contact us for more details:</button>
        </div>
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h1 style={{font: "27",color:"#650000",textAlign:"left" }} className='w-100 fw-bold mt-5'>4. Commercial Vehicle Divers:</h1>
        <h2 className='w-100 fw-semibold mt-2 mb-3' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>a&#41;<u>Bus Drivers:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold mt-3 mb-3' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>b&#41;<u> Lorry / Truck Drivers:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>
    

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold mt-3 mb-3' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>c&#41; <u>JCB Drivers / Operators:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>


    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>d&#41; <u>Crane Drivers / Operators:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>e&#41;<u> Tractor Drivers:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>
    
    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>f&#41;<u> Agriculture / Forming Machinery Drivers:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>g&#41;<u> Ambulance Driver:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5 mb-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#650000"}}>h&#41; <u>Trailers Driver:</u></h2>
        <div  className='w-100 d-flex flex-wrap flex-row justify-content-start align-item-center gap-3 gap-lg-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 
        <section style={{width:"100%", height:"100%",background:"#FFD0A0", margin: " 20px auto", padding:"10px" }} className=' container swiper rounded-4 '>
        
        <div style={{width:"100%",height:"100%"}} className="  swiper mx-auto">
      <Swiper
        slidesPerView={(width < 576)? 2 :(width < 992)?3:(width < 1200)?3:4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 h-100">
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
        <SwiperSlide><DriverServiceProfile detailsObj={detailsObj} /></SwiperSlide>
      </Swiper>
      </div>
        </section> 
    </section>
        <script src="./script.js"></script>
   </main>
   </div>
   </>
  )
}

export default DriverServices