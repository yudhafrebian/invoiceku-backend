export interface GetAllInvoiceParams {
  userId: number;
  page: number;
  limit: number;
  search?: string;
  payment?: string;
  status?: string;
  sort?: string;
}

export interface InvoiceItemInput {
  product_id: number;
  name_snapshot: string;
  price_snapshot: number;
  quantity: number;
  total: number;
}

export interface CreateInvoiceInput {
  userId: number;
  client_id: number;
  start_date: Date;
  due_date: Date;
  invoice_number: string;
  status: string;
  notes: string;
  total: number;
  payment_method: string;
  template: string;
  invoice_items: InvoiceItemInput[];
}

export interface PreviewInvoiceInput {
  client_id: number;
  invoice_number: string;
  invoice_date: Date;
  due_date: Date;
  start_date: Date;
  invoice_items: {
    product_id: number;
    name_snapshot: string;
    price_snapshot: number;
    quantity: number;
    total?: number;
  }[];
  notes?: string;
  template: string;
}
