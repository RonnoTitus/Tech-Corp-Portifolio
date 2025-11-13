import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
export function AdminTeam() {
  const [team, setTeam] = useState([{
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    status: 'Active'
  }, {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    status: 'Active'
  }, {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    status: 'Active'
  }, {
    id: 4,
    name: 'David Kim',
    role: 'Head of Engineering',
    status: 'Active'
  }]);
  return <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Team Members
          </h1>
          <p className="text-gray-600">Manage your team profiles</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon size={20} />
          <span>Add Member</span>
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Role
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
            {team.map(member => <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {member.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {member.role}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {member.status}
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