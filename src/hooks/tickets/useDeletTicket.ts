import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket as deleteTicketApi } from "../../api/apiTickets";
import toast from "react-hot-toast";





export function useDeleteTicket(){
    const queryClient = useQueryClient()

    const { mutate: deleteTicket} = useMutation({
        mutationFn: deleteTicketApi,
        onSuccess:()=>{
            toast.success("ticket has been deleted successfully"),
            queryClient.invalidateQueries({
                queryKey:["tickets"]
            })
        },
        onError:(err)=>toast(err.message)
    })
    
    return {deleteTicket}
  }