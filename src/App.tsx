import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Kanbanboard from "./pages/Kanbanboard";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TicketForm from "./features/tickets/TicketForm";
import EditTicketForm from "./features/tickets/EditTicketForm";



const queryClient =new QueryClient(
  {
    defaultOptions:{
      queries:{
        staleTime:0,
      }
    }
  }
)


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="kanban" element={<Kanbanboard/>}/>
      </Routes>
      </BrowserRouter>
       <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Default toast styles
          style: {
            borderRadius: '8px',
            background:'white',
            color: 'black',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
