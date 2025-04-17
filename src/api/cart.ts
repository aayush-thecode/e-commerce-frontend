import api from "@/axios/api.axios";

export const addToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  try {
    const res = await api.post("/cart/add", {
      productId,
      quantity,
    });
    return res.data;
    
  } catch (error: any) {
    throw error?.response?.data;
  }
};
