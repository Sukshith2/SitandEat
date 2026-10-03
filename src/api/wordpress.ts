import axios from 'axios';

const wordpresApi = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getPost = async ()=>{
    const response = await wordpresApi.get("/posts");
    return response.data;

};

export default wordpresApi;

