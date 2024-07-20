import React, { useState } from 'react';
import swal from "sweetalert";

const DriverRegister = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    emailid: '',
    contactNumber: '',
    emergencyNumber: '',
    street: '',
    area: '',
    pincode: '',
    city: '',
    state: '',
    dob: '',
    licenceType:'',
    carType: '',
    exp: '',
    salexp: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // form clear 

  const clearForm = () => {
    document.getElementById("myform").reset();

  }

  const handelSubmit = (e) => {
    e.preventDefault();

    let data = JSON.stringify(
      {
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
        dr_ph: "",
        dr_ph_lic: "",
        dr_ph_add_proof: "",
        dr_ph_hist: "",
        dr_pol_ver: "",
        dr_med_cer: "",
        created_at: new Date(),
      }
    )


    console.log(data)

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      body: data,
      redirect: "follow",
      headers: {
        'content-Type': 'application/json'
      },

    };

    // axios.post(config)
    // .then(response=>console.log(response,data))
    // .catch((err)=>console.log(err));
    

    fetch("http://192.168.0.114:4000/api/v1/drivers/register", config).then((response) => response.json())
      .then((result) => {
        if (result.success == true) {
          //coustom  message Altert box 
          swal("successful Registred", result.message, "success");
          // alert(result.message)
        }
        else {

          swal("Error", result.message, "error")
          // alert(result.message)
        }
      }).catch((error) => swal(error));

  }

  const formValidation = () => {
    const newErrors = {};
    if (!formValues.businessName) newErrors.businessName = 'Business Name is required';
    if (!formValues.businessCategory) newErrors.businessCategory = 'Business Category is required';
    if (!formValues.contactNumber) newErrors.contactNumber = 'Contact Number is required';
    if (!formValues.city) newErrors.city = 'City is required';
    if (!formValues.state) newErrors.state = 'State is required';
    if (!formValues.pincode) newErrors.pincode = 'Pincode is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can proceed with form submission
      console.log('Form is valid, submitting...');
    } else {
      console.log('Form has errors');
    }

  };

  return (
    <>

      <div className='rg'>
        <div className='rg1 mt-4 brmain'>
          <h3 className='text-start ms-4 mt-4 brheader'>B2B [Business to Business] Driver Registration Form</h3>
          <form action="" id="myform" className='m-2 ms-4 me-4 mt-4' onSubmit={handelSubmit}>
            <div className='inputdiv1 mb-4'>
              <div className='inputdiv2 '>
                <input type="text" name="fullName" placeholder='Full Name' className='input1' value={formValues.fullName} onChange={handleChange} />
              </div>
              <div className='inputdiv2 '>
                <input
                  type="email"
                  name="emailid"
                  placeholder='Email ID'
                  className='input1'
                  value={formValues.emailid}
                  onChange={handleChange} />
               
              </div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder='Contact Number'
                  className='input1'
                  value={formValues.contactNumber}
                  onChange={handleChange}
                />
                
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="emergencyNumber"
                  placeholder='Emergency Contact'
                  className='input1'
                  value={formValues.emergencyNumber}
                  onChange={handleChange}
                /></div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="street"
                  placeholder='Street'
                  className='input1'
                  value={formValues.street}
                  onChange={handleChange}
                />
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="area"
                  placeholder='Area'
                  className='input1'
                  value={formValues.area}
                  onChange={handleChange}
                /></div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="pincode"
                  placeholder='Pin code'
                  className='input1'
                  value={formValues.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="city"
                  placeholder='City'
                  className='input1'
                  value={formValues.city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="state"
                  placeholder='State'
                  className='input1'
                  value={formValues.state}
                  onChange={handleChange}
                />
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="dob"
                  placeholder='Date of Birth'
                  className='input1'
                  value={formValues.dob}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <select  id="" className='input1 w-100 h-100 p-1' name="licenceType" value={formValues.licenceType} onChange={handleChange} >
                  <option className='option'> Select  Driving  Licence  Type</option>
                  <option value="hmv">Heavy Motor Vehicles(HMV)</option>
                  <option value="mmv">Medium Motor Vehicles (MMV)</option>
                  <option value="lmv">Light Motor Vehicles(LMV)</option>

                </select>
              </div>
              <div className='inputdiv2'>
                <select  id="" className='input1 w-100 h-100' name='carType' value={formValues.carType} onChange={handleChange}  >
                  <option className='option'> Select  Car  Type</option>
                  <option value="hmv">Hatchback  Manual</option>
                  <option value="mmv">SUV   M/A </option>
                  <option value="lmv">MUV</option>
                  <option value="mmv">Luxury car</option>
                  <option value="lmv">Sports car</option>
                  <option value="mmv">Electric vehicle</option>
                  <option value="lmv">Pickup truck</option>
                </select>


              </div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="exp"
                  placeholder='No.Of Years Experience'
                  className='input1'
                  value={formValues.exp}
                  onChange={handleChange}
                />
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="salexp"
                  placeholder='Salary expectation'
                  className='input1'
                  value={formValues.salexp}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='mt-4 img_main_div'>
              <h3 className='text-start ms-3 imgHead'>Add Images:</h3>
              <div className='img_div mt-3 mb-3 me-2 ms-3 inputdiv1'>
                <span>Driver Photo<span className='ps-5 ms-5'>&nbsp;&nbsp;&nbsp;&nbsp;:</span></span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img1' />
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Driving License<span className='ps-4 ms-5'>&nbsp;&nbsp;&nbsp;:</span></span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img2' />
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Address Proof<span className='p-4 ms-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span></span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img3' />
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Employment History<span className='p-4 '>&nbsp;:</span></span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img3' />
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Police Verification<span className='p-5'>&nbsp;:</span></span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img3' />
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Medical Certification<span className='ps-3'>&nbsp;:</span></span>
                <input type="file"  className='w-50 ms-2  coustomfile' id='input_img3' />
              </div>
            </div>
            <div className='mt-4 brg_btn mb-4'>
              <button type='reset' className='btnclear cursor-pointer' onClick={clearForm}>Clear</button>
              <button type="submit" className='btnsubmit' >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DriverRegister;