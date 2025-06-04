import { createContext } from 'react'
import React from 'react'

export const Authcontext = React.createContext()



  export default  function AuthcontextProvider(props:any){
        const [login,setLogin]=React.useState(false)
        
        function toggle(){
            setLogin(!login)
            // console.log(login)
        }
        let con={
            login,
            toggle
        }

    return (
           <Authcontext.Provider value={con}>
            {props.children} 
        </Authcontext.Provider>
    )
  }