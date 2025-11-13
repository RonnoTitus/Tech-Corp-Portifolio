import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { BriefcaseIcon, UsersIcon, MessageSquareIcon, TrendingUpIcon } from 'lucide-react';
export function AdminDashboard() {
  const stats = [{
    icon: BriefcaseIcon,
    label: 'Total Projects',
    value: '6',
    change: '+2 this month'
  }, {
    icon: UsersIcon,
    label: 'Team Members',
    value: '4',
    change: 'No changes'
  }, {
    icon: MessageSquareIcon,
    label: 'Testimonials',
    value: '3',
    change: '+1 this week'
  }, {
    icon: TrendingUpIcon,
    label: 'Site Visitors',
    value: '1.2K',
    change: '+15% this month'
  }];
  return <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-green-600">{stat.change}</div>
            </div>;
      })}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 pb-4 border-b">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">
                  New project added
                </div>
                <div className="text-xs text-gray-500">
                  AI Chatbot project was added to portfolio
                </div>
                <div className="text-xs text-gray-400 mt-1">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-4 border-b">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">
                  New testimonial
                </div>
                <div className="text-xs text-gray-500">
                  Robert Taylor left a 5-star review
                </div>
                <div className="text-xs text-gray-400 mt-1">1 day ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">
                  Team member updated
                </div>
                <div className="text-xs text-gray-500">
                  Sarah Johnson profile was updated
                </div>
                <div className="text-xs text-gray-400 mt-1">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-semibold text-blue-900">Add New Project</div>
              <div className="text-sm text-blue-600">
                Showcase your latest work
              </div>
            </button>
            <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="font-semibold text-purple-900">
                Add Team Member
              </div>
              <div className="text-sm text-purple-600">
                Introduce new team members
              </div>
            </button>
            <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-semibold text-green-900">View Analytics</div>
              <div className="text-sm text-green-600">
                Check your site performance
              </div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>;
}