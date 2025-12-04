import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const faqs = [
    { q: "What exactly does Zeba's AI calling agent do?", a: "Zeba's AI agent makes and receives phone calls just like a trained human rep. It books appointments, qualifies leads, answers customer queries, gathers information, handles objections, and updates your CRM — all in real time, 24/7." },
    { q: "How natural does the AI sound on calls?", a: "Extremely natural. Zeba uses human-level conversational AI with tone matching, emotional cues, and dynamic response generation. Callers won't feel like they're talking to a chatbot — they experience a fluent, context-aware conversation." },
    { q: "Can the AI handle complex or unpredictable conversations?", a: "Yes. Zeba's agent understands context, follows branching logic, asks clarifying questions, and adapts to the caller's intent. It handles objections, confusion, price enquiries, and follow-up questions smoothly." },
    { q: "What types of calls can Zeba handle?", a: "Zeba supports: Outbound lead qualification, Appointment setting, Customer support, Order-taking, Follow-ups & reactivation, Satisfaction surveys, Payment reminders & collections, Inbound routing & FAQs. If a human rep can say it, Zeba can automate it." },
    { q: "How accurate is the AI at understanding callers?", a: "Zeba uses advanced speech recognition tuned specifically for business calls. It handles different accents, background noise, interruptions, and fast speech with high accuracy." },
    { q: "Can Zeba integrate with my CRM or booking system?", a: "Yes. Zeba connects with CRMs, calendars, ticketing systems, and databases. It can log calls, update lead status, book appointments, create tasks and notes, and trigger workflows — all automatically." },
    { q: "How does Zeba handle objections or difficult conversations?", a: "The AI is trained on proven sales, customer service, and dialogue frameworks. It can de-escalate, clarify, provide alternatives, push for commitments, and transfer to a human if needed. It's built to convert and resolve — not just answer questions." },
    { q: "Can people tell they're speaking to an AI?", a: "That's up to you. You can choose: Full transparency, Hybrid model, or Human-like introduction. Most businesses find callers engage normally either way." },
    { q: "Does Zeba support multiple languages and accents?", a: "Yes. Zeba can speak and understand many global languages and adapt its tone & style to different regions." },
    { q: "How quickly can I deploy an AI calling agent?", a: "Most clients are live within 24–48 hours. We set up scripts, integrations, call flows, and testing — you get a fully trained agent ready to start calling." },
    { q: "Will the AI replace my team?", a: "Zeba is designed to augment, not replace. It handles repetitive, high-volume or low-skill conversations so your human team can focus on high-value calls." },
    { q: "What happens if the AI gets stuck?", a: "If a conversation becomes too complex or falls outside its scope, Zeba can transfer to a human, escalate the case, create a follow-up ticket, or ask for additional information. It fails gracefully — never awkwardly." },
    { q: "How does billing work?", a: "Pricing is simple and scalable. You only pay for minutes used or for a monthly plan tailored to your call volume." },
    { q: "Is Zeba compliant and secure?", a: "Yes. Zeba supports GDPR, TCPA calling rules, secure data encryption, call recording controls, and redaction of sensitive data. Your customer information stays protected." },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16">
        <div className="lg:w-1/3">
           <ScrollReveal>
             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
               Frequently asked questions
             </h2>
           </ScrollReveal>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-3 sm:gap-4">
           {faqs.slice(0, showAll ? faqs.length : 6).map((item, index) => (
             <ScrollReveal key={index} delay={index * 100}>
               <div
                  className="border border-white/10 rounded-lg bg-[#0a0a0a] overflow-hidden transition-all duration-300"
               >
                <button
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left gap-3"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                   <span className="text-white font-medium text-sm sm:text-base md:text-lg">{item.q}</span>
                   {openIndex === index ? <Minus className="text-white flex-shrink-0" size={18} /> : <Plus className="text-white flex-shrink-0" size={18} />}
                </button>
                <div
                  className={`px-4 sm:px-5 md:px-6 text-gray-400 text-sm sm:text-base overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-4 sm:pb-5 md:pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                   {item.a}
                </div>
               </div>
             </ScrollReveal>
           ))}

           {!showAll && faqs.length > 6 && (
             <div className="flex justify-center mt-4">
               <ScrollReveal delay={600}>
                 <button
                   onClick={() => setShowAll(true)}
                   className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                 >
                   See More
                 </button>
               </ScrollReveal>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;