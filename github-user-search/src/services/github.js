// src/services/github.js
import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Function to fetch user data from GitHub
const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
    },
  });
  return response.data;
};

export default fetchUserData;
