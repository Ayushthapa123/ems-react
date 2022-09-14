import React, { useState, useEffect } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/education.module.scss';

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

const [school,setSchool]=useState('');
const [degree,setDegree]=useState('');
const [grade, setGrade]=useState('');
const [passed,setPassed]=useState('')

const [uschool,setUschool]=useState('');
const [udegree,setUdegree]=useState('');
const [ugrade, setUgrade]=useState('');
const [upassed,setUpassed]=useState('')



const [updateid,setUpdateid]=useState('')


const [showform,setShowform]=useState(false);
const [showupdateform,setShowupdateform]=useState(false)

const [educations,setEducations]=useState([
  
{
  school: "Vidhyamandir HSS",
  degree: "HSEB",
  grade: "A",
  passed:"2017"
},
{
  school: "Patan Multiple Campus",
  degree: "BSc.CSIT",
  grade: "A+",
  passed:"2022"
},





])

const updated = () => toast("Document Updated Success!");
const added = () => toast("Document Added Success!");
const deleted = () => toast("Document Deleted Success!");

const Adddept=(e)=> {
  e.preventDefault();

  const newed={
    school,
    degree,
    grade,
    passed,
  }
const neweds=educations;
  neweds.push(newed);
 
  let myJSON = JSON.stringify(neweds);
  localStorage.setItem("educations",myJSON);

  const alleds=JSON.parse(localStorage.getItem('educations'));
  setEducations(alleds);
  setShowform(false);
  added();
}


const MarkUpdateItem=(e)=> {

  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;

  if(id) {
    setShowupdateform(true);
    setShowform(false);
    setUpdateid(id);

  
  

setUschool(educations[id].school);
setUdegree(educations[id].degree);
setUgrade(educations[id].grade);
setUpassed(educations[id].passed);

    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
   school:uschool,
   degree:udegree,
   grade:ugrade,
   passed:upassed,
  }
const neweds=[...educations];
  neweds[updateid]=newdet;
 
  let myJSON = JSON.stringify(neweds);
  localStorage.setItem("educations",myJSON);

  const alleds=JSON.parse(localStorage.getItem('educations'));
  setEducations(alleds);
  setShowupdateform(false);

  updated();
}

const DeleteItem=(e)=> {
  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  if(id) {

  let deleds=[...educations];
  deleds.splice(id,1);

 
  setEducations(deleds);
  let myJSON = JSON.stringify(deleds);
  localStorage.setItem("educations",myJSON);
  // window.location.reload();
  deleted();
}
}


function setInitialEds() {
  let alleds=JSON.parse(localStorage.getItem('educations'));
  if(alleds) {
  setEducations(alleds);
  }else {
    let myJSON = JSON.stringify(educations);
  localStorage.setItem("educations",myJSON);
  }
}




useEffect(()=> {
setInitialEds();

},[])









  return (
   <Template>
<div className={styles.button}>
<Button variant="contained" endIcon={<AddIcon />} onClick={()=>{setShowform(true);setShowupdateform(false);}}>
  Add 
</Button>

</div>

{/* <div className={styles.search}>
<input type='text' placeholder='Filter users' value={searchinp}
 onChange={(e)=>{setSearchinp(e.target.value.toLowerCase(e.target.value)); 
//  FilterText(e.target.value.toLowerCase(e.target.value));
 
 }}/>

</div> */}

<h2 className={styles.title}>Employee Education Details</h2>


{showform &&<div className={styles.form}>
  <form onSubmit={Adddept}>
  <TextField  className={styles.input} label="School/University" variant="outlined" size='small' type='text' value={school} onChange={(e)=>setSchool(e.target.value)} required/>
  <TextField className={styles.input} label="Degree" variant="outlined" size='small' type='text' value={degree} onChange={(e)=>setDegree(e.target.value)} required/>
  <TextField  className={styles.input} label="Grade" variant="outlined" size='small' type='text' value={grade} onChange={(e)=>setGrade(e.target.value)} required/>
  <TextField  className={styles.input} label="Passed Year" variant="outlined" size='small' type='text' value={passed} onChange={(e)=>setPassed(e.target.value)} required/>

<br/>

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

  <TextField  className={styles.input} label="School/University" variant="outlined" size='small' type='text' value={uschool} onChange={(e)=>setUschool(e.target.value)} required/>
  <TextField className={styles.input} label="Degree" variant="outlined" size='small' type='text' value={udegree} onChange={(e)=>setUdegree(e.target.value)} required/>
  <TextField  className={styles.input} label="Grade" variant="outlined" size='small' type='text' value={ugrade} onChange={(e)=>setUgrade(e.target.value)} required/>
  <TextField  className={styles.input} label="Passed Year" variant="outlined" size='small' type='text' value={upassed} onChange={(e)=>setUpassed(e.target.value)} required/>


<br/>

<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update 
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowupdateform(false)}>
  Cancel
</Button>

  </form>
</div>}





{educations &&<div className={styles.table}>
<table>
  <tbody>
<tr>
    <th>School/University</th>
    <th>Degree</th>
    <th>Grade</th>
    <th>Passed Year</th>
    <th>Update/Delete</th>
  </tr>
{educations.filter((e,index)=> {
  if(searchinp=="") {
    return e
  }else if(e.name.toLowerCase().includes(searchinp.toLowerCase())) {
    return e
  }
}).map((e,index)=> (
<tr key={e.dept} id={index}>
<td>{e.school}</td>
<td>{e.degree}</td>
<td>{e.grade}</td>
<td>{e.passed}</td>
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


