import React from 'react'
import Loading from '../Loading'

import EmployeeCard from '../EmployeeCard';

// import { useRole } from '../contexts/Rolecontext';


import Template from './templates/DashTemplate.tsx';

import styles from './sass/employees.module.scss';



export default function Adash() {

// const {currentrole, setCurrentrole}=useRole();

const role=localStorage.getItem('role');



  return (
    <div>

        
<Template>
<div className={styles.econtainer}>
<EmployeeCard name='Ayush Thapa' role="FrontEnd Developer" phone={9846793894} email='thapaayush@gmail.com' photo='/employee.png'/>
<EmployeeCard name='Rabin Sharma' role="Full-Stack Developer" phone={9846733488} email='rabin@gmail.com' photo='/employee.png'/>
<EmployeeCard name='Eliza Thapa' role="UI/UX Designer" phone={9846743535} email='elizathapa@gmail.com' photo='/employee.png'/>
<EmployeeCard name='Ankit Rai' role="FrontEnd Developer" phone={984675353} email='ankitrai@gmail.com' photo='/employee.png'/>
<EmployeeCard name='Lila Thapa' role="QA Engineer" phone={984675352} email='lilathapa12@gmail.com' photo='/employee.png'/>



</div>
</Template>


    </div>
  )

}