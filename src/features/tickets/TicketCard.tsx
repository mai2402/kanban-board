import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Ticket } from "../../types/Tickets";
import { useDeleteTicket } from "../../hooks/tickets/useDeletTicket";
import { useSortable } from '@dnd-kit/sortable';
import Modal from "../../ui/Modal";
import EditTicketForm from "./EditTicketForm";
import useModal from "../../hooks/modal/useModal";

interface TicketCardProps {
    ticket: Ticket;
    index: string;
}

export default function TicketCard({ ticket, index }: TicketCardProps) {
    const { id: ticketId } = ticket;
    const { deleteTicket } = useDeleteTicket();
    const { openModal, isModalOpen, closeModal } = useModal();

   //dnd-kit hook to make the card a draggable component
    const { attributes, listeners, setNodeRef, isDragging } = useSortable({
        id: ticketId.toString(),
    });

    return (
        <>
            <div
                ref={setNodeRef} // reference to the DOM that will be dragged
                style={{
                    opacity: isDragging ? 0.5 : 1,
                }}
                className="bg-white rounded-lg shadow-md m-4 p-4 max-w-sm w-full border border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
                {/* Draggable Area */}
                <div
                // enabling drag functionality across the component
                    {...listeners} 
                    {...attributes}
                    className="cursor-move bg-gray-100 p-2 rounded-t-md"
                    style={{
                        cursor: isDragging ? "grabbing" : "grab", 
                    }}
                >
                    <div className="flex flex-row justify-between items-center overflow-hidden">
                    <span className="text-lg font-semibold text-gray-800">{ticket.title}</span>
                    <span className="text-sm font-sm text-gray-800">
                        {ticket.age} yo
                    </span>
                    </div>
                </div>
                
                {/* Card Content */}
     <div className="grid grid-cols-[1fr_auto] items-center gap-4 mt-4">
                     {/* Left Column: Email and Phone */}
              <div className="flex flex-col items-start overflow-hidden">
                      <div
                            className="text-sm text-gray-600  mb-4 truncate w-48"
                            title={ticket.email} /* Tooltip for full text */
                        >
                              {ticket.email}
                        </div>
                      <div
                         className="text-sm text-gray-600  mb-4 truncate w-48"
                           title={ticket.phone} /* Tooltip for full text */
                         >
                              {ticket.phone}
                        </div>
              </div>

                        {/* Right Column: Buttons */}
                       <div className="flex flex-col items-end space-y-2">
                             <button
                                         onClick={() => deleteTicket(ticketId)}
                                         className="p-2 rounded border border-gray-400 text-gray-600 hover:text-red-500 hover:border-red-500 transition-all duration-300"
                              >
                                  <FaTrashAlt size={18} />
                              </button>
                               <button
                                          onClick={openModal}
                                          className="p-2 rounded border border-gray-400 text-gray-600 hover:text-green-500 hover:border-green-500 transition-all duration-300"
                                  >
                                       <FaEdit size={18} />
                                 </button>
                       </div>
                  </div>

                </div>
        

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={`Edit Ticket #${ticketId}`}>
                <EditTicketForm onClose={closeModal} ticket={ticket} />
            </Modal>
        </>
    );
}
