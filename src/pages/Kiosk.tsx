import React from 'react';
import { Terminal, Key, CreditCard, Package } from 'lucide-react';

export function Kiosk() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <Terminal className="h-12 w-12 mx-auto text-blue-600" />
        <h1 className="text-3xl font-bold">Self-Service Kiosk</h1>
        <p className="text-gray-600">Welcome! Please select an option below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <KioskOption
          icon={<Key className="h-6 w-6" />}
          title="Access Unit"
          description="Enter your unit number and PIN to access your storage unit"
        />
        <KioskOption
          icon={<CreditCard className="h-6 w-6" />}
          title="Make Payment"
          description="Pay your monthly rent or settle outstanding balance"
        />
        <KioskOption
          icon={<Package className="h-6 w-6" />}
          title="View Unit Status"
          description="Check your unit details and rental information"
        />
        <KioskOption
          icon={<Terminal className="h-6 w-6" />}
          title="New Rental"
          description="Start a new storage unit rental application"
        />
      </div>
    </div>
  );
}

function KioskOption({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <button className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-50 p-3 rounded-full text-blue-600">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}