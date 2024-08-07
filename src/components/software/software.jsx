import React from "react";
import Banner4 from "../assets/Frame 1432.png";
import Banner5 from "./assets/BannerSofteware.png";
import Banner6 from "../assets/Frame 248.png";
import Html from "./assets/Group 118 (1).png";
import Asp from "./assets/Mask group.png";
import Spw from "./assets/Mask group (1).png";
import Mpw from "./assets/Mask group (2).png";
import { Link } from "react-router-dom";
const software = () => {
  return (
    <>
      <div className="software-text">
        <div className="software1">
          <div className="banners">
            <Link className="contact_btn" to="/contact/">
              <button className="btn_contact_sw">contact us</button>
            </Link>
            <img src={Banner4} className="software_banners1" alt="" />
            <br />
            <br />
            
            <div className="software_banner_content">
              <div className="software_banner_content_img">
                <img src={Banner5} alt="" className="software_banner_img2" />
              </div>
              <div className="software_banner_content_text">
                <p className="software_banner_header1">
                  WHY WEBSITE DESIGN & DEVELOPMENT?
                </p>
                <p className="software_banner_header2">
                  WHY CHOOSE RUBIA FOR WEBSITE DESIGN & DEVELOPMENT SERVICES?
                </p>
                <p className="software_banner_simpleText">
                  Why choose Rubia for website design and development services?
                  Rubia offers a blend of creativity and technical expertise to
                  create visually appealing, user-friendly websites that elevate
                  your online presence. Our experienced team tailors each
                  project to your specific needs, ensuring a seamless and
                  engaging user experience. Committed to quality and timely
                  delivery, Rubia transforms your vision into a dynamic,
                  responsive website that drives results.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="software_banner_main_content">
                <p className="software_banner_main_content_header">WEB-DESIGN</p>
                <p className="software_banner_main_content_header1">WEB DESIGN & DEVELOPMENT: BUILDING THE FOUNDATION</p>
            </div>
            
            <div className="software_details_container">
              <div className="software_details_content">
                <div software_details_img>
                  {" "}
                  <img src={Html} alt="" className="software_details_img2" />
                </div>
                <div>
                  <p className="software_details_header">Static WebSite</p>
                  <p className="software_details_simpletext">
                    made of “fixed code,” and unless the site developer makes
                    changes, nothing will change on the page. Think of it like a
                    brochure for a business. Static sites give a lot of the same
                    type of information that you could get from a brochure, but
                    it can't just change itself
                  </p>
                </div>
              </div>

              <div className="software_details_content">
              <div software_details_img>
                  {" "}
                  <img src={Asp} alt="" className="software_details_img2" />
                </div>
                <div>
                  <p className="software_details_header">Dynamic WebSite</p>
                  <p className="software_details_simpletext">
                  a web page constructed at runtime (during software execution), as opposed to a static web page, delivered as it is stored. A server-side dynamic web page is a web page whose construction is controlled by an application server processing server-side scripts
                  </p>
                </div>
              </div>
              <div className="software_details_content">
              <div software_details_img>
                  {" "}
                  <img src={Spw} alt="" className="software_details_img2" />
                </div>
                <div>
                  <p className="software_details_header">single page Website</p>
                  <p className="software_details_simpletext">
                  An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown.
                  </p>
                </div>
              </div>
              <div className="software_details_content">
              <div software_details_img>
                  {" "}
                  <img src={Mpw} alt="" className="software_details_img2" />
                </div>
                <div>
                  <p className="software_details_header">multi page Website</p>
                  <p className="software_details_simpletext">
                  Multiple-page applications work in a “traditional” way. Every change eg. display the data or submit data back to server requests rendering a new page from the server in the browser. These applications are large, bigger than SPAs because they need to be.
                  </p>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="w-100 d-flex flex-row justify-content-between align-item-center mt-5">
          <Link
            to="/contact/"
            className="rounded-2 fw-bold"
            style={{
              height: "49px",
              border: "none",
              background: "#C68643",
              color: "#FFF",
              padding: "10px 10px",
              fontSize: "20px",
              margin: "auto",
              textDecoration: "none",
            }}
          >
            Contact us for more details
          </Link>
        </div>
      </div>
    </>
  );
};

export default software;
