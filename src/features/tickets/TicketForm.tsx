import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../validationSchema/TicketValidationSchema";
import { useCreateTicket } from "../../hooks/tickets/useCreateTicket";


interface FormProps {
  onClose: () => void;
}

export default function TicketForm ({ onClose }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange", // runs validation every time a field is modified 
  });
  const { createTicket, isAdding } = useCreateTicket();

  function onSubmitForm(data: any) {
    
    const newTicket = {
      title: data.title,
      name: data.name,
      age: data.age,
      email: data.email,
      phone: data.phone,
    };
    createTicket(newTicket);
    onClose();
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
     
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-2 px-4 rounded-md text-white font-semibold transition ${
          isValid
            ? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {isAdding ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}



