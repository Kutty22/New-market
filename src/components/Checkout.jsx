// Checkout.jsx la irukura button code-a ipadi mathunga:
<button 
  disabled={!isButtonActive}
  onClick={props.onPaymentSuccess} // Ithu thaan magic! Dashboard-ku kondu pogum
  className={`w-full px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex justify-center items-center gap-2
    ${isButtonActive 
      ? 'bg-primary hover:bg-blue-600 text-white shadow-[0_10px_30px_-10px_rgba(0,102,255,0.6)] transform hover:-translate-y-1' 
      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
    }`}
>
  Proceed to Live Dashboard 🚀
</button>
