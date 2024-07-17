import React from 'react'
import { Link } from 'react-router-dom'
import Img2 from "./assets/Frame 236.jpg"


const Digitalmarketing = () => {
  return (
    <>
    <div className='digital-text'>
        <div className='digital1'>
    <div id='digital2' className='d-main mt-1 d-block' >
       
      <div className='dg-bgimg d-flex flex-row justfiy-content-start align-items-end'>
          <div className='dg-bgtext'>
          <h2  className='text-white mt-0'><b>BEST SOCIAL MEDIA MARKETING SERVICES</b></h2>
          <h5 className='text-white mt-1'>Develop a uniform brand voice, engage <br/> your target audience, and nurture enduring customer relationships<br/> with Rubia.</h5>
           <Link to='/contact/'><button className='btn btun btn-primary  mt-3'><b>Contact Us</b></button></Link>
          </div>
        </div>
<br />
      <div className='dg-bgimg1'>
          <img src={Img2} alt="" />
      </div>
      <br />
      <div className=' card  dg-card'>
        <div className='card-body'>
        <h5 class="card-title dg-card_title1">DIGITAL MARKETING</h5>
        <h5 class="card-title dg-card_title2">GETTING MORE EYES ON YOUR BRAND</h5>

        <div className='d-flex  flex-row justify-content-between'>
            
            <div className='dg-block justify-content-start mt-5 text-start'>
                <p><b>Email Marketing</b></p>
                <p><b>ASO</b></p>
                <p><b>Contact Marketing</b></p>
            </div>
           
            <div className='dg-block justify-content-center mt-5 ml- text-start'>
                <p><b>Branding</b></p>
                <p><b>PPC Campaing</b></p>
                <p><b>Video Marketing</b></p>
            </div>
            
            <div className='dg-block justify-content-center mt-5 ml- text-start'>
                <p><b>SEO</b></p>
                <p><b>SMO</b></p>
                <p><b>SMM</b></p>
            </div>

        </div>

        </div>
      </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Digitalmarketing