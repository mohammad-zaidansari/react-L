function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submited!");
}


export default function Form(){
    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <button >Submit Form</button>
        </form>
        </>
    )
}