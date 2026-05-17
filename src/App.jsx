import React, { useState } from 'react';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  // State to manage which page is currently active
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation functions passed as props
  const navigateToCheckout = () => setCurrentPage('checkout');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <div className="min-h-screen relative">
      {/* Global Background Orbs for Parallax effect */}
      <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-radial-gradient from-blue-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-radial-gradient from-orange-500/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Conditional Rendering based on state */}
      {currentPage === 'home' ? (
        <Home onNavigate={navigateToCheckout} />
      ) : (
        <Checkout onNavigate={navigateToHome} />
      )}
    </div>
  );
}

export default App;

