import { useEffect, useState } from "react"

export default function CounterUseEffect() {
    let [count, setCount] = useState(0);

    let clickAdd = () => {
        setCount((currCount) => currCount + 1)
    }

    useEffect(function printSomething() {
        console.log("this is a side effect of useEffect")
    }, [])   

    return(
        <>
        <h2>Counter = {count}</h2>
        <button onClick={clickAdd}>+1</button>
        </>
    )
}