import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const form = () => {
    const[name,setName]=useState();
    const[nameErro,setNameErro]=useState(false);
  const handleName = (e)=>{
    let name =e.target.value;
    if(name.length<3){
        setNameErro(true)
    }
    else{
      setNameErro(false)
    }
    setName(name)
  }
  
  return (
    <>
    <form >
        <label htmlFor="">name</label>
        <input type="text" name='name' onChange={handleName} />
        {nameErro? <span>enter min 3 characters</span>:""}
        <br />
        <br />
        <label htmlFor="">lname</label>
        <input type="text" name='name' />
        <br />
        <br />
        <label htmlFor="">email</label>
        <input type="text" name='name' />
        <br />
        <br />
        <label htmlFor="">phone</label>
        <input type="text" name='name' />
        <br />
        <br />
    </form>
   
    </>
  )
}

export default form