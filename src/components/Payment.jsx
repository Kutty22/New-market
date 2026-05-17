import React, { useState, useEffect } from 'react';

export default function Payment({ amount, onCancel, onPaymentSuccess }) {
  const [network, setNetwork] = useState('TRC20');
  const [isVerifying, setIsVerifying] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Dummy Wallet Addresses for UI
  const wallets = {
    'TRC20': 'TQaYx9...V4ZpQeR',
    'ERC20': '0x7aB9...3f1C82D',
    'BTC': 'bc1qxy...9z4x2h'
  };

  // Convert Euro to approx USDT (For UI display)
  const usdtAmount = (parseFloat(amount.replace('€', '').replace(',', '')) * 1.08).toFixed(2);

  // Copy to clipboard logic
  const handleCopy = () => {
    navigator.clipboard.writeText(wallets[network]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simulate Blockchain Verification (Magic happens here)
  const simulatePayment = () => {
    setIsVerifying(true);
    // Simulate a 3.5 second network delay for verification
    setTimeout(() => {
      setIsVerifying(false);
      onPaymentSuccess(); // Push to Dashboard!
    }, 3500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-20 animate-fadeIn">
      
      <div className="w-full max-w-xl bg-[#131823]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0B0E14]/80 p-6 border-b border-white/5 flex items-center justify-between">
          <div onClick={onCancel} className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-white transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span className="font-bold text-sm">Cancel</span>
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Awaiting Payment
          </div>
          <div className="text-primary font-bold font-mono bg-primary/10 px-3 py-1 rounded-lg">14:59</div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-black text-white mb-2">{amount}</h2>
            <p className="text-slate-400 text-sm">Send exactly <strong className="text-white">{usdtAmount} USDT</strong></p>
          </div>

          {/* Network Selector */}
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Select Network</label>
            <div className="grid grid-cols-3 gap-3">
              {['TRC20', 'ERC20', 'BTC'].map((net) => (
                <button 
                  key={net}
                  onClick={() => setNetwork(net)}
                  className={`py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${network === net ? 'border-primary bg-primary/10 text-white' : 'border-white/5 bg-[#0B0E14] text-slate-400 hover:bg-white/5'}`}
                >
                  {net === 'BTC' ? 'Bitcoin' : `USDT (${net})`}
                </button>
              ))}
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto mb-8 flex items-center justify-center relative group">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${wallets[network]}`} alt="QR Code" className="w-full h-full opacity-90 group-hover:opacity-100 transition" />
            {/* Overlay Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
              </div>
            </div>
          </div>

          {/* Wallet Address Box */}
          <div className="mb-8">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Deposit Address</label>
            <div className="flex items-center bg-[#0B0E14] border border-white/10 rounded-xl p-2 pl-4">
              <span className="flex-1 font-mono text-sm text-white truncate">{wallets[network]}</span>
              <button 
                onClick={handleCopy}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary hover:bg-primary hover:text-white'}`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-[10px] text-rose-400 mt-2 text-center">⚠ Only send {network === 'BTC' ? 'Bitcoin' : 'Tether (USDT)'} to this address via {network} network.</p>
          </div>

          {/* Action Button */}
          {isVerifying ? (
            <div className="w-full bg-slate-800 text-white px-6 py-4 rounded-xl text-lg font-bold flex justify-center items-center gap-3 cursor-wait">
              <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying Blockchain...
            </div>
          ) : (
            <button 
              onClick={simulatePayment}
              className="w-full bg-primary hover:bg-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold transition transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(0,102,255,0.6)]"
            >
              I have made the payment
            </button>
          )}

        </div>
      </div>
    </div>
  );
          }
      
