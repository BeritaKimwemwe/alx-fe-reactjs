import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const users = await fetchAdvancedUsers(username, location, minRepos);
      setResults(users);
      if (users.length === 0) setError('Looks like we can’t find the user');
    } catch (err) {
      console.error('Search failed:', err);
      setError('An error occurred. Please try again.');
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

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results.length > 0 && (
        <div className="mt-4">
          {results.map((user) => (
            <div key={user.id} className="p-2 border-b">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
