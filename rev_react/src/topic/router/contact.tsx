 import { useState, useEffect,useReducer } from "react"
import { Link } from "react-router-dom";

function Product (ele:any){
console.log(ele.valu.id)
const {id,brand,category,color}=ele.valu;
    return(   
//     return  <h1> Loading .....</h1>
//    }
//    if(error){
//    return  <h1>Sojmething went wrong ,...</h1>
//    }
        
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

export default function Contact (){
    //    const [data,setData]= useState([])
    //    const [loading,setLoading]=useState(false)
    //    const [error,setError]=useState(false)

        let initialstate :any ={
    loading:false,
    error:false,
    data:[]
   }
   const reducer =(state :any , action :any )=>{
     switch(action.type){

        case 'fetch_loading':{
            return {
           loading:true,
           error:false,
           data:[]
            }
           
        }
        case 'fetch_sucess':{
           return {
           loading:false,
           error:false,
           data:action.payload
            }  
        }
        case 'fetch_error':{
           return {
           loading:false,
           error:true,
           data:[]
            }  
        }
        default :{
            throw new Error("action type not matched...")
        }
     }

     

   }


  async  function  fetchdata (){

    try {
       dispatch({type:'fetch_loading'})
        let res=await fetch('https://fakestoreapi.in/api/products?limit=15')
    let finalres= await res.json();
    // console.log(finalres.products);
        //  setData(finalres.products)
          dispatch({type:'fetch_sucess' , payload:finalres.products})

    } catch (error) {
         dispatch({type:'fetch_error'})
        console.log('errors' ,error)
    }
   }

   useEffect( ()=>{
    fetchdata()
   },[])

//    if(loading){
//     return  <h1> Loading .....</h1>
//    }
//    if(error){
//    return  <h1>Sojmething went wrong ,...</h1>
//    }

  
const [state , dispatch]= useReducer(reducer,initialstate)
const {loading , error ,data}= state;
        return (
            <>

             <h1> Contact  Page ! with use reducer</h1>
        {
            loading ? (<h1>Loading ... </h1> ): 
            error ? (<h1> Something went wrong .</h1>)
            : (data.map((ele:any)  =>(
       
             <div key={ele.id} className="product">
                <Product valu={ele} />
             </div>  
            ))
           
         )}
        
            </>
       

    
    )
}