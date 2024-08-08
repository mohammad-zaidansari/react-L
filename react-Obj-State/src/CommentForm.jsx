import { useState } from "react"

export default function CommentForm() {

    let [ formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: ""
    })

    let handleInputChange = (event) => {
        setFormData((current) => {
           return {...current, [event.target.name] : event.target.value }
        })
    }

    let submit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remark: "",
            rating: "",
        })
    }

    return (
        <>
        <h1>Rating on Book MyShow</h1>
        <form action="">
            <label htmlFor="userName">Username</label><br />
            <input type="text" name="username" id="userName" placeholder="Enter username" value={formData.username} onChange={handleInputChange} /><br /><br />
            <label htmlFor="remark">Remark</label><br />
            <textarea name="remark" id="remark" placeholder="Remark" value={formData.remark} onChange={handleInputChange}>Remark</textarea><br /><br />
            <label htmlFor="rating">Rating</label> <br />
            <input type="number" name="rating" id="rating" min={1} max={10} placeholder="Rating" value={formData.rating} onChange={handleInputChange}/> <br /><br />
            <button onClick={submit}>Comment</button>
        </form>
        </>
    )
}