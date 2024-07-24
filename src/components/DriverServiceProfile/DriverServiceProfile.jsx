import React,{useEffect,useState} from 'react';
import DefaultProfile from './img/pp.png';
import img from './img/pp.png'
import './dsp.css'

const DriverServiceProfile = (props) => {

    const detailsObj = props.detailsObj;
   

    const pObj={
        fontSize:"12px" , textAlign:"left"
    }


    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
    
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    
    }, []);
  return (
   <>
    <main style={{minWidth: "250px",width:"250px", height:"100%", overflow:"auto",background:"#FFF5EB", padding:"5px",margin:"auto", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} className='rounded-4 '>
        <section style={{ display:"flex" , justifyContent:"center", alignItems:"center",flexDirection:"column"}} className='w-100 p-3 '>
            <h6 className='fw-bold ' style={{color:"#C68643" , fontSize:"14px"}}>Driver Profile</h6>
            <img className="rounded-lg mx-auto" src={img} style={{width:"70px",height:"70px" }}  alt="" />
        </section>
        <section style={{ overflow:"hidden" , margin:"auto", display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
           <table  style={{ margin:"auto"}}  >
                <tr  >
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