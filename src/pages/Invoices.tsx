import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { FileText, Plus, Search } from 'lucide-react';
import { formatCurrency } from '../lib/utils';

export function Invoices() {
  const { invoices, customers } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const getCustomerName = (customerId: string) => {
    const customer = customers.find(c => c.id === customerId);
    return customer ? customer.name : 'Unknown Customer';
  };

  const filteredInvoices = invoices.filter(invoice => 
    getCustomerName(invoice.customerId).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>Create Invoice</span>
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search invoices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Invoice #</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span>{invoice.id.slice(0, 8)}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{getCustomerName(invoice.customerId)}</td>
                <td className="px-6 py-4">{formatCurrency(invoice.amount)}</td>
                <td className="px-6 py-4">
                  <InvoiceStatus status={invoice.status} />
                </td>
                <td className="px-6 py-4">
                  {new Date(invoice.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">View</button>
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InvoiceStatus({ status }: { status: string }) {
  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    paid: 'bg-green-100 text-green-800',
    overdue: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 text-sm rounded-full ${statusStyles[status as keyof typeof statusStyles]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}