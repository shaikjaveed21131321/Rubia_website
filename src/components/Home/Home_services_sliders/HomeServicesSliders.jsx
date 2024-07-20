import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import img from "../Home_services_sliders/assets/Doctor.png"


const HomeServicesSliders = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const date = [
    {
      name: "Doctor",
      imageUrl: "/Home_services_slidersassets/Doctor.png"
    },
    {
      name: `Police`,
      imageUrl: "/Home_services_slidersassets/Police.png"
    },
    {
      name: `Lawyer`,
      imageUrl: "/Home_services_slidersassets/Lawyer.png"
    },
    {
      name: `Pujari`,
      imageUrl: "/Home_services_slidersassets/Pujari.png"
    },
    {
      name: "Pg & Hostels",
      imageUrl: "/Home_services_slidersassets/Pg&Hostels.png"
    },
    {
      name: `Liquor Shops`,
      imageUrl: "/Home_services_slidersassets/LiquorShops.png"
    }
  ];
  const date1 = [
    {
      name: "Temporary Car Driver",
      imageUrl: "/Home_services_slidersassets/TemporaryCarDriver.png"
    },
    {
      name: `Permanent Car Driver`,
      imageUrl: "/Home_services_slidersassets/PermanentCarDriver.png"
    },
    {
      name: `Valet Parking Driver`,
      imageUrl: "/Home_services_slidersassets/ValetParkingDriver.png"
    },
    {
      name: `Lorry/Truck Drivers`,
      imageUrl: "/Home_services_slidersassets/TruckDrivers.png"
    },
    {
      name: "Bus Driver",
      imageUrl: "/Home_services_slidersassets/BusDriver.png"
    },
    {
      name: `Ambulance Driver`,
      imageUrl: "/Home_services_slidersassets/AmbulanceDriver.png"
    }
  ];
  const date2 = [
    {
      name: "Car Taxi",
      imageUrl: "/Home_services_slidersassets/CarTaxi.png"
    },
    {
      name: `Auto Taxi`,
      imageUrl: "/Home_services_slidersassets/DriverAuto.png"
    },
    {
      name: `Bike Taxi`,
      imageUrl: "/Home_services_slidersassets/BikeTaxi.png"
    }
  ];
  const date3 = [
    {
      name: "Logo Design",
      imageUrl: "/Home_services_slidersassets/LogoMarker.png"
    },
    {
      name: `Brochure Design`,
      imageUrl: "/Home_services_slidersassets/BrochureDesign.png"
    },
    {
      name: `Flyer Design`,
      imageUrl: "/Home_services_slidersassets/FlyerDesign.png"
    },
    
    {
      name: "Social media Post",
      imageUrl: "/Home_services_slidersassets/SocialmediaPost.png"
    },
    {
      name: `Letter Head Design`,
      imageUrl: "/Home_services_slidersassets/LetterHeadDesign.png"
    },
    {
      name: `Business Card Design`,
      imageUrl: "/Home_services_slidersassets/BusinessCardDesign.png"
    }
  ];
  const date4 = [
    {
      name: "Mobile Applications",
      imageUrl: "/Home_services_slidersassets/MobileApplications.png"
    },
    {
      name: `Web Applications`,
      imageUrl: "/Home_services_slidersassets/WebApplications.png"
    },
    {
      name: `Website`,
      imageUrl: "/Home_services_slidersassets/Website.png"
    },
    
  ];
  const date5 = [
    {
      name: "Email Marketing",
      imageUrl: "/Home_services_slidersassets/EmailMarketing.png"
    },
    {
      name: `Contact Marketing`,
      imageUrl: "/Home_services_slidersassets/ContactMarketing.png"
    },
    {
      name: `Social Media Mark.....`,
      imageUrl: "/Home_services_slidersassets/SocialMediaMark.png"
    },
    
    {
      name: "SEO Marketing",
      imageUrl: "/Home_services_slidersassets/SEOMarketing.png"
    },
    {
      name: `SMO Marketing`,
      imageUrl: "/Home_services_slidersassets/SMOMarketing.png"
    },
    {
      name: `Social Media Mark.....`,
      imageUrl: "/Home_services_slidersassets/SocialMediaMark.png"
    }
  ];
  const date6 = [
    {
      name: "Find Targe...",
      imageUrl: "/Home_services_slidersassets/1.png"
    },
    {
      name: `Contact Marketing`,
      imageUrl: "/Home_services_slidersassets/2.png"
    },
    {
      name: `Social Media Mark.....`,
      imageUrl: "/Home_services_slidersassets/3.png"
    },
    
    {
      name: "SEO Marketing",
      imageUrl: "/Home_services_slidersassets/4.png"
    },
    {
      name: `SMO Marketing`,
      imageUrl: "/Home_services_slidersassets/5.png"
    },
    {
      name: `Social Media Mark.....`,
      imageUrl: "/Home_services_slidersassets/6.png"
    }
  ];
  const date7 = [
    {
      name: "Job Searching",
      imageUrl: "/Home_services_slidersassets/JobSearching.png"
    },
    {
      name: `Job Hiring`,
      imageUrl: "/Home_services_slidersassets/JobHiring.png"
    },
    {
      name: `Internship`,
      imageUrl: "/Home_services_slidersassets/Internship.png"
    },
  ];
  const date8 = [
    {
      name: "Selling",
      imageUrl: "/Home_services_slidersassets/Selling.png"
    },
    {
      name: `Buying`,
      imageUrl: "/Home_services_slidersassets/Buying.png"
    },
    {
      name: `Construction`,
      imageUrl: "/Home_services_slidersassets/Construction.png"
    },
  ];
  
  
  
  return <>
  <p className="homeservices_header"> Business Listing : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Drivers : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date1.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Taxi : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date2.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Graphic Design : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date3.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Software : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date4.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Digital marketing : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date5  .map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> UX/UI Design : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date6.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Job Portal : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date7.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    <p className="homeservices_header"> Real State : </p>
    <div className="homebussinesslising_contaner" >
    <Slider {...settings}>
      {date8.map((d)=>(
        <div className="homebussinesslising_slide">
          <div className="homebussinesslising_img">
            <img style={{width:"100%"}}  src={d.imageUrl} alt="" />
          </div>
          <div className="homebussinesslising_text">
            {d.name} 
            <button className="homebussinesslising_btn">search now</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  </>;
};

export default HomeServicesSliders;
