import React, { useState } from 'react';
const Bregistration = () => {
  const [formValues, setFormValues] = useState({
    businessName: '',
    businessCategory: '',
    servicesList: '',
    contactNumber: '',
    whatsappNumber: '',
    landmark: '',
    blockNumber: '',
    streetName: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    googleMapLink: '',
    websiteName: '',
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify(
      {
        bsn_name: formValues.businessName,
        bsn_category: formValues.businessCategory,
        bsn_services_list: formValues.servicesList,
        bsn_con_num: formValues.contactNumber,
        bsn_whs_app_num: formValues.whatsappNumber,
        bsn_landmark: formValues.landmark,
        bsn_bnum_bname: formValues.blockNumber,
        bsn_str_colo_name: formValues.streetName,
        bsn_area: formValues.area,
        bsn_city: formValues.city,
        bsn_state: formValues.state,
        bsn_pincode: formValues.pincode,
        bsn_gmap_link: formValues.googleMapLink,
        bsn_website_name: formValues.websiteName,
        bsn_tm_mon_op: formValues.mondayOpen,
        bsn_tm_mon_cl: formValues.mondayClose,
        bsn_tm_tue_op: formValues.tuesdayOpen,
        bsn_tm_tue_cl: formValues.tuesdayClose,
        bsn_tm_wed_op: formValues.wednesdayOpen,
        bsn_tm_wed_cl: formValues.wednesdayClose,
        bsn_tm_thus_op: formValues.thursdayOpen,
        bsn_tm_thus_cl: formValues.thursdayClose,
        bsn_tm_fri_op: formValues.fridayOpen,
        bsn_tm_fri_cl: formValues.fridayClose,
        bsn_tm_sat_op: formValues.saturdayOpen,
        bsn_tm_sat_cl: formValues.saturdayClose,
        bsn_tm_sun_op: formValues.sundayOpen,
        bsn_tm_sun_cl: formValues.sundayClose,
        bsn_email: "",
        bsn_img1: "",
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

    fetch("http://192.168.0.114:4000/api/v1/business/register", config).then((response) => response.json())
      .then((result) =>{
        if (result.success == true) {
          alert(result.message)
          }
          else{
            alert(result.message)
          }
      }).catch ((error) =>  alert(error));
    
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
        <h3 className='text-start ms-4 mt-4 brheader'>Enter Your Business Details</h3>
        <form action="" className='m-2 ms-4 me-4 mt-4' onSubmit={handelSubmit}>
          <div className='inputdiv1 mb-4'>
            <div className='inputdiv2 '>
              <input type="text" name="businessName" placeholder='Business Name' className='input1' value={formValues.businessName} onChange={handleChange} />
              {errors.businessName && <p className="error text-danger">{errors.businessName}</p>}
            </div>
            <div className='inputdiv2 '>
              <input
                type="text"
                name="businessCategory"
                placeholder='Business Category'
                className='input1'
                value={formValues.businessCategory}
                onChange={handleChange} />
              {errors.businessCategory && <p className="error text-danger">{errors.businessCategory}</p>}
            </div>
          </div>
          <div className='inputdiv1'>
            <input
              type="text"
              name="servicesList"
              placeholder='Services List'
              value={formValues.servicesList}
              onChange={handleChange}
            />
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
              {errors.contactNumber && <p className="error text-danger">{errors.contactNumber}</p>}
            </div>
            <div className='inputdiv2'>
              <input
                type="text"
                name="whatsappNumber"
                placeholder='WhatsApp Number'
                className='input1'
                value={formValues.whatsappNumber}
                onChange={handleChange}
              /></div>
          </div>
          <div className='inputdiv1'>
            <input
              type="text"
              name="landmark"
              placeholder='Landmark'
              value={formValues.landmark}
              onChange={handleChange}
            />
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
                name="streetName"
                placeholder='Street / Colony Name'
                className='input1'
                value={formValues.streetName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='inputdiv1'>
            <input
              type="text"
              name="area"
              placeholder='Area'
              value={formValues.area}
              onChange={handleChange}
            />
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
              {errors.city && <p className="error text-danger">{errors.city}</p>}
            </div>
            <div className='inputdiv2'>
              <input
                type="text"
                name="state"
                placeholder='State'
                className='input1'
                value={formValues.state}
                onChange={handleChange}
              />
              {errors.state && <p className="error text-danger">{errors.state}</p>}
            </div>
          </div>
          <div className='inputdiv1 mb-4 '>
            <input
              type="text"
              name="pincode"
              placeholder='Pincode'
              value={formValues.pincode}
              onChange={handleChange} />
            {errors.pincode && <p className="error text-danger">{errors.pincode}</p>}
          </div>
          <div className='inputdiv1 mb-4'>
            <input
              type="text"
              name="googleMapLink"
              placeholder='Google Map link'
              value={formValues.googleMapLink}
              onChange={handleChange}
            />
          </div>
          <div className='inputdiv1 mb-4'>
            <input
              type="text"
              name="websiteName"
              placeholder='Website Name'
              value={formValues.websiteName}
              onChange={handleChange}
            />
          </div>
          <div className='inputdiv1 mb-4'>
            <input
              type="text"
              name="websiteLink"
              placeholder='Website Link'
              value={formValues.websiteLink}
              onChange={handleChange}
            />
          </div>

          <div className='timing_main_table'>
            <h3 className='text-start ms-3 imgHead'>Timings:</h3>
            <div className='timimg_table'>
              <div className='tm_div_row1'>
                <div className='timingday'>
                  <p>Monday  &nbsp; &nbsp; &nbsp; &nbsp;&#160; :</p>
                  <div className='div_tm_input'>
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
                  <div className='div_tm_input'>
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
                  <p>Wednesday  :</p>
                  <div className='div_tm_input'>
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
              <div className='tm_div_row2 ms-5'>
                <div className='timingday'>
                  <p className=''>Thursday    :</p>
                  <div className='div_tm_input'>
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
                  <p className=''>Friday          :</p>
                  <div className='div_tm_input'>
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
                  <p>Saturday    :</p>
                  <div className='div_tm_input'>
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
              <div className='ms-5 d-flex justify-content-center'>
                <div className='timingday'>
                  <p>Sunday    :</p>
                  <div className='div_tm_input'>
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
              <input type="file" className='w-50 ms-2' id='input_img1' />
            </div>
            <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
              <span>Upload Second Image&#160;:</span>
              <input type="file" className='w-50 ms-2' id='input_img2' />
            </div>
            <div className='img_div mt-3 mb-3 ms-3 me-2 inputdiv1'>
              <span>Upload Third Image&#160;&#160;&#160;&#160;&#160;&#160;&#160;:</span>
              <input type="file" className='w-50 ms-2' id='input_img3' />
            </div>
          </div>
          <div className='mt-4 brg_btn mb-4'>
            <button type='reset' className='btnclear cursor-pointer'>Clear</button>
            <button type="submit" className='btnsubmit' >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </>
);
}

export default Bregistration;
