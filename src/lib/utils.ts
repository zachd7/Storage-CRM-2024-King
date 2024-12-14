import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, isValid } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function generateUnitNumber(): string {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return 'N/A';
  const dateObj = date instanceof Date ? date : new Date(date);
  return isValid(dateObj) ? format(dateObj, 'MM/dd/yyyy') : 'Invalid Date';
}