import React, { useState } from "react";
import './Lottery.css';
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let winingGame = winCondition(ticket)

    let buyTicket = () => {
        setTicket(genTicket(n))
    }
    
  
    return (
        <>
            <h1>Lottery Game!</h1>
            <div>
             <Ticket ticket={ticket}/>   
            </div> <br /><br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{winingGame && "Congratulation, you win the Match"}</h3>
        </>
    );
}
