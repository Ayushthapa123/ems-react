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
            <h1>Home Page</h1>
            <button onClick={handleClick}>Logout</button>
        </>
    )
}
export default Home;