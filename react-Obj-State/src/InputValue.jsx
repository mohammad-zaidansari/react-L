import { useState } from "react"

export default function InputValue () {
    let [ val , setVal] = useState("hello there!");

    let click = () => {
        alert(val);
        setVal("");
    }

    let update = (event) => {
        setVal(event.target.value);
    }

    return(
        <>
        <h4>Input Value</h4>
        <input type="text" placeholder="Enter you name" value={val} onChange={update} /> <br />
        <button onClick={click}>Show in alert</button>
        </>
    )
}