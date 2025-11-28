import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What does Zeba do?", a: "Zeba provides enterprise-grade AI voice agents that handle customer support, outbound sales, and operational tasks with human-like conversation capabilities." },
    { q: "How do you prevent cheating in AI interviews?", a: "Our AI monitors for suspicious patterns, multiple voices, and uses browser locking technologies to ensure integrity during automated interviews." },
    { q: "What does the AI report include?", a: "Reports include detailed call transcripts, sentiment analysis, action item extraction, and custom scoring metrics tailored to your use case." },
    { q: "How customizable is Zeba?", a: "Extremely. You can configure voice tone, knowledge base, escalation rules, and integrate directly with your CRM and backend systems." },
    { q: "How do you prevent AI bias?", a: "We train on diverse datasets and implement strict ethical guardrails to ensure fair and unbiased interactions across all demographics." },
  ];

  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
           <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
             Frequently asked questions
           </h2>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-4">
           {faqs.map((item, index) => (
             <div 
                key={index} 
                className="border border-white/10 rounded-lg bg-[#0a0a0a] overflow-hidden transition-all duration-300"
             >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                   <span className="text-white font-medium text-lg">{item.q}</span>
                   {openIndex === index ? <Minus className="text-white" size={20} /> : <Plus className="text-white" size={20} />}
                </button>
                <div 
                  className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                   {item.a}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;