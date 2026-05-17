import React, { useState } from 'react';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';

export default function App() {
  // Navigation State: 'home' | 'checkout' | 'dashboard'
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans selection:bg-primary selection:text-white relative overflow-x-hidden">
      
      {/* Global Futuristic Background Orbs */}
      <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Dynamic Page Rendering with Fade-in Animation */}
      <div className="relative z-10 animate-fadeIn">
        {currentPage === 'home' && (
          <Home onNavigate={() => setCurrentPage('checkout')} />
        )}
        
        {currentPage === 'checkout' && (
          <Checkout 
            onNavigateBack={() => setCurrentPage('home')} 
            // Checkout mudinchathum Dashboard-ku poga:
            onPaymentSuccess={() => setCurrentPage('dashboard')} 
          />
        )}
        
        {currentPage === 'dashboard' && (
          <Dashboard onLogout={() => setCurrentPage('home')} />
        )}
      </div>
      
    </div>
  );
}
