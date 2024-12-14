export type StorageUnitType = 
  | 'Small Trailer'
  | 'Medium Trailer'
  | 'Large Trailer'
  | 'Camper'
  | 'Car'
  | 'Boat'
  | 'ATV'
  | 'Motorhome'
  | 'Snowmobile Trailer'
  | 'Other';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  profilePicture?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  storageUnits: StorageUnit[];
  documents: Document[];
  createdAt: Date;
}

export interface Document {
  id: string;
  type: 'contract' | 'image' | 'other';
  name: string;
  url: string;
  uploadedAt: Date;
}

export interface StorageUnit {
  id: string;
  number: string;
  type: StorageUnitType;
  customDescription?: string;
  size: string;
  price: number;
  status: 'available' | 'occupied' | 'maintenance';
  customerId?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface Invoice {
  id: string;
  customerId: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: Date;
  items: InvoiceItem[];
  createdAt: Date;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface NotificationPreference {
  email: boolean;
  sms: boolean;
  push: boolean;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  location: string;
  lastUpdated: Date;
}