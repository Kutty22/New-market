import React, { useState } from 'react';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment'; // Puthu file
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [checkoutAmount, setCheckoutAmount] = useState('€439.00'); // Dynamic amount handle panna

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans selection:bg-primary selection:text-white relative overflow-x-hidden">
      
      {/* Background Orbs */}
      <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 animate-fadeIn">
        {currentPage === 'home' && (
          <Home onNavigate={() => setCurrentPage('checkout')} />
        )}
        
        {currentPage === 'checkout' && (
          <Checkout 
            onNavigateBack={() => setCurrentPage('home')} 
            onProceedToPay={(amount) => {
              setCheckoutAmount(amount);
              setCurrentPage('payment'); // Checkout-la irunthu Payment-ku pogum
            }} 
          />
        )}

        {currentPage === 'payment' && (
          <Payment 
            amount={checkoutAmount}
            onCancel={() => setCurrentPage('checkout')}
            onPaymentSuccess={() => setCurrentPage('dashboard')} // Payment mudincha Dashboard
          />
        )}
        
        {currentPage === 'dashboard' && (
          <Dashboard onLogout={() => setCurrentPage('home')} />
        )}
      </div>
      
    </div>
  );
}
