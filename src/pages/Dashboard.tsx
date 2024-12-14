import React from 'react';
import { useStore } from '../store/useStore';
import { BarChart, Users, Package, AlertTriangle } from 'lucide-react';

export function Dashboard() {
  const { units, customers } = useStore();
  
  const stats = {
    totalUnits: units.length,
    occupiedUnits: units.filter(u => u.status === 'occupied').length,
    totalCustomers: customers.length,
    maintenanceUnits: units.filter(u => u.status === 'maintenance').length,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Units"
          value={stats.totalUnits}
          icon={<Package className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Occupied Units"
          value={stats.occupiedUnits}
          icon={<BarChart className="h-6 w-6 text-green-600" />}
        />
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers}
          icon={<Users className="h-6 w-6 text-purple-600" />}
        />
        <StatCard
          title="Units in Maintenance"
          value={stats.maintenanceUnits}
          icon={<AlertTriangle className="h-6 w-6 text-yellow-600" />}
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}