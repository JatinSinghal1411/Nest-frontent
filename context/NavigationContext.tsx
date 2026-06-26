import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PageName } from '../types';

interface NavigationContextType {
  currentPage: PageName;
  params: any;
  navigate: (page: PageName, params?: any) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [params, setParams] = useState<any>(null);

  const navigate = (page: PageName, params?: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setParams(params);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, params, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};