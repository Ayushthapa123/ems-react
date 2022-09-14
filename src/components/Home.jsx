import React from "react";


import { useRole } from '../contexts/Rolecontext';

function Home() {

    const { currentrole, setCurrentrole} = useRole();

    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }

console.log('role from home',currentrole);

    return (
        <>
        <div style={{textAlign:"center"}}>
            <h1>Home Page</h1>
            <h3>Nothing Here</h3>
            <button onClick={handleClick}>Logout</button>
            </div>

        </>
    )
}
export default Home;