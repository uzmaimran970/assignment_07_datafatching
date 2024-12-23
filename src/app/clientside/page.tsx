"use client";

import { useState, useEffect } from "react";
import Navbar from "../component/navbar";


type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number; 
  };
};

export default function ClientPage() {
  const [products, setProducts] = useState<Product[]>([]); // Define the type for products

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json(); // Ensure TypeScript knows the response type
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Client-Side Data Fetching
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-32 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-center mb-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 text-center mb-2">
                Category: {product.category}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                {product.description.substring(0, 50)}...
              </p>
              <p className="text-red-800 font-bold mb-2">Price: ${product.price}</p>
              <div className="flex items-center justify-between w-full mb-2">
                <p className="text-yellow-500 text-sm flex items-center">
                  ⭐ {product.rating.rate}
                </p>
                <p className="text-gray-500 text-sm">Reviews: {product.rating.count}</p>
              </div>
              <button className="mt-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
