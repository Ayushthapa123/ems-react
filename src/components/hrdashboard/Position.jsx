import React from 'react'
import Loading from '../Loading'

// import { useRole } from '../contexts/Rolecontext';


import Template from './templates/DashTemplate.tsx';

import styles from './sass/position.module.scss';

export default function Position() {

// const {currentrole, setCurrentrole}=useRole();

const role=localStorage.getItem('role');



  return (
    <div>

        
<Template>

<Loading/>
</Template>


    </div>
  )

}