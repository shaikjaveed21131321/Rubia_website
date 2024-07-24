import React, { useState } from 'react';
import swal from "sweetalert";
const Bregistration = () => {
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
    input_img1:'',
    input_img2:'',
    input_img3:'',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const validate = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (!formValues.businessName.match(/^[a-zA-Z ]+$/)) {
          tempErrors.businessName = "should contain only letters and spaces";
          isValid = false;
        }
    
        if (!formValues.contactNumber.match(/^\d{10}$/)) {
          tempErrors.contactNumber = "should be exactly 10 digits";
          isValid = false;
        }
    
        if (!formValues.emailid.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          tempErrors.emailid = "Invalid email format";
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

  const clearForm = () => {
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
          input_img1:'',
          input_img2:'',
          input_img3:'',
        });
        setErrors({});
      };

  const handelSubmit = (e) => {
    e.preventDefault();
    // if (!validate()) return;

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
        bsn_img1:"",
        bsn_img2: "",
        bsn_img3: "",
        created_at: new Date(),
      }
    )

   
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
    // var url = "http://192.168.0.114:4000/api/v1/business/register";

    fetch("http://192.168.0.114:4000/api/v1/business/register", config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          //coustom  message Altert box 
          swal("successful Registred", result.message, "success");
          // alert(result.message)
        }
        else {

          swal("Error", result.message, "error")
          // alert(result.message)
        }
      }).catch((error) => swal("Error", error, "error"));

  }
  return (
    <>

      <div className='rg'>
        <div className='rg1 mt-4 brmain'>
          <h3 className='text-start ms-4 mt-4 brheader'>Enter Your Business Details</h3>
          <form action="" id="myform" className='m-2 ms-4 me-4 mt-4' onSubmit={handelSubmit}>
            <div className='inputdiv1 mb-4'>
              <div className='inputdiv2 '>
                <input type="text" name="businessName" placeholder='Business Name' className='input1' value={formValues.businessName} onChange={handleChange} />
                {errors.businessName && <p className="error text-danger">{errors.businessName}</p>}
              </div>
              <div className='inputdiv2 '>
                <select style={{color:"#8F8F8F"}} id="" className='input1 w-100 h-100 p-1' name="primaryCategory" value={formValues.primaryCategory} onChange={handleChange} >
                  <option className='option'>Primary Category</option>
                  <option value="A">Hospital</option>
                  <option value="B">Lawyers </option>
                  <option value="C">Charted Accountent</option>
                  <option value="D">Temples</option>
                  <option value="E">Super Market</option>
                  <option value="F">Software Companies</option>
                  <option value="G">Medical shops</option>
                </select>
                {errors.primaryCategory && <p className="error text-danger">{errors.primaryCategory}</p>}
              </div>
            </div>
            <div>
              <textarea name="" id="bg_textarea" style={{width:"100%"}} placeholder='Business description     (1000 characters)' ></textarea>
            </div>
            {/*  */}
            {/* <div className='inputdiv1 mb-4'>
              <div className='inputdiv2 '>

                <select id="" className='input1 w-100 h-100 p-1' name="seconderyCategory" value={formValues.seconderyCategory} onChange={handleChange}>
                  <option className='option'>Secondary Category</option>
                  <option value="A">A</option>
                  <option value="B">B </option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </select>
                {errors.seconderyCategory && <p className="error text-danger">{errors.seconderyCategory}</p>}
              </div>
              <div className='inputdiv2 '>
                <select id="" className='input1 w-100 h-100' name="subCategory" value={formValues.subCategory} onChange={handleChange}>
                  <option className='option'>Sub Category</option>
                  <option value="A">A</option>
                  <option value="B">B </option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </select>
                {errors.subCategory && <p className="error text-danger">{errors.subCategory}</p>}
              </div>
            </div> */}
            {/*  */}
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="servicesList"
                  placeholder='Service List'
                  className='input1'
                  value={formValues.servicesList}
                  onChange={handleChange} />
                  {errors.servicesList && <p className="error text-danger">{errors.servicesList}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                  type="email"
                  name="emailid"
                  placeholder='Email ID'
                  className='input1'
                  value={formValues.emailid}
                  onChange={handleChange}
                />
                {errors.emailid && <p className="error text-danger">{errors.emailid}</p>}
                </div>
            </div>

            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder='Contact Number'
                  className='input1'
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
                  type="text"
                  name="whatsappNumber"
                  placeholder='WhatsApp Number'
                  className='input1'
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
                  type="text"
                  name="gstNumber"
                  placeholder='GST Number'
                  className='input1'
                  value={formValues.gstNumber}
                  onChange={handleChange}
                />
                {errors.gstNumber && <p className="error text-danger">{errors.gstNumber}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="cinNumber"
                  placeholder='C.I.N Number'
                  className='input1'
                  value={formValues.cinNumber}
                  onChange={handleChange}
                />
                {errors.cinNumber && <p className="error text-danger">{errors.cinNumber}</p>}
                </div>
            </div>


            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="blockNumber"
                  placeholder='Block Number / Building Name'
                  className='input1'
                  value={formValues.blockNumber}
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
                  onChange={handleChange} /></div>
            </div>

            <div className='inputdiv1 mb-4 mt-4'>
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
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="state"
                  placeholder='State '
                  className='input1'
                  value={formValues.state}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="pincode"
                  placeholder='Pincode'
                  className='input1'
                  value={formValues.pincode}
                  onChange={handleChange} />
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="websiteName"
                  placeholder='Website Name'
                  className='input1'
                  value={formValues.websiteName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='inputdiv1 mb-4 mt-4'>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="googleMapLink"
                  placeholder='Google Map link'
                  className='input1'
                  value={formValues.googleMapLink}
                  onChange={handleChange}
                />
                {errors.city && <p className="error text-danger">{errors.city}</p>}
              </div>
              <div className='inputdiv2'>
                <input
                  type="text"
                  name="websiteLink"
                  placeholder='Website Link'
                  className='input1'
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="mondayOpen"
                        value={formValues.mondayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="tuesdayOpen"
                        value={formValues.tuesdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="wednesdayOpen"
                        value={formValues.wednesdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="thursdayOpen"
                        value={formValues.thursdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="fridayOpen"
                        value={formValues.fridayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="saturdayOpen"
                        value={formValues.saturdayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
                        type="text"
                        className='timinginput'
                        placeholder='Open'
                        name="sundayOpen"
                        value={formValues.sundayOpen}
                        onChange={handleChange}
                      />
                      <span>/</span>
                      <input
                        type="text"
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
            <div className='mt-4 img_main_div'>
              <h3 className='text-start ms-3 imgHead'>Add Images:</h3>
              <div className='img_div mt-3 mb-3 me-2 ms-3 inputdiv1'>
                <span>Upload First Image&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:</span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img1' name='input_img1' />
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Upload Second Image&#160;&#160;:</span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img2' name='input_img2'/>
              </div>
              <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
                <span>Upload Third Image&#160;&#160;&#160;&#160;&#160;&#160;&#160;:</span>
                <input type="file" className='w-50 ms-2 coustomfile' id='input_img3' name='input_img3'/>
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

export default Bregistration;