import React, { useState } from 'react';
import swal from "sweetalert";

// import Banner9 from "../assets/Group 91.jpg"
const Taxi = () => {
  const [formValues, setFormValues] = useState({
    tx_type:'',
    tx_trip_type:'',
    tx_return_type:'',
    tx_fname:'',
    tx_lname:'',
    tx_pick_add:'',
    tx_drop_add:'',
    tx_pick_date:'',
    tx_drop_date:'',
    tx_pick_time:'',
    tx_drop_time:'',
    tx_mob_num:'',
    tx_email:'',
    tx_comm:'',
    created_at:''
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const regex = /^[0-9]+$/;
  if(formValues.tx_mob_num != "" && !formValues.tx_mob_num.match(regex))
    {
     swal("Error" , "Enter Only Digits");
    }

  const handelSubmit = (event) => {
    event.preventDefault();
    

    let data = JSON.stringify({
        tx_type:formValues.tx_type.trim(),
        tx_trip_type:formValues.tx_trip_typetrim(),
        tx_return_type:formValues.tx_return_typetrim(),
        tx_fname:formValues.tx_fnametrim(),
        tx_lname:formValues.tx_lnametrim(),
        tx_pick_add:formValues.tx_pick_addtrim(),
        tx_drop_add:formValues.tx_drop_addtrim(),
        tx_pick_date:formValues.tx_pick_datetrim(),
        tx_drop_date:formValues.tx_drop_datetrim(),
        tx_pick_time:formValues.tx_pick_timetrim(),
        tx_drop_time:formValues.tx_drop_timetrim(),
        tx_mob_num:formValues.tx_mob_numtrim(),
        tx_email:formValues.tx_emailtrim(),
        tx_comm:formValues.tx_commtrim(),
        created_at:new Date(),
       })

   
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      body: data,
      redirect: "follow",
      headers: {
        'content-Type': 'application/json'
      },
    };

    const route = `${process.env.REACT_APP_BASE_URL}/api/v1/taxi/register/`
    fetch(route, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          //coustom  message Altert box 
          swal("successful Registred", result.message, "success");
         
        }
        else {

          swal("Error", result.message, "error")
       
        }
      }).catch((error) => swal("Error", error, "error"));

  }
 
  return (
    <>
      <div className="taxi-text">
        <div className="taxi1">
          {/* <h1>taxi</h1> */}
          {/* <p>1.B2C (Business to Customer)</p>
          <img src={Banner9} alt="" style={{height:"886px",width:"880px"}}/> */}
          <div className="taxi2">
            <p className="text">1.B2C (Business to Customer)</p>
            <p className="text1">a) Hire-Car taxi </p>
            <div className="car_taxi">
              
              <div className="form" style={{ margin: "auto" }}>
                <form action="" onSubmit={{handelSubmit}} autoComplete="off">
                
                <div className="buttons">
                {/* <Select
                  defaultValue={setTx_type}
                  onChange={setTx_type}
                  options={options1}
                  className="dropdown_taxi"
                  placeholder="Airport"
                />
                <Select
                  defaultValue={setTx_trip_type}
                  onChange={setTx_trip_type}
                  options={options2}
                   className="dropdown_taxi"
                   placeholder="One-Way Trip "
                />
                <Select
                  defaultValue={setTx_return_type}
                  onChange={setTx_return_type}
                  options={options3}
                  className="dropdown_taxi"
                  placeholder="Hatch back"
                /> */}
  
                <select onChange={handleChange} style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} name="tx_type" id="" className="dropdown_taxi">
                  <option  value="Airport">Airport</option>
                  <option value="Local">Local</option>
                  <option value="Out Station">Out Station</option>
                </select>
                
                <select onChange={handleChange} style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} name="tx_trip_type" id="" className="dropdown_taxi">
                  <option value="One-Way Trip">One-Way Trip</option>
                  <option value="Round Trip">Round Trip</option>
                </select>
       
                <select onChange={handleChange} style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} name="tx_return_type" id="" className="dropdown_taxi">
                  <option value="Hatch back">Hatch back</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
                <div  className="main_form">
                  <div>
                    <label className="label_taxi" for="input1">
                      frist name
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                      id="input1"
                      name="tx_fname"
                      placeholder="Enter Frist Name"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input2">
                      last name
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                      id="input2"
                      name="tx_lname"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input3">
                      drop address
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                      id="input3"
                      name="tx_drop_add"
                      placeholder="Enter Drop Address"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input4">
                      pickup address
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                      id="input4"
                      name="tx_pick_add"
                      placeholder="Enter Pickup Address"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input5">
                      pickup date
                    </label>
                    <input type="date"
                    onChange={handleChange}
                    style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} id="input5" name="tx_pick_date" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input6">
                      drop date
                    </label>
                    <input type="date"
                    onChange={handleChange}
                    style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} id="input6" name="tx_drop_date" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input7">
                      pickup time
                    </label>
                    <input type="time"
                    onChange={handleChange}
                    style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} id="input7" name="tx_pick_time" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input8">
                      drop time
                    </label>
                    <input type="time"
                    onChange={handleChange}
                    style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}} id="input8" name="tx_drop_time" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input9">
                      mobile number
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      min="10"
                      minLength="10"
                      max="10"
                      maxLength="10"
                      style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                      id="input9"
                      name="tx_mob_num"
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input10">
                      email
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      style={{background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                      id="input10"
                      name="tx_email"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div class="full-width">
                    <label className="label_taxi" for="input12">
                      coment
                    </label>

                    <textarea
                    onChange={handleChange}
                    style={{height:"130px",background:"#FFF",padding:"5px", fontWeight:"600" , border:"1px solid #FFA3A3"}}
                     
                      name="tx_comm"
                      id="input12"
                    ></textarea>
                  </div>
                  <button type="submit" className="full-width" id="btn_taxi">
                    submit
                  </button>
                  
                </div>
                </form>
              </div>
            </div>
            <br />

            <div className="text3">
              <p className="text1">b) Hire-Auto taxi </p>
              <p>
                <ol style={{ textAlign: "start" }} className="ol">
                  <li>
                    Download the RUBIA App
                    <ul type="disc">
                      <li>Available on the App Store and Google Play.</li>
                      <li>Download for iOS | Download for Android</li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
            <div className="text3">
              <p className="text1">c) Hire-Bike taxi </p>
              <p>
                <ol className="ol" style={{ textAlign: "start" }}>
                  <li>
                    Download the RUBIA App
                    <ul type="disc">
                      <li>Available on the App Store and Google Play.</li>
                      <li>Download for iOS | Download for Android</li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taxi;
