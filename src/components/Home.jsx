import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="animate-fadeIn pb-10">
      
      {/* 1. Glassmorphism Navbar */}
      <header className="border-b border-slate-800/80 bg-[#0B0E14]/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
                {/* Abstract Logo */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="#0066FF"/>
                    <path d="M10 16L16 10L22 16L16 22L10 16Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
                <span className="font-heading font-bold text-2xl tracking-wide text-white">PipsAI<span className="text-primary">.</span></span>
            </div>
            
            <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
                <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
                <a href="#features" className="hover:text-white transition">Features</a>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>
            
            <div className="flex items-center gap-4">
                <button 
                  onClick={onNavigate}
                  className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-[0_0_15px_rgba(0,102,255,0.4)]"
                >
                    Get Started
                </button>
            </div>
        </div>
      </header>

      {/* 2. Premium Hero Section */}
      <section className="relative pt-20 pb-16 px-4 max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-bold text-slate-300 mb-8 backdrop-blur-sm">
              <span className="text-green-400">★ Trustpilot</span> Excellent 4.9/5 based on 40,000+ reviews
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-white">
              Grow & Monetize Your <br/>
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Simulated Trading.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Improve your trading skills on our advanced simulated platform, pass the evaluation, and earn up to 90% performance-based rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onNavigate}
                className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition shadow-[0_10px_30px_-10px_rgba(0,102,255,0.6)] transform hover:-translate-y-1"
              >
                  Start Challenge
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition transform hover:-translate-y-1">
                  Free Trial
              </button>
          </div>
          
          {/* Trust Logos */}
          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-500">
              <span className="text-xl font-heading font-bold text-white">Forbes</span>
              <span className="text-xl font-heading font-bold text-white">Bloomberg</span>
              <span className="text-xl font-heading font-bold text-white">Yahoo! Finance</span>
          </div>
      </section>

      {/* 3. Why Choose Us (Modern Bento Box Grid) */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Bento Item 1 */}
              <div className="bg-gradient-to-br from-[#131823] to-[#0B0E14] border border-white/5 p-8 rounded-3xl md:col-span-2 relative overflow-hidden group hover:-translate-y-1 transition duration-300 hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(0,102,255,0.15)]">
                  <div className="absolute right-0 bottom-0 w-40 h-40 bg-primary/10 rounded-tl-full blur-2xl group-hover:bg-primary/20 transition"></div>
                  <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Bi-weekly Payouts</h3>
                  <p className="text-slate-400">Fast and easy rewards withdrawals straight to your Crypto wallet or Bank account. Keep up to 90% of simulated profits.</p>
              </div>
              
              {/* Bento Item 2 */}
              <div className="bg-gradient-to-br from-[#131823] to-[#0B0E14] border border-white/5 p-8 rounded-3xl relative overflow-hidden hover:-translate-y-1 transition duration-300 hover:border-accent/30">
                  <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">No Time Limits</h3>
                  <p className="text-slate-400 text-sm">Take as much time as you need to pass the evaluation phases.</p>
              </div>

              {/* Bento Item 3 */}
              <div className="bg-gradient-to-br from-[#131823] to-[#0B0E14] border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition duration-300 hover:border-purple-500/30">
                  <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Premium Platforms</h3>
                  <p className="text-slate-400 text-sm">Trade on MT5 or cTrader with ultra-low latency simulated execution.</p>
              </div>

              {/* Bento Item 4 */}
              <div className="bg-gradient-to-br from-[#131823] to-[#0B0E14] border border-white/5 p-8 rounded-3xl md:col-span-2 relative hover:-translate-y-1 transition duration-300">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-3xl"></div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">Advanced Analytics Dashboard</h3>
                  <p className="text-slate-400 mb-6 max-w-md relative z-10">Track your daily drawdown, win rate, and profit targets in real-time with our custom-built client matrix.</p>
                  <button 
                    onClick={onNavigate}
                    className="text-sm font-bold text-primary hover:text-white transition flex items-center gap-2 relative z-10"
                  >
                      Explore Dashboard <span className="text-lg">&rarr;</span>
                  </button>
              </div>
          </div>
      </section>

      {/* 4. Ecosystem / Extra Programs */}
      <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0B2117] to-[#0B0E14] border border-[#16422D] relative overflow-hidden group cursor-pointer">
                  <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition"></div>
                  <div className="bg-green-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_15px_rgba(34,197,94,0.4)]">$</div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-3">Earn real-money rewards</h3>
                  <p className="text-slate-400 mb-8 max-w-sm">Trade in a simulated environment and earn performance-based rewards reliably every 14 days.</p>
                  <div className="inline-flex items-center text-green-400 font-bold hover:text-green-300">Learn More &rarr;</div>
              </div>

              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#3D1A00] to-[#0B0E14] border border-[#662B00] relative overflow-hidden group cursor-pointer">
                  <div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition"></div>
                  <div className="text-orange-400 mb-6">
                      <svg className="w-8 h-8 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-3">Achieve More. Gain More.</h3>
                  <p className="text-slate-400 mb-8 max-w-sm">Access exclusive benefits with our Premium scaling program. Double your capital up to $2M.</p>
                  <div className="inline-flex items-center text-orange-400 font-bold hover:text-orange-300">View Premium &rarr;</div>
              </div>
          </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-slate-800/50 bg-[#0B0E14] mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-[#131823]/50 border border-slate-800 rounded-2xl p-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
                      <strong className="text-slate-400">Important Disclaimer:</strong> Please note that all accounts we provide to our clients are simulated demo accounts with fictitious funds. Any trading is executed in a simulated environment only. We do not provide real money brokerage services. Past performance does not guarantee future results.
                  </p>
                  <button className="shrink-0 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition">
                      Ok, I understand
                  </button>
              </div>
              <div className="text-center mt-8 text-xs text-slate-600">
                  &copy; 2026 PipsAI Simulated Platforms. All Rights Reserved.
              </div>
          </div>
      </footer>
    </div>
  );
                        }
