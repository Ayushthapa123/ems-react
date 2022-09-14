import React from 'react'
import styles from './sass/employeecard.module.scss';

import {ImPhone} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';
import { IconButton } from '@mui/material';

export default function EmployeeCard(props) {
  return (
    <div className={styles.ecard}>

<div className={styles.logo}>
    <h2>Novelty Technology</h2>
{/* <img src='/logo.jpg' alt='logo'/> */}

</div>

<div className={styles.image}>
<img src='/employee.png' alt='photo'/>
</div>

<div className={styles.details}>
<h3>{props.name}</h3>
<h4>{props.role}</h4>
</div>

<div className={styles.phone}>
<div>
<IconButton><ImPhone/></IconButton><br/>
<span>{props.phone}</span>
</div>
<div>
<IconButton><MdEmail/></IconButton><br/>
<span>{props.email}</span>
</div>
</div>

<div className={styles.footer}>

</div>
    </div>
  )
}
