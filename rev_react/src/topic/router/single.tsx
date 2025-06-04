 import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Single  (){
const [data,setData] :any =useState([])
//   const {  brand, category , discount,model, price ,title,description} :any =data
   const idd= useParams()
// console.log("idd",idd.id)
      async  function Fetch (idd:any){
        
        try {
           let response=  await fetch(`https://fakestoreapi.in/api/products/${idd}`)
            let finalres= await response.json()
              
            console.log(finalres)
            
             setData(finalres.product)

        } catch (error) {
         console.log(error)   
        }
      }

useEffect( ()=>{
    Fetch(idd.id)
},[idd])
    return (
        <>
         <div> 
            <img src={data.image} alt={data.brand} className="imh"/>
             <h2> Title :- {data.title}</h2>
          <h1> Brands  :- {data.brand}</h1>
          <h2> Descriptions :- {data.description}</h2>
          <h2> Category : - {data.category}</h2>
          <h2> Discount :- {data.discount}</h2>
          <h2> Model :{data.model}</h2>
          <h2> Price : ${data.price}</h2>
         

         </div>
        </>
    )
}