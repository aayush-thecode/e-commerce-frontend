export interface IProduct {
    _id:string;
    name:string;
    coverImage:string;
    images?:string[];
    averageRating:number;
    price:string;
    description?:string;
}