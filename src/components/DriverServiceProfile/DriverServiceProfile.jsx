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
            
        </section>
   </main>
    
   </>
  )
}

export default DriverServiceProfile