import React from 'react'
import Ad1 from "./assets/Instagram post - 11[1].png";
import Ad2 from "./assets/Instagram post - 3[1].png";
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