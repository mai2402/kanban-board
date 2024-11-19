import {Draggable} from "react-beautiful-dnd";
import {useDeleteTicket} from "../../hooks/tickets/useDeletTicket";
import {Ticket} from "../../types/Tickets";
import {Link} from "react-router-dom";
import {FaTrashAlt, FaEdit} from "react-icons/fa";

interface TicketCardProps {
    ticket : Ticket;
    index : number;
}

export default function TicketCard({ticket, index} : TicketCardProps) {
    const {id: ticketId} = ticket;
    const {deleteTicket} = useDeleteTicket();

    return (
        <Draggable draggableId={ticketId.toString()} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="bg-white rounded-lg shadow-md m-4 p-4 max-w-sm w-full border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                    {/* ticket header */}
                    <div className="flex justify-between w-full mb-4">
                        <span className="text-lg font-semibold text-gray-800">{ticket.title}</span>
                        <span className="text-sm text-gray-600">{ticket.age}
                            yo</span>
                    </div>

                    {/* ticket content */}
                    <div className="flex flex-row justify-between items-center">

                        <div className="flex flex-col items-start">
                            <div className="text-sm text-gray-600 text-center mb-4">{ticket.email}</div>
                            <div className="text-sm text-gray-600 text-center mb-4">{ticket.phone}</div>
                        </div>

                        <div className="flex flex-col items-end space-y-2">
                            <button
                                onClick={() => deleteTicket(ticketId)}
                                className="p-2 rounded border border-gray-400 text-gray-600 hover:text-red-500 hover:border-red-500 transition-all duration-300">
                                <FaTrashAlt size={18}/>
                            </button>

                            <Link
                                state={{
                                ticket
                            }}
                                to="/edit-ticket"
                                className="p-2 rounded border border-gray-400 text-gray-600 hover:text-green-500 hover:border-green-500 transition-all duration-300">
                                <FaEdit size={18}/>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
}
