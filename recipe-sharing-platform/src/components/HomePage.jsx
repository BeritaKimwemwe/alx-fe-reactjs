import React, { useEffect, useState } from "react";
import data from "../data.json";
import Navbar from "./Navbar";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        <h1 className="text-4xl font-bold text-center mb-8">
          Recipe Sharing Platform
        </h1>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
