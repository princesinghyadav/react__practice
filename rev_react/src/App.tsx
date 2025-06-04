 
import './App.css'
// import Stateup from './topic/stateupdate'
  
//  import { Formtags } from './topic/formtag/forms'
// import Usereff from './topic/useref/ref'
// import Light from './topic/context/lightcontex'
//  import Routess from './topic/router/allroutes'
// import Routess from './topic/router/allroutes'
// import Navbar from   './topic/router/navbar'
// import Formreducer from './topic/formtag/formusereducer'
import Crud from './topic/axios/axioscrud'



function App() {
   

  return (
    <>
       <h1>Hello Developers!</h1>
      {/* <Stateup  />  this function refers to state management */}
  {/* <Formtags/> this function refers to formtag concept  */}
      {/* <Usereff/> this function refers to use of useref  */}
       
 {/* <Light/> this function refers to the auth, light context function of context api  */}
   {/* <Navbar/>
  <Routess/>  this both function refers to learning of react-router-dom where we have implemnted the feature of routing, single page , 
    and laso inside that ia hve implemnted many function of useReducer in fetching and with normol counter app.
    in userpage i hve implemented fetching and in contact page fetching with useReducer */}
     
      {/* <Formreducer/>  this function refers to a page where you learn a how to get value or store in a nested object from deeps forms using use reducer and store in hooks of usereducer instead of use state.*/}
      <Crud/>
    


    </>
  )
}

export default App
