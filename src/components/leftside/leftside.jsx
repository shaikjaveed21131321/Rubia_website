import React from 'react'
import {  NavLink} from 'react-router-dom';
import Logo8 from '../leftside/assets/bussineslisting.svg'
import Logo from './assets/Drivericon.png';
import Logo1 from  './assets/Taxi.png';
import Logo2 from './assets/Mask group (1).png';
import Logo3 from "./assets/sofware.png"
import Logo4 from './assets/Mask group (2).png';
import Logo5 from './assets/Mask group (3).png';
import Logo6 from './assets/Mask group (4).png';
import Logo7 from './assets/Mask group (5).png';
import WhLogo from "./assets/WhatsApp_icon (1).png"
const leftside = () => {
  return (
    <>
    <div class="main">
      <div class="services">
          <label className="label">our services</label>
          <NavLink className="services-links" to='/businesslisting/' 
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':"",}}} >
          <img  src={Logo8} alt="" className='leftslide_logo8' />
         
          <div  className='leftlinks1'>BUSINESS LISTING</div>
          </NavLink>

             <NavLink className="services-links" to='/driver/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}} >

          <img src={Logo} alt="" className='leftslide_logo1' />
          <div  className='leftlinks1'> driver</div>
          </NavLink>

          <NavLink className="services-links" to='/taxi/' 
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img src={Logo1} alt="" className='leftslide_logo2' />
          <div  className='leftlinks1'> taxi</div>
          </NavLink>

          <NavLink className="services-links" to='/graphic desiging/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img src={Logo2} alt="" className='leftslide_logo3'style={{marginTop:"4px"}} />
          <div  className='leftlinks1'> graphic desiging</div>
          </NavLink>

          <NavLink className="services-links" to='/software/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img src={Logo3} alt="" className='leftslide_logo4' style={{marginTop:"2px"}} />
          <div  className='leftlinks1'> software</div>
          </NavLink>
         
          <NavLink className="services-links" to='/digital marketing/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img src={Logo4} alt="" className='leftslide_logo5' />
          <div  className='leftlinks1'> digital marketing</div>
          </NavLink>

          <NavLink className="services-links" to='/ui/ux desigining/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img src={Logo5} alt="" className='leftslide_logo6' />
         
          <div   className='leftlinks1'> ui/ux desigining</div>
          </NavLink>

          <NavLink className="services-links" to='/job portal/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img src={Logo6} alt="" className='leftslide_logo7' />
          <div className='leftlinks1'> job portal</div>
          
          </NavLink>

                   <NavLink id='logo7' className="services-links" to='/real state/'
          style={({isActive})=>{return {background:isActive?'#C68643':'' ,color:isActive?'white':""}}}>

          <img id='img7' src={Logo7} alt="" className='leftslide_logo8'  />
          <div  className='leftlinks1'> real state</div>
          </NavLink>
          
      </div>

      {/* whatsapp link here starts here */}
      <div className='fixed-bottom right-100 pr-3 ' style={{zIndex:"6",right:"initial"}}>
          <a style={{}} href='https://wa.me/+917893653899?text=Hello' target='blank'>
            <img src={WhLogo} alt="" width={60} /><sub>support</sub>
          </a>
        </div>
        {/* whatapp link ends here */}

      
      {/* <div className='serves1'>
          <img src={serves} alt="" />
      </div> */}
      </div>
    </>
  )
}

export default leftside