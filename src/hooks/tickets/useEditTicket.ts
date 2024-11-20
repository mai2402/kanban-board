import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTicket as editTicketApi } from "../../api/apiTickets";
import toast from "react-hot-toast";




export function useEditTicket (){
    const queryClient = useQueryClient();
    
    const {mutate: editTicket, isPending:isEditing}= useMutation({

            mutationFn: ({ticketId,editedTicketData }: { ticketId: string; editedTicketData: any })=>
                editTicketApi(ticketId,editedTicketData),  
            onSuccess :()=>{
                toast.success("ticket has been edited successfully")
                queryClient.invalidateQueries({
                    queryKey:["tickets"]
                })
        
            },
            onError:(err)=>{
                toast.error(err.message)
            }
            })
            
    return {editTicket,isEditing}

    };


