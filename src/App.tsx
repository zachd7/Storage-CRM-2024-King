import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { Invoices } from './pages/Invoices';
import { Inventory } from './pages/Inventory';
import { Analytics } from './pages/Analytics';
import { Kiosk } from './pages/Kiosk';
import { Notifications } from './pages/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/kiosk" element={<Kiosk />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;