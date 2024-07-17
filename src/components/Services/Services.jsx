
import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import "./services.css";

const Services = () => {

    const imgObj={
        width: "387px",
        height: "257.83px",
    }
    
    const imgObj1={
        width: "387px",
        height: "257.83px",
        border:"1px solid black",
    }
    

const propObj1 = {
    id:1,
    heading: "Rental Drivers Services",
    styleobj:imgObj,
    classcss:"css_img",
    img: '../../pages/Services/img/img1.png',
    subheading:"Ride with the Best",
    description:"Looking for a reliable and professional rental driver service? Our top-notch team offers safe, efficient, and personalized driving solutions tailored to meet your specific needs. Whether you need a driver for a day, a week, or longer, our experienced professionals are here to provide exceptional service.",
    head1: "Why Choose Us?",
    q1:{
        p1:"Experienced Drivers: Our team comprises licensed and experienced drivers who prioritize your safety and comfort.",
        p2:"24/7 Availability: We offer round-the-clock services to accommodate your schedule, ensuring you have a driver whenever you need one.",
        p3:"Competitive Pricing: Enjoy premium driving services at affordable rates without any hidden charges.",
        p4:"Personalized Service: We cater to your unique requirements, providing tailored driving solutions for any occasion.",
    },
    head2:"Our Services:",
    q2:{
        p1:"Personal Chauffeur: Hire a personal driver for special events, business meetings, or daily commutes.",
        p2:"Airport Transfers: Enjoy hassle-free airport pickups and drop-offs with our punctual and reliable drivers.",
        p3:"Corporate Services: Professional driving services for corporate executives, business travelers, and VIPs.",
        p4:"Long-Distance Travel: Safe and comfortable long-distance travel options with experienced drivers.",
        p5:"Event Transportation: Efficient transportation solutions for weddings, parties, and other events.",
    },
    lastHead:"Choose our rental driver services for a seamless, comfortable, and stress-free driving experience.",
}

const propObj2 = {
    id:2,
    heading: "Taxi Booking Services",
    styleobj:imgObj1,
    classcss:"css_img1",
    img: '../../pages/Services/img/img2.png',
    subheading:"Ride with the Best",
    description:"Looking for reliable, affordable, and prompt taxi booking services? Look no further! Our taxi booking services offer the ultimate convenience for your travel needs, whether it's a quick trip across town or a long-distance journey. We prioritize your comfort and safety with our well-maintained vehicles and professional drivers.",
    head1: "Why Choose Us?",
    q1:{
        p1:"Professional Drivers: Our drivers are experienced, courteous, and fully licensed, ensuring a smooth and safe ride every time.",
        p2:"Affordable Rates: We offer competitive pricing without compromising on service quality, making us the best choice for budget-conscious travelers.",
        p3:"24/7 Availability: Our services are available around the clock, so you can book a ride anytime, anywhere, without any hassle.",
        p4:"Easy Booking Process: With our user-friendly online platform and mobile app, booking a taxi has never been easier. Just a few clicks, and your ride is on its way!",
    },
    head2:"Our Services:",
    q2:{
        p1:"Airport Transfers: Stress-free and timely airport pickups and drop-offs to ensure you never miss a flight.",
        p2:"Local and Long-Distance Rides: Whether you're running errands or heading out of town, we have you covered.",
        p3:"Corporate Travel: Professional and reliable transport solutions for business travelers.",
        p4:"Event Transportation: Convenient and stylish rides for weddings, parties, and other special events.",
        p5:"Parcel Delivery: Secure and prompt delivery of small packages within the city.",
    },
    lastHead:"Choose our taxi booking services for a seamless travel experience that meets all your transportation needs!",
}

const propObj3 = {
    id:3,
    heading: "Graphics Design",
    styleobj:imgObj,
    classcss:"css_img",
    img: '../../pages/Services/img/img3.png',
    subheading:"Elevate Your Visual Presence",
    description:"At Rubia services, we specialize in delivering high-quality graphic design solutions to elevate your business.",
    head1: "Comprehensive Design Services Include:",
    q1:{
        p1:"Business Cards",
        p2:"Brochures & Pamphlets",
        p3:"Magazines/Advertisements",
        p4:"Flyers & Posters",
        p5:"Complete Graphic,Design Solutions",
    },
    head2:"Why Choose Us?:",
    q2:{
        p1:"Expert Designers",
        p2:"High-Quality Work",
        p3:"Fast Delivery",
        p4:"Client-Focused",
    },
    lastHead:"Contact us today to elevate your brand with our designs!",
}

const propObj4 = {
    id:4,
    heading: "Mobile and Web Applications",
    styleobj:imgObj1,
    classcss:"css_img1",
    img: '../../pages/Services/img/img4.png',
    subheading:"Leading Mobile and Web Application Development",
    description:"Transform your digital presence with our cutting-edge mobile and web application development services. We specialize in creating intuitive, user-friendly, and scalable apps tailored to meet your business needs. Whether you're a startup or an established enterprise, our team of experienced developers ensures your app stands out in the crowded marketplace.",
    head1: "Why Choose Us?:",
    q1:{
        p1:"Expertise and Experience: With a proven track record in the industry, our team of skilled developers brings a wealth of knowledge and expertise to every project, ensuring high-quality, robust applications.",
        p2:"Customized Solutions: We understand that every business is unique. That's why we offer tailor-made solutions designed to meet your specific requirements and goals.",
        p3:"Cutting-edge Technology: We stay ahead of the curve by utilizing the latest technologies and frameworks, ensuring your applications are fast, secure, and future-proof.",
        p4:"Client-centric Approach: Your satisfaction is our priority. We maintain open communication, provide regular updates, and ensure your vision is realized to its fullest potential.",

    },
    head2:"Our Services:",
    q2:{
        p1:"Mobile App Development: From iOS to Android, we develop responsive, feature-rich mobile apps that deliver a seamless user experience.",
        p2:"Web Application Development: We create dynamic, scalable web applications that cater to a wide range of business needs, ensuring high performance and user engagement.",
        p3:"UI/UX Design: Our design experts craft intuitive and visually appealing interfaces that enhance user interaction and satisfaction.",
        p4:"Maintenance and Support: We offer ongoing maintenance and support services to ensure your applications run smoothly and remain up-to-date with the latest advancements.",
    },
    lastHead:"Boost your business with our innovative mobile and web application solutions. Contact us today to get started!",
}

const propObj5 = {
    id:5,
    heading: "Digital Marketing Services",
    styleobj:imgObj,
    classcss:"css_img",
    img: '../../pages/Services/img/img5.png',
    subheading:"Elevate Your Online Presence",
    description:"Digital marketing is the key to unlocking your business's potential in the online world. Our expert team is dedicated to providing tailored strategies that drive traffic, increase engagement, and boost conversions. Here’s why you should choose us and a brief overview of our services.",
    head1: "Why Choose Us?:",
    q1:{
        p1:"Proven Track Record: Our portfolio showcases numerous successful campaigns that have significantly increased our clients' online visibility and sales.",
        p2:"Customized Strategies: We understand that every business is unique, so we craft personalized digital marketing plans that align with your specific goals and audience.",
        p3:"Expert Team: Our team consists of seasoned professionals with extensive experience in SEO, PPC, social media, content marketing, and more.",
        p4:"Client-centric Approach: Your satisfaction is our priority. We maintain open communication, provide regular updates, and ensure your vision is realized to its fullest potential.",

    },
    head2:"Our Services:",
    q2:{
        p1:"Mobile App Development: From iOS to Android, we develop responsive, feature-rich mobile apps that deliver a seamless user experience.",
        p2:"Web Application Development: We create dynamic, scalable web applications that cater to a wide range of business needs, ensuring high performance and user engagement.",
        p3:"UI/UX Design: Our design experts craft intuitive and visually appealing interfaces that enhance user interaction and satisfaction.",
        p4:"Maintenance and Support: We offer ongoing maintenance and support services to ensure your applications run smoothly and remain up-to-date with the latest advancements.",
    },
    lastHead:"Unlock your business's potential with our expert digital marketing services, designed to deliver measurable results and drive growth. Contact us today to get started!",
}

const propObj6 = {
    id:6,
    heading: "UX/UI Designing",
    styleobj:imgObj,
    classcss:"css_img1",
    img: '../../pages/Services/img/img6.png',
    subheading:"Transform Your User Experience with Expert UI/UX ",
    description:"Digital marketing is the key to unlocking your business's potential in the online world. Our expert team is dedicated to providing tailored strategies that drive traffic, increase engagement, and boost conversions. Here’s why you should choose us and a brief overview of our services.",
    head1: "Why Choose Us?:",
    q1:{
        p1:"Expert Designers",
        p2:"Tailored Solutions",
        p3:"Enhanced User Experience",
        p4:"Collaborative Approach",

    },
    head2:"Our Services:",
    q2:{
        p1:"User Interface (UI) Design",
        p2:"User Experience (UX) Design",
        p3:"Mobile App UI/UX Design",
        p4:"Web App UI/UX Design ",
        p5:"Prototyping and Wireframing",

    },
    lastHead:"Contact today and let's create outstanding user experiences together!",
}

const propObj7 = {
    id:7,
    heading: "Internship Program",
    styleobj:imgObj,
    classcss:"css_img",
    img: '../../pages/Services/img/img7.png',
    subheading:"Transform Your User Experience with Expert UI/UX ",
    description:"Digital marketing is the key to unlocking your business's potential in the online world. Our expert team is dedicated to providing tailored strategies that drive traffic, increase engagement, and boost conversions. Here’s why you should choose us and a brief overview of our services.",
    head1: "Why Choose Us?:",
    q1:{
        p1:"Expertise: Experienced in recruitment and training.",
        p2:"Customized Solutions: Tailored recruitment and training.",
        p3:"Support: Continuous support throughout the process",

    },
    head2:"Our Services:",
    q2:{
        p1:"Manpower Recruitment: Pre-screened candidates, industry-specific solutions, permanent and temporary staffing.",
        p2:"Internship Programs: Valuable experience, skill development, career guidance.",
        p3:"Training and Development: Comprehensive training, corporate training, certification programs.",
    },
    lastHead:"Contact today build your career",
}

const propObj8 = {
    id:8,
    heading: "Real Estate Agency",
    styleobj:imgObj,
    classcss:"css_img1",
    img: '../../pages/Services/img/img8.png',
    subheading:"Your Trusted Partner in Property Transactions",
    description:"PrimeLand Realty simplifies real estate transactions by bringing land buyers, sellers, builders, and contractors together on one platform.",
    head1: "Why Choose Us?:",
    q1:{
        p1:"Comprehensive Listings: Wide range of verified properties.",
        p2:"Trusted Connections: Reputable builders & skilled contractors.",
        p3:"Integrated Platform: One-stop solution for all real estate needs.",

    },
    head2:"Our Services:",
    q2:{
        p1:"Land Buying and Selling: Extensive, verified listings,Secure transactions and expert guidance",
        p2:"Builder Services: Quality construction and custom solutions,End-to-end project management.",
        p3:"Construction Services: Network of skilled contractors.Detailed planning and budget management",
    },
    lastHead:"Contact today Go forward",
}

  return (
    <>
        
    <div id='services_main' className=' h-auto mx-auto'>
    <main className='w-100 d-flex flex-column align-items-center justify-content-start gap-4'>
       
       <ServiceCard propObj={propObj1} />
       <ServiceCard propObj={propObj2} />
       <ServiceCard propObj={propObj3} />
       <ServiceCard propObj={propObj4} />
       <ServiceCard propObj={propObj5} />
       <ServiceCard propObj={propObj6} />
       <ServiceCard propObj={propObj7} />
       <ServiceCard propObj={propObj8} />


    </main>
    
    </div>
    </>
  )
}

export default Services