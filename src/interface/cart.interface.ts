export interface CartProduct {
    _id: string;
    name: string;
    price: number;
    image?: string;
  }
  
  export interface CartItem {
    product: CartProduct | string; 
    quantity: number;
    size?: string;
    color?: string;
    priceAtAddition?: number;
  }
  
  export interface CartResponse {
    status: string;
    success: boolean;
    message: string;
    data: {
      _id: string;
      user: string;
      items: CartItem[];import { Document } from 'mongoose';

      export interface CartProduct {
        _id: string;
        name: string;
        price: number;
        image?: string;
        // Add other product fields as needed
      }
      
      export interface CartItem {
        product: CartProduct | string; // Can be populated or just ID
        quantity: number;
        size?: string;
        color?: string;
        priceAtAddition?: number;
      }
      
      export interface CartResponse extends Document {
        _id: string;
        user: string;
        items: CartItem[];
        createdAt: Date;
        updatedAt: Date;
      }
      
      export interface ApiCartResponse {
        status: string;
        success: boolean;
        message: string;
        data: CartResponse;
      }
      
      export interface PaginatedCartResponse {
        status: string;
        success: boolean;
        data: {
          items: CartItem[];
          totalItems: number;
          totalPages: number;
          currentPage: number;
        };
      }

