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

   <main style={{fontSize:"16px", minWidth: "400px",width:"400px", height:"100%", overflow:"auto",background:"#FFF8F0", padding:"5px",margin:"auto", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} className='rounded-4 shadow-lg'>
        <section className='py-3' style={{ display:"flex", flexDirection:"row" , justifyContent:"space-evenly", alignItems:"center", gap:"25px"}}>
        <img className="rounded-lg mx-auto" src={img} style={{width:"80px",height:"80px" }}  alt="" />
        <div style={{color:"#144273"}} className='d-flex justify-content-center align-item-center flex-column'>
            <span style={{color:"#144273"}} className='fw-bold'>{detailsObj.name}</span>
            <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.email}</span>
            <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.pn}</span>
        </div>
        </section>
        <span style={{width:"90%",background:"#D8D5D3",padding:"1px"}} className='  my-3 '></span>
        <section className='d-flex flex-column my-3'>

        <div style={{gap:"30px"}} className=' d-flex justify-content-between flex-row ' >
                <div className='gap-4 d-flex justify-content-center flex-column '>
                    <span style={{color:"#C68643"}} className='fw-bold'>Date of Birth</span>
                    <span style={{color:"#C68643"}} className='fw-bold'>Driving Licence</span>
                    <span style={{color:"#C68643"}} className='fw-bold'>No.of Years Exp</span>
                    <span style={{color:"#C68643"}} className='fw-bold'>Transmission Typ</span>
                    <span style={{color:"#C68643"}} className='fw-bold'>Vehicle Type</span>                    
                    </div>
                <div  className='gap-4 d-flex justify-content-center flex-column '>
                    <span>:</span>
                    <span>:</span>
                    <span>:</span>
                    <span>:</span>
                    <span>:</span>
                    </div>
                <div className='gap-4 d-flex justify-content-center flex-column ' style={{textAlign:"left"}}>
                    <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.dob}</span>
                    <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.dln}</span>
                    <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.noye}</span>
                    <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.trantyp}</span>
                    <span style={{color:"#144273"}} className='fw-normal'>{detailsObj.vehtyp}</span>

                    </div>
            </div>
            {/* <table>
            <tr style={{gap:"30px"}} className='d-flex justify-content-between flex-row ' >
                <td style={{width:"100%"}}><span style={{color:"#C68643"}} className='fw-bold'>Date of Birth</span></td>
                <td ><span>:</span></td>
                <td style={{width:"100%",textAlign:"left", border:"1px solid black",display:"flex", justifyContent:"start"}}>
                    <span style={{color:"#144273"}}>{detailsObj.dob}</span></td>
            </tr>
           
            <div style={{gap:"30px"}} className='d-flex justify-content-between flex-row ' >
                <td style={{width:"100%"}}><span style={{color:"#C68643"}} className='fw-bold'>Driving Licence</span></td>
                <td><span>:</span></td>
                <td style={{width:"100%",textAlign:"left", border:"1px solid black",display:"flex", justifyContent:"start"}}>
                    <span style={{color:"#144273"}}>{detailsObj.dln}</span></td>
                
            </div>
            <div style={{gap:"30px"}} className='d-flex justify-content-between flex-row ' >
                <td style={{width:"100%"}}><span style={{color:"#C68643"}} className='fw-bold'>No.of Years Exp</span></td>
                <span>:</span>
                <td style={{width:"100%",textAlign:"left", border:"1px solid black",display:"flex", justifyContent:"start"}}>
                    <span style={{color:"#144273"}}>{detailsObj.noye}</span></td>
                
            </div>
            <div style={{gap:"30px"}} className='d-flex justify-content-between flex-row ' >
                <td style={{width:"100%"}}><span style={{color:"#C68643"}} className='fw-bold'>Transmission Typ</span></td>
                <span>:</span>
                <td style={{width:"100%",textAlign:"left", border:"1px solid black",display:"flex", justifyContent:"start"}}>
                    <span style={{color:"#144273"}}>{detailsObj.trantyp}</span></td>
                
            </div>
            <div style={{gap:"30px"}} className='d-flex justify-content-between flex-row ' >
                <td style={{width:"100%"}}><span style={{color:"#C68643"}} className='fw-bold'>Vehicle Type</span></td>
                <span>:</span>
                <td style={{width:"100%",textAlign:"left", border:"1px solid black",display:"flex", justifyContent:"start"}}>
                    <span style={{color:"#144273"}}>{detailsObj.vehtyp}</span>
                    </td>
                
            </div>
            </table> */}
        </section>
   </main>
    {/* <main style={{minWidth: "250px",width:"250px", height:"100%", overflow:"auto",background:"#FFF5EB", padding:"5px",margin:"auto", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} className='rounded-4 '>
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
    </main> */}
   </>
  )
}

export default DriverServiceProfile