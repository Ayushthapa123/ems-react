import React, { useEffect, useState } from 'react'
import Template from './templates/DashTemplate.tsx';
import styles from './sass/newuser.module.scss';

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
const [password,setPassword]=useState('')
const [role,setRole]=useState('');

const [uuid,setUuid]=useState('');
const [uname,setUname]=useState('');
const [uemail,setUemail]=useState('');
const [upassword,setUpassword]=useState('')
const [urole,setUrole]=useState('');

const [updateid,setUpdateid]=useState('')
const [sortby, setSortby]=useState('');

const [searchinp,setSearchinp]=useState('')

const [filteredusers, setFilteredUsers]=useState('');

const [users,setUsers]=useState([{
  uid:100,
  name:"Ayush Thapa",
  email:"emp@gmail.com",
  password:"Emp@12345",
  role:'hr',
},
{
  uid:101,
  name:"Ankit Thapa",
  email:"admin@gmail.com",
  password:"Admin@12345",
  role:'hr',
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
  name:"Aashish Thapa",
  email:"emp2@gmail.com",
  password:"Emp@12345",
  role:'employee',
},
{
  uid:104,
  name:"Aankit Thapa",
  email:"admin2@gmail.com",
  password:"Admin@12345",
  role:'employee',
},
{
  uid:105,
  name:"Eliza Thapa",
  email:"hr2@gmail.com",
  password:"Hr@12345",
  role:'hr',
},])



const updated = () => toast("User Updated Success!");
const added = () => toast("User Added Success!");
const deleted = () => toast("User Deleted Success!");



const Adduser=(e)=> {
  e.preventDefault();

  const newuser={
    uid,
    name,
    email,
    password,
    role,
  }
const newusers=users;
  newusers.push(newuser);
 
  let myJSON = JSON.stringify(newusers);
  localStorage.setItem("users",myJSON);

  const allusers=JSON.parse(localStorage.getItem('users'));
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
setUpassword(users[index].password);
setUrole(users[index].role);
    
}
}

const UpdateDetails=(e)=> {
  e.preventDefault();

  const newdet={
    uid:uuid,
    name:uname,
    email:uemail,
    password:upassword,
    role:urole,
  }
const newusers=[...users];
  newusers[updateid]=newdet;
 
  let myJSON = JSON.stringify(newusers);
  localStorage.setItem("users",myJSON);

  const allusers=JSON.parse(localStorage.getItem('users'));
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
  localStorage.setItem("users",myJSON);
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

  return (
   <Template>
<div className={styles.button}>
<Button variant="contained" endIcon={<AddIcon />} onClick={()=>{setShowform(true);setShowupdateform(false);}}>
  Add User
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
  <TextField  className={styles.input} label="Email" variant="outlined" size='small' type='email' helperText="Email must be unique for each user" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  <TextField className={styles.input} label="Password" variant="outlined" size='small' type='text' helperText="Passwor must contain Uppercase,lowercase,number,special character" value={password} onChange={(e)=>setPassword(e.target.value)}
  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-/']).{8,}$"
  required/>

  <TextField
          id="outlined-select-currency"
          select
          required
          label="User Role"
          className={styles.input}
          size='small'
          value={role}
          onChange={(e)=>{setRole(e.target.value)}}
          
        >
         
            <MenuItem  
            value="employee"
            >
              employee
            </MenuItem>
            <MenuItem  
            value="hr"
            >
            hr
            </MenuItem>
      
        </TextField><br/>


<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Add User
</Button>

<Button variant="outlined" className={styles.sbutton} onClick={()=>setShowform(false)}>
  Cancel
</Button>

  </form>
</div>}
    



{showupdateform &&<div className={styles.form}>
  <form onSubmit={UpdateDetails}>
  <TextField  className={styles.input} label="User Id" variant="outlined" size='small' type='text' value={uuid} onChange={(e)=>setUuid(e.target.value)} required/>
  <TextField className={styles.input} label="Name" variant="outlined" size='small' type='text' value={uname} onChange={(e)=>setUname(e.target.value)} required/>
  <TextField  className={styles.input} label="Email" variant="outlined" size='small' type='text' helperText="Email Must be unique for each user." value={uemail} onChange={(e)=>setUemail(e.target.value)} required/>
  <TextField className={styles.input} label="Password" variant="outlined" size='small' type='text' helperText="Passwor must contain Uppercase,lowercase,number,special character" value={upassword} onChange={(e)=>setUpassword(e.target.value)}  required/>

  <TextField
          id="outlined-select-currency"
          select
          required
          label="User Role"
          className={styles.input}
          size='small'
          value={urole}
          onChange={(e)=>{setUrole(e.target.value)}}
          
        >
         
            <MenuItem  
            value="employee"
            >
              employee
            </MenuItem>
            <MenuItem  
            value="hr"
            >
            hr
            </MenuItem>
      
        </TextField><br/>


<Button variant="contained" className={styles.sbutton} sx={{margin:"10px"}} type='submit'>
  Update User
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
    <th>Password</th>
    <th>Role <IconButton size='small' onClick={(e)=>sortUsers(users,"role")}><TbSortAscending2/></IconButton> <IconButton size='small' onClick={(e)=>ReversesortUsers(users,"role")}><TbSortDescending2/></IconButton></th>
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
<td>{user.password}</td>
<td>{user.role}</td>
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
