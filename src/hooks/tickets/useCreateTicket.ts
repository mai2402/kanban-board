import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket as createTicketApi } from "../../api/apiTickets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function useCreateTicket (){
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const {mutate: createTicket,isPending:isAdding }= useMutation({

            mutationFn:createTicketApi,  
            onSuccess :()=>{
                toast.success("ticket has been created successfully")
                queryClient.invalidateQueries({
                    queryKey:["tickets"]
                })
                 navigate(-1)
            },
            onError:(err)=>{
                toast.error(err.message)
            }
            })
            
    return {createTicket,isAdding}

}