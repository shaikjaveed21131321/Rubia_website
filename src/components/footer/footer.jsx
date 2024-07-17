import React from "react";
import Facebook from "./Frame 25.png";
const footer = () => {
  return (
    <>
      <br />
      <br />
      <footer id="footer">
        <div className="footer_container1">
          {/* <div className="footer_content">
          {" "}
          <u style={{ color: "#C58643" }}>
            <b>LEGAL</b>
          </u>
          <div className="anchor" style={{ marginTop: "8px" }}>
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div> */}

          <div className="footer_content" id="footer_content1">
            {" "}
            <u style={{ color: "#C58643" }}>
              <b>info</b>
            </u>
            <div className="anchor1" style={{ marginTop: "8px" }}>
              <a href="#">Terms & Conditions</a>
              <a href="#">Refund policy</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>

          <div className="footer_content" id="footer_content1">
            {" "}
            <u style={{ color: "#C58643" }}>
              <b>address</b>
            </u>
            <div className="address" style={{ marginTop: "8px" }}>
              Registed : 6-1-105,saifabad, khairatabad,Hyderabad-500004.
            </div>
            <div className="address" style={{ marginTop: "8px" }}>
              Branch : Metro pillar No. 974, Flat no. 107, Rams Enclave,
              Vikaspuri,Erragadda, Hyderabad - 500018.
            </div>
          </div>

          <div className="footer_content">
            {" "}
            <u style={{ color: "#C58643" }}>
              <b>contact</b>
            </u>
            <p></p>
            <div>
              +91 78936 53899 <br />
              info@rubia.services
            </div>
            <div>
              <img
                src={Facebook}
                alt=""
               
                id="facebook_twitter_instagram"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
