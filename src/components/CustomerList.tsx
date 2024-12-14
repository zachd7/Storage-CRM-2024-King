import React from 'react';
import { Customer } from '../types';
import { Edit2, Trash2, FileText, Image } from 'lucide-react';
import { formatDate } from '../lib/utils';

interface CustomerListProps {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onDelete: (id: string) => void;
}

export function CustomerList({ customers, onEdit, onDelete }: CustomerListProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Profile
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Storage Unit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Documents
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12">
                    <img
                      className="h-12 w-12 rounded-lg object-cover"
                      src={customer.profilePicture || 'https://via.placeholder.com/100?text=No+Image'}
                      alt={`${customer.firstName} ${customer.lastName}`}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {customer.firstName} {customer.lastName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(customer.dateOfBirth)}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{customer.email}</div>
                <div className="text-sm text-gray-500">{customer.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.storageUnits.map((unit) => (
                  <div key={unit.id} className="text-sm text-gray-900">
                    {unit.type}
                    {unit.type === 'Other' && unit.customDescription && 
                      ` - ${unit.customDescription}`
                    }
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  {customer.documents.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {doc.type === 'contract' ? (
                        <FileText className="h-5 w-5" />
                      ) : (
                        <Image className="h-5 w-5" />
                      )}
                    </a>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(customer)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(customer.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}