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
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
        <p className="mb-2 text-gray-700">{recipe.description}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
