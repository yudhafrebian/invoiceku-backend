import { PaymentMethod } from "../generated/prisma/enums";

export interface CreatePaymentMethodInput {
    user_id: number;
    account_name: string;
    account_number: string;
    payment_method: PaymentMethod;
    file?: Express.Multer.File;
  }