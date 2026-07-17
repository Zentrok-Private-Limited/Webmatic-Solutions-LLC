"use client"
import React, { useState } from 'react';
import { FaPlus, FaChevronRight } from 'react-icons/fa';

const faqsLeft = [
  { q: "Do you charge to review my current IT environment?", a: "Details about your review process." },
  { q: "Can I purchase IT hardware, software and cloud subscriptions through you?", a: "Details about procurement." },
  { q: "What are your payment terms?", a: "Information on payment terms." },
  { q: "How long does it take you to respond to our issues?", a: "Information on response times." },
  // Add remaining questions from screenshot
];

const faqsRight = [
  { q: "Why is my computer or device not turning on?", a: "Troubleshooting steps." },
  { q: "How can I contact technical support?", a: "Contact information." },
  { q: "Which company provide technical support services?", a: "Information about Innometrics." },
  // Add remaining questions from screenshot
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left font-bold text-slate-800"
      >
        {question}
        <FaPlus className={`transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      {isOpen && <p className="mt-4 text-slate-600">{answer}</p>}
    </div>
  );
};

export default function FAQPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900">FAQs</h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span>Home</span> <FaChevronRight size={12} /> <span>FAQs</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-emerald-600">Top FAQs</h2>
        <p className="text-center text-slate-600 mb-12">Get quick answers to common questions about Innometrics Software's services, support, and processes.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {faqsLeft.map((item, i) => <FAQItem key={i} question={item.q} answer={item.a} />)}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {faqsRight.map((item, i) => <FAQItem key={i} question={item.q} answer={item.a} />)}
          </div>
        </div>
      </section>
    </main>
  );
}