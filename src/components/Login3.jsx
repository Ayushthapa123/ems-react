

import React, { useRef, useState } from "react";
import { useAuth } from '../contexts/Authcontext';

import {ImCross} from 'react-icons/im'


export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login} = useAuth();
    // const { currentUser} = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  

async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          setError('Thanks for login Login Successful')
    
        } catch {
          setError("Failed to log in")
       
        }
    
        setLoading(false)
      }



     




    return (
        <section className='login' id='hlogin'>
          <div className='cross' ></div>
          <div className='header'>
            <h1>Please Log In First</h1>
            </div>
        <form onSubmit={handleSubmit} className='form'>
          <span className='error'>{error}</span> <br/>
          <div>
        <input type='email' ref={emailRef} required /><br/>
        </div>
        <div>
        <input type='password' ref={passwordRef} required/><br/>
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
    </form>
   
        </section>
    )
}
