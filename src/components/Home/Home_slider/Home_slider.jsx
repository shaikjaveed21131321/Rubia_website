import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import D_banner from "../Home_slider/assets/Frame 158.png";
import T_banner from "../Home_slider/assets/Frame 159.png";
import G_banner from "../Home_slider/assets/Frame 160.png";
import S_banner from "../Home_slider/assets/Frame 161.png";
import u_banner from "../Home_slider/assets/Frame 162.png";
import J_banner from "../Home_slider/assets/Frame 163.png";
import R_banner from "../Home_slider/assets/Frame 164.png";




import D_banner1 from "../Home_slider/assets/Property 1=Frame 433.png";
import T_banner2 from "../Home_slider/assets/Property 1=Frame 434.png";
import G_banner3 from "../Home_slider/assets/Property 1=Frame 435.png";
import S_banner4 from "../Home_slider/assets/Property 1=Frame 436.png";
import u_banner5 from "../Home_slider/assets/Property 1=Frame 437.png";
import J_banner6 from "../Home_slider/assets/Property 1=Frame 438.png";
import R_banner7 from "../Home_slider/assets/Property 1=Frame 439.png";
const Home_slider = () => {
  return (
   <>
    <div className="slider_container">
    <Carousel interval={1500} >
      <Carousel.Item  >
      <img className='img_slider' src={D_banner} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='img_slider' src={T_banner} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={G_banner} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={S_banner} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={u_banner} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={J_banner} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={R_banner} alt="" />
      </Carousel.Item>

    </Carousel>
    



    
    </div>
    <div className='slider_container1'>
    <Carousel interval={1500} >
      <Carousel.Item  >
      <img className='img_slider' src={D_banner1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='img_slider' src={T_banner2} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={G_banner3} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={S_banner4} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={u_banner5} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={J_banner6} alt="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='img_slider' src={R_banner7} alt="" />
      </Carousel.Item>

    </Carousel>
    </div>
   </>
  )
}

export default Home_slider