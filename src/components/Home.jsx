import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="animate-fadeIn">
      {/* Glassmorphism Navbar */}
      <header className="border-b border-slate-800/80 bg-[#0B0E14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="#0066FF"/>
                    <path d="M10 16L16 10L22 16L16 22L10 16Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
                <span className="font-heading font-bold text-2xl tracking-wide">PipsAI<span className="text-primary">.</span></span>
            </div>
            <button 
              onClick={onNavigate}
              className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            >
                Get Started
            </button>
        </div>
      </header>

      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-16 px-4 max-w-5xl mx-auto text-center z-10">
          <h1 className="font-heading text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Grow & Monetize Your <br/>
              Simulated Trading.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Improve your trading skills on our advanced simulated platform, pass the evaluation, and earn up to 90% performance-based rewards.
          </p>
          <button 
            onClick={onNavigate}
            className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition shadow-[0_10px_30px_-10px_rgba(0,102,255,0.6)] transform hover:-translate-y-1"
          >
              Start Challenge
          </button>
      </section>
    </div>
  );
}

