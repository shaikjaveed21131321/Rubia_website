import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import swal from "sweetalert";
import "./Register.css"
import { Link , useNavigate} from 'react-router-dom';

const Register = () => {
  const cookie = new Cookies(null, { path: '/' });
  const res=cookie.get('jwttoken')

    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

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
          usr_name: formValues.usr_name.trim(),
          usr_email: formValues.usr_email.trim(),
          usr_phnum: formValues.usr_phnum.trim(),
          usr_pwd: formValues.usr_pwd.trim(),
          usr_pwd_confirm: formValues.usr_pwd_confirm.trim(),
          created_at: new Date().toLocaleString(),
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
            navigate("/");
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
  
   
  return (
    <>
   <div id='register1' style={{width:"100vw", height:"70vh"}}>
   <main id='register-card'  className=' m-auto'>
        <header>
            <img src="" alt="" />
            <h1 className='p-2'>Register</h1>
        </header>
        <section className='d-flex gap-4'>
        <form action="" autoComplete='off'>

        <div className='d-flex flex-row p-2'>
                <label htmlFor="">Name</label>
                <input name='usr_name' autoComplete='off' onChange={handleChange} className='p-2' type="text" required  value={formValues.usr_name}/>
            </div>
            <div className='d-flex flex-row p-2'>
                <label htmlFor="">Email</label>
                <input name='usr_email' autoComplete='off' onChange={handleChange} className='p-2' type="email" required  value={formValues.usr_email}/>
            </div>
            <div className='d-flex flex-row p-2'>
                <label htmlFor="">Phone</label>
                <input name='usr_phnum' autoComplete='off' onChange={handleChange} className='p-2' type="email" required  value={formValues.usr_phnum}/>
            </div>
            <div className='d-flex flex-row p-2'>
                <label htmlFor="">Password</label>
                <input autoComplete='off' name='usr_pwd' onChange={handleChange} className='p-2' type="password" required value={formValues.usr_pwd} />
            </div>
            <div className='d-flex flex-row p-2'>
                <label htmlFor="">Password Confirm</label>
                <input name='usr_pwd_confirm' autoComplete='off' onChange={handleChange} className='p-2' type="password" required value={formValues.usr_pwd_confirm} />
            </div>
            <div className="px-4" style={{gap:"7px",display:"flex",justifyContent:"center",alignItems:"center"}}>

        <button
      
        disabled={isLoading}
          className="form-control btn my-4 mx-auto"
          style={{
            padding:"10px 16px",
            width: "90%",
            background: "#144273",
            color: "#fff",
            fontWeight: "600",
            height: "44px",
          
          }}
          onClick={clearForm}>Clear
        </button>
        <button id="sub-btn" disabled={isLoading} style={{
            padding:"10px 16px",
            width: "90%",
            background: "#C68643",
            color: "#fff",
            fontWeight: "600",
            height: "44px",  
          }} 
          class="btn " type="button" onClick={handleSubmit}  >
          {(isLoading)?<><span style={{color:"white"}} class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
          <span className="mx-2" style={{color:"white"}} role="status">Loading...</span></>:<span  style={{color:"white"}} role="status">Register</span>}
        </button>
        </div>
        <div style={{textAlign:"center",width:"100%"}}>OR
          <div className='Login-Link'>
            <Link to='/Login/' className='Login-l' >
           <label htmlFor="" className='Login'>Login</label>
            </Link>
          </div>
        </div>
        </form>
        </section>
        <footer style={{textAlign:"center"}}>
            <span >{new Date().getFullYear()}&copy; Rubia Services</span>
        </footer>
    </main>
   </div>
    </>
  )
}

export default Register