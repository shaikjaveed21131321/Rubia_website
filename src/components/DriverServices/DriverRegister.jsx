import React, { useState, useEffect } from "react";
import swal from "sweetalert";

const DriverRegister = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  };

  const handelSubmit = (e) => {
    e.preventDefault();

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
      dr_ph: "",
      dr_ph_lic: "",
      dr_ph_add_proof: "",
      dr_ph_hist: "",
      dr_pol_ver: "",
      dr_med_cer: "",
      created_at: new Date(),
    });

    console.log(data);

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

    fetch("http://192.168.0.114:4000/api/v1/drivers/register", config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success == true) {
          //coustom  message Altert box
          swal("successful Registred", result.message, "success");
          // alert(result.message)
        } else {
          swal("Error", result.message, "error");
          // alert(result.message)
        }
      })
      .catch((error) => swal(error));
  };

  const formValidation = () => {
    const newErrors = {};
    if (!formValues.businessName)
      newErrors.businessName = "Business Name is required";
    if (!formValues.businessCategory)
      newErrors.businessCategory = "Business Category is required";
    if (!formValues.contactNumber)
      newErrors.contactNumber = "Contact Number is required";
    if (!formValues.city) newErrors.city = "City is required";
    if (!formValues.state) newErrors.state = "State is required";
    if (!formValues.pincode) newErrors.pincode = "Pincode is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can proceed with form submission
      console.log("Form is valid, submitting...");
    } else {
      console.log("Form has errors");
    }
  };

  const divInput = "d-flex flex-column flex-lg-row mb-4  gap-4";
  const inputStyle = "w-100 p-2 w-lg-50";
  const inputStyleTag = {
    width: "50%",
    background:"white",
    border: "1px solid #FF6666",
    color: "#995050",
    fontWeight: "bold",
  };

  const divDoc = "d-flex flex-column justify-content-between align-item-center flex-lg-row "
  const docInputClass = "p-2"
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
            
            className="mx-2 mx-lg-4"
            onSubmit={handelSubmit}
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
              />

              <input
                
                type="email"
                name="emailid"
                placeholder="Email ID"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.emailid}
                onChange={handleChange}
              />
            </div>
            <div className={divInput}>
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.contactNumber}
                onChange={handleChange}
              />

              <input
                type="text"
                name="emergencyNumber"
                placeholder="Emergency Contact"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.emergencyNumber}
                onChange={handleChange}
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
              />

              <input
                type="text"
                name="area"
                placeholder="Area"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.area}
                onChange={handleChange}
              />
            </div>
            <div className={divInput}>
              <input
                type="text"
                name="pincode"
                placeholder="Pin code"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.pincode}
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.city}
                onChange={handleChange}
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
              />

              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.dob}
                onChange={handleChange}
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
                placeholder="No.Of Years Experience"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.exp}
                onChange={handleChange}
              />

              <input
                type="text"
                name="salexp"
                placeholder="Salary expectation"
                style={inputStyleTag}
                className={inputStyle}
                value={formValues.salexp}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 img_main_div">
              <div className="p-3 d-flex gap-2">

              <div className={divDoc}>
                <span>
                  Driver Photo :
                </span>
                <input
                  type="file"
                  style={inputStyleTag}
                className={docInputClass}
                />
              </div>
              <div className={divDoc}>
                <span>
                  Driving License
                </span>
                <input
                  type="file"
                  style={inputStyleTag}
                  className={docInputClass}
                  
                />
              </div>
              <div className={divDoc}>
                <span>
                  Address Proof:
                </span>
                <input
                  type="file"
                  style={inputStyleTag}
                  className={docInputClass}
                  
                />
              </div>
              <div className={divDoc}>
                <span>
                  Employment History:
                </span>
                <input
                  type="file"
                  style={inputStyleTag}
                  className={docInputClass}
                  
                />
              </div>
              <div className={divDoc}>
                <span>
                  Police Verification:
                </span>
                <input
                  type="file"
                  style={inputStyleTag}
                  className={docInputClass}
                  
                />
              </div>
              <div className={divDoc}>
                <span>
                  Medical Certification:
                </span>
                <input
                  type="file"
                  style={inputStyleTag}
                  className={docInputClass}
                  
                />
              </div>

              </div>
            </div>
            <div className="mt-4 brg_btn mb-4">
              <button
                type="reset"
                className="btnclear cursor-pointer"
                onClick={clearForm}
              >
                Clear
              </button>
              <button type="submit" className="btnsubmit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DriverRegister;
