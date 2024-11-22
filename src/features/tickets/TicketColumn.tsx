import { useDroppable } from '@dnd-kit/core';  
import { Ticket } from '../../types/Tickets';
import TicketCard from './TicketCard';

interface TicketColumnProps {
    title: string;
    index: string;
    count: number | undefined;
    tickets: Ticket[] | undefined;  
}

export function TicketColumn({ title, index, count, tickets }: TicketColumnProps) {
    const { isOver, setNodeRef } = useDroppable({ id: index });

    const style = {
        backgroundColor: isOver ? 'lightgreen' : 'lightblue', 
    };
    
    return (
        <div
            ref={setNodeRef}
            style={style}
            className="p-4 flex flex-col items-center border rounded-lg shadow-md w-64 m-2"
        >
            <div className="w-full flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold">{title}</h1>
                <div className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                    {count}
                </div>
            </div>

            <div className="w-full flex flex-col items-center space-y-2 rounded-lg px-2 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 h-96">
                {/* Map over the tickets array to render individual TicketCard */}
                {tickets?.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} index={ticket.id.toString()} />
                ))}
            </div>
        </div>
    );
}


