import React,{ useEffect, useState } from 'react';
import Logo from './img/logo.png'
;
const DriverServiceTableCard = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
    
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    
    }, [])


    const td1 ={
        padding:(width<900)?"3px":"10px",fontSize:(width<900)?"8px":"15px", border:"1px solid white",background:"#F7C38B", color:"#144273" 
    }

    const td11 ={
        padding:(width<900)?"8px":"10px", border:"1px solid white", fontSize:(width<900)?"8px":"15px",background:"#FAAF5F", color:"#144273" 
    }
    const td2 ={
        padding:(width<900)?"3px":"10px", border:"1px solid white", fontSize:(width<900)?"8px":"20px", background: "#144273", color:"#FFFF"
    }

    const amtTableObj = props.amtTableObj;
    
    
    
  return (
    <>
<div style={{width:"100%",display:"flex", flexWrap:"wrap"}}>
    <table style={{margin:"auto" , border:"1px solid black"}}>
    <caption style={{fontSize:"14px",background:"#F7C38B",color:"#144273",captionSide:"top",textAlign:"center",fontWeight:"bold"}}>Rubia services : Rate Card</caption>
        <tbody>
            <tr>
            <th style={td2}></th>
                    <th style={td2} className='fw-bold'>Booking Type</th>
                    <th style={td2} className='fw-bold'>Base Time</th>
                    <th style={td2} className='fw-bold'>Base Fare</th>
                    <th style={td2} className='fw-bold'>Extra Min</th>
                    <th style={td2} className='fw-bold'>Night Charges <br /> &#40;9:00pm - 6:00am&#41;</th>
                    <th style={td2} className='fw-bold'>Return Charges</th>
            </tr>
            <tr>
            <td rowSpan="2" style={td2} className='fw-bold'>In City</td>
            <td style={td1} className='fw-bold'>One Way</td>
            {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            {Object.values(amtTableObj.incity.oneway).map((item)=><td style={td1} className='fw-bold' key={item}>{item}</td>)}
        </tr>
        <tr>
             <td style={td1} className='fw-bold'>Road Trip</td>

             {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            
             {Object.values(amtTableObj.incity.roadtrip).map((item)=><td style={td1} className='fw-bold' key={item}>{item}</td>)}
        </tr>
        <tr>
            <td rowSpan="2" style={td2} className='fw-bold'>Out <br /> Station</td>
            <td style={td11} className='fw-bold'>One Way</td>
            

            {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            {Object.values(amtTableObj.outstation.oneway).map((item)=><td style={td11} className='fw-bold' key={item}>{item}</td>)}
           
        </tr>
        <tr>
            
            
            <td style={td11} className='fw-bold'>Road Trip</td>
            
            {/* this is new Design code which iterate object and create td with dynamic values which comes from object */}
            
            {Object.values(amtTableObj.outstation.roadtrip).map((item)=><td style={td11} className='fw-bold' key={item}>{item}</td>)}
           
        </tr>
        </tbody>
    </table>
</div>
    
    </>
  )
}

export default DriverServiceTableCard