


async function fetchBooks() {
  const res = await fetch("https://simple-books-api.glitch.me/books/");
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
}

export default async function ServerPage() {
  const books = await fetchBooks(); // Fetch data directly in the component

  return (
    <div>
  
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Server-Side Data Fetching
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(
            (book: {
              id: number;
              name: string;
              author: string;
              type: string;
              available: boolean;
            }) => (
              <div
                key={book.id}
                className="border rounded-lg shadow-md p-4 flex flex-col items-start"
              >
                <h2 className="text-lg font-bold mb-2">{book.name}</h2>
                <p className="text-gray-700 mb-2">Author: {book.author}</p>
                <p className="text-gray-500 mb-2">Type: {book.type}</p>
                <div className="flex items-center mt-4">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      book.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {book.available ? (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L9 12.414l4.707-4.707z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Available
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-7a1 1 0 000 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Not Available
                      </span>
                    )}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
