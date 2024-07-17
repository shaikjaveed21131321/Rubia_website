import React from 'react'
import Logo from './img/logo.png'

const DriverServiceTableCard = (props) => {

    const td1 ={
        padding:"7px", border:"1px solid white", font:"30px",background: "#C68643", color:"#144273" 
    }
    const td2 ={
        padding:"7px", border:"1px solid white", font:"40px", background: "#144273", color:"#FFFF"
    }

    const amtTableObj = props.amtTableObj;
    
    
  return (
    <>
        <table style={{margin: " 15px 0px", width:"80px"}} className='fw-bold d-table  h-50'>
            <thead>
                <tr>
                    <th style={td2}><img src={Logo} alt="" /></th>
                    <th style={td2} className='fw-bold'>Booking Type</th>
                    <th style={td2} className='fw-bold'>Base Time</th>
                    <th style={td2} className='fw-bold'>Base Fare</th>
                    <th style={td2} className='fw-bold'>Extra Min</th>
                    <th style={td2} className='fw-bold'>Night Charges <br /> &#40;9:00pm - 6:00am&#41;</th>
                    <th style={td2} className='fw-bold'>Return Charges</th>
                </tr>
            </thead>

        <tbody>
        <tr>
            <td rowSpan="2" style={td2} className='fw-bold'>In City</td>
            <td style={td1} className='fw-bold'>One Way</td>
            
            
            {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            {Object.values(amtTableObj.incity.oneway).map((item)=><td style={td1} className='fw-bold' key={item}>{item}</td>)}

                {/* Below is old Design code */}
            {/* <td style={td1} className='fw-bold'>2hrs</td>
            <td style={td1} className='fw-bold'>260</td>
            <td style={td1} className='fw-bold'>&#8377;2 per min</td>
            <td style={td1} className='fw-bold'>&#8377;200</td>
            <td style={td1} className='fw-bold'></td> */}
        </tr>
        <tr>
             <td style={td1} className='fw-bold'>Road Trip</td>

             {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            
             {Object.values(amtTableObj.incity.roadtrip).map((item)=><td style={td1} className='fw-bold' key={item}>{item}</td>)}
             {/* Below is old Design code */}
            {/* 
            <td style={td1} className='fw-bold'>2hrs</td>
            <td style={td1} className='fw-bold'>300</td>
            <td style={td1} className='fw-bold'>&#8377;3 per min</td>
            <td style={td1} className='fw-bold'>&#8377;200</td>
            <td style={td1} className='fw-bold'></td> */}
        </tr>
        <tr>
            <td rowSpan="2" style={td2} className='fw-bold'>Out <br /> Station</td>
            <td style={td1} className='fw-bold'>One Way</td>
            

            {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            {Object.values(amtTableObj.outstation.oneway).map((item)=><td style={td1} className='fw-bold' key={item}>{item}</td>)}
            
            {/* Below is old Design code */}
            {/* <td style={td1} className='fw-bold'>4hrs</td>
            <td style={td1} className='fw-bold'>900</td>
            <td style={td1} className='fw-bold'>&#8377;2 per min</td>
            <td style={td1} className='fw-bold'>&#8377;200</td>
            <td style={td1} className='fw-bold'>Food Accomodation</td> */}
        </tr>
        <tr>
            
            
            <td style={td1} className='fw-bold'>Road Trip</td>
            
            {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            
            {Object.values(amtTableObj.outstation.roadtrip).map((item)=><td style={td1} className='fw-bold' key={item}>{item}</td>)}
            {/* Below is old Design code */}
            {/* <td style={td1} className='fw-bold'>3hrs</td>
            <td style={td1} className='fw-bold'>900</td>
            <td style={td1} className='fw-bold'>&#8377;3 per min</td>
            <td style={td1} className='fw-bold'>&#8377;200</td>
            <td style={td1} className='fw-bold'>1000</td> */}
        </tr>
        </tbody>
        </table>

    </>
  )
}

export default DriverServiceTableCard