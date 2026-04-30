import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Dashboard from './features/Dashboard';

import SalesList from './features/SalesList';
import PurchasesList from './features/PurchasesList';
import Inventory from './features/Inventory';
import Customers from './features/Customers';
import Suppliers from './features/Suppliers';
import Treasury from './features/Treasury';
import JournalEntries from './features/JournalEntries';
import ChartOfAccounts from './features/ChartOfAccounts';
import Reports from './features/Reports';
import Settings from './features/Settings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="sales" element={<SalesList />} />
            <Route path="purchases" element={<PurchasesList />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customers" element={<Customers />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="treasury" element={<Treasury />} />
            <Route path="journal" element={<JournalEntries />} />
            <Route path="accounts" element={<ChartOfAccounts />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<div className="p-4">Page under construction</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
