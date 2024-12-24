
export default function Page() {
  return (
    
    <div
  
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url('/blueglitter.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="text-center px-4 sm:px-8 bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
          Welcome to <span className="text-blue-300">My Assignment</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-10">
          Discover powerful client-side and server-side data fetching with sleek designs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 justify-center">
          {/* Client-Side Button */}
          <a
            href="/clientside"
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:scale-110 hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
          >
            Client-Side Page
          </a>

          {/* Server-Side Button */}
          <a
            href="/serverside"
            className="bg-gradient-to-br from-teal-400 to-green-500 text-white py-3 px-8 rounded-full font-bold text-lg hover:scale-110 hover:bg-gradient-to-t hover:from-teal-300 hover:to-green-400 transition-all duration-300 shadow-lg"
          >
            Server-Side Page
          </a>
        </div>
      </div>
    </div>
  );
}
