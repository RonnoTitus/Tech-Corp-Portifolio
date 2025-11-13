import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboardIcon, BriefcaseIcon, UsersIcon, MessageSquareIcon, SettingsIcon, LogOutIcon, MenuIcon, XIcon, ServerIcon } from 'lucide-react';
interface AdminLayoutProps {
  children: React.ReactNode;
}
export function AdminLayout({
  children
}: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    logout,
    user
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  const menuItems = [{
    icon: LayoutDashboardIcon,
    label: 'Dashboard',
    path: '/admin/dashboard'
  }, {
    icon: BriefcaseIcon,
    label: 'Projects',
    path: '/admin/projects'
  }, {
    icon: UsersIcon,
    label: 'Team',
    path: '/admin/team'
  }, {
    icon: ServerIcon,
    label: 'Services',
    path: '/admin/services'
  }, {
    icon: MessageSquareIcon,
    label: 'Testimonials',
    path: '/admin/testimonials'
  }, {
    icon: SettingsIcon,
    label: 'Settings',
    path: '/admin/settings'
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TechCorp Admin
          </h2>
        </div>
        <nav className="px-4 space-y-2">
          {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return <Link key={item.path} to={item.path} onClick={() => setSidebarOpen(false)} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}>
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>;
        })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3 px-4 py-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-semibold">
                {user?.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold">{user?.name}</div>
              <div className="text-xs text-gray-400">{user?.email}</div>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors w-full">
            <LogOutIcon size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-600 hover:text-gray-900">
              {sidebarOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
            <div className="flex-1 lg:flex-none" />
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome back, {user?.name}
              </span>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>;
}