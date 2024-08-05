import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import swal from "sweetalert";
import { Link } from 'react-router-dom';

const Login = () => {

    const [isLoading,setIsLoading] = useState(false);


    const [formValues, setFormValues] = useState({
        usr_name: '',
        usr_email: '',
        usr_phnum: '',
        usr_pwd: '',
        usr_pwd_confirm:''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,  
          [name]: value,
        });  
      };  
    

    function clearForm(){
        setFormValues({
            usr_name: '',
            usr_email: '',
            usr_phnum: '',
            usr_pwd: '',
            usr_pwd_confirm:''
        })
    }
    

const handleSubmit = (event)=>
{
    event.preventDefault();
  
     if (!formValues.usr_name || !formValues.usr_email || !formValues.usr_phnum || !formValues.usr_pwd || !formValues.usr_pwd_confirm) {
      swal("Error", "Please Fill Details" ,"Error")
     }else{
      setIsLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
  let data = JSON.stringify(
        {
          usr_email: formValues.usr_email.trim(),
          usr_pwd: formValues.usr_pwd.trim(),
        }
      )

      let config = {
        method: "POST",
        maxBodyLength: Infinity,
        body: data,
        redirect: "follow",
        headers: myHeaders,
      };

  
      setTimeout(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/user/register/`, config)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            //custom Alert Message
            swal("successful Registred", result.message, "success");
            cookie.set("jwttoken",result.token)
            clearForm();
          }
          else {
            swal("error", result.message, "error")
          }
        }).catch((error) => swal("Error", error, "error"))
        .finally(()=>{
          setIsLoading(false);
        });
      },2000);
     } 
}
const cookie = new Cookies();
const res=cookie.get('jwttoken')


  return (
    <>
    <div  id='register1' style={{width:"100vw", height:"70vh"}}>
   <main  id='register-card'  className=' m-auto px-5'>
        <header>
            <img src="" alt="" />
            <h1 className='p-2'>Login</h1>
        </header>
        <section className='d-flex gap-4'>
           <form action="" autoComplete='off'>
           <div className='d-flex flex-row'>
                <label htmlFor="" className='p-2'>Email</label>
                <input name='usr_name' className='p-2 m-1' type="email" required  />
            </div>
            <div className='d-flex flex-row'>
                <label htmlFor="" className='p-2'>Password</label>
                <input name='usr_phnum' className='p-2 m-1' type="password" required  />
            </div>
            <div className='d-flex justify-content-evenly align-item-center flex-row gap-2 m-2 p-2'>
                <button type='submit' className='px-2 py-1' style={{
            padding:"10px 16px",
            width: "40%",
            background: "#C68643",
            color: "#fff",
            fontWeight: "600",
            height: "44px",  
          }} >Login</button>
                <button type='reset' className='px-2 py-1' style={{
            padding:"10px 16px",
            width: "40%",
            background: "#144273",
            color: "#fff",
            fontWeight: "600",
            height: "44px",
          
          }} >Clear</button>
            </div>
            <div style={{textAlign:"center",width:"100%"}}>OR
          <div className='Login-Link'>
            <Link to='/Register/' className='Login-l' >
           <label htmlFor="" className='Login'>Register</label>
            </Link>
          </div>
        </div>
           </form>
        </section>
        <br />
        <footer style={{textAlign:"center"}}>
            <span>{new Date().getFullYear()}&copy; Rubia Services</span>
        </footer>
    </main>
   </div>
    </>
  )
}

export default Login