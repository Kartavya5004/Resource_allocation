import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, name?: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('smartaid_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, name?: string) => {
    // Mock authentication - in production, this would call your backend
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: name || email.split('@')[0],
      email,
    };
    
    setUser(mockUser);
    localStorage.setItem('smartaid_user', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup - in production, this would call your backend
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
    };
    
    setUser(mockUser);
    localStorage.setItem('smartaid_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('smartaid_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
