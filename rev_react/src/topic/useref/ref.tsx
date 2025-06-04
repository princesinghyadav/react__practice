// this is the logic of useref for timer 
import { useRef ,useState} from "react";

function Usereff(){
const [count,setCount]=useState(1)
const intervalref= useRef<any>(null)

function start (){
    if(intervalref.current !== null){
        return 
    }
    intervalref.current =setInterval( ()=>{

        setCount((prev:any) => {
       return   prev+1
    })
    },1000)
    
}
function stop (){
    
    clearInterval(intervalref.current)
    intervalref.current = null;
}
function reset (){
    
    stop()
    setCount(1)
}
    return(
        <>
        <h1> count {count}</h1>

        <div> 
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
        </>
        
    )
}
export default Usereff;