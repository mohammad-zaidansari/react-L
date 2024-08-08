import TicketNum from "./TicketNum";
import './Ticket.css'

export default function Ticket({ ticket }){
    return(
        <>
        <h3>Lottary Ticket</h3>
        <div className="ticket">
            
        {
            ticket.map((num, index) => (
                <TicketNum num={num} key={index}/>
            ))
        }
        </div>
        </>
    )
}  