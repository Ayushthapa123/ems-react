
import React, { useContext, useState, useEffect } from "react"


const RoleContext = React.createContext();


export function useRole() {
  return useContext(RoleContext)
}

export function RoleProvider({ children }) {

  const [currentrole, setCurrentrole] = useState('hello');
  const [loading, setLoading] = useState(false);



  const value = {
    currentrole,
    setCurrentrole,

  }

  return (
    <RoleContext.Provider value={value}>
      {!loading && children}
    </RoleContext.Provider>
  )
}