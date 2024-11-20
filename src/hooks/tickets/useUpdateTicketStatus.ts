import { useMutation } from "@tanstack/react-query";
import { editTicketStatus } from "../../api/apiTickets";



function useUpdateTicketStatus() {
    return useMutation({
        mutationFn:(data)=>{
           const {ticketId,newStatus}= data;
            return editTicketStatus(ticketId,newStatus)
        },
    });
};

export default useUpdateTicketStatus