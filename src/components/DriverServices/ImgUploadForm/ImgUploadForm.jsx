import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Upload from '../img/upload.svg'

import axios from 'axios';

const ImgUploadForm = (props) => {

    const [formImg1Values, setFormImg1Values] = useState(null);
    const [img1Values, setImg1Values] = useState("");
    const [isImg1Loading,setIsImg1Loading] = useState(false);
    const [isImg1Disable,setIsImg1Disable] = useState(false);
  
    const handleImg1Change = (event) => {
      setFormImg1Values(event.target.files[0]);
    };
      const handleImg1Submit = async (event) => {
      event.preventDefault();
  
      if (!formImg1Values) {
        swal("Error", "Please select an image to upload", "error");
        return; // Early return if no file selected
      }
  
    try {
  
      setIsImg1Loading(true);
          const formData = new FormData();
          formData.append('dr_ph', formImg1Values);
  
          const response = await axios.post(`http://localhost:4000/uploads/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if(response.data.success === true){
            setImg1Values(response.data.path)
            setTimeout(() => {
            swal("Successful Uploaded", response.data.msg, "success");
            setIsImg1Loading(false);
            setIsImg1Disable(true);
          }, 2000);
          }else{
            setTimeout(() => {
            swal("Error", response.data.msg, "error");
            setIsImg1Loading(false);
            setIsImg1Disable(false);
          }, 2000);
          } 
      
    } catch (error) {
      if(formImg1Values === null || !formImg1Values || error){
        swal("Error", "Please Select Image First "+error, "error"); 
        setIsImg1Loading(false);
            setIsImg1Disable(false);
      }
    }
  
      
      };


  const inputStyleTag = {
    width: "380px",
    background:"white",
    border: "1px solid #FF6666",
    color: "#995050",
    fontWeight: "bold",
  };


  const docInputClass = "p-2 "

  const docBtnImgUpSty={
    padding:"6px",
    minWidth:"124px",
    width: "124px",
    background: "#144273",
    color: "#fff",
    fontWeight: "600",
    fontSize:"12px",
    borderRadius:"8px"
  }

  return (
   <>
    <form className="d-flex flex-column justify-content-between align-item-center flex-lg-row gap-3 my-3 my-lg-1"  onSubmit={handleImg1Submit}>
                    <span className="w-100 my-auto">
                      Driver Photo :
                    </span>
                    <div style={{display:"flex",justifyContent:"end"}} className="w-100  w-md-50">
                    <input
                      name={props.nameprop}
                      disabled={isImg1Disable}
                      placeholder={props.plhoprop}
                      type="file"
                      style={inputStyleTag}
                    className={docInputClass}
                    onChange={handleImg1Change}
                    />
                    </div>
                    
                      <button id="sub-btn" disabled={isImg1Disable} style={docBtnImgUpSty} 
                          class="btn " type="submit" >
                          {(isImg1Loading)?<><span style={{color:"white",margin:"auto"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                          <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<> <img src={Upload} alt="upload" /><span  style={{color:"white"}} role="status">Upload Image</span></>}
                        </button>
                  </form>
   </>
  )
}

export default ImgUploadForm