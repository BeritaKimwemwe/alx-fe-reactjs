import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <header className="bg-blue-500 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Recipe Sharing Platform</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
              <Link to="/add-recipe" className="hover:text-gray-200">
                Add Recipe
              </Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
