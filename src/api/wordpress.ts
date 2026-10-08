import axios from 'axios';
import type { FoodItem } from '../types/food';


const wordpresApi = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
});


export const getfooditems = async (): Promise<FoodItem[]>=>{
    const response = await wordpresApi.get<FoodItem[]>('/food');
    return response.data;
}

export default wordpresApi;

