import React from 'react';
import DefaultProfile from './img/pp.png';

const DriverServiceProfile = (props) => {

   const detailsObj = props.detailsObj;
   

    const pObj={
        fontSize:"12px" , textAlign:"left"
    }

  return (
   <>
    <main style={{minWidth: "268px",width:"268px", maxHeight:"360px" , height:"360px",background:"#E7E7E7", zIndex:"1" }} className='rounded-4 '>
        <section className='w-100 p-3 '>
            <h6 className='fw-bold '>Driver Profile</h6>
            <img style={{width:"70px",height:"70px"}} src={DefaultProfile} alt="" />
        </section>
        <section style={{padding:" 0px 10px"}}>
           <table className='p-2' >
                <tr>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>Name : </p></td>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>{detailsObj.name}</p></td>
                </tr>
                <tr>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>Phone : </p></td>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>{detailsObj.pn}</p></td>
                </tr>
                <tr>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>DOB : </p></td>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>{detailsObj.dob}</p></td>
                </tr>
                <tr>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>Driving License : </p></td>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>{detailsObj.dl}</p></td>
                </tr>
                <tr>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>No.Of Years Exp : </p></td>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>{detailsObj.noye}</p></td>
                </tr>
                <tr>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>Experienced In :</p></td>
                    <td className='fw-bold' ><p className='fw-bold' style={pObj}>{detailsObj.ei}</p></td>
                </tr>
               
            </table>
        </section>
    </main>
   </>
  )
}

export default DriverServiceProfile