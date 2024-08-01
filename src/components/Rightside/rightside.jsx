import React from 'react'
import Ad1 from "./assets/WhatsApp Image 2024-07-29 at 17.12.09_f4954411.jpg";
import Ad2 from "./assets/Hire professional Driver squer.png";
import Ad3 from "./assets/Instagram_post_-_2_(2)[1].png"
const rightside = () => {
  return (
    <>
    <div class="ads">
        <div className="ads1"> <img className='Adimg' src={Ad1} alt="" /></div>
        <div className="ads1"> <img className='Adimg' src={Ad2} alt="" /></div>
        <div className="ads1"> <img className='Adimg' src={Ad3} alt="" /></div>
      </div>
    </>
  )
}

export default rightside