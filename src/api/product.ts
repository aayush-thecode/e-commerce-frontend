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
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllSummerSale = async() => {
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getProductById = async (id: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${id}`, {
        next: { revalidate: 10 }, 
      });
  
      if (!res.ok) {
        console.error('Failed to fetch product by ID');
        return null;
      }
  
      return await res.json(); 
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  };
  