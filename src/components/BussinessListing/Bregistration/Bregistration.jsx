import React, { useState } from 'react';
import swal from "sweetalert";
import ModalImage from "react-modal-image";
import axios from 'axios';
import Upload from './assets/upload.svg'

const Bregistration = () => {

  const [isLoading,setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    businessName: '',
    primaryCategory: '',
    seconderyCategory: '',
    subCategory: '',
    servicesList: '',
    emailid: '',
    contactNumber: '',
    whatsappNumber: '',
    gstNumber: '',
    cinNumber: '',
    blockNumber: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    websiteName: '',
    googleMapLink: '',
    websiteLink: '',
    mondayOpen: '',
    mondayClose: '',
    tuesdayOpen: '',
    tuesdayClose: '',
    wednesdayOpen: '',
    wednesdayClose: '',
    thursdayOpen: '',
    thursdayClose: '',
    fridayOpen: '',
    fridayClose: '',
    saturdayOpen: '',
    saturdayClose: '',
    sundayOpen: '',
    sundayClose: '',

  });

  const regex = /^[0-9]+$/;
  if(formValues.contactNumber != "" && !formValues.contactNumber.match(regex) || formValues.whatsappNumber != "" && !formValues.whatsappNumber.match(regex) || formValues.pincode != "" && !formValues.pincode.match(regex) )
    {
     swal("Error" , "Enter Only Digits");
    }
 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

 

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
const [img2Values, setImg2Values] = useState("");
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
        console.log(response);
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
const [img3Values, setImg3Values] = useState("");
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


  const [errors, setErrors] = useState({});

  const validate = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (!formValues.businessName.match(/^[a-zA-Z ]+$/)) {
          tempErrors.businessName = "should contain only letters and spaces";
          setIsLoading(false);
          isValid = false;
        }
    
        if (!formValues.contactNumber.match(/^\d{10}$/)) {
          tempErrors.contactNumber = "should be exactly 10 digits";
          setIsLoading(false);
          isValid = false;
        }
    
        if (!formValues.emailid.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          tempErrors.emailid = "Invalid email format";
          setIsLoading(false);
          isValid = false;
        }
    
        Object.keys(formValues).forEach(key => {
          if (!formValues[key]) {
            tempErrors[key] = "This field is required";
            isValid = false;
          }
        });
    
        setErrors(tempErrors);
        return isValid;
      };

  // form clear 

  function clearForm(){
        setImg1Values(null);
        setImg2Values(null); 
        setImg3Values(null);

        setIsImg1Disable(false);
        setIsImg2Disable(false);
        setIsImg3Disable(false);
        
        setFormValues({
          businessName: '',
          primaryCategory: '',
          servicesList: '',
          emailid: '',
          contactNumber: '',
          whatsappNumber: '',
          gstNumber: '',
          cinNumber: '',
          blockNumber: '',
          area: '',
          city: '',
          state: '',
          pincode: '',
          websiteName: '',
          googleMapLink: '',
          websiteLink: '',
          mondayOpen: '',
          mondayClose: '',
          tuesdayOpen: '',
          tuesdayClose: '',
          wednesdayOpen: '',
          wednesdayClose: '',
          thursdayOpen: '',
          thursdayClose: '',
          fridayOpen: '',
          fridayClose: '',
          saturdayOpen: '',
          saturdayClose: '',
          sundayOpen: '',
          sundayClose: '',
        });
        setErrors({});
      };


      

  const handleSubmit = (event) => {
    event.preventDefault();
  
  //  if (!validate()) return;

   if (!formValues.businessName || !formValues.emailid || !formValues.contactNumber || !formValues.whatsappNumber || !formValues.gstNumber || !formValues.cinNumber || !formValues.websiteName || !img1Values || !img2Values || !img3Values) {
    swal("Error", "Please Fill Details" ,"Error")
    
   }else{
    setIsLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

let data = JSON.stringify(
      {
        bsn_name: formValues.businessName.trim(),
        bsn_category: formValues.primaryCategory.trim(),
        bsn_services_list: formValues.servicesList.trim(),
        bsn_email: formValues.emailid.trim(),
        bsn_con_num: formValues.contactNumber.trim(),
        bsn_whs_app_num: formValues.whatsappNumber.trim(),
        bsn_gst_num: formValues.gstNumber.trim(),
        bsn_cin_num: formValues.cinNumber.trim(),
        bsn_bnum_bname: formValues.blockNumber.trim(),
        bsn_area: formValues.area.trim(),
        bsn_city: formValues.city.trim(),
        bsn_state: formValues.state.trim(),
        bsn_pincode: formValues.pincode.trim(),
        bsn_website_name: formValues.websiteName.trim(),
        bsn_gmap_link: formValues.googleMapLink.trim(),
        bsn_website_link:formValues.websiteLink.trim(),
        bsn_tm_mon_op: formValues.mondayOpen.trim(),
        bsn_tm_mon_cl: formValues.mondayClose.trim(),
        bsn_tm_tue_op: formValues.tuesdayOpen.trim(),
        bsn_tm_tue_cl: formValues.tuesdayClose.trim(),
        bsn_tm_wed_op: formValues.wednesdayOpen.trim(),
        bsn_tm_wed_cl: formValues.wednesdayClose.trim(),
        bsn_tm_thus_op: formValues.thursdayOpen.trim(),
        bsn_tm_thus_cl: formValues.thursdayClose.trim(),
        bsn_tm_fri_op: formValues.fridayOpen.trim(),
        bsn_tm_fri_cl: formValues.fridayClose.trim(),
        bsn_tm_sat_op: formValues.saturdayOpen.trim(),
        bsn_tm_sat_cl: formValues.saturdayClose.trim(),
        bsn_tm_sun_op: formValues.sundayOpen.trim(),
        bsn_tm_sun_cl: formValues.sundayClose.trim(),
        bsn_img1:img1Values,
        bsn_img2: img2Values,
        bsn_img3: img3Values,
        created_at: new Date().toLocaleString(),
      }
    )


    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      body: data,
      redirect: "follow",
      headers: myHeaders,

    };

    // axios.post(config)
    // .then(response=>console.log(response,data))
    // .catch((err)=>console.log(err));
    // var url = "http://192.168.0.114:4000/api/v1/business/register";

    setTimeout(()=>{
      fetch(`${process.env.REACT_APP_BASE_URL}/business/register/`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          //coustom  message Altert box 
          swal("successful Registred", result.message, "success");
          clearForm();
          // alert(result.message)
        }
        else {

          swal("Error", result.message, "error")
          // alert(result.message)
        }
      }).catch((error) => swal("Error", error, "error"))
      .finally(()=>{
        setIsLoading(false);
      });

    },2000);

   }

    
  }

  
  const inputStyleTag = {
    width: "380px",
    background:"white",
    border: "1px solid black", // #FF6666
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

      <div className='rg'>
        <div className='rg1 mt-4 brmain'>
          <h3 className='text-start ms-4 mt-4 brheader'>Enter Your Business Details</h3>
          <form action="" id="myform" className='m-2 ms-4 me-4 mt-4' >
            <div className='inputdiv1 mb-4'>
              <div className='inputdiv2 '>
                <input   disabled={isLoading} type="text" name="businessName" placeholder='Business Name' className='input1 p-2' value={formValues.businessName} onChange={handleChange} />
                {errors.businessName && <p className="error text-danger">{errors.businessName}</p>}
              </div>
              <div className='inputdiv2 '>
                <select  disabled={isLoading} style={{color:"#8F8F8F"}} id="" className='input1 w-100 h-100 p-1' name="primaryCategory" value={formValues.primaryCategory} onChange={handleChange} >
                  <option className='option'>Primary Category</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Lawyers">Lawyers </option>
                  <option value="Charted Accountent">Charted Accountent</option>
                  <option value="Temples">Temples</option>
                  <option value="Super Market">Super Market</option>
                  <option value="Software Companies">Software Companies</option>
                  <option value="Medical shops">Medical shops</option>
                </select>
                {errors.primaryCategory && <p className="error text-danger">{errors.primaryCategory}</p>}
              </div>
            </div>
            <div>
              <textarea disabled={isLoading} name="" id="bg_textarea" style={{width:"100%"}} placeholder='Business description     (1000 characters)' ></textarea>
            </div>
            
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="servicesList"
                  placeholder='Service List'
                 className='input1 p-2'
                  value={formValues.servicesList}
                  onChange={handleChange} />
                  {errors.servicesList && <p className="error text-danger">{errors.servicesList}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="email"
                  name="emailid"
                  placeholder='Email ID'
                  className='input1 p-2'
                  value={formValues.emailid}
                  onChange={handleChange}
                />
                {errors.emailid && <p className="error text-danger">{errors.emailid}</p>}
                </div>
            </div>

            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="contactNumber"
                  placeholder='Contact Number'
                  className='input1 p-2'
                  min="10"
                  minLength="10"
                  max="10"
                  maxLength="10"
                  value={formValues.contactNumber}
                  onChange={handleChange}
                />
                 {errors.contactNumber && <p className="error text-danger">{errors.contactNumber}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="whatsappNumber"
                  placeholder='WhatsApp Number'
                  className='input1 p-2'
                  min="10"
                  minLength="10"
                  max="10"
                  maxLength="10"
                  value={formValues.whatsappNumber}
                  onChange={handleChange}
                /> 
                {errors.contactNumber && <p className="error text-danger">{errors.contactNumber}</p>}
                </div>
            </div>


            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="gstNumber"
                  placeholder='GST Number'
                  className='input1 p-2'
                  min="15"
                  minLength="15"
                  max="15"
                  maxLength="15"
                  value={formValues.gstNumber}
                  onChange={handleChange}
                />
                {errors.gstNumber && <p className="error text-danger">{errors.gstNumber}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="cinNumber"
                  min="21"
                  minLength="21"
                  max="21"
                  maxLength="21"
                  placeholder='C.I.N Number'
                  className='input1 p-2'
                  value={formValues.cinNumber}
                  onChange={handleChange}
                />
                {errors.cinNumber && <p className="error text-danger">{errors.cinNumber}</p>}
                </div>
            </div>


            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="blockNumber"
                  placeholder='Block Number / Building Name'
                  className='input1 p-2'
                  value={formValues.blockNumber}
                  onChange={handleChange}
                />
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="area"
                  placeholder='Area'
                  className='input1 p-2'
                  value={formValues.area}
                  onChange={handleChange} /></div>
            </div>

            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="city"
                  placeholder='City'
                  className='input1 p-2'
                  value={formValues.city}
                  onChange={handleChange}
                />
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="state"
                  placeholder='State '
                  className='input1 p-2'
                  value={formValues.state}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="pincode"
                  min="6"
                  minLength="6"
                  max="6"
                  maxLength="6"
                  placeholder='Pincode'
                  className='input1 p-2'
                  value={formValues.pincode}
                  onChange={handleChange} />
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="websiteName"
                  placeholder='Website Name'
                  className='input1 p-2'
                  value={formValues.websiteName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="googleMapLink"
                  placeholder='Google Map link'
                  className='input1 p-2'
                  value={formValues.googleMapLink}
                  onChange={handleChange}
                />
                {errors.city && <p className="error text-danger">{errors.city}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                 disabled={isLoading}
                  type="text"
                  name="websiteLink"
                  placeholder='Website Link'
                  className='input1 p-2'
                  value={formValues.websiteLink}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='timing_main_table'>
              <h3 className='text-start ms-3 imgHead'>Timings:</h3>
              <div className='timimg_table'>
                <div className='tm_div_row1 ms-1' >
                  <div className='timingday'>
                    <p>Monday  &nbsp; &nbsp; &nbsp; &nbsp;&#160; :</p>
                    <div className='div_tm_input' id='div_tm_input1'>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="mondayOpen"
                        value={formValues.mondayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="mondayClose"
                        value={formValues.mondayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='timingday'>
                    <p>Tuesday &nbsp; &nbsp; &nbsp;&#160;&#160; :</p>
                    <div className='div_tm_input' id='div_tm_input2'>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="tuesdayOpen"
                        value={formValues.tuesdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="tuesdayClose"
                        value={formValues.tuesdayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='timingday'>
                    <p>Wednesday :</p>
                    <div className='div_tm_input' id='div_tm_input3'>
                    
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="wednesdayOpen"
                        value={formValues.wednesdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="wednesdayClose"
                        value={formValues.wednesdayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>


                <div className='tm_div_row2 '>
                  <div className='timingday'>
                    <p className=''>Thursday    :</p>
                    <div className='div_tm_input' id='div_tm_input4'>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="thursdayOpen"
                        value={formValues.thursdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="thursdayClose"
                        value={formValues.thursdayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='timingday'>
                    <p className=''>Friday   &nbsp;  &#160;  &nbsp;     :</p>
                    <div className='div_tm_input' id='div_tm_input5'>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="fridayOpen"
                        value={formValues.fridayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="fridayClose"
                        value={formValues.fridayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='timingday'>
                    <p>Saturday    :</p>
                    <div className='div_tm_input' id='div_tm_input6'>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="saturdayOpen"
                        value={formValues.saturdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="saturdayClose"
                        value={formValues.saturdayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='ms-1 d-flex justify-content-center'>
                  <div className='timingday'>
                    <p>Sunday    :</p>
                    <div className='div_tm_input' id='div_tm_input7'>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Open'
                        name="sundayOpen"
                        value={formValues.sundayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                       disabled={isLoading}
                        type="text"
                        style={{textAlign:"center"}}
                        className='timinginput'
                        placeholder='Close'
                        name="sundayClose"
                        value={formValues.sundayClose}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </form>
            <div className="mt-4 mx-4 img_main_div">
              <div className="p-3 d-flex gap-2">

              <div className={divDoc}>
                {/* <ImgUploadForm nameprop="dr_ph" plhoprop="Driver Photo"  /> */}

                <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg1Submit}>
                    <span className="w-100 my-auto">
                    Upload Main Image :
                    </span>
                    <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                    <input
                      name="input_img1"
                      disabled={isImg1Disable}
                      placeholder="Main Image"
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
                Upload Second Image :
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                name="input_img2"
                disabled={isImg2Disable}
                placeholder="Second Image"
                type="file"
                style={inputStyleTag}
              className={docInputClass}
              onChange={handleImg2Change}
              required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg2Disable&&'http://localhost:4000/uploads/'+img2Values}
                        large={isImg2Disable&&'http://localhost:4000/uploads/'+img2Values}
                        
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
                Upload Third Image:
                </span>
                <div style={{display:"flex",justifyContent:"end", alignItems:"center", gap:"20px"}} className="w-100  w-md-50">
                <input
                name="input_img3"
                  type="file"
                  disabled={isImg3Disable}
                  style={inputStyleTag}
                  className={docInputClass}
                  onChange={handleImg3Change}
                  required
                />
                <ModalImage
                        className="w-50 h-60 my-auto"
                        small={isImg3Disable&&'http://localhost:4000/uploads/'+img3Values}
                        large={isImg3Disable&&'http://localhost:4000/uploads/'+img3Values}
                        
                      />
                </div>
                <button id="sub-btn" disabled={isImg3Disable} style={docBtnImgUpSty} 
                     class="btn my-auto "  type="submit" >
                      {(isImg3Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                    </button>
                    </form>
              </div>
              </div>
            </div>

            <div className="px-4" style={{gap:"7px",display:"flex",justifyContent:"center",alignItems:"center"}}>

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
            <button id="sub-btn" disabled={isLoading} style={{
                        padding:"10px 16px",
                        width: "90%",
                        background: "#C68643",
                        color: "#fff",
                        fontWeight: "600",
                        height: "44px",  
                      }} 
                      class="btn " type="button" onClick={handleSubmit}  >
                      {(isLoading)?<><span style={{color:"white"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<span  style={{color:"white"}} role="status">Send Message</span>}
                    </button>
           
            </div>
          
        </div>
      </div>
      
    </>
  );
}

export default Bregistration;