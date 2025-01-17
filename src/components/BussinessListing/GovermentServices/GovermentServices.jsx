import React ,{useState}from 'react';
import "./GovermentServices.css"
// import GovermentSchool from "./assets/government_school.png";
// import GovermentHostels from "./assets/govermentHostels.png";
// import GovermentCollege from "./assets/govtCollege.png";
// import GovermentHospital from "./assets/govtHospital.png";
// import GovermentAdvocate from "./assets/govtadvocate.png";
// import GovermentParks from "./assets/govtparks.png";
// import Mro from "./assets/MRO.png";
// import Vra from "./assets/VRA.png";
// import Rto from "./assets/Rto.png";
// import Stadium from "./assets/stadium.png";
// import Registration from "./assets/registration.png";
// import Panchayati from "./assets/panchayati.png";
import Advocate from "./assets/Advocate.png"
import AgricultureColleges from"./assets/AgricultureColleges.png"
import AnimalHusbandry from "./assets/AnimalHusbandry.png"
import BCWelfareDepartment from"./assets/BC Welfare Department.png"
import BHEL from "./assets/BHEL.png"
import BSNl from "./assets/BSNl.png"

const GovermentServices = () => {
  const [title1, setTitle1] = useState("Uploading More Services Soon");  
  const [activeButton, setActiveButton] = useState(null);
  const [noOfElements, setElements] = useState(12);

  const toggle = () => {
    if (noOfElements >= govtLabels.length) {
      setTitle1("Uploading More Services Soon");
      setElements(12);
    } else {
      setElements(noOfElements + 12);
      if (noOfElements + 12 >= govtLabels.length) {
        setTitle1("view less \u2191");
      }
    }
  };
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
    const govtLabels = [
        // { image: GovermentSchool, name: "Government School" },
        // { image: GovermentHostels, name: "Government Hostels" },
        // { image: GovermentCollege, name: "Government College" },
        // { image: GovermentHospital, name: "Government Hospital" },
        // { image: GovermentAdvocate, name: "Government Advocate" },
        // { image: GovermentParks, name: "Government Parks" },
        // { image: Mro, name: "MRO Office" },
        // { image: Vra, name: "VRA Office" },
        // { image: Rto, name: "RTO Office" },
        // { image: Stadium, name: "Stadium" },
        // { image: Registration, name: "Registration Office" },
        // { image: Panchayati, name: "Panchayati Office" }
    ];

    
  return (
    <>
    <div className='header_govt'>
    Government  <span style={{color:"#C68643",fontWeight:"700"}}>Organizations :</span>
    </div>
      <div className='govt_container'>
          <div className='govt_sub_container' style={{textAlign:"center"}}>
            <span>COMING SOON</span>
            {govtLabels.map((e,index)=>(
              <form action="">
              <div className='govt_lables'
               key={index}
               onClick={() => handleButtonClick(index,e.name)}
               style={{
                 backgroundColor:
                   activeButton === index ? "#144273" : "#FAF2EB",
               }}
              >
                    <div >
                      <img src={e.image} alt="" id='govt_img' />
                    </div>
                    <div className='govt_text'
                    key={index}
                  style={{
                    color: activeButton === index ? "white" : "#650000",
                  }}
                    >
                      {e.name}
                    </div>
              </div>
              </form>
              ))}
          </div>
          <button type="button" className="view" onClick={toggle}>
      {title1}
    </button>
      </div>
   
   
      <br />
      <div className="header_b1">
            {" "}
            Best Gynaecologist Doctors{" "}
            <span style={{ color: "#C68643" }}>in Hyderabad :</span>{" "}
          </div>
   
    </>
  )
}

export default GovermentServices