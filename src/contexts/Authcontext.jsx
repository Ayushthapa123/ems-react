import React, { useContext, useState, useEffect } from "react"
import {auth} from '../firebase/firebase';



const AuthContext = React.createContext();


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    
    return auth.signInWithEmailAndPassword(email, password)
   
  }

  async function logout() {
    setLoading(true)
    try {
      await auth.signOut();
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
    
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }


function updateUser() {

}


  useEffect(() => {

  const unsubscribe = auth.onAuthStateChanged(user => {
  setCurrentUser(user);
  //think before placing state changer inside useeffect hook
   setLoading(false);
    })

    return unsubscribe;

  },[])


  const value = {
    currentUser,
    setCurrentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}