import React, { useState } from 'react'
import Locicon from "./assets/location.jpg"
import Mailicon from "./assets/message.jpg"
import Phonicon from "./assets/phone.jpg"


const Contact = () => {

    const [formValues, setFormValues] = useState({
        cu_ser_name: '',
        cu_name:'',
        cu_email: '',
        cu_phone: '',
        cu_msg: '',
        created_at: ''
    });
   
    const handleChange = (e)=>{
        const {name , value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const clearForm = () => {
        
        document.getElementsByName('cu_ser_name').value = '';
        document.getElementsByName('cu_name').value = ''
        document.getElementsByName('cu_email').value = ''
        document.getElementsByName('cu_phone').value = ''
        document.getElementsByName('cu_msg').value = ''
        
      };

      const handleSubmit = (e)=>{
        e.preventDefault();
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "cu_ser_name": formValues.cu_ser_name.trim(),
            "cu_name": formValues.cu_name.trim(),
            "cu_email": formValues.cu_email.trim(),
            "cu_phone": formValues.cu_phone.trim(),
            "cu_msg": formValues.cu_msg.trim(),
            "created_at": new Date().toLocaleDateString(),
          });
          
          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            body: raw,
          };
          
          fetch("http://192.168.0.114:4000/api/v1/contactus/register", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.success === true){
                    window.alert(result.message);
                    clearForm()
                }else{
                    window.alert(result.message);
                }
            })
            .catch((error) => window.alert(error.message));
            
      }

    
    
  
    return (

        <div className='main-contact'>

        <div className="contact1">
            <div  style={{border: "1px solid black"}} className='contact_info'>
                <section className='container text-center'>
                
                    <div class="col row-md- ">
                        <div style={{width:"360px", background:"#FFF5EB"}} class="col row-md">
                            <div>
                                <h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"left",padding:"8px", color:"#650000"}}>Contact <span style={{color:"#C68643"}}>With Us</span></h1>
                            </div>
                        <form style={{background:"#F6C390", padding:"8px 4px"}} onSubmit={handleSubmit} className='' name='formc' autoComplete="off">
                            <div style={{gap:"8px"}} className='form-group form-input '>

                                <input style={{borderRadius:"8px"}} type="text" className='form-control' required placeholder='Service Name' name='cu_ser_name' onChange={handleChange} />
                                <span id="servicename-error" className="error-message"></span>

                                <input type="text" className='form-control' required placeholder='Name' name='cu_name' onChange={handleChange}  />
                                <span id="name-error" className="error-message"></span>

                                <input type="text" className='form-control'  placeholder='Email Id' name='cu_email' onChange={handleChange}/>
                                <span id="email-error" className="error-message"></span>

                                <input type='tel' className='form-control' required placeholder='Mobile Number' name='cu_phone' min="10" max="10" minLength="10" maxLength="10"  onChange={handleChange} />
                                <span id="mobilenumber-error" className="error-message"></span>

                                <textarea name="cu_msg" id="text" className='form-control' placeholder='Note' onChange={handleChange} ></textarea>
                                <span id="text-error" className="error-message"></span>

                                <button type='submit' className='btn ms-1' >Send Message</button>
                            </div>
                        </form>
                        
                        </div>
                        <div class="col">
                        Column
                        </div>
                    </div>
                </section>
                
                
                
                {/* <div className='contact-header  ' >
                    <h1 className='add-header '>contact <span style={{color:"#C68643"}}>with</span> us</h1>
                    <h1 className='add-header' >Address</h1>
                </div>


                <div className='display-block'>
                    <div className='contact-form' id='contact-block'>
                        <form  onSubmit={handleSubmit} name='formc' autoComplete="off">
                            <div className='form-group form-input'>

                                <input type="text" className='form-control' required placeholder='Service Name' id='servicename' name='cu_ser_name' onChange={handleChange} />
                                <span id="servicename-error" className="error-message"></span>

                                <input type="text" className='form-control' required placeholder='Name' id='name' name='cu_name' onChange={handleChange}  />
                                <span id="name-error" className="error-message"></span>

                                <input type="text" className='form-control'  placeholder='Email Id' id='email' name='cu_email' onChange={handleChange}/>
                                <span id="email-error" className="error-message"></span>

                                <input type='tel' className='form-control' required placeholder='Mobile Number' id='mobilenumber' name='cu_phone' min="10" max="10" minLength="10" maxLength="10"  onChange={handleChange} />
                                <span id="mobilenumber-error" className="error-message"></span>

                                <textarea name="cu_msg" id="text" className='form-control' placeholder='Text' onChange={handleChange} ></textarea>
                                <span id="text-error" className="error-message"></span>

                                <button type='submit' className='btn1 ms-1' >Send Message</button>
                            </div>
                        </form>

    

                    </div>
                    <div className='contact-address' id='contact-block ' >
                        <h1 className='aadd-header' >Address</h1>

                        <div className='add-locaton d-flex' id='location-block'>
                            <img src={Locicon} alt="" />
                            <div className='mt-1'>
                                <p><b><u><b>Branch</b></u> :  Metro pillar No. 974,Flat no. 107,  Rams Enclave,Vikaspuri,Erragadda, Hyderabad - 500018.</b></p>
                                <p><b><u><b>Registed</b></u>: 6-1-105,saifabad,khairatabad,     Hyderabad-500004.</b></p>
                            </div>
                        </div>
                        <div className='add_phone ' id='location-block'>
                            <img src={Phonicon} alt="" />
                            <h4 className='me-5'><b>+91 7893653899</b></h4>
                        </div>
                        <div className='add_phone ' id='location-block'>
                            <img src={Mailicon} alt="" />
                            <h4 className='me-3'><b>info@rubia.services</b></h4>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className='map'>
                <iframe title='ourlocation' loading="lazy" referrerpolicy="no-referrer-when-downgrade" rel='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1475807858815!2d78.43260727421105!3d17.452649100923733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90e14a9d7a8f%3A0x34c546073766bc84!2sRams%20Enclave%2C%20Sanjeeva%20Reddy%20Nagar%20Rd%2C%20Vikaspuri%2C%20Erragadda%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1719381771518!5m2!1sen!2sin"
                    width="800" height="450" ></iframe>
            </div>
            </div>
        </div>
  )
}

export default Contact
