import React, { useEffect, useState } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/newemp.module.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

import Tooltip from '@mui/material/Tooltip';

import {AiFillDelete} from 'react-icons/ai';
import { Filter } from '@mui/icons-material';
import {TbSortAscending2} from 'react-icons/tb';
import {TbSortDescending2} from 'react-icons/tb';


export default function Newuser() {


const [showform,setShowform]=useState(false);
const [showupdateform,setShowupdateform]=useState(false)

const [uid,setUid]=useState('');
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('')
const [role,setRole]=useState('');
const [dept,setDept]=useState('');
const [skill, setSkill]=useState('');
const [add,setAdd]=useState('');
const [dob,setDob]=useState('');

const [uuid,setUuid]=useState('');
const [uname,setUname]=useState('');
const [uemail,setUemail]=useState('');
const [uphone,setUphone]=useState('')
const [urole,setUrole]=useState('');
const [udept,setUdept]=useState('');
const [uskill, setUskill]=useState('');
const [uadd,setUadd]=useState('');
const [udob,setUdob]=useState('');

const [updateid,setUpdateid]=useState('')
const [sortby, setSortby]=useState('');

const [searchinp,setSearchinp]=useState('')

const [filteredusers, setFilteredUsers]=useState('');

const [users,setUsers]=useState([
  
{
  uid:100,
  name:"Ayush Thapa",
  email:"ayush@gmail.com",
  phone:"9846793894",
  role:'Handeling Testing software',
  dept:"Testing",
  skill:"Web Development",
  add:"gwarko, Lalitpur",
  dob:"1999-8-30",
},
{
  uid:101,
  name:"Ankit Thapa",
  email:"ankit@gmail.com",
  phone:"9846793878",
  role:'Making awesome frontend',
  dept:"development",
  skill:"Web Development",
  add:"Kupondole, Lalitpur",
  dob:"1999-3-30",
},
{
  uid:103,
  name:"Rabin Thapa",
  email:"rabin@gmail.com",
  phone:"9846793888",
  role:'Handeling the backend',
  dept:"development",
  skill:"MERN Stack",
  add:"Kupondole, Nepal",
  dob:"1999-2-30",
},

])



const updated = () => toast("Employee Updated Success!");
const added = () => toast("Employee Added Success!");
const deleted = () => toast("Employee Deleted Success!");



const Adduser=(e)=> {
  e.preventDefault();

  const newuser={
    uid,
    name,
    email,
    role,
    phone,
    dept,
    skill,
    add,
    dob
  }
const newusers=users;
  newusers.push(newuser);
 
  let myJSON = JSON.stringify(newusers);
  localStorage.setItem("employees",myJSON);

  const allusers=JSON.parse(localStorage.getItem('employees'));
  setUsers(allusers);
  setShowform(false);
  added();
}


const MarkUpdateItem=(e)=> {
 
  // let id=e.target.parentElement.parentElement.parentElement.parentElement.firstChild.textContent;


  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  

  if(id) {
    let index=users.findIndex( element => {
      if (element.email == id) {
        return true;
      }
    });



    setShowupdateform(true);
    setShowform(false);
    setUpdateid(index);

 
setUuid(users[index].uid);
setUname(users[index].name);
setUemail(users[index].email);
setUphone(users[index].phone);
setUrole(users[index].role);
setUdept(users[index].dept);
setUadd(users[index].add);
setUskill(users[index].skill);
setUdob(users[index].dob);
    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
    uid:uuid,
    name:uname,
    email:uemail,
    phone:uphone,
    role:urole,
    dept:udept,
    skill:uskill,
    add:uadd,
    dob:udob,
  }


const newusers=[...users];
  newusers[updateid]=newdet;
 
  let myJSON = JSON.stringify(newusers);
  localStorage.setItem("employees",myJSON);

  const allusers=JSON.parse(localStorage.getItem('employees'));
  setUsers(allusers);
  setShowupdateform(false);

  updated();
}








const DeleteItem=(e)=> {
  let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
  if(id) {
let index=users.findIndex( element => {
  if (element.email == id) {
    return true;
  }
});


  let delusers=[...users];
  delusers.splice(index,1);

 
  setUsers(delusers);
  let myJSON = JSON.stringify(delusers);
  localStorage.setItem("employees",myJSON);
  // window.location.reload();
  deleted();
}
}


const sortUsers=(array,key)=> {
  let sorted= array.sort(function(a, b) {
      var x = a[key];
      var y = b[key];

      if (typeof x == "string")
      {
          x = (""+x).toLowerCase(); 
      }
      if (typeof y == "string")
      {
          y = (""+y).toLowerCase();
      }

      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
// console.log('sorted',sorted)
  setUsers([...sorted]);
  // setSortby(key);
 
}

const ReversesortUsers=(array,key)=> {
  let sorted= array.sort(function(a, b) {
      var x = a[key];
      var y = b[key];

      if (typeof x == "string")
      {
          x = (""+x).toLowerCase(); 
      }
      if (typeof y == "string")
      {
          y = (""+y).toLowerCase();
      }

      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
// console.log('sorted',sorted)
  setUsers([...sorted]);
  // setSortby(key);
 
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


function setInitialUser() {
  let allusers=JSON.parse(localStorage.getItem('employees'));
  if(allusers) {
  setUsers(allusers);
  }else {
    let myJSON = JSON.stringify(users);
  localStorage.setItem("employees",myJSON);
  }
}




useEffect(()=> {
setInitialUser();

},[])

  return (
   <Template>
<div className={styles.button}>
<Button variant="contained" endIcon={<AddIcon />} onClick={()=>{setShowform(true);setShowupdateform(false);}}>
  Add Employee
</Button>

</div>

<div className={styles.search}>
<input type='text' placeholder='Filter Names' value={searchinp}
 onChange={(e)=>{setSearchinp(e.target.value.toLowerCase(e.target.value)); 
//  FilterText(e.target.value.toLowerCase(e.target.value));
 
 }}/>

</div>

{showform &&<div className={styles.form}>
  <form onSubmit={Adduser}>
  <TextField  className={styles.input} label="User Id" variant="outlined" size='small' type='text' value={uid} onChange={(e)=>setUid(e.target.value)} required/>
  <TextField className={styles.input} label="Name" variant="outlined" size='small' type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>
  <TextField  className={styles.input} label="Email" variant="outlined" size='small' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  <TextField  className={styles.input} label="Phone" variant="outlined" size='small' type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
  <TextField className={styles.input} label="Role" variant="outlined" size='small' type='text' value={role} onChange={(e)=>setRole(e.target.value)} required/>
  <TextField  className={styles.input} label="Skill" variant="outlined" size='small' type='text' value={skill} onChange={(e)=>setSkill(e.target.value)} required/>
  <TextField  className={styles.input} label="Address" variant="outlined" size='small' type='text' value={add} onChange={(e)=>setAdd(e.target.value)} required/>


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
            value="Development"
            >
              Development
            </MenuItem>
            <MenuItem  
            value="design"
            >
            Design
            </MenuItem>
            <MenuItem  
            value="testing"
            >
            Testing
            </MenuItem>
      
        </TextField><br/>

<TextField  className={styles.input} label="Dob" variant="outlined" size='small' type='date' value={dob} onChange={(e)=>setDob(e.target.value)} required/>

<br/>
<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Add Employee
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowform(false)}>
  Cancel
</Button>

  </form>
</div>}
    



{showupdateform &&<div className={styles.form}>
  <form onSubmit={UpdateDetails}>
  <TextField  className={styles.input} label="User Id" variant="outlined" size='small' type='text' value={uuid} onChange={(e)=>setUid(e.target.value)} required/>
  <TextField className={styles.input} label="Name" variant="outlined" size='small' type='text' value={uname} onChange={(e)=>setUname(e.target.value)} required/>
  <TextField  className={styles.input} label="Email" variant="outlined" size='small' type='email' value={uemail} onChange={(e)=>setUemail(e.target.value)} required/>
  <TextField  className={styles.input} label="Phone" variant="outlined" size='small' type='text' value={uphone} onChange={(e)=>setUphone(e.target.value)} required/>
  <TextField className={styles.input} label="Role" variant="outlined" size='small' type='text' value={urole} onChange={(e)=>setUrole(e.target.value)} required/>
  <TextField  className={styles.input} label="Skill" variant="outlined" size='small' type='text' value={uskill} onChange={(e)=>setUskill(e.target.value)} required/>
  <TextField  className={styles.input} label="Address" variant="outlined" size='small' type='text' value={uadd} onChange={(e)=>setUadd(e.target.value)} required/>


  <TextField
          id="outlined-select-currency"
          select
          required
          label="Department"
          className={styles.input}
          size='small'
          value={udept}
          onChange={(e)=>{setDept(e.target.value)}}
          
        >
         
            <MenuItem  
            value="Development"
            >
              Development
            </MenuItem>
            <MenuItem  
            value="design"
            >
            Design
            </MenuItem>
            <MenuItem  
            value="testing"
            >
            Testing
            </MenuItem>
      
        </TextField><br/>

<TextField  className={styles.input} label="Dob" variant="outlined" size='small' type='date' value={udob} onChange={(e)=>setUdob(e.target.value)} required/>


<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update 
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowupdateform(false)}>
  Cancel
</Button>

  </form>
</div>}





{users &&<div className={styles.table}>
<table>
  <tbody>
<tr>
    <th>Uid <IconButton size='small' onClick={(e)=>sortUsers(users,"uid")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"uid")}><TbSortDescending2/></IconButton></th>
    <th>Name <IconButton size='small' onClick={(e)=>sortUsers(users,"name")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"name")}><TbSortDescending2/></IconButton></th>
    <th>Email <IconButton size='small' onClick={(e)=>sortUsers(users,"email")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"email")}><TbSortDescending2/></IconButton></th>
    <th>Phone <IconButton size='small' onClick={(e)=>sortUsers(users,"phone")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"phone")}><TbSortDescending2/></IconButton></th>
    
    <th>Role <IconButton size='small' onClick={(e)=>sortUsers(users,"role")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"role")}><TbSortDescending2/></IconButton></th>
    <th>Department <IconButton size='small' onClick={(e)=>sortUsers(users,"dept")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"dept")}><TbSortDescending2/></IconButton></th>
    <th>Skill <IconButton size='small' onClick={(e)=>sortUsers(users,"skill")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"skill")}><TbSortDescending2/></IconButton></th>
    <th>Address <IconButton size='small' onClick={(e)=>sortUsers(users,"add")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"add")}><TbSortDescending2/></IconButton></th>
    <th>Date Of Birth<IconButton size='small' onClick={(e)=>sortUsers(users,"dob")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"dob")}><TbSortDescending2/></IconButton></th>
    
    
    <th>Update/Delete</th>
  </tr>
{users.filter((user,index)=> {
  if(searchinp=="") {
    return user
  }else if(user.name.toLowerCase().includes(searchinp.toLowerCase())) {
    return user
  }
}).map((user,index)=> (
<tr key={user.email} id={user.email}>
<td>{user.uid}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.phone}</td>
<td>{user.role}</td>
<td>{user.dept}</td>
<td>{user.skill}</td>
<td>{user.add}</td>
<td>{user.dob}</td>
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
