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
        <label htmlFor="username">Full name</label>
        <input type="text" id="username" placeholder="Enter you name" value={val} onChange={update} /> <br />
        <button onClick={click}>Show in alert</button>
        </>
    )
}