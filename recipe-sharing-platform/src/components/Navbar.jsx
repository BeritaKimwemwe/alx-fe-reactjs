import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">Jikoni</div>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Add Recipe
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
