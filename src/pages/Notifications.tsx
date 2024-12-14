import React from 'react';
import { Bell, Mail, MessageSquare, Settings } from 'lucide-react';

export function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <NotificationChannel
          icon={<Mail className="h-6 w-6" />}
          title="Email Notifications"
          status="Enabled"
        />
        <NotificationChannel
          icon={<MessageSquare className="h-6 w-6" />}
          title="SMS Notifications"
          status="Enabled"
        />
        <NotificationChannel
          icon={<Bell className="h-6 w-6" />}
          title="Push Notifications"
          status="Disabled"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Recent Notifications</h2>
        </div>
        <div className="divide-y">
          <NotificationItem
            title="Payment Reminder"
            message="Your monthly payment is due in 3 days"
            time="2 hours ago"
            type="warning"
          />
          <NotificationItem
            title="Maintenance Notice"
            message="Scheduled maintenance on Block A this weekend"
            time="1 day ago"
            type="info"
          />
          <NotificationItem
            title="Payment Received"
            message="Thank you for your recent payment"
            time="2 days ago"
            type="success"
          />
        </div>
      </div>
    </div>
  );
}

function NotificationChannel({ 
  icon, 
  title, 
  status 
}: { 
  icon: React.ReactNode; 
  title: string; 
  status: string;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-blue-600">{icon}</div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-600">{status}</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked={status === 'Enabled'} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
}

function NotificationItem({ 
  title, 
  message, 
  time, 
  type 
}: { 
  title: string; 
  message: string; 
  time: string; 
  type: 'warning' | 'info' | 'success';
}) {
  const typeColors = {
    warning: 'text-yellow-600',
    info: 'text-blue-600',
    success: 'text-green-600'
  };

  return (
    <div className="p-4 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
      <p className={`text-sm ${typeColors[type]} mt-1`}>{message}</p>
    </div>
  );
}