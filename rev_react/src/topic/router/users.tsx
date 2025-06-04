import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Product (ele:any){
console.log(ele.valu.id)
const {id,brand,category,color}=ele.valu;
    return(
        
            <>
                <div>
                <h1>  Id :- {id}</h1>
                <h2>Brand :- {brand}</h2>
                <h3> Category :-{category}</h3>
                <h3> Color :- {color} </h3>
             </div>
             <Link to={`/users/${id}`}>click to see full detail ..</Link>
            </>
    )
}

export default function Users (){
       const [data,setData]= useState([])
       const [loading,setLoading]=useState(false)
       const [error,setError]=useState(false)



  async  function  fetchdata (){

    try {
        setLoading(true)
        let res=await fetch('https://fakestoreapi.in/api/products?limit=15')
    let finalres= await res.json();
    console.log(finalres.products);
         setData(finalres.products)
         setLoading(false)

    } catch (error) {
        setLoading(false)
        setError(true)
        console.log('errors' ,error)
    }
   }

   useEffect( ()=>{
    fetchdata()
   },[])

   if(loading){
    return  <h1> Loading .....</h1>
   }
   if(error){
   return  <h1>Sojmething went wrong ,...</h1>
   }
        return (
            <>
             <h1> Users  Page !</h1>
        {
            data.map((ele:any)  =>(
       
             <div key={ele.id} className="product">
                <Product valu={ele} />
             </div>  
            ))
           
        }
        
            </>
       

    
    )
}