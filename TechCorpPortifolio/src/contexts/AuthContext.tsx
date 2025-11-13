import React, { useState, createContext, useContext } from 'react';
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  user: {
    email: string;
    name: string;
  } | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    name: string;
  } | null>(null);
  const login = (email: string, password: string) => {
    // Simple demo authentication - in production, this would call an API
    if (email === 'admin@techcorp.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setUser({
        email,
        name: 'Admin User'
      });
      return true;
    }
    return false;
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return <AuthContext.Provider value={{
    isAuthenticated,
    login,
    logout,
    user
  }}>
      {children}
    </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}