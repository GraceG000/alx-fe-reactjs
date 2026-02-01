import axios from 'axios';

const API_URL = 'https://api.github.com/users';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
    const response = await axios.get(`${API_URL}/${username}`, 
        {
            headers:{
                Authorization: `token ${GITHUB_API_KEY}`
            }
        }
    )
    return response.data;
}