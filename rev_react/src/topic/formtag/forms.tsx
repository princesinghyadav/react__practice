// in this we ate gonna make todo list and store it in a array 

import { useState } from "react"



export function Formtag(){

const [formstate,setFormstate]=useState({
    title:'',
    completed:'',
    assignedTo:''
})

function handleChange(event){


     console.log(event.target.value)
}
    return (
<>
  <h1> this is a todolist creating form tag </h1>
     <br/>
         
         <input type="string" placeholder="Enter the Tasks" id="Tasks" name="title"
          value={formstate.title} onChange={handleChange}/>
          
    <br/>

          <label htmlFor="completed">Tasks :-
         <input type="checkbox"  id="completed" name="isCompleted"
          value={formstate.completed} onChange={handleChange}/>
         </label>

    <br/>

        <select onChange={handleChange}>
            <option value='akbar'>Akbar</option>
            <option value='amar'> Amar</option>
            <option value='anthony'>Anthony</option>
            <option value='akhilesh'>Akhilesh</option>
        </select>
         
    <br/>


</>
      
    )
}

