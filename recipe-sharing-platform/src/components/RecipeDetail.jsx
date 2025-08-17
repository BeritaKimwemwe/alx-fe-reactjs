import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="text-center mt-6">Loading recipe...</p>;

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="mb-4 text-gray-700">{recipe.description}</p>

        {/* Ingredients */}
        <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        {/* Instructions */}
        <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-500 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
