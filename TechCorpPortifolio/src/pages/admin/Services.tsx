import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
export function AdminServices() {
  const [services, setServices] = useState([{
    id: 1,
    title: 'Web Development',
    category: 'Development',
    status: 'Active'
  }, {
    id: 2,
    title: 'Mobile Apps',
    category: 'Development',
    status: 'Active'
  }, {
    id: 3,
    title: 'Cloud Solutions',
    category: 'Infrastructure',
    status: 'Active'
  }, {
    id: 4,
    title: 'Data Engineering',
    category: 'Analytics',
    status: 'Active'
  }, {
    id: 5,
    title: 'Cybersecurity',
    category: 'Security',
    status: 'Active'
  }, {
    id: 6,
    title: 'Digital Strategy',
    category: 'Consulting',
    status: 'Active'
  }]);
  return <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Services</h1>
          <p className="text-gray-600">Manage your service offerings</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon size={20} />
          <span>Add Service</span>
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {services.map(service => <tr key={service.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {service.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {service.category}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {service.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <EditIcon size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </AdminLayout>;
}