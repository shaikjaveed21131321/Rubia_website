import Logo1 from '../Services/img/img1.png'
import Logo2 from '../Services/img/img2.png'
import Logo3 from '../Services/img/img3.png'
import Logo4 from '../Services/img/img4.png'
import Logo5 from '../Services/img/img5.png'
import Logo6 from '../Services/img/img6.png'
import Logo7 from '../Services/img/img7.png'
import Logo8 from '../Services/img/img8.png'
import "../Services/services.css"
import React, {useEffect,useState} from 'react';


const ServiceCard = (props) => {

    
    const logoMap = {
        1: Logo1,
        2: Logo2,
        3: Logo3,
        4: Logo4,
        5: Logo5,
        6: Logo6,
        7: Logo7,
        8: Logo8,
      };

    const obj = props.propObj;


const [width, setWidth] = useState(window.innerWidth);
    
useEffect(() => {

  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);

}, []);
    
  return (
    <>
    {/* <div className='service_text'>
    <div className='service1'> */}
    {/* Section first Start Here */}
    <section style={{width:(width<450)? "1000px":"100%"}} className='rounded '>
            <section className='text-start '>
                <h2 style={{color:"#650000"}} id="card-title">{obj.heading}</h2>
            </section>
            <section className=' d-flex flex-column flex-xl-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className={obj.classcss} style={obj.styleobj} src={logoMap[obj.id]} alt={obj.heading} />  
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>{obj.subheading}</span>
                            <br />
                            {obj.description}
                        </p>
                       <div>
                       <span id='innerTitle'>{obj.head1}</span>
                       <br />
                       <ul>
                        
                       {Object.values(obj.q1).map((items)=>(<li>{items}</li>))}
                        
{/*                         
                        <li>{obj.q1[0].p1}</li>
                        <li>{obj.q1[0].p2}</li>
                        <li>{obj.q1[0].p3}</li>
                        <li>{obj.q1[0].p4}</li> */}
                        </ul>
                       </div>

                        <div>
                        <span id='innerTitle'>{obj.head2}</span>
                        <br />
                        <ul>
                        {Object.values(obj.q2).map((items)=>(<li>{items}</li>))}
                        {/* <li>{obj.q2[0].p1}</li>
                        <li>{obj.q2[0].p2}</li>
                        <li>{obj.q2[0].p3}</li>
                        <li>{obj.q2[0].p4}</li>
                        <li>{obj.q2[0].p5}</li> */}
                        
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>{obj.lastHead}</h6>
                    </div>
                </div>
            </section>
       </section>
        {/* Section First end Here */}
        {/* </div>
    </div> */}
    </>
  )
}

export default ServiceCard