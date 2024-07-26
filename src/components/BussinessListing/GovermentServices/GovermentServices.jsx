import React ,{useState}from 'react';
import "./GovermentServices.css"
import GovermentSchool from "./assets/government_school.png";
import GovermentHostels from "./assets/govermentHostels.png";
import GovermentCollege from "./assets/govtCollege.png";
import GovermentHospital from "./assets/govtHospital.png";
import GovermentAdvocate from "./assets/govtadvocate.png";
import GovermentParks from "./assets/govtparks.png";
import Mro from "./assets/MRO.png";
import Vra from "./assets/VRA.png";
import Rto from "./assets/Rto.png";
import Stadium from "./assets/stadium.png";
import Registration from "./assets/registration.png";
import Panchayati from "./assets/panchayati.png";

const GovermentServices = () => {
  const [title1, setTitle1] = useState("Uploading More Services");  
  const [activeButton, setActiveButton] = useState(null);
  const [noOfElements, setElements] = useState(12);

  const toggle = () => {
    if (noOfElements >= govtLabels.length) {
      setTitle1("Uploading More Services");
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
        { image: GovermentSchool, name: "Government School" },
        { image: GovermentHostels, name: "Government Hostels" },
        { image: GovermentCollege, name: "Government College" },
        { image: GovermentHospital, name: "Government Hospital" },
        { image: GovermentAdvocate, name: "Government Advocate" },
        { image: GovermentParks, name: "Government Parks" },
        { image: Mro, name: "MRO Office" },
        { image: Vra, name: "VRA Office" },
        { image: Rto, name: "RTO Office" },
        { image: Stadium, name: "Stadium" },
        { image: Registration, name: "Registration Office" },
        { image: Panchayati, name: "Panchayati Office" }
    ];

    
  return (
    <>
      <div className='govt_container'>
          <div className='govt_sub_container'>
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
                    <div className='govt_img'>
                      <img src={e.image} alt="" />
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
      </div>
   
    <button type="button" className="view" onClick={toggle}>
      {title1}
    </button>
    <br />
   
    </>
  )
}

export default GovermentServices