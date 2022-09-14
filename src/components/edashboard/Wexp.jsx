import React, { useState, useEffect } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/wexp.module.scss';

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

const [cname,setCname]=useState('');
const [position,setPosition]=useState('');
const [from, setFrom]=useState('');
const [to, setTo]=useState('');

const [ucname,setUcname]=useState('');
const [uposition,setUposition]=useState('');
const [ufrom, setUfrom]=useState('');
const [uto, setUto]=useState('');





const [updateid,setUpdateid]=useState('')


const [showform,setShowform]=useState(false);
const [showupdateform,setShowupdateform]=useState(false)

const [wexps,setWexps]=useState([
  
{
  cname: "Facebook",
  position: "Junior Developer",
  from: "2020-2-3",
  to:"2021-2-30"
},
{
  cname: "Appli Inc",
  position: "Senior Developer",
  from: "2021-2-30",
  to:"2023-2-30"
},






])

const updated = () => toast("Document Updated Success!");
const added = () => toast("Document Added Success!");
const deleted = () => toast("Document Deleted Success!");

const Adddept=(e)=> {
  e.preventDefault();

  const newxp={
    cname,
    position,
    from,
    to,
  }
const newxps=wexps;
  newxps.push(newxp);
 
  let myJSON = JSON.stringify(newxps);
  localStorage.setItem("wexps",myJSON);

  const allxps=JSON.parse(localStorage.getItem('wexps'));
  setWexps(allxps);
  setShowform(false);
  added();
}


const MarkUpdateItem=(e)=> {

  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;

  if(id) {
    setShowupdateform(true);
    setShowform(false);
    setUpdateid(id);

  

setUcname(wexps[id].cname);
setUposition(wexps[id].position);
setUfrom(wexps[id].from);
setUto(wexps[id].to);

    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
   cname:ucname,
   position:uposition,
   from:ufrom,
   to:uto,
  }


const newxps=[...wexps];
  newxps[updateid]=newdet;
 
  let myJSON = JSON.stringify(newxps);
  localStorage.setItem("wexps",myJSON);

  const allxps=JSON.parse(localStorage.getItem('wexps'));
  setWexps(allxps);
  setShowupdateform(false);

  updated();
}

const DeleteItem=(e)=> {
  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  if(id) {

  let delxps=[...wexps];
  delxps.splice(id,1);

 
  setWexps(delxps);
  let myJSON = JSON.stringify(delxps);
  localStorage.setItem("wexps",myJSON);
  // window.location.reload();
  deleted();
}
}


function setInitialXps() {
  let allxps=JSON.parse(localStorage.getItem('wexps'));
  if(allxps) {
  setWexps(allxps);
  }else {
    let myJSON = JSON.stringify(wexps);
  localStorage.setItem("wexps",myJSON);
  }
}




useEffect(()=> {
setInitialXps();

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

<h2 className={styles.title}>Work Experiences Details</h2>

{showform &&<div className={styles.form}>
  <form onSubmit={Adddept}>
  <TextField  className={styles.input} label="Company Name" variant="outlined" size='small' type='text' value={cname} onChange={(e)=>setCname(e.target.value)} required/>
  <TextField className={styles.input} label="Position" variant="outlined" size='small' type='text' value={position} onChange={(e)=>setPosition(e.target.value)} required/>
  <TextField  className={styles.input} label="From" variant="outlined" size='small' type='date' value={from} onChange={(e)=>setFrom(e.target.value)} required/>
  <TextField  className={styles.input} label="To" variant="outlined" size='small' type='date' value={to} onChange={(e)=>setTo(e.target.value)} required/>

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

  <TextField  className={styles.input} label="Company Name" variant="outlined" size='small' type='text' value={ucname} onChange={(e)=>setUcname(e.target.value)} required/>
  <TextField className={styles.input} label="Position" variant="outlined" size='small' type='text' value={uposition} onChange={(e)=>setUposition(e.target.value)} required/>
  <TextField  className={styles.input} label="From" variant="outlined" size='small' type='date' value={ufrom} onChange={(e)=>setUfrom(e.target.value)} required/>
  <TextField  className={styles.input} label="To" variant="outlined" size='small' type='date' value={uto} onChange={(e)=>setUto(e.target.value)} required/>


<br/>

<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update 
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowupdateform(false)}>
  Cancel
</Button>

  </form>
</div>}





{wexps &&<div className={styles.table}>
<table>
  <tbody>
<tr>
    <th>Company Name</th>
    <th>Position</th>
    <th>FromDate</th>
    <th>ToDate</th>
    <th>Update/Delete</th>
  </tr>
{wexps.filter((e,index)=> {
  if(searchinp=="") {
    return e
  }else if(e.cname.toLowerCase().includes(searchinp.toLowerCase())) {
    return e
  }
}).map((e,index)=> (
<tr key={e.cname} id={index}>
<td>{e.cname}</td>
<td>{e.position}</td>
<td>{e.from}</td>
<td>{e.to}</td>
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


