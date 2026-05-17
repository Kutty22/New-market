import React, { useState, useEffect } from 'react';

export default function Dashboard({ onLogout }) {
  // Live BTC Price State (Binance API)
  const [btcPrice, setBtcPrice] = useState('Loading...');
  const [priceColor, setPriceColor] = useState('text-white');

  // Simulated Account State
  const [balance, setBalance] = useState(100000.00);
  const [equity, setEquity] = useState(100000.00);

  // Binance Free WebSocket Connection
  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const price = parseFloat(data.p).toFixed(2);
      
      setBtcPrice((prevPrice) => {
        if (prevPrice !== 'Loading...') {
          setPriceColor(price > prevPrice ? 'text-green-400' : 'text-rose-400');
        }
        return price;
      });
    };

    return () => ws.close(); // Cleanup on exit
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0E14]">
      
      {/* Top Navbar */}
      <header className="h-16 border-b border-white/5 bg-[#131823]/50 backdrop-blur-md flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold">P.</div>
            <span className="font-heading font-bold text-lg">Trader Matrix</span>
            <span className="ml-4 px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-black uppercase rounded border border-green-500/30 animate-pulse">Live</span>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="text-right">
                <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-widest">Simulated Equity</span>
                <span className="text-lg font-black text-white">${equity.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            </div>
            <button onClick={onLogout} className="text-sm font-bold text-slate-400 hover:text-white transition">Exit Session</button>
        </div>
      </header>

      {/* Main Trading Area */}
      <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* Left Side: Chart & Metrics */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          
          {/* Advanced TradingView Chart Embed */}
          <div className="flex-1 bg-[#131823] border border-white/5 rounded-2xl overflow-hidden min-h-[400px] shadow-2xl relative group">
              {/* iframe points to TradingView's free widget */}
              <iframe 
                title="TradingView Chart"
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=BINANCE%3ABTCUSDT&interval=15&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=131823&studies=%5B%5D&theme=dark&style=1&timezone=Asia%2FKolkata"
                className="w-full h-full border-none"
                allowFullScreen
              />
          </div>

          {/* Performance Metrics Tracker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 shrink-0">
            <div className="bg-[#131823]/50 border border-white/5 p-5 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Daily Drawdown</span>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xl font-bold text-orange-400">$0.00</span>
                <span className="text-xs text-slate-400">Limit: $5,000</span>
              </div>
              <div className="w-full bg-[#0B0E14] h-1.5 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-0" />
              </div>
            </div>
            
            <div className="bg-[#131823]/50 border border-white/5 p-5 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Max Allocation Loss</span>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xl font-bold text-emerald-400">$0.00</span>
                <span className="text-xs text-slate-400">Limit: $10,000</span>
              </div>
              <div className="w-full bg-[#0B0E14] h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-0" />
              </div>
            </div>

            <div className="bg-[#131823]/50 border border-white/5 p-5 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Profit Target</span>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xl font-bold text-white">$0.00</span>
                <span className="text-xs text-slate-400">Target: $10,000</span>
              </div>
              <div className="w-full bg-[#0B0E14] h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Order Execution Panel */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
          
          <div className="bg-[#131823]/80 backdrop-blur-xl border border-white/5 p-6 rounded-3xl shadow-xl flex-1 flex flex-col">
            <h3 className="text-lg font-heading font-bold text-white mb-6">Execution Panel</h3>

            {/* Live Ticker */}
            <div className="bg-[#0B0E14] border border-white/10 rounded-2xl p-5 mb-6 text-center shadow-inner">
              <span className="text-xs text-slate-400 font-bold tracking-widest uppercase block mb-1">BTC / USDT</span>
              <span className={`text-4xl font-black font-heading transition-colors duration-300 ${priceColor}`}>
                {btcPrice}
              </span>
            </div>

            {/* Simulated Order Controls */}
            <div className="space-y-4 mb-8">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Lot Size (Volume)</label>
                <div className="flex items-center bg-[#0B0E14] border border-white/10 rounded-xl overflow-hidden">
                  <button className="px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition">-</button>
                  <input type="number" defaultValue="1.00" className="w-full bg-transparent text-center font-bold text-white focus:outline-none" />
                  <button className="px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition">+</button>
                </div>
              </div>

              {/* Advanced 3D Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button className="bg-rose-500/10 border-2 border-rose-500/50 hover:bg-rose-500 hover:border-rose-500 text-rose-500 hover:text-white py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all duration-200 transform active:translate-y-1 shadow-[0_4px_0_0_rgba(244,63,94,0.3)] hover:shadow-[0_4px_0_0_rgba(225,29,72,1)]">
                  Sell
                </button>
                <button className="bg-emerald-500/10 border-2 border-emerald-500/50 hover:bg-emerald-500 hover:border-emerald-500 text-emerald-500 hover:text-white py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all duration-200 transform active:translate-y-1 shadow-[0_4px_0_0_rgba(16,185,129,0.3)] hover:shadow-[0_4px_0_0_rgba(5,150,105,1)]">
                  Buy
                </button>
              </div>
            </div>

            <div className="mt-auto">
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-xs text-blue-300 leading-relaxed text-center">
                All executions are routed through the internal simulated matching engine. No real market orders are placed.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
          }
            
