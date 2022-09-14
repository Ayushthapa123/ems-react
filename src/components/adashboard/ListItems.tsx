import React, { useState } from 'react'




import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InsertChartIcon from '@mui/icons-material/InsertChart';

import DashboardIcon from '@mui/icons-material/Dashboard';




import { useNavigate,Link } from "react-router-dom";



import {FiLogOut} from 'react-icons/fi';
import {HiUsers} from 'react-icons/hi';

import {GiPerson} from 'react-icons/gi';


import {FaUserPlus} from 'react-icons/fa';
import {FcDepartment} from 'react-icons/fc';
import {GrStatusDisabledSmall} from 'react-icons/gr';
import {GrProjects} from 'react-icons/gr';

import styles from './sass/aleft.module.scss'




export default function MainListItems() {

  const [error,setError]=useState('')
  const navigate = useNavigate();


  async function handleLogout() {
    localStorage.removeItem('role');
    localStorage.removeItem('emailData');
    localStorage.removeItem('passwordData');

    // window.location.reload();
    navigate('/');
    window.location.reload();

    }





    function stringAvatar(name: string) {
      return {
        sx: {
          bgcolor:"royalblue",
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }


    return(

  <React.Fragment>
<div className={styles.empleft}>


{/* <h3><Avatar {...stringAvatar('Ayush Thapa')} /></h3> */}

<Link to='/ad/dashboard'>
    <ListItemButton>
 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
   Dashboard
 
    </ListItemButton>
  
    </Link>


<Link to='/ad/dashboard/newuser'>
   
    <ListItemButton>
      <ListItemIcon>
        <FaUserPlus />
      </ListItemIcon>
     New User
    </ListItemButton>
  
    </Link>

    <Link to='/ad/dashboard/departments'>
   
   <ListItemButton>
     <ListItemIcon>
       <FcDepartment />
     </ListItemIcon>
    Departments
   </ListItemButton>
 
   </Link>


   {/* <Link to='/ad/dashboard/roles'>
   
   <ListItemButton>
     <ListItemIcon>
       <GiPerson />
     </ListItemIcon>
    <a href='#'>Roles</a>
   </ListItemButton>
 
   </Link> */}
    
  

   {/* <Link to='/ad/dashboard/position'>
   
   <ListItemButton>
     <ListItemIcon>
       <GrStatusDisabledSmall/>
     </ListItemIcon>
    <a href='#'>Position</a>
   </ListItemButton>
 
   </Link> */}

   <Link to='/ad/dashboard/projects'>
   
   <ListItemButton>
     <ListItemIcon>
       <GrProjects/>
     </ListItemIcon>
    Projects
   </ListItemButton>
 
   </Link>

   <Link to='/ad/dashboard/employees'>
   
   <ListItemButton>
     <ListItemIcon>
       <HiUsers/>
     </ListItemIcon>
    Employees
   </ListItemButton>
 
   </Link>

   <Link to='/ad/dashboard/charts'>
   
   <ListItemButton>
     <ListItemIcon>
       <InsertChartIcon/>
     </ListItemIcon>
    Charts
   </ListItemButton>
 
   </Link>
 
    <ListItemButton>
      <ListItemIcon>
        <FiLogOut />
      </ListItemIcon>
     <a  onClick={handleLogout} href='#'>Logout</a>
    </ListItemButton>
 

    </div>
   
  </React.Fragment>
);
  }

