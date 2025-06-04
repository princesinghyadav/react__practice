import { Routes ,Route} from 'react-router-dom'
import Home from './home.js'
import Contact from './contact.js'
import Users from './users.js'
import Admin from './admin.jsx'
import About from './about.js'
import Notfound from './notfound.js'
import Privateroute from './privateroute.tsx'
import Single from './single.tsx'




  function Routess (){

 



    return (
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/users' element={
        <Privateroute>
                      <Users/>
        </Privateroute>
        }/>
       <Route path='/users/:id' element={
        <Privateroute>
                      <Single/>
        </Privateroute>
        }/>
       
    
      <Route path='*'   element={<Notfound/>} /> 
      </Routes>
    )
}

export default Routess