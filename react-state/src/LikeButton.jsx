import { useState } from "react"

export default function LikeButton(){
   
    let [isLiked, setIsLiked] = useState(false); // initialization Line 

    let toggleLike = () => {
        setIsLiked(!isLiked);
    }

    let styles = { color: "red"}

    return(
        <>
        <p onClick={toggleLike}>
            {
                isLiked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart" style={styles}></i>
            }
        </p>
        </>
    )
}