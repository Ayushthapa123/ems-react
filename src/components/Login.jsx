
import {useRef,useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';


import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from 'react-icons/ai'

import styles from './sass/login.module.scss';


import { useNavigate } from "react-router-dom";


import Home from './Home';


import { useRole } from '../contexts/Rolecontext';



const theme = createTheme();

export default function SignIn() {

  

const navigate = useNavigate();
const { currentrole, setCurrentrole} = useRole();

const getEmail=localStorage.getItem("emailData");
const getPassword=localStorage.getItem("passwordData");



const [users,setUsers]=useState([{
  uid:100,
  name:"Ayush Thapa",
  email:"emp@gmail.com",
  password:"Emp@12345",
  role:'employee',
},
{
  uid:101,
  name:"Rabin Thapa",
  email:"admin@gmail.com",
  password:"Admin@12345",
  role:'admin',
},
{
  uid:102,
  name:"Eliza Thapa",
  email:"hr@gmail.com",
  password:"Hr@12345",
  role:'hr',
},

{
  uid:103,
  name:"Aankit Thapa",
  email:"admin2@gmail.com",
  password:"Admin2@12345",
  role:'admin',
},
{
  uid:104,
  name:"Lila Thapa",
  email:"hr2@gmail.com",
  password:"Hr2@12345",
  role:'hr',
},])


// const emp={
//   email:"emp@gmail.com",
//   password: "Emp@12345",
// }

// const hr={
//   email:"hr@gmail.com",
//   password: "Hr@12345",
// }

// const admin={
//   email:"admin@gmail.com",
//   password: "Admin@12345",
// }

const [email,setEmail]=useState('admin@gmail.com');
const [password,setPassword]=useState('')
const [show,setShow]=useState(false);


const [lowercase,setLowercase]=useState(false);
const [uppercase,setUppercase]=useState(false);
const [special,setSpecial]=useState(false);
const [number,setNumber]=useState(false);
const [length,setLength]=useState(false);




const Validate=(e)=> {

  if(e.match(/[a-z]/g)) {  
    setLowercase(true);
  } else {
    setLowercase(false);
  }

  if(e.match(/[A-Z]/g)) {  
    setUppercase(true);
  } else {
    setUppercase(false);
  }

 

  if(e.match(/[0-9]/g)) {  
    setNumber(true);
  } else {
    setNumber(false);
  }

 
  if(e.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g)) {  
    setSpecial(true);
  } else {
    setSpecial(false);
  }

  if(e.length>7) {  
    setLength(true);
  } else {
    setLength(false);
  }



}

  

const HandleLogin=()=> {


}

HandleLogin();

  const handleSubmit=(e)=>{
    e.preventDefault();

    let result = users.find(function(e) {
      return e.email == email;
    });

   
      if(email==result.email && password==result.password){

          localStorage.setItem("emailData",result.email);

          localStorage.setItem("passwordData",result.password);

          localStorage.setItem("role",result.role);
          localStorage.setItem("name",result.name);
          
          setCurrentrole(result.role);

          if(result.role=='admin') {
            navigate('/ad/dashboard');
          }
          else if(result.role=='hr') {
            navigate('/hr/dashboard');
          }
          else if(result.role=='employee') {
            navigate('/em/dashboard');
          }else {
            alert('[emp@gmail.com,Emp@12345][hr@gmail.com, Hr@12345][admin@gmail.com,Admin@12345]');
          }
          
          window.location.reload();

        }
         
    

  }











  function setInitialUser() {
    let allusers=JSON.parse(localStorage.getItem('users'));
    if(allusers) {
    setUsers(allusers);
    }else {
      let myJSON = JSON.stringify(users);
    localStorage.setItem("users",myJSON);
    }
  }
  

  
  useEffect(()=> {
  setInitialUser();
  
  },[])




if(getEmail && getPassword)  {
return(
  <Home/>
)
}
else {


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}

          className={styles.login}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit}  method='get' className={styles.form}>
            
       
<div>

<input type='email' placeholder='Email Address'
required
 value={email}
 onChange={(e)=>setEmail(e.target.value)}


/>
<span></span>
</div>

<div>
<input 
type={!show?"password":"text"} 
placeholder='Password'
pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-/']).{8,}$"
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
value={password}
onChange={(e)=>{setPassword(e.target.value); Validate(e.target.value)}}
required
id='psw'



/>
<span></span>
<div  className={styles.hideshow}>
{!show && <span onClick={()=>setShow(!show)}> <AiFillEyeInvisible/></span>}
{show && <span onClick={()=>setShow(!show)}> <AiFillEye/></span>}
</div>

</div>


           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          
          </form>
        </Box>


       {password && <div id="message" className={styles.message}>
  <h3>Password must contain the following:</h3>
  <p id="lowercase" >{lowercase?<span><CheckBoxIcon fontSize='small'/></span>:<span><CancelIcon fontSize='small'/></span> }<b> lowercase</b> letter</p>
  <p id="capital" >{uppercase?<span><CheckBoxIcon fontSize='small'/></span>:<span><CancelIcon fontSize='small'/></span> } A <b> capital (uppercase)</b> letter</p>
  <p id="special" >{special?<span><CheckBoxIcon fontSize='small'/></span>:<span><CancelIcon fontSize='small'/></span> } A <b> Special</b> character</p>
  <p id="number" >{number?<span><CheckBoxIcon fontSize='small'/></span>:<span><CancelIcon fontSize='small'/></span> } A <b> number</b></p>
  <p id="length" >{length?<span><CheckBoxIcon fontSize='small'/></span>:<span><CancelIcon fontSize='small'/></span> } Minimum <b>8 characters</b></p>
</div>}
      </Container>
    </ThemeProvider>
  );
}}