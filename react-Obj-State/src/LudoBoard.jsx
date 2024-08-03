import { useState } from "react"

export default function LodoBoard(){
    let [ moves, setMoves ] = useState({blue: 0, yellow: 0, red: 0, green: 0});

    let updateBlue = () => {
        // console.log(moves.blue);
        // setMoves({...moves, blue: moves.blue += 1});  
        setMoves((preMoves) => {     
            // console.log(`moves.blue = ${moves.blue}`)                      
            return {...preMoves, blue: preMoves.blue + 1}
        })
    }
    let updateYello = () => { 
        setMoves((preMoves) => {     
                      
            return {...preMoves, yellow: preMoves.yellow + 1}
        })
    }
    let updateRed = () => { 
        setMoves((preMoves) => {     
                     
            return {...preMoves, red: preMoves.red + 1}
        })
    }
    let updateGreen = () => {
        setMoves((preMoves) => {     
            return {...preMoves, green: preMoves.green + 1}
        })
    }

    let randomNum = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    return(
        <>
        <p>Game Begins!</p>
        <div className="board">
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYello}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
        </div>
        </>
    )
}