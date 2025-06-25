import { PaymentMethod } from "../../prisma/generated/client";

export interface CreateClientInput {
    userId: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    payment_ref?: PaymentMethod;
  }

 export interface GetAllClientParams {
    userId: string;
    page: number;
    limit: number;
    search?: string;
    payment?: string;
    sort?: string;
  }

  export interface UpdateClientInput {
    clientId: number;
    name: string;
    email: string;
    phone: string;
    address: string;
  }