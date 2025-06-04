import { createContext } from 'react'
import React from 'react'

export const Themecontext = React.createContext()





 export default function ThemecontextProvider (props:any){
 const [theme,setTheme]=React.useState('Light')

 const toggle= ()=>{
    setTheme(theme=== 'Light' ? "Dark" :"Light")
 }

    return (

        <Themecontext.Provider value={theme}>
            {props.children} 
        </Themecontext.Provider>
    ) 
    
}
