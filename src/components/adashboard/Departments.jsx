import React, { useState, useEffect } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/departments.module.scss';

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






export default function Departments() {

 const [searchinp,setSearchinp]=useState('')

const [dept,setDept]=useState();
const [depthead,setDepthead]=useState();
const [contact, setContact]=useState();

const [udept,setUdept]=useState();
const [udepthead,setUdepthead]=useState();
const [ucontact, setUcontact]=useState();

const [updateid,setUpdateid]=useState('')


const [showform,setShowform]=useState(false);
const [showupdateform,setShowupdateform]=useState(false)

const [departments,setDepartments]=useState([
  
{
  dept: "Design",
  depthead: "Ayush Thapa",
  contact: "9846793894/984777777"
},

{
  dept: "Development",
  depthead: "Ayush Mgr",
  contact: "9846793894/984999977"
},

{
  dept: "Testing",
  depthead: "Ankit Thapa",
  contact: "9846793004/984777777"
},
{
  dept: "Marketing",
  depthead: "Aayush Thapaa",
  contact: "9846793800/984777777"
},

])

const updated = () => toast("Department Updated Success!");
const added = () => toast("Department Added Success!");
const deleted = () => toast("Department Deleted Success!");

const Adddept=(e)=> {
  e.preventDefault();

  const newdept={
    dept,
    depthead,
    contact,
  }
const newdepts=departments;
  newdepts.push(newdept);
 
  let myJSON = JSON.stringify(newdepts);
  localStorage.setItem("departments",myJSON);

  const alldepts=JSON.parse(localStorage.getItem('departments'));
  setDepartments(alldepts);
  setShowform(false);
  added();
}


const MarkUpdateItem=(e)=> {

  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;

  if(id) {
    setShowupdateform(true);
    setShowform(false);
    setUpdateid(id);

  
setUdept(departments[id].dept);
setUdepthead(departments[id].depthead);
setUcontact(departments[id].contact);

    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
   dept:udept,
   depthead:udepthead,
   contact:ucontact,
  }
const newdepts=[...departments];
  newdepts[updateid]=newdet;
 
  let myJSON = JSON.stringify(newdepts);
  localStorage.setItem("departments",myJSON);

  const alldepartments=JSON.parse(localStorage.getItem('departments'));
  setDepartments(alldepartments);
  setShowupdateform(false);

  updated();
}

const DeleteItem=(e)=> {
  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  if(id) {

  let deldepts=[...departments];
  deldepts.splice(id,1);

 
  setDepartments(deldepts);
  let myJSON = JSON.stringify(deldepts);
  localStorage.setItem("departments",myJSON);
  // window.location.reload();
  deleted();
}
}


function setInitialDepts() {
  let alldepts=JSON.parse(localStorage.getItem('departments'));
  if(alldepts) {
  setDepartments(alldepts);
  }else {
    let myJSON = JSON.stringify(departments);
  localStorage.setItem("departments",myJSON);
  }
}




useEffect(()=> {
setInitialDepts();

},[])









  return (
   <Template>
<div className={styles.button}>
<Button variant="contained" endIcon={<AddIcon />} onClick={()=>{setShowform(true);setShowupdateform(false);}}>
  Add Department
</Button>

</div>

{/* <div className={styles.search}>
<input type='text' placeholder='Filter users' value={searchinp}
 onChange={(e)=>{setSearchinp(e.target.value.toLowerCase(e.target.value)); 
//  FilterText(e.target.value.toLowerCase(e.target.value));
 
 }}/>

</div> */}

{showform &&<div className={styles.form}>
  <form onSubmit={Adddept}>
  <TextField  className={styles.input} label="Department Name" variant="outlined" size='small' type='text' value={dept} onChange={(e)=>setDept(e.target.value)} required/>
  <TextField className={styles.input} label="Department Head" variant="outlined" size='small' type='text' value={depthead} onChange={(e)=>setDepthead(e.target.value)} required/>
  <TextField  className={styles.input} label="Contact" variant="outlined" size='small' type='text' value={contact} onChange={(e)=>setContact(e.target.value)} required/>
 
<br/>

<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Add Department
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowform(false)}>
  Cancel
</Button>

  </form>
</div>}
    



{showupdateform &&<div className={styles.form}>
  <form onSubmit={UpdateDetails}>
  <TextField  className={styles.input} label="Department Name" variant="outlined" size='small' type='text' value={udept} onChange={(e)=>setUdept(e.target.value)} required/>
  <TextField className={styles.input} label="Department Head" variant="outlined" size='small' type='text' value={udepthead} onChange={(e)=>setUdepthead(e.target.value)} required/>
  <TextField  className={styles.input} label="Contact" variant="outlined" size='small' type='text' value={ucontact} onChange={(e)=>setUcontact(e.target.value)} required/>
 


<br/>

<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update Department
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowupdateform(false)}>
  Cancel
</Button>

  </form>
</div>}





{departments &&<div className={styles.table}>
<table>
  <tbody>
<tr>
    <th>Department Name</th>
    <th>Department Head</th>
    <th>Contact</th>
    <th>Update/Delete</th>
  </tr>
{departments.filter((d,index)=> {
  if(searchinp=="") {
    return d
  }else if(d.name.toLowerCase().includes(searchinp.toLowerCase())) {
    return d
  }
}).map((d,index)=> (
<tr key={d.dept} id={index}>
<td>{d.dept}</td>
<td>{d.depthead}</td>
<td>{d.contact}</td>
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


