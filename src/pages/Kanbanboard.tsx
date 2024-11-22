
import { Link } from "react-router-dom";
import { useTickets } from "../hooks/tickets/useTickets";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { TicketColumn } from "../features/tickets/TicketColumn";
import  useUpdateTicketStatus from "../hooks/tickets/useUpdateTicketStatus";
import Modal from "../ui/Modal";
import TicketForm from "../features/tickets/TicketForm";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useModal from "../hooks/modal/useModal";
import { COLUMNS_STATUSES } from "../constants";

interface UpdateTicketStatusData {
    ticketId: string;
    newStatus: string;
}


function Kanbanboard() {

    const { tickets } = useTickets(); //fetch ticket data
    const {openModal,isModalOpen,closeModal}=useModal() // modal custom hook for open & close functionalities
  
    const{mutate:updateTicketStatus }= useUpdateTicketStatus()// mutate function for ticket status update
    const queryClient = useQueryClient(); // access query client 
    
 
      function handleDragEnd({over: targetColumn, active: draggedTicket}: DragEndEvent) {

      
      if (!(targetColumn?.id in COLUMNS_STATUSES)) {
        console.log("Column is outside valid drag area.");
        
        targetColumn.id = "unclaimed";
        
        return;
    }
        // targetColumn :column where the ticket will be dropped
        // darggedTicket : dragged ticket

        if (targetColumn?.id && draggedTicket.id) {

             // Update ticket status

        const ticketId = draggedTicket.id;
        const newStatus = targetColumn.id;

        const data ={
            ticketId,
            newStatus
        }
        // mutate function : send the data object to api function
        updateTicketStatus(data,{
           
            onSuccess:()=>{
                toast.success("ticket status has been updated successfully")
              queryClient.invalidateQueries({
                 queryKey:["tickets"]
            })},
            onError:(err)=>{
                            toast.error(err.message)
                         },
                         
        })
    }
        else  console.log("i am outside the droppable area") ;
       
    }

    return (
        <>
            <header className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
                <Link to="/" className="text-2xl font-bold">Kanban Board</Link>
                <button onClick={openModal} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
                    Create a New Ticket
                </button>
            </header>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create New Ticket">
        <TicketForm onClose={closeModal} />
      </Modal>

            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
                <div className="flex justify-between items-start gap-4 overflow-x-auto px-4">
                    {/* create a new array of filtered tickets based on their current status*/ }
                    {Object.keys(COLUMNS_STATUSES).map((columnStatus) => {
                        const filteredTickets = tickets?.filter(ticket => ticket.status === columnStatus);

                        return (
                            <TicketColumn
                                key={columnStatus}
                                title={COLUMNS_STATUSES[columnStatus]}
                                index={columnStatus}
                                count={filteredTickets?.length}
                                tickets={filteredTickets}
                            />
                        );
                    })}
                </div>
            </DndContext>
        </>
    );
}

export default Kanbanboard;
