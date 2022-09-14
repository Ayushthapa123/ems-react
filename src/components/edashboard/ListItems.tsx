import React, { useState } from 'react'




import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar } from '@mui/material';











import { useNavigate,Link } from "react-router-dom";



import {BsFillBootstrapFill} from 'react-icons/bs';
import {FaAddressBook} from 'react-icons/fa';
import {GrUpdate} from 'react-icons/gr';
import {HiSpeakerphone} from 'react-icons/hi';
import {FiLogOut} from 'react-icons/fi';
import {MdRateReview} from 'react-icons/md';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaUniversity} from 'react-icons/fa';
import {GiPerson} from 'react-icons/gi';
import {GoBriefcase} from 'react-icons/go';
import {FaFileAlt} from 'react-icons/fa';

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

<Link to='/em/dashboard'>
    <ListItemButton>
 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
   Dashboard
 
    </ListItemButton>
  
    </Link>


<Link to='/em/dashboard/pinfo'>
   
    <ListItemButton>
      <ListItemIcon>
        <BsFillPersonLinesFill />
      </ListItemIcon>
     Personal Info
    </ListItemButton>
  
    </Link>

    <Link to='/em/dashboard/education'>
   
   <ListItemButton>
     <ListItemIcon>
       <FaUniversity />
     </ListItemIcon>
    Education
   </ListItemButton>
 
   </Link>


   {/* <Link to='/em/dashboard/dependents'>
   
   <ListItemButton>
     <ListItemIcon>
       <GiPerson />
     </ListItemIcon>
    <a>Dependents</a>
   </ListItemButton>
 
   </Link> */}
    
  

   <Link to='/em/dashboard/wexp'>
   
   <ListItemButton>
     <ListItemIcon>
       <GoBriefcase />
     </ListItemIcon>
    Work Experience
   </ListItemButton>
 
   </Link>

   <Link to='/em/dashboard/leaveapp'>
   
   <ListItemButton>
     <ListItemIcon>
       <FaFileAlt />
     </ListItemIcon>
    Leave Application
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

