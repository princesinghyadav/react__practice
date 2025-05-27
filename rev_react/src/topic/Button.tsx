import { useState } from "react";




export default function  Butto(props){
//  const [count,setCount]=useState(1);



    return (
        // <button onClick={handleClick}>count : {count}</button>
        <>
        {/* <h1>{props.count}</h1>
         <button onClick={() => props.incrementByValue(1)}>INC BY 1</button>
      <button onClick={() => props.incrementByValue(5)}>INC BY 5</button>
      <button onClick={() => props.incrementByValue(8)}>INC BY 8</button>
      <button onClick={() => props.incrementByValue(10)}>INC BY 10</button> */}


      <button onClick={props.increment}>INCREMENT</button>;
        </>
    )
}