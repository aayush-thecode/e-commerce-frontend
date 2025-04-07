export interface IProduct {
    name: string;
            coverImage:string;
            price:string;
            description?: string;
            id: string;
            images?:string[];
            averageRating?: number;
            createdBy?:any;
        }