import { v4 as uuidv4 } from 'uuid';
import { Invoice, InventoryItem } from '../types';
import { addDays, subDays } from 'date-fns';

export const mockInvoices: Invoice[] = [
  {
    id: uuidv4(),
    customerId: '1', // This will be replaced with actual customer IDs
    amount: 150.00,
    status: 'pending',
    dueDate: addDays(new Date(), 7),
    items: [
      {
        id: uuidv4(),
        description: 'Storage Unit Rental - Monthly',
        quantity: 1,
        unitPrice: 150.00,
        total: 150.00,
      },
    ],
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    customerId: '2', // This will be replaced with actual customer IDs
    amount: 200.00,
    status: 'paid',
    dueDate: subDays(new Date(), 5),
    items: [
      {
        id: uuidv4(),
        description: 'Storage Unit Rental - Monthly',
        quantity: 1,
        unitPrice: 200.00,
        total: 200.00,
      },
    ],
    createdAt: subDays(new Date(), 15),
  },
];

export const mockInventory: InventoryItem[] = [
  {
    id: uuidv4(),
    name: 'Padlocks',
    category: 'Security',
    quantity: 50,
    location: 'Warehouse A',
    lastUpdated: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Moving Boxes',
    category: 'Supplies',
    quantity: 200,
    location: 'Warehouse B',
    lastUpdated: new Date(),
  },
];