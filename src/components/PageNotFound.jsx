import React,{useEffect} from 'react'


import styles from './sass/notfound.module.scss'


import { useNavigate } from 'react-router-dom';

export default function Notfound() {


    const navigate=useNavigate();


useEffect(() => {
   setTimeout(()=> {
    navigate('/');
   },3000)
 
}, [])


    return (
        <div className={styles.notfound}>
            <div>
            <h3>Page Not Found</h3>
            <p>Go to <a href='/'>home page</a></p>

            </div>
        </div>
    )
}