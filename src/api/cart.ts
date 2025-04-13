import api from "@/axios/api.axios";

export const addToCart = async(id:string) => {
    try {
        const response = await api.post('/add')
        return response?.data
    } catch(error:any) {
        throw error?.response?.data;
    }
}