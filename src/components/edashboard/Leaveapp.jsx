import React, { useState, useEffect } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/leaveapp.module.scss';

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






export default function Leaveapp() {

const name=localStorage.getItem('name');
const role=localStorage.getItem('role');
const email=localStorage.getItem('emailData');


 const [searchinp,setSearchinp]=useState('')


const [dept,setDept]=useState('');
const [leavetype,setLeavetype]=useState('');
const [from, setFrom]=useState('');
const [to,setTo]=useState('');
const [reason, setReason]=useState('');

const [udept,setUdept]=useState('');
const [uleavetype,setUleavetype]=useState('');
const [ufrom, setUfrom]=useState('');
const [uto,setUto]=useState('');
const [ureason, setUreason]=useState('');


const [updateid,setUpdateid]=useState('')


const [showform,setShowform]=useState(false);
const [showupdateform,setShowupdateform]=useState(false)

const [leaveapps,setLeaveapps]=useState([
  
{
  leavetype: "Sick Leave",
  from: "2022-12-1",
  to: "2022-12-5",
  reason:"For sick leave",
  status:"rejected",
  name: name,
  role:role,
  email:email,
  dept:"design"
},


])

const updated = () => toast("Document Updated Success!");
const added = () => toast("Document Added Success!");
const deleted = () => toast("Document Deleted Success!");

const AddLeaveapp=(e)=> {
  e.preventDefault();

  const newleaveapp={
    leavetype:leavetype,
    from: from,
    to: to,
    reason:reason,
    status:"pending",
    name: name,
    role:role,
    email:email,
    dept:dept,
  }
const newleaveapps=[...leaveapps];
  newleaveapps.push(newleaveapp);
 
  let myJSON = JSON.stringify(newleaveapps);
  localStorage.setItem("leaveapps",myJSON);

  const allleaveapps=JSON.parse(localStorage.getItem('leaveapps'));
  setLeaveapps(allleaveapps);
  setShowform(false);
  added();
}


const MarkUpdateItem=(e)=> {

  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;

  if(id) {
    setShowupdateform(true);
    setShowform(false);
    setUpdateid(id);

  
setUdept(leaveapps[id].dept);
setUleavetype(leaveapps[id].leavetype);
setUfrom(leaveapps[id].from);
setUto(leaveapps[id].to);
setUreason(leaveapps[id].reason);

    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
    leavetype:uleavetype,
    from: ufrom,
    to: uto,
    reason:ureason,
    status:"pending",
    name: name,
    role:role,
    email:email,
    dept:udept,
  }
const newleaveapps=[...leaveapps];
  newleaveapps[updateid]=newdet;
 
  let myJSON = JSON.stringify(newleaveapps);
  localStorage.setItem("leaveapps",myJSON);

  const allleaveapps=JSON.parse(localStorage.getItem('leaveapps'));
  setLeaveapps(allleaveapps);
  setShowupdateform(false);

  updated();
}

const DeleteItem=(e)=> {
  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  if(id) {

  let delleaveapps=[...leaveapps];
  delleaveapps.splice(id,1);

 
  setLeaveapps(delleaveapps);
  let myJSON = JSON.stringify(delleaveapps);
  localStorage.setItem("leaveapps",myJSON);
  // window.location.reload();
  deleted();
}
}


function setInitialLeaveapps() {
  let allleaveapps=JSON.parse(localStorage.getItem('leaveapps'));
  if(allleaveapps) {
  setLeaveapps(allleaveapps);
  }else {
    let myJSON = JSON.stringify(leaveapps);
  localStorage.setItem("leaveapps",myJSON);
  }
}




useEffect(()=> {
setInitialLeaveapps();

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

{showform &&<div className={styles.form}>
  <form onSubmit={AddLeaveapp}>
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
      
        </TextField>


  <TextField className={styles.input} label="From" variant="outlined" size='small' type='date' value={from} onChange={(e)=>setFrom(e.target.value)} required/>
  <TextField  className={styles.input} label="To" variant="outlined" size='small' type='date' value={to} onChange={(e)=>setTo(e.target.value)} required/>
  <TextField
          id="outlined-select-currency"
          select
          required
          label="Leave Type"
          className={styles.input}
          size='small'
          value={leavetype}
          onChange={(e)=>{setLeavetype(e.target.value)}}
          
        >
         
            <MenuItem  
            value="sick leave"
            >
              Sick Leave
            </MenuItem>
            <MenuItem  
            value="privilege leave"
            >
            Privilege Leave
            </MenuItem>
      
        </TextField><br/>

        <TextField  className={styles.input} label="Reason" variant="outlined" size='small' multiline rows={2} type='text' value={reason} onChange={(e)=>setReason(e.target.value)} required/>
<br/>

<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Submit
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowform(false)}>
  Cancel
</Button>

  </form>
</div>}
    



{showupdateform &&<div className={styles.form}>
  <form onSubmit={UpdateDetails}>
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
      
        </TextField>


  <TextField className={styles.input} label="From" variant="outlined" size='small' type='date' value={ufrom} onChange={(e)=>setUfrom(e.target.value)} required/>
  <TextField  className={styles.input} label="To" variant="outlined" size='small' type='date' value={uto} onChange={(e)=>setUto(e.target.value)} required/>
  <TextField
          id="outlined-select-currency"
          select
          required
          label="Leave Type"
          className={styles.input}
          size='small'
          value={uleavetype}
          onChange={(e)=>{setUleavetype(e.target.value)}}
          
        >
         
            <MenuItem  
            value="sick leave"
            >
              Sick Leave
            </MenuItem>
            <MenuItem  
            value="privilege leave"
            >
            Privilege Leave
            </MenuItem>
      
        </TextField><br/>

        <TextField  className={styles.input} label="Reason" variant="outlined" size='small'multiline rows={2} type='text' value={ureason} onChange={(e)=>setUreason(e.target.value)} required/>
<br/>


<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowupdateform(false)}>
  Cancel
</Button>

  </form>
</div>}





{leaveapps &&<div className={styles.table}>
<table>
  <tbody>
<tr>
    <th>Leave Type</th>
    <th>Department</th>
    <th>From</th>
    <th>To</th>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Reason</th>
    <th>Status</th>
    <th>Update/Delete</th>
  </tr>
{leaveapps.filter((l,index)=> {
  if(searchinp=="") {
    return l
  }else if(l.name.toLowerCase().includes(searchinp.toLowerCase())) {
    return l
  }
}).map((l,index)=> (
<tr key={l.from} id={index}>
<td>{l.leavetype}</td>
<td>{l.dept}</td>
<td>{l.from}</td>
<td>{l.to}</td>
<td>{l.name}</td>
<td>{l.email}</td>
<td>{l.role}</td>
<td>{l.reason}</td>
<td>{l.status}</td>

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


