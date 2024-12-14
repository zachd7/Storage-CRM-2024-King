import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Warehouse, 
  Users, 
  BarChart2, 
  Terminal, 
  Bell, 
  FileText,
  Package
} from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Warehouse className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">StorageHub</span>
          </Link>
          
          <div className="flex space-x-4">
            <NavLink to="/customers" icon={<Users className="h-5 w-5" />} text="Customers" />
            <NavLink to="/invoices" icon={<FileText className="h-5 w-5" />} text="Invoices" />
            <NavLink to="/inventory" icon={<Package className="h-5 w-5" />} text="Inventory" />
            <NavLink to="/analytics" icon={<BarChart2 className="h-5 w-5" />} text="Analytics" />
            <NavLink to="/kiosk" icon={<Terminal className="h-5 w-5" />} text="Kiosk" />
            <NavLink to="/notifications" icon={<Bell className="h-5 w-5" />} text="Notifications" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}