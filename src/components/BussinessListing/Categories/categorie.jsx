import React from 'react'
import "../Categories/categorie.css"
import Surgeon from "./assets/Surgeon.png"
import Gynecologist from "./assets/gynecologist.png"
import Dentist from "./assets/dentist.png"
import Nephrologist from "./assets/nephrologist.png"
import Neurologist from "./assets/neurologist.png"
import Oncologist from "./assets/oncologist.png"
import Ophtalmo from "./assets/ophthalmo.png"
import Pediatrician from "./assets/pediatrician.png"
import Psychiatris from "./assets/psychiatris.png"
import Radiologist from "./assets/radiologist.png"
import Urologist from "./assets/urologist.png"
import Pulmonologist  from "./assets/pulmonologist.png"
const categorie = () => {
  return (
    <>
    <div className="categories_container" >
      <br />
      <div  id="categories_row1">
        <div className="categories_colum1"><img src={Dentist} className='categories_img' alt="" /></div>
        <div className="categories_colum1"><img src={Neurologist} className='categories_img' alt="" /></div>
        <div className="categories_colum1"><img src={Surgeon} className='categories_img' alt="" /></div>
        <div className="categories_colum1"><img src={Gynecologist} className='categories_img' alt="" /></div>
        <div className="categories_colum1"><img src={Nephrologist} className='categories_img' alt="" /></div>
        <div className="categories_colum1"><img src={Oncologist} className='categories_img' alt="" /></div>
      </div >
      <br />
        <div id="categories_row2">
          <div className="categories_colum2"><img className='categories_img' src={Ophtalmo} alt="" /></div>
          <div className="categories_colum2"><img className='categories_img' src={Pediatrician} alt="" /></div>
          <div className="categories_colum2"><img className='categories_img' src={Psychiatris} alt="" /></div>
          <div className="categories_colum2"><img className='categories_img' src={Radiologist} alt="" /></div>
          <div className="categories_colum2"><img className='categories_img' src={Urologist} alt="" /></div>
          <div className="categories_colum2"><img className='categories_img' src={Pulmonologist} alt="" /></div>
        </div>
        <br />
    </div>
    </>
  )
}

export default categorie