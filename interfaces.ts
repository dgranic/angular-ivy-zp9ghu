export interface InvoicePayload {
  email?: string;
  uid?: string;
  items: [OrderItem];
  daysUntilDue?: number;
  default_tax_rates?: string[];
  transfer_data?: {
    destination: string;
    amount?: number;
  };
  description?: string;
}

export interface OrderItem {
  amount: number;
  currency: string;
  quantity?: number;
  description: string;
  tax_rates?: string[];
}