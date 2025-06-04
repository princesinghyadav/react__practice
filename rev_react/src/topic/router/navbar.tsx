import { Link ,NavLink} from "react-router-dom"


export default function Navbar(){

     

    return (
        <>
        <div style={{ backgroundColor:"teal", display:"flex", justifyContent:"space-around"
                   
        }}> 
          <Link to='/'>Home </Link>
          <Link to='/about'>About </Link>
          <Link to='/contact'>Contact </Link>
          <NavLink to='/admin'>Admin </NavLink>
          <NavLink to='/users'>Users</NavLink>
        </div>
        
        </>
   
    )
}