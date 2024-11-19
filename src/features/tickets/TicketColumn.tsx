import { Droppable } from "react-beautiful-dnd";

interface TicketColumnProps {
    children: React.ReactNode;
    title: string;
    index: number;
    count: number | undefined;
}

export default function TicketColumn({ children, title, index, count }: TicketColumnProps) {
    return (
        <Droppable droppableId={index.toString()}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-blue-200 p-4 flex flex-col items-center border rounded-lg shadow-md w-64 m-2"
                >
                  
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="text-lg font-bold">{title}</h1>
                        <div className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                            {count}
                        </div>
                    </div>

                 
                    <div className="w-full flex flex-col items-center space-y-2 overflow-y-auto h-96  scrollbar-thin overflow-x-hidden scrollbar-thumb-gray-400 scrollbar-track-gray-100 rounded-lg px-2">
                        {children}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}



