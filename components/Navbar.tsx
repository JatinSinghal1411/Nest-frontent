import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';

const links: NavLink[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
  { label: 'About Us', page: 'about' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigate, currentPage } = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-white dark:bg-darkBg border-b border-[#EAEAEA] dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-primary dark:text-white font-bold text-2xl tracking-tight cursor-pointer"
          onClick={() => navigate('home')}
        >
          Nest
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <button 
              key={link.label} 
              onClick={() => navigate(link.page)}
              className={`font-medium text-[15px] transition-colors ${
                currentPage === link.page 
                  ? 'text-primary dark:text-white font-bold' 
                  : 'text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
           {/* Theme Toggle */}
           <button onClick={toggleTheme} className="hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            {isDarkMode ? <Sun className="w-5 h-5 stroke-[1.5]" /> : <Moon className="w-5 h-5 stroke-[1.5]" />}
          </button>

          <button className="hidden md:block hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          
          <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors group">
            <User className="w-5 h-5 stroke-[1.5]" />
            <span className="text-sm font-medium group-hover:text-primary dark:group-hover:text-white">Sign in</span>
          </div>

          <button className="hidden md:block hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button className="relative hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>

          <button 
            className="md:hidden text-primary dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-darkBg border-t border-gray-100 dark:border-gray-800 absolute w-full left-0 p-6 flex flex-col space-y-4 shadow-xl">
          {links.map((link) => (
            <button 
              key={link.label} 
              onClick={() => {
                navigate(link.page);
                setIsMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-primary dark:text-white py-2 text-left"
            >
              {link.label}
            </button>
          ))}
          <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />
          <div className="flex flex-col space-y-4">
             <div className="flex items-center space-x-2 text-secondary dark:text-gray-300">
               <User className="w-5 h-5" />
               <span>Sign in</span>
             </div>
             <div className="flex items-center space-x-2 text-secondary dark:text-gray-300">
               <Search className="w-5 h-5" />
               <span>Search</span>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;