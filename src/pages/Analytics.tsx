import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics & Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Occupancy Rate</h2>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <span className="text-gray-500">Occupancy Chart Placeholder</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Revenue Overview</h2>
            <LineChart className="h-5 w-5 text-blue-600" />
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <span className="text-gray-500">Revenue Chart Placeholder</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Unit Size Distribution</h2>
            <PieChart className="h-5 w-5 text-purple-600" />
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <span className="text-gray-500">Distribution Chart Placeholder</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Customer Growth</h2>
            <BarChart className="h-5 w-5 text-yellow-600" />
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <span className="text-gray-500">Growth Chart Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}