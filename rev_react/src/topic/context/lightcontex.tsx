import React from "react";
import { useContext } from "react";
// import { Themecontext } from "../../main";
// import { Authcontext } from "../../main";
import { Themecontext } from "../../contextt/lightcontex";
import { Authcontext } from "../../contextt/Authcontext";




export default function Light(){
const valu :any  = React.useContext(Themecontext)
const Auth:any = React.useContext(Authcontext)

console.log(Auth)
console.log(valu)
console.log("d")
    return (
        <>
         <h1>  current Theme {valu}   </h1>

         <h1>this is authcontex provider example </h1>
         <h2> isUserLogin :{Auth.login ? 'Yes ': "No"}</h2>
         <button onClick={Auth.toggle}> Toggle</button>
        </>
   
    )
}