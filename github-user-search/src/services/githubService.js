
import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const searchUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = username || "";

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      per_page: 6,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};




// import axios from 'axios';

// const API_URL = 'https://api.github.com/users';

// const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// export const fetchUserData = async (username) => {
//     const response = await axios.get(`${API_URL}/${username}`, 
//         {
//             headers:{
//                 Authorization: `token ${GITHUB_API_KEY}`
//             }
//         }
//     )
//     return response.data;
// }