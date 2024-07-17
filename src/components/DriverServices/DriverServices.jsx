import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import DriverServiceProfile from '../../components/DriverServiceProfile/DriverServiceProfile';
import DriverServiceTableCard from '../../components/DriverServiceTableCard/DriverServiceTableCard';
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
                    id:"1",
                    name:"test",
                    pn:6745656766,
                    dob:"05/05/2000",
                    dl:53656566765,
                    noye:5,
                    ei:""
                } 


                const scrollRightfun1=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon1');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun1=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon1');
                    srdiv.scrollLeft -=180;
                   
                }






                const scrollRightfun2=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon2');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun2=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon2');
                    srdiv.scrollLeft -=180;
                   
                }







                const scrollRightfun3=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon3');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun3=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon3');
                    srdiv.scrollLeft -=180;
                   
                }





               
                const scrollRightfun4=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon4');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun4=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon4');
                    srdiv.scrollLeft -=180;
                   
                }


                const scrollRightfun5=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon5');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun5=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon5');
                    srdiv.scrollLeft -=180;
                   
                }

                const scrollRightfun6=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon6');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun6=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon6');
                    srdiv.scrollLeft -=180;
                   
                }


                const scrollRightfun7=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon7');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun7=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon7');
                    srdiv.scrollLeft -=180;
                   
                }
                  

                const scrollRightfun8=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon8');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun8=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon8');
                    srdiv.scrollLeft -=180;
                   
                }



                const scrollRightfun9=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon9');
                    srdiv.scrollLeft +=180;
                    
                }

                const scrollLeftfun9=(e)=>{
                    e.preventDefault();
                    let srdiv=document.getElementById('scrollcon9');
                    srdiv.scrollLeft -=180;
                   
                }


                

   
  return (
   <>
 
   <div style={{width:"950px"}} className='h-auto mx-auto'>
   <main className='w-100 h-auto  d-flex flex-column gap-3 align-items-center justify-content-start '>
    <header  className='w-100 h-auto mt-4 mb-3 d-flex flex-row justify-content-end align-items-center align-center justify-end'>
        <div className='p-3 d-flex flex-row align-items-center justify-content-center gap-3 shadow rounded-3'  
                style={{width: "430px",font:"19px",background: "#D7C3A4"}}> 
            <span style={{color: "#144273"}}>Driver Registration Form</span> 
            <button style={{width:"150px", height: "50px",background: "#144273" ,border:"0px", color:"#FFFFFF",padding:"12px" ,}} 
                    className='p-2 rounded text-center fw-bold rounded-3'>Click Here</button></div>
    </header>
    <section style={{textAlign: "justify"}} className='w-100 d-flex  flex-column '>
        <h1 style={{fontSize: "27",color:"#144273" }} className='fw-bold'>1. B2C [ Business to Customer ]</h1>
        <br />
        <br />
        <h2 className='fw-semibold mt-2 mb-2' style={{fontSize: "25px",color:"#144273"}}>a&#41;<u> Hire a Temporary  / Halting Drivers:</u></h2><br/>
        <p style={{fontSize: "16px", marginRight: "30px"}} >Explore Our Services & Book a Driver <br />
            Rubia  offers top-notch car driver services for all your needs. Whether it’s a daily commute, an airport
            transfer, or a special occasion, we have the right driver for you.</p>
        <div>
            <ol>
                <li>Download the RUBIA App</li>
                <br></br>
                <ul style={{listStyle:"disc"}}>
                    <li>Available on the App Store and Google Play.</li>
                    <li><a href="#">Download for iOS</a> | <a href="#">Download for Android</a></li>
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
            <button style={{ padding:"10px",width:"234px",height:"50px" ,background:"#144273" , color:"#FFF"}} className='rounded-3'>Download Rubia App</button>
        </div>
    </section>

    <section className='w-60 d-flex justify-content-center align-items-center'>
        <DriverServiceTableCard amtTableObj={amtTableObj} />
    </section>
      <br></br>
    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>b&#41; <u>Hire a Permanent / montly Drivers:</u></h2><br></br>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0", cursor:"pointer",behavior: "smooth"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun1}  id="scrollR" color='#FFF' size="3em" />
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden",behavior: "smooth"}} id='scrollcon1' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer" ,behavior: "smooth"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos   onClick={scrollRightfun1}  id="scrollR" color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section style={{ textAlign: "justify",background:"#FFF9F3", }} className='w-100 h-auto d-flex  flex-column p-2 mt-5'>
        <br></br>
        <h1 style={{font: "27",color:"#144273" }} className='fw-bold'>2. B2B [ Business to Business ]</h1>
        <br /><br />
        <p style={{font: "16px", marginRight: "30px"}} >
        <b style={{color:"#144273"}}>Introduction:</b> Explain the services offered specifically for software companies, servicing centers, and used vehicle dealerships.</p>
        <div>
            <h5 style={{color:"#144273"}} className='fw-bold'>Detailed Services Sections:</h5><br></br>
            <ul style={{color:"#144273"}}>
                <li><b >For Software Companies:</b> <label style={{color:"#212529"}}>Emphasize driver reliability and scheduling flexibility.</label></li>
                <li><b >For Servicing Centers:</b> <label style={{color:"#212529"}}>Highlight customer satisfaction and prompt services.</label></li>
                <li><b >For Used Vehicle Dealerships:</b> <label style={{color:"#212529"}}>Focus on safe and timely vehicle transportation.</label></li>
            </ul>
        </div>
        <br></br>
        <div className='w-100 d-flex flex-row justify-content-between align-item-center'>
            <button className='rounded-2 fw-bold' style={{height:"49px" ,border:"none" ,background: "#C68643",color: "#FFF" ,padding:"10px 10px",fontSize:"20px"}}>BUSINESS ENTITY LOGIN</button>
            <button className='rounded-2 fw-bold' style={{height:"47px" ,border:"none" ,background: "#144273",color: "#FFF" ,padding:"10px 10px"}}>Contact us for more details</button>
        </div>
    </section>

    <section style={{ textAlign: "justify",background:"#FFF9F3"}} className='w-100 h-auto d-flex  flex-column p-2 mt-5'><br></br>
        <h1 style={{font: "27",color:"#144273" }} className='fw-bold'>3. Valet Parking Drivers</h1>
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
            <button className='rounded-2 fw-bold' style={{height:"47px" ,border:"none" ,background: "#144273",color: "#FFF" ,padding:"10px 10px"}}>Contact us for more details:</button>
        </div>
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h1 style={{font: "27",color:"#144273",textAlign:"left" }} className='w-100 fw-bold mt-5'>4. Commercial Vehicle Divers:</h1>
        <h2 className='w-100 fw-semibold mt-2 mb-3' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>a&#41;<u>Bus Drivers:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer",behavior: "smooth"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun2} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}}  id='scrollcon2' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer",behavior: "smooth"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos onClick={scrollRightfun2} color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold mt-3 mb-3' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>b&#41;<u> Lorry / Truck Drivers:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer",behavior: "smooth"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun3} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}} id='scrollcon3' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer",behavior: "smooth"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  onClick={scrollRightfun3} color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>
    

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold mt-3 mb-3' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>c&#41; <u>JCB Drivers / Operators:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4  '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"33px",height: "400px",zIndex:"1",border:"2px soldi black" }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"12px", height:"90px", background:"#FFD0A0",cursor:"pointer",}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun4} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden",scrollBehavior: "smooth", }} id='scrollcon4' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px",height: "400px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  onClick={scrollRightfun4}   id="scrollR" color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>


    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>d&#41; <u>Crane Drivers / Operators:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun5} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}} id='scrollcon5' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos onClick={scrollRightfun5}  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>e&#41;<u> Tractor Drivers:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun6} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}} id='scrollcon6' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos onClick={scrollRightfun6}  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>
    
    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>f&#41;<u> Agriculture / Forming Machinery Drivers:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun7} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}} id='scrollcon7' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos onClick={scrollRightfun7} color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>g&#41;<u> Ambulance Driver:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun8} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}} id='scrollcon8' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos onClick={scrollRightfun8}  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5 mb-5'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>h&#41; <u>Trailers Driver:</u></h2>
        <div className='w-100 d-flex flex-row justify-content-start align-item-center gap-5 mt-5'>
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

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100  container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"30px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"45px", marginLeft:"14px", height:"90px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos onClick={scrollLeftfun9} color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"hidden",overflowY:"hidden"}} id='scrollcon9' className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"30px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"45px", height:"90px",marginLeft:"20px", background:"#FFD0A0",cursor:"pointer"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos onClick={scrollRightfun9}  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

   </main>
   </div>
   </>
  )
}

export default DriverServices