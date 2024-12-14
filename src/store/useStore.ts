import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { Customer, Invoice, InventoryItem, StorageUnit } from '../types';
import { mockCustomers } from '../data/mockCustomers';
import { mockInvoices, mockInventory } from '../data/mockData';

interface StoreState {
  customers: Customer[];
  invoices: Invoice[];
  inventory: InventoryItem[];
  units: StorageUnit[];
  
  // Customer CRUD
  addCustomer: (customer: Omit<Customer, 'id' | 'createdAt' | 'documents' | 'storageUnits'>) => void;
  updateCustomer: (id: string, customer: Partial<Customer>) => void;
  deleteCustomer: (id: string) => void;
  
  // Invoice CRUD
  addInvoice: (invoice: Omit<Invoice, 'id' | 'createdAt'>) => void;
  updateInvoice: (id: string, invoice: Partial<Invoice>) => void;
  deleteInvoice: (id: string) => void;
  
  // Inventory CRUD
  addInventoryItem: (item: Omit<InventoryItem, 'id' | 'lastUpdated'>) => void;
  updateInventoryItem: (id: string, item: Partial<InventoryItem>) => void;
  deleteInventoryItem: (id: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  customers: mockCustomers,
  invoices: mockInvoices,
  inventory: mockInventory,
  units: mockCustomers.flatMap(customer => customer.storageUnits),

  // Customer CRUD
  addCustomer: (customerData) =>
    set((state) => ({
      customers: [
        ...state.customers,
        {
          ...customerData,
          id: uuidv4(),
          createdAt: new Date(),
          documents: [],
          storageUnits: [],
        },
      ],
    })),

  updateCustomer: (id, customerData) =>
    set((state) => ({
      customers: state.customers.map((c) =>
        c.id === id ? { ...c, ...customerData } : c
      ),
    })),

  deleteCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((c) => c.id !== id),
    })),

  // Invoice CRUD
  addInvoice: (invoice) =>
    set((state) => ({
      invoices: [
        ...state.invoices,
        { ...invoice, id: uuidv4(), createdAt: new Date() },
      ],
    })),

  updateInvoice: (id, invoice) =>
    set((state) => ({
      invoices: state.invoices.map((i) =>
        i.id === id ? { ...i, ...invoice } : i
      ),
    })),

  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((i) => i.id !== id),
    })),

  // Inventory CRUD
  addInventoryItem: (item) =>
    set((state) => ({
      inventory: [
        ...state.inventory,
        { ...item, id: uuidv4(), lastUpdated: new Date() },
      ],
    })),

  updateInventoryItem: (id, item) =>
    set((state) => ({
      inventory: state.inventory.map((i) =>
        i.id === id ? { ...i, ...item, lastUpdated: new Date() } : i
      ),
    })),

  deleteInventoryItem: (id) =>
    set((state) => ({
      inventory: state.inventory.filter((i) => i.id !== id),
    })),
}));