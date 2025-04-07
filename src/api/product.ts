import api from "@/axios/api.axios";


export const getAllProducts = async() => {
    try {
        const response = await api.get('/product')
        return response?.data
    } catch (error: any){
        throw error?.response?.data;
    }
}

export const getAllTrendingProducts = async() => {
    
}