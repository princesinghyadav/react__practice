import { useState } from "react";
import Butto from "./Button";
import Child1 from "./child2";
import Child3 from "./child3";


export default function Stateup(){

const [count ,setCount]=useState(1);

//  const handleClick=()=> {
//     setCount(count+1)
//  }

//    const incrementByValue = (val) => {
//     setCount(count + val);
//   };

 const increment = () => {
    setCount(count + 1);
    console.log(count)
    // setCount(count+10)
    //   setCount(count+10)
    //     setCount(count+10)
    //       setCount(count+10)
    setCount((pre)=> pre+10)
      setCount((pre)=> pre+10)
        setCount((pre)=> pre+10)
          setCount((pre)=> pre+10)
  };
    return (
        <>
        {/* <Butto count ={count} handleClick={handleClick}/>
        <Butto  count ={count} handleClick={handleClick}/>
        <Butto  count ={count} handleClick={handleClick}/>
        <Butto  count ={count} handleClick={handleClick}/> */}
      <h1>Hey Developers! </h1>  
        <div>
      <Butto count={count} increment={increment} />
      <Child1  count={count}/>
      <Child3  count={count}/>

    </div>
        </>
    )
}