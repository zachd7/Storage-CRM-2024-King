import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Package, Plus, Search, Edit2, Trash2 } from 'lucide-react';

export function Inventory() {
  const { inventory, deleteInventoryItem } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>Add Item</span>
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search inventory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInventory.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-blue-600">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button 
                  className="text-gray-400 hover:text-red-600"
                  onClick={() => deleteInventoryItem(item.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium">{item.quantity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{item.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Updated:</span>
                <span className="font-medium">
                  {new Date(item.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}