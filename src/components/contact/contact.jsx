import React from 'react'
import Locicon from "./assets/location.jpg"
import Mailicon from "./assets/message.jpg"
import Phonicon from "./assets/phone.jpg"

const contact = () => {

  
  
    return (

        <div className='main-contact'>

        <div className="contact1">
            <div className='contact_info'>
                <div className='contact-header  ' >
                    <h1 className='add-header '>contact <span style={{color:"#C68643"}}>with</span> us</h1>
                    <h1 className='add-header' >Address</h1>
                </div>


                <div className='display-block'>
                    <div className='contact-form' id='contact-block'>
                        <form  method='post'  name='formc' action="" autoComplete="off">
                            <div className='form-group form-input'>

                                <input type="text" className='form-control' required placeholder='Service Name' id='servicename' name='servicename' />
                                <span id="servicename-error" className="error-message"></span>

                                <input type="text" className='form-control' required placeholder='Name' id='name' name='name' />
                                <span id="name-error" className="error-message"></span>

                                <input type="text" className='form-control'  placeholder='Email Id' id='email' name='email' />
                                <span id="email-error" className="error-message"></span>

                                <input type='tel' className='form-control' required placeholder='Mobile Number' id='mobilenumber' name='mobilenumber' min="10" max="10" minLength="10" maxLength="10" />
                                <span id="mobilenumber-error" className="error-message"></span>

                                <textarea name="text" id="text" className='form-control' placeholder='Text' ></textarea>
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
                </div>

            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1475807858815!2d78.43260727421105!3d17.452649100923733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90e14a9d7a8f%3A0x34c546073766bc84!2sRams%20Enclave%2C%20Sanjeeva%20Reddy%20Nagar%20Rd%2C%20Vikaspuri%2C%20Erragadda%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1719381771518!5m2!1sen!2sin"
                    width="800" height="450" ></iframe>
            </div>
            </div>
        </div>
  )
}

export default contact