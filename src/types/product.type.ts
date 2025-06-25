import { Type, Unit } from "../../prisma/generated/client";

export interface GetAllProductsInput {
    userId: number;
    page: number;
    limit: number;
    search?: string;
    type?: string;
    unit?: string;
    sort?: string;
  }

  export interface CreateProductInput {
    user_id: number;
    name: string;
    price: number;
    type: Type;
    unit: Unit;
    description: string;
  }
  
  export interface UpdateProductInput {
    id: number;
    name: string;
    price: number;
    type: Type;
    unit: Unit;
    description: string;
  }