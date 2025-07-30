// src/App.jsx
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-4">GitHub Advanced User Search</h1>
      <Search />
    </div>
  );
}

export default App;
