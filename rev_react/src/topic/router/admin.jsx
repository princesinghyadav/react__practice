import { useReducer } from "react"


// this is the page which use usereducer for their functions. 

function reducer (state,action){
    switch(action.type){

        case 'increase':{
            return  state + action.payload;
            
            
        }
        case 'decrease':{
            return  state -action.payload ;
               
            
        }
         default :{
          return state 
        }
    }
}


export default function Admin (){


     const [count, dispatch ]= useReducer(reducer, 10)
    function  handleinc(val){
            dispatch({
                type:'increase',
                payload:val,
            })
        }
        function handledec(val){
            dispatch({
                type:'decrease',
                payload:val,
            })
        }
    return (
        <>
          <h1> this page is going to explain useReducer </h1>
        <h2> count {count }</h2>
        <button onClick={()=>handleinc(1)}>1</button>
        <button onClick={()=>handledec(1)}>-1</button>
        <button onClick={()=>handledec(10)}>-10</button>
        <button onClick={()=>handleinc(10)}>10</button>

        </>
      
    )
}