'use client';
import React, { useState } from 'react';
import LeadGenerationForm from '@/components/LeadGenerationForm';

export default function TestFormPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#113F64] to-[#34969E] flex items-center justify-center p-6">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Lead Generation Form Test</h1>
        <p className="text-xl mb-8 opacity-90">
          Click the button below to test the sliding Lead Generation Form component
        </p>
        
        <button 
          onClick={() => setShowQuoteForm(true)} 
          className="bg-gradient-to-r from-[#34969E] to-[#C2D92C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Get Quote
        </button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Multi-Step Form</h3>
            <p className="text-sm opacity-90">3-step form with validation and smooth transitions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Slide Animation</h3>
            <p className="text-sm opacity-90">Smooth slide-in from left with backdrop blur</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Responsive Design</h3>
            <p className="text-sm opacity-90">Works perfectly on desktop and mobile devices</p>
          </div>
        </div>
      </div>

      <LeadGenerationForm 
        isOpen={showQuoteForm} 
        onClose={() => setShowQuoteForm(false)} 
      />
    </div>
  );
}