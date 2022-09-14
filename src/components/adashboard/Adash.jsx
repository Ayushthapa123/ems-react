import React from 'react'
import Loading from '../Loading'

// import { useRole } from '../contexts/Rolecontext';


import Template from './templates/DashTemplate.tsx';

export default function Adash() {

// const {currentrole, setCurrentrole}=useRole();

const role=localStorage.getItem('role');



  return (
    <div>

        
<Template>

{/* <Loading/> */}
</Template>


    </div>
  )

}