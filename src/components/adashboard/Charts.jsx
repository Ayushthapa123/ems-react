import React from 'react'
import Loading from '../Loading'

import { PieChart, Pie, Tooltip, ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Legend } from 'recharts';
// import { useRole } from '../contexts/Rolecontext';

import styles from './sass/charts.module.scss';


import Template from './templates/DashTemplate.tsx';

export default function Adash() {

// const {currentrole, setCurrentrole}=useRole();

const role=localStorage.getItem('role');

const empdata=[
{
name:'Development',
value:55,
},
{
    name:"Design",
    value:35,
    },
{
    name:"Marketing",
    value:15,
},
{
    name:"Testing",
    value:35,
    },


]


  return (
    <div>

        
<Template>
<h2>Employee Distribution Chart</h2>

<div className={styles.charts}>
    
<div>
        <PieChart width={400} height={300} className={styles.pichart}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={empdata}
            
            outerRadius={80}
            fill="#8884d8"
            label
          />
         <Tooltip />
        </PieChart>
</div>   

<div>
<BarChart width={400} height={300} data={empdata}
margin={{
    top:5,
    right:30,
    left:20,
    bottom:5,
}}
barSize={20}
>
<XAxis dataKey="name" scale="point" padding={{left:18,right:10}} />
<YAxis/>
<Tooltip/>
<Legend/>
          <Bar dataKey="value" fill="#8884d8"  isAnimationActive={false} label/>

          
        </BarChart>
       
        
</div>  


</div>


</Template>


    </div>
  )

}