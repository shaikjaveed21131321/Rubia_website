import React, { useEffect, useState } from "react";
import DriverServiceProfile from "../../components/DriverServiceProfile/DriverServiceProfile";
import DriverServiceTableCard from "../../components/DriverServiceTableCard/DriverServiceTableCard";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const DriverServices = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const amtTableObj = {
    id: 1,
    incity: {
      oneway: {
        bt: "1hr",
        bf: 300,
        em: "₹3 per min",
        nc: 200,
        rc: "",
      },
      roadtrip: {
        bt: "2hr",
        bf: 260,
        em: "₹2 per min",
        nc: 200,
        rc: "",
      },
    },
    outstation: {
      oneway: {
        bt: "3hr",
        bf: 900,
        em: "₹3 per min",
        nc: 0,
        rc: 1000 + "  + Food & Accomodation",
      },
      roadtrip: {
        bt: "4hr",
        bf: 900,
        em: "₹1 per min",
        nc: 500,
        rc: "Food & Accomodation",
      },
    },
  };

  const detailsObj = {
    name: "Kaza Veera Sudhakara rao",
    pn: "8978345314",
    email:"example@gmail.com",
    dob: "23/07/1991",
    dln: "AP70720130001146",
    noye: "5 Years",
    trantyp: "Manual,A.M.T",
    vehtyp: "Hatchback, SUV",
  };

  return (
    <>
      <div
        style={{
          minWidth: width < 500 ? "430px" : "510px",
          width: "65%",
          margin: "auto",
          
          overflowX: "hidden",
        }}
        className="container h-auto px-1"
      >
        <main className="w-100 h-auto d-flex flex-column gap-3 align-items-center justify-content-start ">
          <header className="w-100 h-auto mt-4 mb-3 d-flex flex-row justify-content-end align-items-center align-center justify-end">
            <div
              className="p-3 d-flex flex-row align-items-center justify-content-center gap-3 shadow rounded-3"
              style={{ width: "430px", font: "19px", background: "#D7C3A4" }}
            >
              <span style={{ color: "#650000"}}>Driver Registration Form</span>
              <Link
                to="/driverregister/"
                style={{
                  width: "150px",
                  height: "50px",
                  background: "#650000",
                  border: "0px",
                  color: "#FFFFFF",
                  padding: "12px",
                }}
                className="p-1 my-auto rounded text-center fw-bold rounded-3"
              >
                Click Here
              </Link>
            </div>
          </header>
          <section
            style={{ textAlign: "justify" }}
            className="w-100 d-flex  flex-column "
          >
            <h1
              style={{
                fontSize: "18",
                color: "#650000",
                textAlign: "left",
                marginBottom: "20px",
              }}
              className="fw-bold"
            >
              1.B2<span style={{ color: "#C68643" }}>C</span> &#x7b;Business to{" "}
              <span style={{ color: "#C68643" }}>Customer</span>&#x7d;
            </h1>

            <h2
              className="fw-bold mt-2 mb-2"
              style={{
                fontSize: "14",
                color: "#650000",
                textAlign: "left",
                margin: "40px , 0px",
              }}
            >
              a&#41; Hire a Temporary
              <span style={{ color: "#C68643" }}>/Halting Drivers:</span>
            </h2>
            <br />
            <p
              style={{
                fontSize: "16px",
                marginRight: "30px",
                color: "#995050",
                marginTop: "20px",
              }}
            >
              Explore Our Services & Book a Driver <br />
              Rubia offers top-notch car driver services for all your needs.
              Whether it’s a daily commute, an airport transfer, or a special
              occasion, we have the right driver for you.
            </p>
            <div style={{ color: "#995050" }}>
              <ol>
                <li>Download the RUBIA App</li>
                <br></br>
                <ul style={{ listStyle: "disc" }}>
                  <li>Available on the App Store and Google Play.</li>
                  <li style={{ display: "flex", gap: "10px" }}>
                    <a
                      className="btn btn-primary w-auto d-btn-d"
                      href="https://apps.apple.com/in/app/rubia/id6459829353"
                      target="blank"
                    >
                      Download for iOS
                    </a>
                    <a
                      className="btn btn-primary w-auto d-btn-d"
                      href="https://play.google.com/store/apps/details?id=com.rubia.user&pcampaignid=web_share "
                      target="blank"
                    >
                      Download for Android
                    </a>
                  </li>
                </ul>
                <br></br>
                <li>Sign Up & Book a Driver</li>
                <br></br>
                <ul style={{ listStyle: "disc" }}>
                  <li>Easy registration process.</li>
                  <li>
                    Choose your ride, select your driver, and confirm your
                    booking.
                  </li>
                </ul>
                <br></br>
                <li>Driver Payment by the Hour</li>
                <br></br>
                <ul style={{ listStyle: "disc" }}>
                  <li>Transparent hourly rates.</li>
                  <li>Pay only for the time you use.</li>
                </ul>
              </ol>
            </div>
          </section>

          <section className="w-100 d-flex flex-lg-row flex-column justify-content-evenly align-items-center text-center m-3">
            <div className="d-flex  justify-content-center align-items-center pt-2 text-start ">
              <p style={{ font: "16px" }}>
                <b>
                  Download the App Now! <br />
                  Experience the convenience and reliability of Ride.
                </b>
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <a
                href="https://play.google.com/store/apps/details?id=com.rubia.user&pcampaignid=web_share "
                target="_blank"
                style={{
                  padding: "10px",
                  width: "234px",
                  height: "50px",
                  background: "#650000",
                  color: "#FFF",
                }}
                className="btn rounded-3"
                rel="noreferrer"
              >
                Download Rubia App
              </a>
            </div>
          </section>

          <section
            style={{ width: "100%" }}
            className="mx-auto d-flex justify-content-center align-items-center"
          >
            <DriverServiceTableCard amtTableObj={amtTableObj} />
          </section>
          <br></br>
          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3">
            <h2
              className="w-100 fw-semibold"
              style={{ fontSize: "14", textAlign: "left", color: "#650000" }}
            >
              b&#41;Hire a Permanent /
              <span style={{ color: "#C68643" }}>montly Drivers:</span>
            </h2>
            <br></br>

            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>

            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
                
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                {console.log(width)
                }
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section
            style={{ textAlign: "justify", background: "#FFF9F3" }}
            className="w-100 h-auto d-flex  flex-column p-2 mt-5"
          >
            <h1
              style={{
                fontSize: "27px",
                color: "#650000",
                textAlign: "left",
                marginTop: "20px",
                marginBottom: "25px",
              }}
              className="fw-bold"
            >
              2.B2B&#x7b;Business to{" "}
              <span style={{ color: "#C68643" }}>Business&#x7d;Driver</span>
            </h1>
            <br />
            <br />
            <p
              style={{
                fontSize: "18px",
                marginRight: "30px",
                color: "#995050",
              }}
            >
              <b style={{ color: "#650000" }}>Introduction:</b> Explain the
              services offered specifically for software companies, servicing
              centers, and used vehicle dealerships.
            </p>
            <div>
              <h5
                style={{
                  color: "#650000",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                className="fw-bold"
              >
                Detailed Services Sections:
              </h5>
              <ul style={{ color: "#650000", fontSize: "16px" }}>
                <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <b>For Software Companies:</b>{" "}
                  <label style={{ fontSize: "16px", color: "#995050" }}>
                    Emphasize driver reliability and scheduling flexibility.
                  </label>
                </li>
                <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <b>For Servicing Centers:</b>{" "}
                  <label style={{ fontSize: "16px", color: "#995050" }}>
                    Highlight customer satisfaction and prompt services.
                  </label>
                </li>
                <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <b>For Used Vehicle Dealerships:</b>{" "}
                  <label style={{ fontSize: "16px", color: "#995050" }}>
                    Focus on safe and timely vehicle transportation.
                  </label>
                </li>
              </ul>
            </div>

            <div className="w-100 d-flex flex-column flex-lg-row justify-content-between align-item-center my-3 gap-3">
              <button
                className="rounded-2 fw-bold"
                style={{
                  height: "49px",
                  border: "none",
                  background: "#C68643",
                  color: "#FFF",
                  padding: "10px 10px",
                  fontSize: "20px",
                }}
              >
                BUSINESS ENTITY LOGIN
              </button>
              <button
                className="rounded-2 fw-bold"
                style={{
                  height: "47px",
                  border: "none",
                  background: "#650000",
                  color: "#FFF",
                  padding: "10px 10px",
                }}
              >
                Contact us for more details
              </button>
            </div>
          </section>

          <section
            style={{ textAlign: "justify", background: "#FFF9F3" }}
            className="w-100 h-auto d-flex  flex-column p-2 mt-5"
          >
            <br></br>
            <h1
              style={{
                font: "27",
                color: "#650000",
                marginTop: "20px",
                marginBottom: "10px",
              }}
              className="fw-bold"
            >
              3. Valet <span style={{ color: "#C68643" }}>Parking Drivers</span>
            </h1>

            <ul
              style={{
                fontSize: "18px",
                listStyle: "none",
                color: "#995050",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Pubs
              </li>
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Hospitals
              </li>
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Restaurant
              </li>
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Showrooms
              </li>
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Hotels
              </li>
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Functions/Party
              </li>
              <li
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                &#x21db; Businesses
              </li>
            </ul>
            <div className="w-100 d-flex flex-row justify-content-end align-item-center">
              <button
                className="rounded-2 fw-bold"
                style={{
                  height: "47px",
                  border: "none",
                  background: "#650000",
                  color: "#FFF",
                  padding: "10px 10px",
                }}
              >
                Contact us for more details:
              </button>
            </div>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h1
              style={{ font: "27", color: "#650000", textAlign: "left" }}
              className="w-100 fw-bold mt-5"
            >
              4. Commercial{" "}
              <span style={{ color: "#C68643" }}>Vehicle Divers:</span>
            </h1>
            <h2
              className="w-100 fw-semibold mt-2 mb-3"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              a&#41;
              <u className="fw-bold">
                Bus<span style={{ color: "#C68643" }}> Drivers:</span>
              </u>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h2
              className="w-100 fw-semibold mt-3 mb-3"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              b&#41; Lorry / Truck{" "}
              <span style={{ color: "#C68643" }}>Drivers:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h2
              className="w-100 fw-semibold mt-3 mb-3"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              c&#41; JCB Drivers /{" "}
              <span style={{ color: "#C68643" }}>Operators:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h2
              className="w-100 fw-semibold"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              d&#41; Crane Drivers /{" "}
              <span style={{ color: "#C68643" }}>Operators:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h2
              className="w-100 fw-semibold"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              e&#41; Tractor <span style={{ color: "#C68643" }}>Drivers:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h2
              className="w-100 fw-semibold"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              f&#41; Agriculture / Forming{" "}
              <span style={{ color: "#C68643" }}>Machinery Drivers:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
            <h2
              className="w-100 fw-semibold"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              g&#41; Ambulance <span style={{ color: "#C68643" }}>Driver:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>

          <section className="w-100 d-flex justify-content-center align-items-center flex-column gap-3 mt-5 mb-5">
            <h2
              className="w-100 fw-semibold"
              style={{ fontSize: "25px", textAlign: "left", color: "#650000" }}
            >
              h&#41; Trailers <span style={{ color: "#C68643" }}>Driver:</span>
            </h2>
            <div
              style={{
                background: "#FFF7EF",
                border: "1px solid #CBCBCB",
                padding: "10px",
              }}
              className="w-100 d-flex flex-row justify-content-start align-item-center  gap-lg-5"
            >
              <select
                style={{
                  background: "#FFF7EF",
                  height: "28px",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Country</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>State</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                  borderRight: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>City</option>
              </select>
              <select
                style={{
                  background: "#FFF7EF",
                  borderRadius: "0px",
                  color: "#650000",
                  padding: "2px 6px 2px",
                  border: "none",
                  borderLeft: "1.5px solid #212121",
                }}
                className="fw-bold "
              >
                <option>Village</option>
              </select>
            </div>
            <section
              style={{
                width: "100%",
                height: "100%",
                background: "#FFD0A0",
                margin: " 20px auto",
                padding: "10px",
              }}
              className=" container swiper rounded-4 "
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="  swiper mx-auto"
              >
                <Swiper
                  slidesPerView={
                    width < 1400 ? 1 : width < 1700 ? 2 : width < 1800 ? 2 : 3
                  }
                  spaceBetween={5}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper w-100 h-100"
                >
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DriverServiceProfile detailsObj={detailsObj} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </section>
          <script src="./script.js"></script>
        </main>
      </div>
    </>
  );
};

export default DriverServices;
