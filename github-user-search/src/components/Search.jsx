// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const users = await fetchAdvancedUsers(username, location, minRepos);
      setResults(users);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 m-1"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 m-1"
      />
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 m-1"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 m-1">Search</button>

      <div className="mt-4">
        {results.map((user) => (
          <div key={user.id} className="p-2 border-b">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
