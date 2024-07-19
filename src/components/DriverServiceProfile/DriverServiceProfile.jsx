import React from 'react';
import DefaultProfile from './img/pp.png';
import img from './img/pp.png'

const DriverServiceProfile = (props) => {

    const detailsObj = props.detailsObj;
   

    const pObj={
        fontSize:"12px" , textAlign:"left"
    }

  return (
   <>
    <main style={{minWidth: "200px",width:"220px", height:"100%", overflow:"auto",background:"#FFF5EB", padding:"2px",margin:"auto"}} className='rounded-4 '>
        <section className='w-100 p-3 '>
            <h6 className='fw-bold ' style={{color:"#C68643" , fontSize:"14px"}}>Driver Profile</h6>
            <img className="rounded-lg" src={img} style={{width:"70px",height:"70px" , margin:"auto"}}  alt="" />
        </section>
        <section style={{ overflow:"hidden" , margin:"auto" }}>
           <table  style={{ margin:"auto"}}  >
                <tr >
                    <td style={{color:"#973131"}}><p style={pObj}>Name</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{ color:"#973131"}}><p className='fw-bold' style={pObj}>:{detailsObj.name}</p></td>
                </tr>
                <tr>
                    <td style={{color:"#973131"}}><p style={pObj}>Phone Number</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{color:"#973131"}} ><p className='fw-bold' style={pObj}>:{detailsObj.pn}</p></td>
                </tr>
                <tr>
                    <td style={{color:"#973131"}}><p style={pObj}>Date of Birth</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{color:"#973131"}} ><p className='fw-bold' style={pObj}>:{detailsObj.dob}</p></td>
                </tr>
                <tr>
                    <td style={{color:"#973131"}}><p style={pObj}>Driving License No.</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{color:"#973131"}} ><p className='fw-bold' style={pObj}>:{detailsObj.dln}</p></td>
                </tr>
                <tr>
                    <td style={{color:"#973131"}}><p style={pObj}>No.Of Years Exp.</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{color:"#973131"}} ><p className='fw-bold' style={pObj}>:{detailsObj.noye}</p></td>
                </tr>
                <tr>
                    <td style={{color:"#973131"}}><p style={pObj}>Transmission Type</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{color:"#973131"}} ><p className='fw-bold' style={pObj}>:{detailsObj.trantyp}</p></td>
                </tr>
                <tr>
                    <td style={{color:"#973131"}}><p style={pObj}>Vehicle Type</p></td>
                    <td className='fw-bold d-flex flex-wrap' style={{color:"#973131"}} ><p className='fw-bold' style={pObj}>:{detailsObj.vehtyp}</p></td>
                </tr>
            </table>
        </section>
    </main>
   </>
  )
}

export default DriverServiceProfile