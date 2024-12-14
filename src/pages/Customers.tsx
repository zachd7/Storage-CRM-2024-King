import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { CustomerList } from '../components/CustomerList';
import { CustomerForm } from '../components/CustomerForm';
import { Customer } from '../types';
import { UserPlus, Search, X } from 'lucide-react';

export function Customers() {
  const { customers, addCustomer, updateCustomer, deleteCustomer } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  const filteredCustomers = customers.filter(customer =>
    `${customer.firstName} ${customer.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (data: Partial<Customer>) => {
    if (editingCustomer) {
      updateCustomer(editingCustomer.id, data);
      setEditingCustomer(null);
    } else {
      addCustomer(data);
    }
    setShowForm(false);
  };

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      deleteCustomer(id);
    }
  };

  return (
    <div className="relative space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Customers</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <UserPlus className="h-5 w-5" />
          <span>Add Customer</span>
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md bg-white"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>

      <CustomerList
        customers={filteredCustomers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white pb-4 mb-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {editingCustomer ? 'Edit Customer' : 'Add New Customer'}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingCustomer(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <CustomerForm
              customer={editingCustomer || undefined}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}