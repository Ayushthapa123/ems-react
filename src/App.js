import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';



import Empdash from './components/edashboard/Empdash';
import Pinfo from './components/edashboard/Pinfo';
import Education from './components/edashboard/Education';
import Dependents from './components/edashboard/Dependents';
import Wexp from './components/edashboard/Wexp';
import Leaveapp from './components/edashboard/Leaveapp';


import Adash from './components/adashboard/Adash';
import Newuser from './components/adashboard/Newuser';
import Departments from './components/adashboard/Departments';
import Roles from './components/adashboard/Roles';
import Position from './components/adashboard/Position';
import Projects from './components/adashboard/Projects';
import Charts from './components/adashboard/Charts';
import Employees from './components/adashboard/Employees';



import Hrdash from './components/hrdashboard/Hrdash';
import Newemp from './components/hrdashboard/Newemp';
import Salary from './components/hrdashboard/Salary';
import Rolesh from './components/hrdashboard/Roles';
import Positionh from './components/hrdashboard/Position';
import Interns from './components/hrdashboard/Interns';
import Leaveapph from './components/hrdashboard/Leaveapp'

import {RoleProvider} from './contexts/Rolecontext'

function App() {


  const role=localStorage.getItem('role');
  


  return (
    <div className="App">
    
<RoleProvider>
    <BrowserRouter>
      <Routes>
      {/* <Route path="*" element={<PageNotFound/>} /> */}
        <Route path="/" element={<Login />}/>
        </Routes>
{role=="employee" &&<Routes>
        <Route path="/em/dashboard" element={<Empdash />}/>
        <Route path="/em/dashboard/pinfo" element={<Pinfo />}/>
        <Route path="/em/dashboard/education" element={<Education />}/>
        <Route path="/em/dashboard/dependents" element={<Dependents />}/>
        <Route path="/em/dashboard/wexp" element={<Wexp />}/>
        <Route path="/em/dashboard/leaveapp" element={<Leaveapp />}/>
  
      
</Routes>}


{role=="admin" &&<Routes>
        <Route path="/ad/dashboard" element={<Adash />}/>
        <Route path="/ad/dashboard/newuser" element={<Newuser />}/>
        <Route path="/ad/dashboard/departments" element={<Departments />}/>
        <Route path="/ad/dashboard/roles" element={<Roles />}/>
        <Route path="/ad/dashboard/position" element={<Position />}/>
        <Route path="/ad/dashboard/projects" element={<Projects />}/>
        <Route path="/ad/dashboard/employees" element={<Employees />}/>
        <Route path="/ad/dashboard/charts" element={<Charts />}/>
  
      
</Routes>}


{role=="hr" &&<Routes>
        <Route path="/hr/dashboard" element={<Hrdash />}/>
        <Route path="/hr/dashboard/newemp" element={<Newemp />}/>
        <Route path="/hr/dashboard/salary" element={<Salary />}/>
        <Route path="/hr/dashboard/roles" element={<Rolesh />}/>
        <Route path="/hr/dashboard/position" element={<Positionh />}/>
        <Route path="/hr/dashboard/interns" element={<Interns />}/>
        <Route path="/hr/dashboard/leaveapp" element={<Leaveapph />}/>
  
      
</Routes>}


    </BrowserRouter>
</RoleProvider>

    </div>
  );
}

export default App;
