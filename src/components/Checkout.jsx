import React, { useState } from 'react';

// INGA THAAN MAATHI IRUKEN: (onNavigateBack, onPaymentSuccess) update panniyachu
export default function Checkout({ onNavigateBack, onPaymentSuccess }) {
  // --- STATE MANAGEMENT ---
  const [phase, setPhase] = useState('2-Step');
  const [accountType, setAccountType] = useState('Standard');
  const [balance, setBalance] = useState('100k');
  
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedRefund, setAgreedRefund] = useState(false);
  const [clientType, setClientType] = useState('Person');

  // --- PRICING LOGIC ---
  const PRICING = {
    '10k': { val: '$10,000', price: '€89.00' },
    '25k': { val: '$25,000', price: '€250.00' },
    '50k': { val: '$50,000', price: '€345.00' },
    '100k': { val: '$100,000', price: '€540.00', promo: '€439.00' },
    '200k': { val: '$200,000', price: '€1,080.00' }
  };

  const isPromoActive = balance === '100k' && accountType === 'Standard';
  const currentPrice = isPromoActive ? PRICING['100k'].promo : PRICING[balance].price;
  const isButtonActive = agreedTerms && agreedRefund;

  // Reusable Radio Button
  const RadioCircle = ({ active }) => (
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${active ? 'border-primary' : 'border-white/20'}`}>
      <div className={`w-2.5 h-2.5 rounded-full bg-primary transition-transform ${active ? 'scale-100' : 'scale-0'}`} />
    </div>
  );

  return (
    <div className="animate-fadeIn pb-20">
      {/* HEADER */}
      <header className="border-b border-slate-800/80 bg-[#0B0E14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
            {/* BACK BUTTON UPDATED */}
            <div onClick={onNavigateBack} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span className="font-heading font-bold text-xl text-white">PipsAI<span className="text-primary">.</span></span>
            </div>
            <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Secure Checkout
            </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Configurations & Forms */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          
          <div className="bg-[#131823]/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/5 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Configure Challenge</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button onClick={() => setPhase('2-Step')} className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all duration-200 ${phase === '2-Step' ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}>
                <div className="text-left">
                  <h4 className="font-bold text-white text-lg">2-Step</h4>
                  <span className="text-xs text-slate-400">Standard 2-phase</span>
                </div>
                <RadioCircle active={phase === '2-Step'} />
              </button>

              <button onClick={() => setPhase('1-Step')} className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all duration-200 ${phase === '1-Step' ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}>
                <div className="text-left">
                  <h4 className="font-bold text-white text-lg flex items-center flex-wrap gap-2">
                    1-Step <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest whitespace-nowrap">10% Off</span>
                  </h4>
                  <span className="text-xs text-slate-400">Single step to Account</span>
                </div>
                <RadioCircle active={phase === '1-Step'} />
              </button>
            </div>

            <h3 className="font-bold text-white text-lg mb-4">Pick your Account</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button onClick={() => setAccountType('Standard')} className={`p-5 rounded-2xl border-2 flex items-center justify-between relative transition-all duration-200 ${accountType === 'Standard' ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}>
                <span className="absolute -top-3 left-4 bg-white text-primary text-[10px] font-black px-3 py-1 rounded-full shadow-lg">Popular</span>
                <div className="text-left mt-2">
                  <h4 className="font-bold text-white text-xl">Standard</h4>
                  <span className="text-xs font-bold text-green-400 flex items-center gap-1 mt-1">Leverage 1:100 ▲</span>
                </div>
                <RadioCircle active={accountType === 'Standard'} />
              </button>

              <button onClick={() => setAccountType('Swing')} className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all duration-200 ${accountType === 'Swing' ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}>
                <div className="text-left mt-2">
                  <h4 className="font-bold text-white text-xl">Swing</h4>
                  <span className="text-xs font-bold text-rose-400 flex items-center gap-1 mt-1">Leverage 1:30 ▼</span>
                </div>
                <RadioCircle active={accountType === 'Swing'} />
              </button>
            </div>

            <h3 className="font-bold text-white text-lg mb-4">Account Balance</h3>
            <div className="space-y-3 mb-6">
              {['200k', '100k', '50k', '25k', '10k'].map((size) => (
                <div key={size} onClick={() => setBalance(size)} className={`rounded-xl p-4 flex justify-between items-center cursor-pointer border-2 transition-all ${balance === size ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:bg-white/10'} relative`}>
                  
                  {size === '100k' && (
                    <span className="absolute -top-3 left-4 bg-accent text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">19% Off</span>
                  )}
                  
                  <div>
                    <span className="text-xs opacity-80 block mb-1 text-slate-400">Balance</span>
                    <span className="text-xl font-bold font-heading text-white">{PRICING[size].val}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-right">
                      {size === '100k' && accountType === 'Standard' ? (
                        <span className="text-lg font-bold text-white flex items-center gap-2 flex-wrap justify-end">
                          €439.00 <span className="text-xs line-through opacity-60 font-normal">€540.00</span>
                        </span>
                      ) : (
                        <span className="text-lg font-bold text-white block">{PRICING[size].price}</span>
                      )}
                      <span className="text-[10px] text-slate-400">One Time payment</span>
                    </div>
                    <RadioCircle active={balance === size} />
                  </div>
                </div>
              ))}
            </div>
            
            {isPromoActive && (
              <div className="bg-cyan-900/30 border border-cyan-800/50 rounded-xl p-4">
                  <p className="text-xs text-cyan-300 font-medium leading-relaxed">
                      <strong className="text-cyan-400">Special Deal:</strong> The $100,000 PipsAI Challenge is now available for just €439.00.
                  </p>
              </div>
            )}
          </div>

          <div className="bg-[#131823]/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/5 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Billing Info</h2>
            
            <div className="flex bg-[#0B0E14] p-1.5 rounded-xl w-fit mb-6 border border-white/10">
                <button onClick={() => setClientType('Person')} className={`px-6 py-2 rounded-lg text-sm font-bold transition ${clientType === 'Person' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'}`}>Person</button>
                <button onClick={() => setClientType('Company')} className={`px-6 py-2 rounded-lg text-sm font-bold transition ${clientType === 'Company' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'}`}>Company</button>
            </div>

            <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">First Name</label>
                        <input type="text" placeholder="Enter first name" className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-xl text-sm font-medium text-white focus:border-primary focus:outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                        <input type="text" placeholder="Enter last name" className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-xl text-sm font-medium text-white focus:border-primary focus:outline-none transition" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" placeholder="user@example.com" className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-xl text-sm font-medium text-white focus:border-primary focus:outline-none transition" />
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800">
                    <h3 className="text-lg font-heading font-bold text-white mb-4">Address Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Street Address</label>
                            <input type="text" placeholder="Street Name & Flat No" className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-xl text-sm font-medium text-white focus:border-primary focus:outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">City</label>
                            <input type="text" placeholder="City" className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-xl text-sm font-medium text-white focus:border-primary focus:outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Country</label>
                            <select className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-xl text-sm font-medium text-white focus:border-primary focus:outline-none transition appearance-none">
                                <option>India</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
          </div>

          <div className="bg-[#131823]/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/5 shadow-lg">
            <h3 className="text-xl font-heading font-bold text-white mb-4">Terms & Conditions</h3>
            <div className="bg-[#0B0E14] border border-white/10 rounded-xl p-5 h-48 overflow-y-auto mb-6 text-xs text-slate-400 leading-relaxed scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-[#0B0E14]">
                <p><strong className="text-slate-300">1. Eligible Customers</strong><br/>You are only eligible to access the Services if you are a natural person at least eighteen (18) years of age.</p>
                <p className="mt-2"><strong className="text-slate-300">2. Nature of Services</strong><br/>All accounts provided are demo accounts with fictitious funds. Any trading is in a simulated environment only.</p>
                <p className="mt-2"><strong className="text-slate-300">3. High Risk Activity</strong><br/>Trading in financial markets is a high-risk activity. We do not accept deposits for real financial investments.</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={agreedTerms} onChange={(e) => setAgreedTerms(e.target.checked)} className="w-5 h-5 rounded border-slate-600 bg-[#0B0E14] text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">I agree to the <span className="text-primary underline">Terms and Conditions</span> and confirm my country of residence.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={agreedRefund} onChange={(e) => setAgreedRefund(e.target.checked)} className="w-5 h-5 rounded border-slate-600 bg-[#0B0E14] text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">I agree with the <span className="text-primary underline">Cancellation and Refund Policy</span>.</span>
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#131823]/70 backdrop-blur-xl p-6 rounded-3xl sticky top-28 border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-heading font-black text-white mb-6">Summary</h3>

                <div className="flex items-center gap-4 bg-[#0B0E14] border border-white/10 p-4 rounded-2xl mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg leading-tight">PipsAI Challenge</h4>
                        <span className="text-sm text-slate-400 font-medium">{PRICING[balance].val} account</span>
                    </div>
                </div>

                <div className="space-y-3 text-sm font-medium mb-6 pb-6 border-b border-slate-800/80">
                    <div className="flex justify-between"><span className="text-slate-400">Challenge:</span><span className="text-white font-bold">{phase}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Account Type:</span><span className="text-white font-bold">{accountType}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Platform:</span><span className="text-white font-bold">cTrader Engine</span></div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-400">Base Price:</span><span className="text-white">{PRICING[balance].price}</span>
                    </div>
                    {isPromoActive && (
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-accent font-bold">Special Deal -19% OFF:</span><span className="text-accent font-bold">−€101.00</span>
                        </div>
                    )}
                </div>

                <div className="bg-[#0B0E14] border border-white/10 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Due</span>
                            <span className="text-[10px] text-slate-600 block leading-tight">incl. VAT</span>
                        </div>
                        <span className="text-4xl font-heading font-black text-white">{currentPrice}</span>
                    </div>
                </div>

                {/* PROCEED BUTTON UPDATED HERE */}
                <button 
                  disabled={!isButtonActive}
                  onClick={onPaymentSuccess} 
                  className={`w-full px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex justify-center items-center gap-2
                    ${isButtonActive 
                      ? 'bg-primary hover:bg-blue-600 text-white shadow-[0_10px_30px_-10px_rgba(0,102,255,0.6)] transform hover:-translate-y-1' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                >
                  Proceed to Live Dashboard 🚀
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
