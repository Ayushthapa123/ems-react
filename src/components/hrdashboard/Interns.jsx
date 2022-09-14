import React, { useEffect, useState } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/interns.module.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

import Tooltip from '@mui/material/Tooltip';

import {AiFillDelete} from 'react-icons/ai'
import { Filter } from '@mui/icons-material';


export default function Interns() {


const [showform,setShowform]=useState(false);
const [showupdateform,setShowupdateform]=useState(false)


const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [dept,setDept]=useState('');
const [skill,setSkill]=useState('');
const [sdate,setSdate]=useState('');

const [uname,setUname]=useState('');
const [uemail,setUemail]=useState('');
const [udept,setUdept]=useState('');
const [uskill,setUskill]=useState('');
const [usdate,setUsdate]=useState('');




const [updateid,setUpdateid]=useState('')

const [searchinp,setSearchinp]=useState('')

const [filteredusers, setFilteredUsers]=useState('');

const [interns,setInterns]=useState([
  
  {
 name:"Ayush Thapa",
 email:"thapaaayush115@gmail.com",
 dept:"Development",
 skill:"FrontEnd",
 sdate:"2022-5-5"
},
{
  name:"Rabin Thapa",
  email:"thaparabin@gmail.com",
  dept:"Design",
  skill:"UI/UX",
  sdate:"2022-5-5"
 },
 {
  name:"Eliza Thapa",
  email:"thapaeliza@gmail.com",
  dept:"testing",
  skill:"Alpha/Beta",
  sdate:"2022-5-5"
 },

])



const updated = () => toast(" Updated Success!");
const added = () => toast("Added Success!");
const deleted = () => toast("Deleted Success!");



const Adduser=(e)=> {
  e.preventDefault();

  const newintern={
    name,
    email,
    dept,
    skill,
    sdate,
  }
const newinterns=interns;
  newinterns.push(newintern);
 
  let myJSON = JSON.stringify(newinterns);
  localStorage.setItem("interns",myJSON);

  const allinterns=JSON.parse(localStorage.getItem('interns'));
  setInterns(allinterns);
  setShowform(false);
  added();
}


const MarkUpdateItem=(e)=> {
 
  // let id=e.target.parentElement.parentElement.parentElement.parentElement.firstChild.textContent;


  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  

  if(id) {
    
    setShowupdateform(true);
    setShowform(false);
    setUpdateid(id);

 
setUname(interns[id].name);
setUdept(interns[id].dept);
setUemail(interns[id].email);
setUskill(interns[id].skill);
setUsdate(interns[id].sdate);
    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
   
    name:uname,
    email:uemail,
    dept:udept,
    skill:uskill,
    sdate:usdate,

  }
const newinterns=[...interns];
  newinterns[updateid]=newdet;
 
  let myJSON = JSON.stringify(newinterns);
  localStorage.setItem("interns",myJSON);

  const allinterns=JSON.parse(localStorage.getItem('interns'));
  setInterns(allinterns);
  setShowupdateform(false);

  updated();
}








const DeleteItem=(e)=> {
  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  if(id) {

  let delinterns=[...interns];
  delinterns.splice(id,1);

 
  setInterns(delinterns);
  let myJSON = JSON.stringify(delinterns);
  localStorage.setItem("interns",myJSON);
  // window.location.reload();
  deleted();
}
}





// const FilterText=(inp)=> {

// let filtereditem=[];
// const usrs=JSON.parse(localStorage.getItem('users'));

// usrs.forEach((user)=> {
//   if(user.name.toLowerCase().indexOf(inp)>=0) {
//     filtereditem.push(user);
//   }
// }
// )
// setFilteredUsers(filtereditem);
// filtereditem=[];
// }


function setInitialInterns() {
  let allinterns=JSON.parse(localStorage.getItem('interns'));
  if(allinterns) {
  setInterns(allinterns);
  }else {
    let myJSON = JSON.stringify(interns);
  localStorage.setItem("interns",myJSON);
  }
}



useEffect(()=> {
setInitialInterns();

},[])

  return (
   <Template>
<div className={styles.button}>
<Button variant="contained" endIcon={<AddIcon />} onClick={()=>{setShowform(true);setShowupdateform(false);}}>
  Add Intern
</Button>

</div>

{/* <div className={styles.search}>
<input type='text' placeholder='Filter users' value={searchinp}
 onChange={(e)=>{setSearchinp(e.target.value.toLowerCase(e.target.value)); 
//  FilterText(e.target.value.toLowerCase(e.target.value));
 
 }}/>

</div> */}

<h2 className={styles.title}>Interns Details</h2>

{showform &&<div className={styles.form}>
  <form onSubmit={Adduser}>

  <TextField className={styles.input} label="Name" variant="outlined" size='small' type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>
  <TextField  className={styles.input} label="Email" variant="outlined" size='small' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>

  <TextField className={styles.input} label="Start Date" variant="outlined" size='small' type='text' value={sdate} onChange={(e)=>setSdate(e.target.value)} required/>
  <TextField className={styles.input} label="Skill" variant="outlined" size='small' type='text' value={skill} onChange={(e)=>setSkill(e.target.value)} required/>


  <TextField
          id="outlined-select-currency"
          select
          required
          label="Department"
          className={styles.input}
          size='small'
          value={dept}
          onChange={(e)=>{setDept(e.target.value)}}
          
        >
         
            <MenuItem  
            value="design"
            >
              Design
            </MenuItem>
            <MenuItem  
            value="development"
            >
            Development
            </MenuItem>

            <MenuItem  
            value="testing"
            >
              Testing
            </MenuItem>
            <MenuItem  
            value="marketing"
            >
            Marketing
            </MenuItem>
      
        </TextField><br/>


<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Add 
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowform(false)}>
  Cancel
</Button>

  </form>
</div>}
    



{showupdateform &&<div className={styles.form}>
  <form onSubmit={UpdateDetails}>
  <TextField className={styles.input} label="Name" variant="outlined" size='small' type='text' value={uname} onChange={(e)=>setUname(e.target.value)} required/>
  <TextField  className={styles.input} label="Email" variant="outlined" size='small' type='email' value={uemail} onChange={(e)=>setUemail(e.target.value)} required/>

  <TextField className={styles.input} label="Start Date" variant="outlined" size='small' type='text' value={usdate} onChange={(e)=>setUsdate(e.target.value)} required/>
  <TextField className={styles.input} label="Skill" variant="outlined" size='small' type='text' value={uskill} onChange={(e)=>setUskill(e.target.value)} required/>


  <TextField
          id="outlined-select-currency"
          select
          required
          label="Department"
          className={styles.input}
          size='small'
          value={udept}
          onChange={(e)=>{setUdept(e.target.value)}}
          
        >
         
            <MenuItem  
            value="design"
            >
              Design
            </MenuItem>
            <MenuItem  
            value="development"
            >
            Development
            </MenuItem>

            <MenuItem  
            value="testing"
            >
              Testing
            </MenuItem>
            <MenuItem  
            value="marketing"
            >
            Marketing
            </MenuItem>
      
        </TextField><br/>


<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update Intern
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowupdateform(false)}>
  Cancel
</Button>

  </form>
</div>}





{interns &&<div className={styles.table}>
<table>
  <tbody>
<tr>
    
    <th>Name</th>
    <th>Email</th>
    <th>Skill</th>
    <th>Department</th>
    <th>Start Date</th>
    <th>Update/Delete</th>
  </tr>
{interns.filter((i,index)=> {
  if(searchinp=="") {
    return i
  }else if(i.name.toLowerCase().includes(searchinp.toLowerCase())) {
    return i
  }
}).map((i,index)=> (
<tr key={i.email} id={index}>
<td>{i.name}</td>
<td>{i.email}</td>
<td>{i.skill}</td>
<td>{i.dept}</td>
<td>{i.sdate}</td>
<td><Tooltip title='Update' placement='top' arrow ><IconButton onClick={(e)=>{MarkUpdateItem(e);}} size='small'><DriveFileRenameOutlineRoundedIcon/></IconButton></Tooltip> | <Tooltip title='Delete' placement='top' arrow ><IconButton size='small' onClick={(e)=>DeleteItem(e)}><AiFillDelete /></IconButton></Tooltip></td>
</tr>

))}
</tbody>
</table>
</div>}

<ToastContainer/>
   </Template>
  )
}
