import api from "@/axios/api.axios";

export const addToWishlist = async ({
    productId,
  }: {
    productId: string;
  }) => {
    try {
      const res = await api.post(`/wishlist/`,{productId});
      return res.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  };
  