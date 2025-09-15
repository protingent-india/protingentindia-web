'use client';
import React, { useState } from 'react';
import LeadGenerationForm from '@/components/LeadGenerationForm';

export default function DemoFormPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#113F64] to-[#34969E] flex items-center justify-center p-6 relative overflow-hidden">
      {/* No header/navigation - clean demo */}
      <div className="text-center text-white max-w-4xl relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Lead Generation Form Demo</h1>
          <p className="text-xl opacity-90 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Experience our multi-step sliding form with professional design and smooth animations
          </p>
        </div>
        
        <div className="mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <button 
            onClick={() => setShowQuoteForm(true)} 
            className="bg-gradient-to-r from-[#34969E] to-[#C2D92C] text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
          >
            🚀 Get Quote
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fadeIn" style={{animationDelay: '0.6s'}}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold text-xl mb-3">Multi-Step Form</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              3-step form with validation, smooth transitions, and professional UX design
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="font-bold text-xl mb-3">Slide Animation</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Smooth slide-in from left with backdrop blur and responsive design
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-bold text-xl mb-3">Responsive Design</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Works perfectly on desktop (500px panel) and mobile (full width)
            </p>
          </div>
        </div>

        <div className="mt-12 animate-fadeIn" style={{animationDelay: '0.8s'}}>
          <p className="text-sm opacity-75">
            Test all features: form validation, step navigation, responsive behavior, and accessibility
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#C2D92C]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#34969E]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>

      <LeadGenerationForm 
        isOpen={showQuoteForm} 
        onClose={() => setShowQuoteForm(false)} 
      />
    </div>
  );
}