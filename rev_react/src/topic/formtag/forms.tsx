 
 import { useState } from "react"
 
 
 
 export function Formtags(){
 
 const [formstate,setFormstate]=useState({
     title:'',
     isCompleted:false,
     assignedTo:''
 })
 const [arr,setArr]=useState([])
 
 function handleChange(event:any){
 
 
     //  console.log(event.target.value)
     //  console.log(event.target.name)
     // const name= event.target.name;
     const value= event.target.type === 'checkbox'  
                  ? event.target.checked 
                  :event.target.value ;
 
 
     const newState={
         ...formstate,
         [event.target.name]:value,
     }
     
     setFormstate(newState)
     console.log(formstate)
 
 }
 
 function handleSubmit(event :any ){
     event.preventDefault()
     // console.log("this is the data which i have to store ",formstate)
     let newData={
         ...formstate,
         id:Math.random()+Date.now(),
     }
 
     let updatedArr:any=[...arr,newData]
     setArr(updatedArr)
     console.log(arr)
     setFormstate({
          title:'',
     isCompleted:false,
     assignedTo:''
     })
 }
     return (
 <>
   <h1> this is a todolist creating form tag </h1>
      <br/>
      <form onSubmit={handleSubmit}>
          
         <input   placeholder="Enter the Tasks" 
         id="Tasks" 
         name="title"
         value={formstate.title} 
         onChange={handleChange}/>
           
     <br/>
 
         <label htmlFor="completed">Tasks :-
           <input type="checkbox" 
            id="completed" 
            name="isCompleted"
            checked={formstate.isCompleted} 
            onChange={handleChange}/>
 
          </label>
 
     <br/>
 
         <select onChange={handleChange}
         value={formstate.assignedTo} 
         name="assignedTo">
             <option value=''>Assign Task to </option>
             <option value='akbar'>Akbar</option>
             <option value='amar'> Amar</option>
             <option value='anthony'>Anthony</option>
             <option value='akhilesh'>Akhilesh</option>
         </select>
          
     <br/>
 <button type="submit" >Submitt</button>
     </form>
 
 
 
     {arr.map((ele:any)=>(
     
 
        <div key={ele.id}>  
         <h1>Id : {ele.id}</h1>
         <h2> Title : {ele.title}</h2>
         <h2> Name : {ele.assignedTo}</h2>
 
        </div>
     ))}
 </>
       
     )
 }
 
 