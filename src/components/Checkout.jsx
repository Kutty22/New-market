import React, { useState } from 'react';

export default function Checkout({ onNavigate }) {
  // React State for form controls and dynamic pricing
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedRefund, setAgreedRefund] = useState(false);
  const [accountType, setAccountType] = useState('2-Step');
  
  const isButtonActive = agreedTerms && agreedRefund;

  return (
    <div className="animate-fadeIn pb-20">
      {/* Header with Back Button */}
      <header className="border-b border-slate-800/80 bg-[#0B0E14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
            <div onClick={onNavigate} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span className="font-heading font-bold text-xl text-white">PipsAI<span className="text-primary">.</span></span>
            </div>
            <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                Secure Checkout
            </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          
          <div className="bg-[#131823]/70 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Start PipsAI Challenge</h2>
            
            {/* 3D Clickable Shadow Buttons in React */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setAccountType('2-Step')}
                className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 transform active:translate-y-1 ${
                  accountType === '2-Step' 
                  ? 'border-primary bg-primary/10 shadow-[0_4px_0_0_rgba(0,102,255,1)]' 
                  : 'border-white/5 bg-white/5 hover:bg-white/10 shadow-[0_4px_0_0_rgba(255,255,255,0.05)]'
                }`}
              >
                <h4 className="font-bold text-white text-lg">2-Step</h4>
                <span className="text-xs text-slate-400">Standard 2-phase</span>
              </button>

              <button 
                onClick={() => setAccountType('1-Step')}
                className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 transform active:translate-y-1 ${
                  accountType === '1-Step' 
                  ? 'border-primary bg-primary/10 shadow-[0_4px_0_0_rgba(0,102,255,1)]' 
                  : 'border-white/5 bg-white/5 hover:bg-white/10 shadow-[0_4px_0_0_rgba(255,255,255,0.05)]'
                }`}
              >
                <h4 className="font-bold text-white text-lg flex items-center justify-between">
                  1-Step <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full uppercase">10% Off</span>
                </h4>
                <span className="text-xs text-slate-400">Single step to Account</span>
              </button>
            </div>

            {/* Terms Checkboxes controlled by React State */}
            <div className="space-y-4 mt-8 pt-8 border-t border-slate-800">
              <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-600 bg-[#0B0E14] text-primary focus:ring-primary focus:ring-offset-[#0B0E14] transition"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">I agree to the Terms and Conditions.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={agreedRefund}
                    onChange={(e) => setAgreedRefund(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-600 bg-[#0B0E14] text-primary focus:ring-primary focus:ring-offset-[#0B0E14] transition"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">I agree with Cancellation and Refund Policy.</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#131823]/70 backdrop-blur-xl p-6 rounded-3xl sticky top-28 border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-heading font-black text-white mb-6">Summary</h3>
                <div className="space-y-3 text-sm font-medium mb-6 pb-6 border-b border-slate-800/80">
                    <div className="flex justify-between">
                        <span className="text-slate-400">Challenge:</span>
                        <span className="text-white font-bold">{accountType}</span>
                    </div>
                </div>
                <div className="bg-[#0B0E14] border border-slate-800 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-end">
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Due</span>
                        <span className="text-4xl font-heading font-black text-white">€439.00</span>
                    </div>
                </div>

                {/* Dynamic Button driven by React State */}
                <button 
                  disabled={!isButtonActive}
                  className={`w-full px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex justify-center items-center gap-2
                    ${isButtonActive 
                      ? 'bg-primary hover:bg-blue-600 text-white shadow-[0_10px_30px_-10px_rgba(0,102,255,0.6)] transform hover:-translate-y-1' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                >
                  Continue to Payment
                </button>
            </div>
        </div>

      </div>
    </div>
  );
                                                     }
