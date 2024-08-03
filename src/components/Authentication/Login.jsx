import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import swal from "sweetalert";

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
    <div style={{width:"100vw", height:"100vh",border:"1px solid black"}}>
   <main style={{width:"50%" ,border:"1px solid black"}} className=' m-auto'>
        <header>
            <img src="" alt="" />
            <h1>Login</h1>
        </header>
        <section className='d-flex gap-4'>
           <form action="" autoComplete='off'>
           <div className='d-flex flex-row'>
                <label htmlFor="">Email</label>
                <input name='usr_name' className='p-2' type="email" required  />
            </div>
            <div className='d-flex flex-row'>
                <label htmlFor="">Password</label>
                <input name='usr_phnum' className='p-2' type="password" required  />
            </div>
            <div className='d-flex justify-content-between align-item-center flex-row'>
                <button type='submit' className='px-2 py-1'>Login</button>
                <button type='reset' className='px-2 py-1'>Clear</button>
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

export default Login