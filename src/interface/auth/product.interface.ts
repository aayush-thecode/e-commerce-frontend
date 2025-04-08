export interface IProduct {
            name: string;
            coverImage:string;
            price:string;
            description?: string;
            _id: string;
            images?:string[];
            averageRating?: number;
            createdBy?:any;
        }