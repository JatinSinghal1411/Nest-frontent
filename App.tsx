import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <AboutUs />;
      case 'services': return <Services />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      case 'product': return <ProductDetails />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-darkBg transition-colors duration-300">
      <Navbar />
      <main className="fade-in-up">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;