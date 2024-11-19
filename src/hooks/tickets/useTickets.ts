import { Ticket } from '../../types/Tickets';
import { getTickets } from '../../api/apiTickets';
import { useQuery } from '@tanstack/react-query';





export function useTickets(){

  const {data:tickets,isLoading,error} = useQuery<Ticket[]>({
    queryKey : ['tickets'],
    queryFn: getTickets

  })
  return {tickets,isLoading,error}
}