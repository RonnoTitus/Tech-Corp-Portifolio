import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { SaveIcon } from 'lucide-react';
export function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'TechCorp',
    siteEmail: 'contact@techcorp.com',
    sitePhone: '+1 (555) 123-4567',
    siteAddress: '123 Tech Street, San Francisco, CA 94105'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    });
  };
  return <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your site settings</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div>
            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-2">
              Site Name
            </label>
            <input type="text" id="siteName" name="siteName" value={settings.siteName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="siteEmail" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Email
            </label>
            <input type="email" id="siteEmail" name="siteEmail" value={settings.siteEmail} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="sitePhone" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Phone
            </label>
            <input type="tel" id="sitePhone" name="sitePhone" value={settings.sitePhone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="siteAddress" className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea id="siteAddress" name="siteAddress" value={settings.siteAddress} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <button type="submit" className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <SaveIcon size={20} />
            <span>Save Settings</span>
          </button>
        </form>
      </div>
    </AdminLayout>;
}