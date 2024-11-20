import { Link } from "react-router-dom";

function Home() {
 
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 flex-shrink-0">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Organize Your Workflow with Ease
          </h1>
          <p className="text-lg md:text-xl mb-8">
            A simple yet effective way to manage your tickets with an interactive Kanban board.
          </p>
          <Link
            to="/kanban"
            className="bg-white text-blue-500 hover:text-purple-600 font-semibold py-3 px-6 rounded-full shadow-xl transform transition duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to your new ticket management tool. Start organizing your tickets effectively.
          </p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kanban Board Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;



