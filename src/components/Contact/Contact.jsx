import React, { useState, useEffect } from "react";
import Location from "./assets/location.svg";
import Mail from "./assets/mail.svg";
import Phone from "./assets/phone.svg";
import swal from "sweetalert";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    cu_ser_name: "",
    cu_name: "",
    cu_email: "",
    cu_phone: "",
    cu_msg: "",
    created_at: "",
  });

  const [isLoading,setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const clearForm = () => {
    setFormValues({
      cu_ser_name: '',
      cu_name: '',
      cu_email: '',
      cu_phone: '',
      cu_msg: '',
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.cu_ser_name || !formValues.cu_name || !formValues.cu_email || !formValues.cu_phone || !formValues.cu_msg) {
      swal("Error", "Please fill your all details", "error");
    }else{

      setIsLoading(true);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        cu_ser_name: formValues.cu_ser_name.trim(),
        cu_name: formValues.cu_name.trim(),
        cu_email: formValues.cu_email.trim(),
        cu_phone: formValues.cu_phone.trim(),
        cu_msg: formValues.cu_msg.trim(),
        created_at: new Date().toLocaleDateString(),
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: raw,
      };
  
      const route = `${process.env.REACT_APP_BASE_URL}/contactus/register`;
  
     setTimeout(()=>{
      fetch(route, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          
          swal("successful Registred", result.message, "success");
          console.log(clearForm);
        } else {
          swal("Error", result.message, "error")
        }
      })
      .catch((error) => swal("Error", error, "error"))
      .finally(()=>{
        
        setIsLoading(false);
        
      });
     },4000)

    }
 
  };


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(width);
  return (
    <div style={{ height: "100%" }} className="main-contact">
      <div className="contact1">
        <div className="contact_info">
          <section className="container text-center">
            <div
              style={{ gap: "5px" }}
              class={(width<500)?"col":"row"}
            >
              <div
                style={{
                  width: "360px",
                  background: "#FFF5EB",
                  margin: "auto",
                }}
                class="col"
              >
                <div>
                  <h1
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      textAlign: "left",
                      padding: "8px",
                      color: "#650000",
                    }}
                  >
                    Contact <span style={{ color: "#C68643" }}>With Us</span>
                  </h1>
                </div>
                <form
                  style={{minWidth:"350px", background: "#F6C390", paddingTop:"8px", paddingLeft:"0px" }}
                  onSubmit={handleSubmit}
                  className=""
                  name="formc"
                  autoComplete="off"
                >
           


                  <div
                    style={{ gap: "8px", textAlign:"center",paddingRight:"8px" }}
                    className="form-group form-input "
                    
                  >
                    <input
                     disabled={isLoading}
                      style={{ borderRadius: "8px" }}
                      type="text"
                      className="form-control"
                      required
                      placeholder="Service Name"
                      name="cu_ser_name"
                      onChange={handleChange}
                      
                    />
                    <span
                      id="servicename-error"
                      className="error-message"
                    ></span>

                    <input
                     disabled={isLoading}
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                      name="cu_name"
                      onChange={handleChange}
                    />
                    <span id="name-error" className="error-message"></span>

                    <input
                     disabled={isLoading}
                      type="text"
                      className="form-control"
                      placeholder="Email Id"
                      name="cu_email"
                      onChange={handleChange}
                    />
                    <span id="email-error" className="error-message"></span>

                    <input
                     disabled={isLoading}
                      type="tel"
                      className="form-control"
                      required
                      placeholder="Mobile Number"
                      name="cu_phone"
                      min="10"
                      max="10"
                      minLength="10"
                      maxLength="10"
                      onChange={handleChange}
                    />
                    <span
                      id="mobilenumber-error"
                      className="error-message"
                    ></span>

                    <textarea
                      name="cu_msg"
                      disabled={isLoading}
                      className="form-control"
                      placeholder="Note"
                      onChange={handleChange}
                    ></textarea>
                    <span id="text-error" className="error-message"></span>

                    <div className="px-4" style={{gap:"7px",display:"flex",justifyContent:"center",alignItems:"center",margin:"5px"}}>
                    <button
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
                        background: "#144273",
                        color: "#fff",
                        fontWeight: "600",
                        height: "44px", 
                        textAlign:"center" 
                      }} 
                      class="btn " type="submit" >
                      {(isLoading)?<><span style={{color:"white"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                      <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<span style={{color:"white"}} role="status">Send</span>}
                    </button>
                    </div>
                    
                  </div>
                </form>
              </div>

              <div style={{width:"100%", }} class="col">
                <div
                  style={{ width: "360px"}}
                  className="contact-header row my-auto "
                >
                  <h1
                    style={{
                      width: "100%",
                     
                      fontSize: "18px",
                      fontWeight: "700",
                      textAlign: "left",
                      padding: "8px",
                      color: "#650000",
                    }}
                  >
                    Add<span style={{ color: "#C68643" }}>ress:</span>
                  </h1>

                  <section className="container ">
                    <div
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #969696",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "row",
                        margin:"10px 0px"
                      }}
                      class="row"
                    >
                      <div style={{ width: "50px" }} className="col-1">
                        <img
                        className="my-auto"
                          style={{
                            width: "40px",
                            height: "50px",
                            margin:"auto",
                       
                          }}
                          src={Location}
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div className="col">
                        <p
                          style={{
                            width: "100%",
                            fontSize: "21px",
                            textAlign: "justify",
                            gap: "24px",
                            color: "#650000",
                            lineHeight: "27px",
                            fontWeight: "400",
                          }}
                        >
                          <u>Branch</u> : Metro pillar No. 974, Flat no. 107,
                          Rams Enclave, Vik aspuri, Erragadda, Hyderabad -
                          500018.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px",
                        border: "1px solid #969696",
                        borderRadius: "8px",
                        margin:"10px 0px"
                      }}
                      class="row"
                    >
                      <div style={{ width: "50px" }} className="my-auto col-1">
                        <img src={Phone} alt="" srcset="" />
                      </div>
                      <div className="col">
                        <p
                        className="my-auto"
                          style={{
                            fontSize: "21px",
                            textAlign: "justify",
                            gap: "24px",
                            color: "#650000",
                            lineHeight: "27px",
                            fontWeight: "400",
                          }}
                        >+91 78936 53899
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px",
                        border: "1px solid #969696",
                        borderRadius: "8px",
                        margin:"10px 0px"
                      }}
                      class="row"
                    >
                      <div style={{ width: "50px" }} className="col-1">
                        <img src={Mail} alt="" srcset="" />
                      </div>
                      <div className="col">
                        <p
                        className="my-auto"
                          style={{
                            fontSize: "21px",
                            textAlign: "justify",
                            gap: "24px",
                            color: "#650000",
                            lineHeight: "27px",
                            fontWeight: "400",
                          }}
                        >info@rubia.services
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

         
        </div>
        <br />
        <br />
        <div
          style={{
            width: (width<500)?"350px":"90%",
            minWidth:"350px",
            height:"500px",
            margin: "auto",
            padding: "3px",
            overflow: "hidden",
          }}
          className="container map"
        >
          <iframe
            title="ourlocation"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            rel=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1475807858815!2d78.43260727421105!3d17.452649100923733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90e14a9d7a8f%3A0x34c546073766bc84!2sRams%20Enclave%2C%20Sanjeeva%20Reddy%20Nagar%20Rd%2C%20Vikaspuri%2C%20Erragadda%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1719381771518!5m2!1sen!2sin"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
