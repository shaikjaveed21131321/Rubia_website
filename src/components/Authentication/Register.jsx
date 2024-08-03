import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import swal from "sweetalert";

const Register = () => {
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

console.log(res);
   
  return (
    <>
   <div style={{width:"100vw", height:"100vh",border:"1px solid black"}}>
   <main style={{width:"50%" ,border:"1px solid black"}} className=' m-auto'>
        <header>
            <img src="" alt="" />
            <h1>Register</h1>
        </header>
        <section className='d-flex gap-4'>
        <form action="" autoComplete='off'>

        <div className='d-flex flex-row'>
                <label htmlFor="">Name</label>
                <input name='usr_name' autoComplete='off' onChange={handleChange} className='p-2' type="text" required  value={formValues.usr_name}/>
            </div>
            <div className='d-flex flex-row'>
                <label htmlFor="">Email</label>
                <input name='usr_email' autoComplete='off' onChange={handleChange} className='p-2' type="email" required  value={formValues.usr_email}/>
            </div>
            <div className='d-flex flex-row'>
                <label htmlFor="">Phone</label>
                <input name='usr_phnum' autoComplete='off' onChange={handleChange} className='p-2' type="email" required  value={formValues.usr_phnum}/>
            </div>
            <div className='d-flex flex-row'>
                <label htmlFor="">Password</label>
                <input autoComplete='off' name='usr_pwd' onChange={handleChange} className='p-2' type="password" required value={formValues.usr_pwd} />
            </div>
            <div className='d-flex flex-row'>
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
          type="reset">Clear
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
        </form>
        </section>
        <footer>
            <span>{new Date().getFullYear()}&copy; Rubia Services</span>
        </footer>
    </main>
   </div>
    </>
  )
}

export default Register