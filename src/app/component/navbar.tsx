export default function Navbar() {
    return (
      <nav className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Assignment</div>
          <ul className="flex space-x-4">
            <li><a href="/serverside" className="hover:underline">Server-Side</a></li>
            <li><a href="/clientside" className="hover:underline">Client-Side</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  