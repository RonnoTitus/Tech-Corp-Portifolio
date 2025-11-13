import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminProjects } from './pages/admin/Projects';
import { AdminTeam } from './pages/admin/Team';
import { AdminServices } from './pages/admin/Services';
import { AdminTestimonials } from './pages/admin/Testimonials';
import { AdminSettings } from './pages/admin/Settings';
export function AppRouter() {
  return <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>} />
          <Route path="/admin/projects" element={<ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>} />
          <Route path="/admin/team" element={<ProtectedRoute>
                <AdminTeam />
              </ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute>
                <AdminServices />
              </ProtectedRoute>} />
          <Route path="/admin/testimonials" element={<ProtectedRoute>
                <AdminTestimonials />
              </ProtectedRoute>} />
          <Route path="/admin/settings" element={<ProtectedRoute>
                <AdminSettings />
              </ProtectedRoute>} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>;
}