import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket as createTicketApi } from "../../api/apiTickets";
import toast from "react-hot-toast";



export function useCreateTicket (){
    const queryClient = useQueryClient();
    
    const {mutate: createTicket,isPending:isAdding }= useMutation({

            mutationFn:createTicketApi,  
            onSuccess :()=>{
                toast.success("ticket has been created successfully")
                // invalidate queries upon success to keep the state up to date
                queryClient.invalidateQueries({
                    queryKey:["tickets"]
                })
                
            },
            onError:(err)=>{
                toast.error(err.message)
            }
            })
            
    return {createTicket,isAdding}

}