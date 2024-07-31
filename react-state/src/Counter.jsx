import { useState } from "react"

function init(){
    console.log("init function render")
   return Math.random();
}

export default function Counter(){
    
    let [count, setCount] = useState(init);
    console.log("Component was rendered")
    let incCount = () => {
        // setCount(count + 2);
         setCount((currCount) => {
            return currCount + 1;
        });
    }
    return(
        <>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </>
    )
}