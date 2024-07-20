import React, { useState } from 'react';
import "./GovermentServices.css"
import GovermentSchool from "./assets/government_school.png";
import GovermentHostels from "./assets/govermentHostels.png";
import GovermentCollege from  "./assets/govtCollege.png";
import GovermentHospital from  "./assets/govtHospital.png";
import GovermentAdvocate from  "./assets/govtadvocate.png";
import GovermentParks    from "./assets/govtparks.png";
import Mro from "./assets/MRO.png";
import Vra from "./assets/VRA.png";
import Rto from "./assets/Rto.png";
import Stadium from "./assets/stadium.png";
import Registration from "./assets/registration.png";
import Panchayati from "./assets/panchayati.png"

const GovermentServices = ({handleClick}) => {
    const [title1, setTitle1] = useState("view more \u2193");
    const [show1, setShow1] = useState("d-none");
    const [isVisible1, setIsVisible1] = useState(false);
    // const [isVisibleDoctor, setIsVisibleDoctor] = useState(false);
    // const [Doctor,setDoctor]= useState("d-none");
    // const [Governmentservice, setGovermentService] = useState("All Service ");

    // let handleClick = (newserviceName) => { 
    //     setGovermentService(newserviceName);
    //   };
      // const doctor = ()=>{
      //   if(isVisibleDoctor){
      //     setDoctor("d-none")
      //   }
      //   else{
      //     setDoctor("d-flex")
      //   }
      //   setIsVisibleDoctor(!isVisibleDoctor)
      // }
     
      const toggle = () => {
        if (isVisible1) {
          setTitle1("view more \u2193");
          setShow1("d-none");
        } else {
          setTitle1("view less \u2191");
          setShow1("d-flex");
        }
        setIsVisible1(!isVisible1);
      };
  return (
    <>
   <div className="header_b1"> Government <span style={{color:"#C68643"}}> Organizations :</span></div>
   <br />
    <div className='goverment_services'>
        <br />
        <div className='govermentServices_row1'>
            <div onClick={() => handleClick("Goverment school")}><input   type="radio" name="lang" id="lang-29" className="radio" /><label htmlFor="lang-29" className="lable label-29" id='g'><img className='services_img'  src={GovermentSchool} alt="" />Goverment school </label> </div>
            <div onClick={() => handleClick("Goverment Hostels")} ><input type="radio" name="lang" id="lang-30" className="radio" /><label htmlFor="lang-30" className='lable label-30' id='g'><img className='services_img' src={GovermentHostels} alt="" />Goverment Hostels</label> </div>
            <div onClick={() => handleClick("Goverment College")} ><input type="radio" name="lang" id="lang-31" className="radio" /><label htmlFor="lang-31" className='lable label-31' id='g'><img className='services_img' src={GovermentCollege} alt="" />Goverment College</label> </div>
            <div onClick={() => handleClick("Goverment Hospital")} ><input type="radio" name="lang" id="lang-32" className="radio" /><label htmlFor="lang-32" className='lable label-32' id='g'><img className='services_img' src={GovermentHospital} alt="" />Goverment Hospital</label> </div>
            <div onClick={() => handleClick("Goverment Advocate")} ><input type="radio" name="lang" id="lang-33" className="radio" /><label htmlFor="lang-33" className='lable label-33' id='g'><img className='services_img' src={GovermentAdvocate} alt="" />Goverment Advocate</label> </div>
            <div onClick={()=>handleClick(" ")} ><input type="radio" name="lang" id="lang-35" className="radio" /><label htmlFor="lang-35" className='lable label-35' id='g'><img className='services_img' src={Mro} alt="" /> M.R.O Office</label>  </div>
        </div>
        
        <div className={show1} id='govermentServices_row2'>
            
            <div onClick={() => handleClick("Goverment Park")} ><input type="radio" name="lang" id="lang-34" className="radio" /><label htmlFor="lang-34" className='lable label-34' id='g'><img className='services_img' src={ GovermentParks } alt="" />Goverment Park</label> </div>
            <div onClick={()=>handleClick(" ")} ><input type="radio" name="lang" id="lang-36" className="radio" /><label htmlFor="lang-36" className='lable label-36' id='g'><img className='services_img'  src={Vra} alt="" /> V.R.O Office</label>  </div>
            <div onClick={()=>handleClick(" ")} ><input type="radio" name="lang" id="lang-37" className="radio" /><label htmlFor="lang-37" className='lable label-37' id='g'><img className='services_img' src={Rto} alt="" />  R.T.O <br /> Office</label>  </div>
            <div onClick={()=>handleClick(" ")} ><input type="radio" name="lang" id="lang-38" className="radio" /><label htmlFor="lang-38" className='lable label-38' id='g'><img className='services_img' src={Stadium} alt="" />Goverment Stadium</label>  </div>
            <div onClick={()=>handleClick(" ")} ><input type="radio" name="lang" id="lang-39" className="radio" /><label htmlFor="lang-39" className='lable label-39' id='g'><img className='services_img' src={Registration} alt="" />Registration Office</label>  </div>
            <div onClick={()=>handleClick(" ")} ><input type="radio" name="lang" id="lang-40" className="radio" /><label htmlFor="lang-40" className='lable label-40' id='g'><img className='services_img' src={Panchayati} alt="" />Panchayati Raj Office</label>  </div>
        </div>
        <br />
        
    </div>
   
    <button type="button" className="view" onClick={toggle}>
      {title1}
    </button>
    <br />
    {/* <br />
    <div className="header_b1" style={{ textTransform: "uppercase" }}>
        categories of {Governmentservice}{" "}
      </div>
    <br /> */}
   
    </>
  )
}

export default GovermentServices