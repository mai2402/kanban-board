import {Link} from "react-router-dom";
import TicketCard from "../features/tickets/TicketCard";
import TicketColumn from "../features/tickets/TicketColumn";
import {useTickets} from "../hooks/tickets/useTickets";
import {Ticket} from "../types/Tickets";
import {DragDropContext} from "react-beautiful-dnd";

function Kanbanboard() {
    const {tickets} = useTickets();

    const COLUMNS_STATUSES : {
        [key : string] : string
    } = {
        unclaimed: "Unclaimed",
        firstContact: "First Contact",
        preparing: "Preparing Work Offer",
        sent: "Sent to Therapist"
    };

    function handleOnDragEnd(result : any) {}

    return (
        <>
          <header className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
                
                <Link to="/" className="text-2xl font-bold">Kanban Board</Link>
               
                <Link
                    to="/new-ticket"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
                >
                    Create a New Ticket
                </Link>
            </header>
          <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex justify-between items-start gap-4 overflow-x-auto px-4">
              {Object.keys(COLUMNS_STATUSES).map((columnStatus, index) => {
                // Filter the tickets by column status
                const filteredTickets = tickets?.filter((ticket) => ticket.status === columnStatus);
      
                return (
                    <div className="flex flex-row items-center">

                  <TicketColumn
                    count ={filteredTickets?.length}
                    key={columnStatus}
                    index={index}
                    title={COLUMNS_STATUSES[columnStatus]}>
                    {/* Map through filtered tickets to display them */}
                    {filteredTickets?.map((ticket: Ticket) => (
                      <TicketCard key={ticket.id} index={index} ticket={ticket} />
                    ))}
                  </TicketColumn>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        </>
      );
    }

    export default Kanbanboard;