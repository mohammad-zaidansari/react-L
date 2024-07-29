function doSomething(){
    console.log("Button was clicked!");
}

export default function HoverButton(){
    return(
        <>
        <button onClick={doSomething}>Click Me!</button>
        </>
    )
}