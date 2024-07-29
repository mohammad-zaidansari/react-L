function handleHover() {
    console.log("Hover!!");
}

export default function Button(){
    return(
        <>
        <button onMouseOver={handleHover}>Hover Over me!!</button>
        </>
    )
}