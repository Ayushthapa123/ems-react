import React, { useState } from 'react'




import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import DashboardIcon from '@mui/icons-material/Dashboard';





import { useNavigate,Link } from "react-router-dom";


import {FiLogOut} from 'react-icons/fi';
import {GiPerson} from 'react-icons/gi';
import {FaFileAlt} from 'react-icons/fa';

import {FaUserPlus} from 'react-icons/fa';
import {FaMoneyCheckAlt} from 'react-icons/fa';
import {GrStatusInfoSmall} from 'react-icons/gr';
import {BsFillPeopleFill} from 'react-icons/bs';

import styles from './sass/empleft.module.scss'




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

<Link to='/hr/dashboard'>
    <ListItemButton>
 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
   Dashboard
 
    </ListItemButton>
  
    </Link>


<Link to='/hr/dashboard/newemp'>
   
    <ListItemButton>
      <ListItemIcon>
        <FaUserPlus />
      </ListItemIcon>
     New Employee
    </ListItemButton>
  
    </Link>

    <Link to='/hr/dashboard/salary'>
   
   <ListItemButton>
     <ListItemIcon>
       <FaMoneyCheckAlt />
     </ListItemIcon>
    Salary
   </ListItemButton>
 
   </Link>


   {/* <Link to='/hr/dashboard/roles'>
   
   <ListItemButton>
     <ListItemIcon>
       <GiPerson />
     </ListItemIcon>
    <a>Roles</a>
   </ListItemButton>
 
   </Link>
    
  

   <Link to='/hr/dashboard/position'>
   
   <ListItemButton>
     <ListItemIcon>
       <GrStatusInfoSmall />
     </ListItemIcon>
    <a>Position</a>
   </ListItemButton>
 
   </Link> */}

   <Link to='/hr/dashboard/interns'>
   
   <ListItemButton>
     <ListItemIcon>
       <BsFillPeopleFill />
     </ListItemIcon>
    Interns
   </ListItemButton>
 
   </Link>

   <Link to='/hr/dashboard/leaveapp'>
   
   <ListItemButton>
     <ListItemIcon>
       <FaFileAlt />
     </ListItemIcon>
    Leave Applications
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

