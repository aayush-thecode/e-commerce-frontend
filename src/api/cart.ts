/* eslint-disable @typescript-eslint/no-explicit-any */

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

export const clearCart = async (userId: string) => {
  try {
    const response = await api.delete(`/cart/clear/${userId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const removeItemFromCart = async (userId: string, productId: string) => {
  try {
    const response = await api.delete(`/cart/remove/${userId}/${productId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getCartByUserId = async (userId: string, page: number = 1, limit: number = 10) => {
  try {
    const response = await api.get(`/cart/${userId}`, {
      params: { page, limit }, 
    });
    return response.data; 
  } catch (error: any) {
    throw error?.response?.data || error; 
  }
};

