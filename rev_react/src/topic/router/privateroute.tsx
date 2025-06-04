 import { Navigate } from "react-router-dom";
 


 

 export default function Privateroute({children} :any){
  const isLoggedIn= true;


 if (!isLoggedIn) {
  return <Navigate to="/admin" />
}

 return children 
}