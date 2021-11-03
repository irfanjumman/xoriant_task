import axios from 'axios';
import env from "dotenv";

// let BASE_URL = env.API_URL
export const network = {
    getUserInformation: async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        return response;
    }
}