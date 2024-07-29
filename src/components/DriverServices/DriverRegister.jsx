import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Upload from './img/upload.svg'

import axios from 'axios';
import ModalImage from "react-modal-image";



const DriverRegister = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isLoading,setIsLoading] = useState(false);


  const [formValues, setFormValues] = useState({
    fullName: "",
    emailid: "",
    contactNumber: "",
    emergencyNumber: "",
    street: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
    dob: "",
    licenceType: "",
    carType: "",
    exp: "",
    salexp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const regex = /^[0-9]+$/;
  if(formValues.contactNumber != "" && !formValues.contactNumber.match(regex) || formValues.emergencyNumber != "" && !formValues.emergencyNumber.match(regex) || formValues.pincode != "" && !formValues.pincode.match(regex) )
  {
   swal("Error" , "Enter Only Digits");
  }
//----------------------------------------------------------------------------------------------------------\\

//-----------------------------------------------------------------------------------\\
//                          Doc IMG 1
//-----------------------------------------------------------------------------------\\

  const [formImg1Values, setFormImg1Values] = useState(null);
  const [img1Values, setImg1Values] = useState("");
  const [isImg1Loading,setIsImg1Loading] = useState(false);
  const [isImg1Disable,setIsImg1Disable] = useState(false);

  const handleImg1Change = (event) => {
    setFormImg1Values(event.target.files[0]);
  };
    const handleImg1Submit = async (event) => {
    event.preventDefault();

    if (!formImg1Values) {
      swal("Error", "Please select an image to upload", "error");
      return; // Early return if no file selected
    }

  try {

    setIsImg1Loading(true);
        const formData = new FormData();
        formData.append('image', formImg1Values);

        const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if(response.data.success === true){
          setImg1Values(response.data.path)
          console.log(img1Values);
          setTimeout(() => {
          swal("Successful Uploaded", response.data.msg, "success");
          setIsImg1Loading(false);
          setIsImg1Disable(true);
        }, 2000);
        }else{
          setTimeout(() => {
          swal("Error", response.data.msg, "error");
          setIsImg1Loading(false);
          setIsImg1Disable(false);
        }, 2000);
        } 
    
  } catch (error) {
    if(formImg1Values === null || !formImg1Values || error){
      swal("Error", "Please Select Image First "+error, "error"); 
      setIsImg1Loading(false);
          setIsImg1Disable(false);
    }
  }

    
    };
//-----------------------------------------------------------------------------------\\
//-----------------------------------------------------------------------------------\\

//-----------------------------------------------------------------------------------\\
//                          Doc IMG 2
//-----------------------------------------------------------------------------------\\
  
  const [formImg2Values, setFormImg2Values] = useState(null);
  const [img2Values, setImg2Values] = useState();
  const [isImg2Loading,setIsImg2Loading] = useState(false);
  const [isImg2Disable,setIsImg2Disable] = useState(false);

  const handleImg2Change = (event) => {
    setFormImg2Values(event.target.files[0]);
  };
    const handleImg2Submit = async (event) => {
    event.preventDefault();

    try {
      
      setIsImg2Loading(true);
        const formData = new FormData();
        formData.append('image', formImg2Values);

        const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if(response.data.success){
          setImg2Values(response.data.path)
          console.log(img2Values);
          setTimeout(() => {
          swal("Successful Uploaded", response.data.msg, "success");
          setIsImg2Loading(false);
          setIsImg2Disable(true);
        }, 2000);
        }else{
          setTimeout(() => {
          swal("Error", response.data.msg, "error");
          setIsImg2Loading(false);
          setIsImg2Disable(false);
        }, 2000);
        } 
     
  } catch (error) {
    if(formImg1Values === null || !formImg1Values || error){
      swal("Error", "Please Select Image First "+error, "error");
      setIsImg2Loading(false);
          setIsImg2Disable(false);
    }
  }

    };
//-----------------------------------------------------------------------------------\\
//-----------------------------------------------------------------------------------\\


//-----------------------------------------------------------------------------------\\
//                          Doc IMG 3
//-----------------------------------------------------------------------------------\\



  const [formImg3Values, setFormImg3Values] = useState(null);
  const [img3Values, setImg3Values] = useState();
  const [isImg3Loading,setIsImg3Loading] = useState(false);
  const [isImg3Disable,setIsImg3Disable] = useState(false);

  const handleImg3Change = (event) => {
    setFormImg3Values(event.target.files[0]);
  };
    const handleImg3Submit = async (event) => {
    event.preventDefault();

    try {


      setIsImg3Loading(true);
      const formData = new FormData();
      formData.append('image', formImg3Values);

      const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if(response.data.success){
        setImg3Values(response.data.path)
          console.log(img3Values);
        setTimeout(() => {
        swal("Successful Uploaded", response.data.msg, "success");
        setIsImg3Loading(false);
        setIsImg3Disable(true);
      }, 2000);
      }else{
        setTimeout(() => {
        swal("Error", response.data.msg, "error");
        setIsImg3Loading(false);
        setIsImg3Disable(false);
      }, 2000);
      } 
      
    } catch (error) {
      if(formImg1Values === null || !formImg1Values || error){
        swal("Error", "Please Select Image First "+error, "error"); 
        setIsImg3Loading(false);
        setIsImg3Disable(false);
      }
    }
    };

//-----------------------------------------------------------------------------------\\
//-----------------------------------------------------------------------------------\\


//-----------------------------------------------------------------------------------\\
//                          Doc IMG 4
//-----------------------------------------------------------------------------------\\
 

const [formImg4Values, setFormImg4Values] = useState(null);
const [img4Values, setImg4Values] = useState();
const [isImg4Loading,setIsImg4Loading] = useState(false);
const [isImg4Disable,setIsImg4Disable] = useState(false);

const handleImg4Change = (event) => {
  setFormImg4Values(event.target.files[0]);
};
  const handleImg4Submit = async (event) => {
  event.preventDefault();

  try {
    

    setIsImg4Loading(true);
    const formData = new FormData();
    formData.append('image', formImg4Values);

    const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if(response.data.success){
      setImg4Values(response.data.path)
          console.log(img4Values);
      setTimeout(() => {
      swal("Successful Uploaded", response.data.msg, "success");
      setIsImg4Loading(false);
      setIsImg4Disable(true);
    }, 2000);
    }else{
      setTimeout(() => {
      swal("Error", response.data.msg, "error");
      setIsImg4Loading(false);
      setIsImg4Disable(false);
    }, 2000);
    } 

  } catch (error) {
    if(formImg1Values === null || !formImg1Values || error){
      swal("Error", "Please Select Image First "+error, "error");
      setIsImg3Loading(false);
        setIsImg3Disable(false);
    }
  }
  };

//-----------------------------------------------------------------------------------\\
//-----------------------------------------------------------------------------------\\


//-----------------------------------------------------------------------------------\\
//                          Doc IMG 5
//-----------------------------------------------------------------------------------\\
  
const [formImg5Values, setFormImg5Values] = useState(null);
const [img5Values, setImg5Values] = useState("");
const [isImg5Loading,setIsImg5Loading] = useState(false);
const [isImg5Disable,setIsImg5Disable] = useState(false);

const handleImg5Change = (event) => {
  setFormImg5Values(event.target.files[0]);
};
  const handleImg5Submit = async (event) => {
  event.preventDefault();

try {
  
  setIsImg5Loading(true);
  const formData = new FormData();
  formData.append('image', formImg5Values);

  const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if(response.data.success){
    setImg5Values(response.data.path)
    console.log(img5Values);
    setTimeout(() => {
    swal("Successful Uploaded", response.data.msg, "success");
    setIsImg5Loading(false);
    setIsImg5Disable(true);
  }, 2000);
  }else{
    setTimeout(() => {
    swal("Error", response.data.msg, "error");
    setIsImg5Loading(false);
    setIsImg5Disable(false);
  }, 2000);
  } 

} catch (error) {
  if(formImg1Values === null || !formImg1Values || error){
    swal("Error", "Please Select Image First "+error, "error");
    setIsImg3Loading(false);
        setIsImg3Disable(false);
  }
}
  };


//-----------------------------------------------------------------------------------\\
//-----------------------------------------------------------------------------------\\

//-----------------------------------------------------------------------------------\\
//                          Doc IMG 6
//-----------------------------------------------------------------------------------\\

const [formImg6Values, setFormImg6Values] = useState(null);
const [img6Values, setImg6Values] = useState("");
const [isImg6Loading,setIsImg6Loading] = useState(false);
const [isImg6Disable,setIsImg6Disable] = useState(false);

const handleImg6Change = (event) => {
  setFormImg6Values(event.target.files[0]);
};
  const handleImg6Submit = async (event) => {
  event.preventDefault();

try {
  
  setIsImg6Loading(true);
  const formData = new FormData();
  formData.append('image', formImg6Values);

  const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if(response.data.success){
    setImg6Values(response.data.path)
          console.log(img6Values);
    setTimeout(() => {
    swal("Successful Uploaded", response.data.msg, "success");
    setIsImg6Loading(false);
    setIsImg6Disable(true);
  }, 2000);
  }else{
    setTimeout(() => {
    swal("Error", response.data.msg, "error");
    setIsImg6Loading(false);
    setIsImg6Disable(false);
  }, 2000);
  } 

} catch (error) {
  if(formImg6Values ===null || !formImg6Values || error){
    swal("Error", "Please Select Image First "+error, "error"); 
    setIsImg6Loading(false);
    setIsImg6Disable(false);
  }
}

 
  };


//-----------------------------------------------------------------------------------\\
//-----------------------------------------------------------------------------------\\


//----------------------------------------------------------------------------------------------------------\\
const [errors, setErrors] = useState({});

  // form clear

  const clearForm = () => {
    setIsImg1Disable(false)
    setIsImg2Disable(false)
    setIsImg3Disable(false)
    setIsImg4Disable(false)
    setIsImg5Disable(false)
    setIsImg6Disable(false)
    setFormValues({
      fullName: "",
    emailid: "",
    contactNumber: "",
    emergencyNumber: "",
    street: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
    dob: "",
    licenceType: "",
    carType: "",
    exp: "",
    salexp: "",
    })
  };

  // const formValidation = () => {
  //   const newErrors = {};
  //   if (!formValues.businessName)
  //     newErrors.businessName = "Business Name is required";
  //   if (!formValues.businessCategory)
  //     newErrors.businessCategory = "Business Category is required";
  //   if (!formValues.contactNumber)
  //     newErrors.contactNumber = "Contact Number is required";
  //   if (!formValues.city) newErrors.city = "City is required";
  //   if (!formValues.state) newErrors.state = "State is required";
  //   if (!formValues.pincode) newErrors.pincode = "Pincode is required";

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     // Form is valid, you can proceed with form submission
  //     console.log("Form is valid, submitting...");
  //   } else {
  //     console.log("Form has errors");
  //   }
  // };

  const handelSubmit = (e) => {
    e.preventDefault();

    // if (!formValidation()) return;

    if(!formValues.emailid || !formValues.contactNumber || !formValues.emergencyNumber || !formImg1Values || !formImg2Values || !formImg3Values || !formImg4Values || !formImg5Values || !formImg6Values) {
      swal("Error", "Please fill your all details", "error");
    }else{

      let data = JSON.stringify({
        dr_name: formValues.fullName,
        dr_email: formValues.emailid,
        dr_phone: formValues.contactNumber,
        dr_em_phone: formValues.emergencyNumber,
        dr_area: formValues.area,
        dr_street: formValues.street,
        dr_city: formValues.city,
        dr_state: formValues.state,
        dr_pincode: formValues.pincode,
        dr_dob: formValues.dob,
        dr_lic_ty: formValues.licenceType,
        dr_car_ty: formValues.carType,
        dr_yr_exp: formValues.exp,
        dr_mon_sal: formValues.salexp,
        dr_ph: img1Values,
        dr_ph_lic: img2Values,
        dr_ph_add_proof: img3Values,
        dr_ph_hist: img4Values,
        dr_pol_ver: img5Values,
        dr_med_cer: img6Values,
        created_at: new Date().toLocaleString(),
      });
  
      
      let config = {
        method: "POST",
        maxBodyLength: Infinity,
        body: data,
        redirect: "follow",
        headers: {
          "content-Type": "application/json",
        },
      };
  
      // axios.post(config)
      // .then(response=>console.log(response,data))
      // .catch((err)=>console.log(err));
  
      setTimeout(()=>{

      fetch( `${process.env.REACT_APP_BASE_URL}/drivers/register`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          //coustom  message Altert box
          swal("successful Registred", result.message, "success");
          // alert(result.message)
        } else {
          swal("Error", result.message, "error");
          // alert(result.message)
        }
      })
      .catch((error) => swal(error));
      },2000)

    }
  };

  

  const divInput = "d-flex flex-column flex-lg-row mb-4 gap-4";
  const inputStyle = "w-100 p-2 w-lg-50 mx-auto";
  const inputStyleTag = {
    width: "380px",
    background:"white",
    border: "1px solid #FF6666",
    color: "#995050",
    fontWeight: "bold",
  };

  const divDoc = ""
  const docInputClass = "p-2 my-auto"

  const docBtnImgUpSty={
    padding:"6px",
    minWidth:"124px",
    width: "124px",
    height:"60px",
    background: "#144273",
    color: "#fff",
    fontWeight: "600",
    fontSize:"12px",
    borderRadius:"8px"
  }

  return (
    <>
      <div
        style={{
          minWidth: width < 900 ? "400px" : "510px",
          width: "65%",
          margin: "auto",
          overflowX: "hidden",
        }}
        className="container h-auto px-1"
      >
        <div style={{border: "1px solid #CC0000", borderRadius:"16px", padding:"10px"}} className=" my-4  ">
          <h3 style={{ color: "#650000" }} className="text-start mx-4 my-4">
            B2B&#x7b;Business to Business&#x7d;{" "}
            <span style={{ color: "#C68643" }}>Driver Registration Form</span>
          </h3>
          <form
            id="dr_form_sub"
            className="mx-2 mx-lg-4"
            // onSubmit={handelSubmit}
          >
            <div className={divInput}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.fullName}
                onChange={handleChange}
                required
              />

              <input
                
                type="email"
                name="emailid"
                placeholder="Email ID"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.emailid}
                onChange={handleChange}
                required
              />
            </div>
            <div className={divInput}>
              <input
                type="tel"
                min="10"
                minLength="10"
                max="10"
                maxLength="10"
                name="contactNumber"
                placeholder="Contact Number"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.contactNumber}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                min="10"
                minLength="10"
                max="10"
                maxLength="10"
                name="emergencyNumber"
                placeholder="Emergency Contact"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.emergencyNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={divInput}>
              <input
                type="text"
                name="street"
                placeholder="Street"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.street}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="area"
                placeholder="Area"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.area}
                onChange={handleChange}
                required
              />
            </div>
            <div className={divInput}>
              <input
                type="text"
                min="4"
                minLength="4"
                max="6"
                maxLength="6"
                name="pincode"
                placeholder="Pin code"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.pincode}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className={divInput}>
              <input
                type="text"
                name="state"
                placeholder="State"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.state}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className={divInput}>
              <select
                id=""
                style={inputStyleTag}
                className={inputStyle}
                name="licenceType"
                value={formValues.licenceType}
                onChange={handleChange}
                required
              >
                <option className="option"> Select Driving Licence Type</option>
                <option value="hmv">Heavy Motor Vehicles(HMV)</option>
                <option value="mmv">Medium Motor Vehicles (MMV)</option>
                <option value="lmv">Light Motor Vehicles(LMV)</option>
              </select>

              <select
                id=""
                style={inputStyleTag}
                className={inputStyle}
                name="carType"
                value={formValues.carType}
                onChange={handleChange}
                required
              >
                <option className="option"> Select Car Type</option>
                <option value="hmv">Hatchback Manual</option>
                <option value="mmv">SUV M/A </option>
                <option value="lmv">MUV</option>
                <option value="mmv">Luxury car</option>
                <option value="lmv">Sports car</option>
                <option value="mmv">Electric vehicle</option>
                <option value="lmv">Pickup truck</option>
              </select>
            </div>
            <div className={divInput}>
              <input
                type="text"
                name="exp"
                enterKeyHint="Enter Your Experience like: 1 year or 3 months"
                placeholder="No.Of Years Experience"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.exp}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="salexp"
                placeholder="Salary expectation"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.salexp}
                onChange={handleChange}
                required
              />
            </div>
            </form>
            <div className="mt-4 mx-4 img_main_div">
              <div className="p-3 d-flex gap-2">

              <div className={divDoc}>
                

                <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg1Submit}>
                    <span className="w-100 my-auto">
                      Driver Photo :
                    </span>
                    <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                    <input
                      name="dr_ph"
                      disabled={isImg1Disable}
                      placeholder="Driver Photo"
                      type="file"
                      style={inputStyleTag}
                    className={docInputClass}
                    onChange={handleImg1Change}
                    required
                    />
                   
                    <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg1Disable&&'http://localhost:4000/uploads/'+img1Values}
                        large={isImg1Disable&&'http://localhost:4000/uploads/'+img1Values}
                        
                      />
                    </div>
                    
                      <button id="sub-btn" disabled={isImg1Disable} style={docBtnImgUpSty} 
                          class="btn my-auto " type="submit" >
                          {(isImg1Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                          <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                        </button>
                  </form>
              </div>
              <div className={divDoc}>
              <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg2Submit}>
                <span className="w-100 my-auto">
                  Driving License :
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                name="dr_ph_lic"
                disabled={isImg2Disable}
                placeholder="Driver Photo"
                type="file"
                style={inputStyleTag}
              className={docInputClass}
              onChange={handleImg2Change}
              required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg6Disable&&'http://localhost:4000/uploads/'+img2Values}
                        large={isImg6Disable&&'http://localhost:4000/uploads/'+img2Values}
                        
                      />
                </div>
                <button id="sub-btn" disabled={isImg2Disable} style={docBtnImgUpSty} 
                      class="btn my-auto " type="submit" >
                      {(isImg2Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                    </button>
                    </form>
              </div>
              <div className={divDoc}>
              <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg3Submit}>
                <span className="w-100 my-auto">
                  Address Proof:
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                name="dr_ph_add_proof"
                  type="file"
                  disabled={isImg3Disable}
                  style={inputStyleTag}
                  className={docInputClass}
                  onChange={handleImg3Change}
                  required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg6Disable&&'http://localhost:4000/uploads/'+img3Values}
                        large={isImg6Disable&&'http://localhost:4000/uploads/'+img3Values}
                        
                      />
                </div>
                <button id="sub-btn" disabled={isImg3Disable} style={docBtnImgUpSty} 
                     class="btn my-auto " type="submit" >
                      {(isImg3Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                    </button>
                    </form>
              </div>
              <div className={divDoc}>
              <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg4Submit}>
                <span className="w-100 my-auto">
                  Employment History:
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                name="dr_ph_hist"
                  type="file"
                  disabled={isImg4Disable}
                  style={inputStyleTag}
                  className={docInputClass}
                  onChange={handleImg4Change}
                  required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg6Disable&&'http://localhost:4000/uploads/'+img4Values}
                        large={isImg6Disable&&'http://localhost:4000/uploads/'+img4Values}
                        
                      />
                </div>
                <button id="sub-btn" disabled={isImg4Disable} style={docBtnImgUpSty} 
                      class="btn my-auto " type="submit" >
                      {(isImg4Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                    </button>
                    </form>
              </div>
              <div className={divDoc}>
              <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg5Submit}>
                <span className="w-100 my-auto">
                  Police Verification:
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                  name="dr_pol_ver"
                  type="file"
                  disabled={isImg5Disable}
                  style={inputStyleTag}
                  className={docInputClass}
                  onChange={handleImg5Change}
                  required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg6Disable&&'http://localhost:4000/uploads/'+img5Values}
                        large={isImg6Disable&&'http://localhost:4000/uploads/'+img5Values}
                        
                      />
                </div>
                <button id="sub-btn" disabled={isImg5Disable} style={docBtnImgUpSty} 
                      class="btn my-auto " type="submit" >
                      {(isImg5Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                    </button>
                    </form>
              </div>
              <div className={divDoc}>
              <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg6Submit}>
                <span className="w-100 my-auto">
                  Medical Certification:
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                name="dr_med_cer"
                  type="file"
                  disabled={isImg6Disable}
                  style={inputStyleTag}
                  className={docInputClass}
                  onChange={handleImg6Change}
                  required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg6Disable&&'http://localhost:4000/uploads/'+img6Values}
                        large={isImg6Disable&&'http://localhost:4000/uploads/'+img6Values}
                        hideZoom='false'
                      />
                </div>
                <button id="sub-btn" disabled={isImg6Disable} style={docBtnImgUpSty} 
                      class="btn my-auto " type="submit" >
                      {(isImg6Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                    </button>
                    </form>
              </div>

              </div>
            </div>
            <div className="px-4" style={{gap:"7px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button id="sub-btn" disabled={isLoading} style={{
                        padding:"10px 16px",
                        width: "90%",
                        background: "#C68643",
                        color: "#fff",
                        fontWeight: "600",
                        height: "44px",  
                      }} 
                      class="btn " type="button" onClick={handelSubmit}  >
                      {(isLoading)?<><span style={{color:"white"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<span  style={{color:"white"}} role="status">Send Message</span>}
                    </button>
            <button
            onClick={clearForm}
                    disabled={isLoading}
                      className="form-control btn my-4 mx-auto"
                      style={{
                        padding:"10px 16px",
                        width: "90%",
                        background: "#144273",
                        color: "#fff",
                        fontWeight: "600",
                        height: "44px",
                      
                      }}
                      type="reset"
                      
                    >Clear
                    </button>
            </div>
            {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default DriverRegister