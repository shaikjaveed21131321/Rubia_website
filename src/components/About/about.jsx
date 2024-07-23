import React, { useState } from 'react'

import Img2 from "./assets/cin.jpg"
import Img3 from "./assets/gst1.jpg"
import Img4 from "./assets/gst2.jpg"
import Img5 from "./assets/gst3.jpg"
import Img8 from "./assets/pan.jpg"
import Img1 from "./assets/startup.jpg"
import Img6 from "./assets/udyam1.jpg"
import Img7 from "./assets/udyam2.jpg"

const About = () => {
    
  const [show, setShow] = useState("d-none");
  const [title, setTitle] = useState("show");
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
      if (isVisible) {
          setTitle("show");
          setShow("d-none");
      } else {
          setTitle("hide");
          setShow("d-flex");
      }
      setIsVisible(!isVisible);
  };
    
  return (
    <>
    <div className='about-text'>
      <div className='about1'>
    <h1  id='header' className='text-start'><u style={{fontWeight:"700"}}>About <span style={{color:"#C68643",fontWeight:"700"}}>us</span></u></h1>
    <p className='text-start ml-3'>Welcome to RUBIA SERVICES your premier destination for comprehensive business solutions. We specialize in delivering a wide array of services to save your time, money, and energy while enhancing your business standards and expanding your market reach.</p>
    <h1 id='header' className='text-start'><u style={{fontWeight:"700"}}>Who <span style={{color:"#C68643",fontWeight:"700"}}>We Are</span> </u></h1>
    <p  className='text-start ml-4'>At Rubia Services we believe in integrating multiple services into a single, efficient platform. Our expert team is dedicated to providing top-quality, innovative solutions tailored to meet the diverse needs of modern businesses.</p>
    <h1 id='header'  className='text-start'><u style={{fontWeight:"700"}}>Our <span style={{color:"#C68643",fontWeight:"700"}}>Services</span> </u></h1>
    <h5  className='text-start ' ><u style={{fontWeight:"550"}}>We offer a diverse range of services designed to help your business thrive:</u></h5>
    <ul className='text-start'>
        <li><p><span>Rented Car Driver Services:</span>Our professional and reliable drivers are available to meet all your transportation needs, ensuring safe and comfortable journeys.</p></li>
        <li><p><span>Digital Marketing:</span> Our comprehensive digital marketing strategies include SEO, social media marketing, content creation, and email campaigns to boost your online presence and drive engagement.</p></li>
        <li><p><span>Graphic Designing:</span>We offer creative solutions for logos, branding, marketing materials, and digital graphics, ensuring your brand stands out.</p></li>
        <li><p><span>Mobile Application Development:</span>We specialize in developing custom mobile apps for iOS and Android, focusing on user-friendly interfaces and seamless functionality.</p></li>
        <li><p><span>Web Application Development:</span>Our services include responsive web design, e-commerce solutions, and complete web development to enhance your online presence.</p></li>
        <li><p><span>UX/UI Designing: </span>Our team creates engaging and intuitive user experiences through detailed research and innovative design.</p></li>
        <li><p><span>Application Development and Testing:</span>We provide full-stack development, rigorous quality assurance, and continuous integration to ensure your applications are robust and reliable.</p></li>
    </ul>
    <h1 id='header' style={{fontWeight:"700"}} className='text-start'>Our <span style={{color:"#C68643",fontWeight:"700"}}>Vision</span></h1>
    <p className='text-start ml-4'>Our vision is to be the go-to platform for businesses seeking high-quality services under one roof. We are dedicated to driving growth and success for our clients by providing reliable, efficient, and innovative solutions.</p>
    
    <h1 id='header' style={{fontWeight:"700"}} className=' text-start'>Why <span style={{color:"#C68643",fontWeight:"700"}}>Choose Us?</span> </h1>
    <p className='text-start'>Choosing Rubia Services means partnering with a team committed to your success. Our customer-centric approach ensures that every service is tailored to your specific needs, while our competitive pricing guarantees the best value without compromising on quality.</p>
    
    <h5 className='text-start c-h5'>Ready to take your business to the next level? Contact us today!</h5>
    <p className='text-start'>Experience the difference with Rubia services– your ultimate partner for professional services, where excellence and efficiency meet.</p>
    <div className='d-flex flex-row justify-content-between'>
        <h1 id='header' style={{fontWeight:"700"}}>Our Legal <span style={{color:"#C68643",fontWeight:"700"}}>Documents :</span></h1>
        <div className="" >
       
        <button type='button' className='btn_documents' onClick={toggle} >{title}</button>
        </div>
    </div>
    
    <div className={show}>

       <div className='imgs'>
          
          <img  src={Img1} alt="" />
          <img  src={Img8} alt="" />
          <img  src={Img3} alt="" />
          <img  src={Img4} alt="" />
          <img  src={Img5} alt="" />
          <img  src={Img6} alt="" />
          <img  src={Img2} alt="" />
          <img  src={Img7} alt="" />
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default About