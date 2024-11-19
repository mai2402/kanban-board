import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { validationSchema } from "../../validationSchema/TicketValidationSchema";
import { useEditTicket } from "../../hooks/tickets/useEditTicket";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";



export default function EditTicketForm() {
 const location = useLocation()
 const {state} = location
 const {ticket} = state|| {};
  const {register, handleSubmit, formState:{errors},reset}= useForm({ 
    resolver :yupResolver(validationSchema),
    mode:"onChange",
  })
  const navigate = useNavigate()
 const {editTicket,isEditing}= useEditTicket()

  useEffect(() => {
    if (ticket) {
      reset(ticket); // Pre-fill the form fields
    }
  }, [ticket, reset]);

 
    
  function onSubmitForm(data:any){
     if (ticket?.id)
        editTicket({ ticketId:ticket.id ,editedTicketData:data })
  }
  return (   
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto mt-5 border"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a New Ticket</h1>
    
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...register("title")}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>
   
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm text-gray-700 font-semibold">
          Age:
        </label>
        <input
          type="number"
          id="age"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...register("age")}
        />
        {errors.age && (
          <span className="text-red-500 text-sm">{errors.age.message}</span>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email:
        </label>
        <input
          type="text"
          id="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
     
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...register("phone", { required: "This field is required" })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>
     <div className="flex flex-row items-center justify-between">

      <button
        type="submit"
        className={'w-1/2 py-2 px-4 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'} 
        >
        {isEditing ? "...Saving" : "Save"}
      </button>
      <button onClick={()=>navigate("/kanban")} 
            className="w-1/2 m-3 py-2 px-4 rounded-md text-white font-semibold bg-gray-400">
                Cancel
            </button>
      </div>
    </form>
  )
}