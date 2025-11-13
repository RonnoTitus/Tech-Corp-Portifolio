import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PlusIcon, EditIcon, TrashIcon, StarIcon } from 'lucide-react';
export function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([{
    id: 1,
    name: 'John Smith',
    company: 'Tech Startup Inc.',
    rating: 5,
    status: 'Published'
  }, {
    id: 2,
    name: 'Lisa Anderson',
    company: 'Global Retail Co.',
    rating: 5,
    status: 'Published'
  }, {
    id: 3,
    name: 'Robert Taylor',
    company: 'Finance Solutions Ltd.',
    rating: 5,
    status: 'Published'
  }]);
  return <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Testimonials
          </h1>
          <p className="text-gray-600">Manage client testimonials</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon size={20} />
          <span>Add Testimonial</span>
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
                Company
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Rating
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
            {testimonials.map(testimonial => <tr key={testimonial.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {testimonial.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {testimonial.company}
                </td>
                <td className="px-6 py-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="text-yellow-400 fill-current" size={16} />)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {testimonial.status}
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