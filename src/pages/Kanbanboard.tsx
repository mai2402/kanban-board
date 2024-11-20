
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


function Kanbanboard() {

    const { tickets } = useTickets();
    const {openModal,isModalOpen,closeModal}=useModal()
  
    const{mutate:updateTicketStatus }= useUpdateTicketStatus()
    const queryClient = useQueryClient();
    

    const COLUMNS_STATUSES: { [key: string]: string } = {
        unclaimed: "Unclaimed",
        firstContact: "First Contact",
        preparing: "Preparing Work Offer",
        sent: "Sent to Therapist"
    };


 
      function handleDragEnd({over: targetColumn, active: draggedTicket}: DragEndEvent) {
        
        if (targetColumn?.id && draggedTicket.id) {
             // Update ticket status
        const ticketId = draggedTicket.id;
        const newStatus = targetColumn.id;
        const data ={
            ticketId,
            newStatus
        }
        
        updateTicketStatus(data,{
            onSuccess:()=>{
                toast.success("ticket status has been updated successfully")
              queryClient.invalidateQueries({
                 queryKey:["tickets"]
            })},
            onError:(err)=>{
                            toast.error(err.message)
                         }
        })
    }
        else return ;
       
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
