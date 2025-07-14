import { useEffect, useState } from "react";

function Test(){
    const [timer,setTimer]=useState(0)
    const [counter,setCount]=useState(0)
    useEffect(()=>{
           console.log("Inside useEffect")
        },[counter])
    return(
       <>
        <h1>Hello</h1>
        <button onClick={()=>
            setTimer(timer+1)
        }>Update Timer:{timer}</button>
        <button onClick={()=>
            setCount(counter+1)
        }>Update counter:{counter}</button>
       </>
    )
}
export default Test;