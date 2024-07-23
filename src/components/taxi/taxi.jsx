import React, { useState } from "react";
import Select from "react-select";

// import Banner9 from "../assets/Group 91.jpg"
const Taxi = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options1 = [
    { value: "Airport", label: "Airport" },
    { value: "Local", label: "Local" },
    { value: "Out Station", label: "Out Station" },
  ];
  const options2 = [
    { value: "One-Way Trip ", label: "One-Way Trip " },
    { value: "Round Trip", label: "Round Trip" },

  ];
  const options3 = [
    { value: "Hatch back", label: "Hatch back" },
    { value: "Sedan", label: "Sedan" },
    { value: "SUV", label: "SUV" },
    {value:"Luxury", label:"Luxury"}
  ];
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
              <div className="buttons">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options1}
                  className="dropdown_taxi"
                  placeholder="Airport "
                />
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options2}
                   className="dropdown_taxi"
                   placeholder="One-Way Trip "
                />
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options3}
                  className="dropdown_taxi"
                  placeholder="Hatch back"
                />
              </div>

              <div className="form" style={{ margin: "auto" }}>
                <form action="" className="main_form">
                  <div>
                    <label className="label_taxi" for="input1">
                      frist name
                    </label>
                    <input
                      type="text"
                      id="input1"
                      name="fname"
                      placeholder="Enter Frist Name"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input2">
                      last name
                    </label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input3">
                      drop address
                    </label>
                    <input
                      type="text"
                      id="input3"
                      name="input3"
                      placeholder="Enter Drop Address"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input4">
                      pickup address
                    </label>
                    <input
                      type="text"
                      id="input4"
                      name="input4"
                      placeholder="Enter Pickup Address"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input5">
                      pickup date
                    </label>
                    <input type="date" id="input5" name="input5" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input6">
                      drop date
                    </label>
                    <input type="date" id="input6" name="input6" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input7">
                      pickup time
                    </label>
                    <input type="time" id="input7" name="input7" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input8">
                      drop time
                    </label>
                    <input type="time" id="input8" name="input8" />
                  </div>
                  <div>
                    <label className="label_taxi" for="input9">
                      mobile number
                    </label>
                    <input
                      type="text"
                      id="input9"
                      name="input9"
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                  <div>
                    <label className="label_taxi" for="input10">
                      email
                    </label>
                    <input
                      type="text"
                      id="input10"
                      name="input10"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div class="full-width">
                    <label className="label_taxi" for="input12">
                      coment
                    </label>

                    <textarea
                      style={{ height: "130px" }}
                      name="input12"
                      id="input12"
                    ></textarea>
                  </div>
                  <button type="submit" className="full-width" id="btn_taxi">
                    submit
                  </button>
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
