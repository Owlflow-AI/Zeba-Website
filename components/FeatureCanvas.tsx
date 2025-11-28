import React, { useState } from 'react';
import { 
  Box, 
  FileText, 
  Search, 
  Command, 
  MoreHorizontal, 
  Copy, 
  ChevronDown, 
  Folder,
  ChevronRight,
  ShieldAlert,
  Edit3,
  Sparkles,
  LayoutGrid
} from 'lucide-react';

const FeatureCanvas: React.FC = () => {
  const [activeTab, setActiveTab] = useState('logic');

  const tabs = [
    { id: 'create', label: 'Create the agent' },
    { id: 'policies', label: 'Define policies', description: 'Set clear guardrails in plain language. Decide what should be automated, when to escalate, and how to manage sensitive cases.' },
    { id: 'logic', label: 'Design the logic' },
    { id: 'test', label: 'Test and launch' },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orange-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Navigation */}
        <div className="lg:w-1/3 pt-10 flex flex-col">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4 text-pink-500">
               <LayoutGrid size={20} />
               <span className="text-sm font-mono uppercase tracking-widest text-gray-400">Agent Canvas</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Built to handle</h2>
            <p className="text-gray-400 text-lg">
              The fastest way to build, govern, and scale enterprise AI agents.
            </p>
            <div className="mt-8">
                <a href="https://cal.com/rahulhakhla/owlflowai" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors">
                    Explore Agent Canvas
                </a>
            </div>
          </div>

          <div className="flex flex-col gap-0 border-l border-white/10 relative">
             <div className="absolute left-[-1px] top-[50%] h-12 w-[1px] bg-white transition-all duration-300"></div>
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                className={`pl-8 py-6 cursor-pointer group transition-all duration-300 ${activeTab === tab.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <h3 className="text-xl font-medium mb-2 text-white">{tab.label}</h3>
                {activeTab === tab.id && tab.description && (
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xs animate-in fade-in slide-in-from-left-2 duration-300">
                    {tab.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right UI Canvas Mockup */}
        <div className="lg:w-2/3 relative">
            <div className="relative z-10 w-full h-[700px] rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-2xl shadow-2xl overflow-hidden flex font-sans text-sm">
                
                {/* Canvas Sidebar */}
                <div className="w-64 border-r border-white/5 bg-[#1C1C1C] flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                             <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500"></div>
                             <span className="font-medium text-gray-200">Banking AI</span>
                        </div>
                        <div className="flex gap-2 text-gray-500">
                            <Copy size={14} />
                            <ChevronDown size={14} />
                        </div>
                    </div>

                    {/* Search */}
                    <div className="p-3">
                        <div className="relative bg-black/20 rounded-md flex items-center px-3 py-1.5 border border-white/5">
                            <Search size={14} className="text-gray-500 mr-2" />
                            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-gray-300 text-xs w-full placeholder-gray-600" />
                            <div className="flex gap-1 ml-auto">
                                <span className="bg-white/10 rounded px-1 text-[10px] text-gray-500">⌘</span>
                                <span className="bg-white/10 rounded px-1 text-[10px] text-gray-500">K</span>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto glass-scroll p-2 space-y-1">
                        <MenuItem icon={<Box size={14} />} label="Policies" active={false} />
                        <MenuItem icon={<LayoutGrid size={14} />} label="Data sources" active={false} />
                        <MenuItem icon={<Sparkles size={14} />} label="Personalization" active={false} />
                        <MenuItem icon={<ShieldAlert size={14} />} label="Evaluation" active={false} />
                        <MenuItem icon={<Command size={14} />} label="Advanced" active={false} />
                    </div>

                    {/* Footer Status */}
                    <div className="p-3 border-t border-white/5 bg-black/20">
                        <div className="flex items-center justify-between mb-2">
                             <span className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Remaining memory
                             </span>
                             <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">High</span>
                        </div>
                        <div className="flex items-center justify-between">
                             <span className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                Last locked by
                             </span>
                             <span className="text-[10px] bg-white/5 text-gray-400 px-1.5 py-0.5 rounded">Internal system</span>
                        </div>
                    </div>
                </div>

                {/* Canvas Main Area */}
                <div className="flex-1 bg-[#141414] p-6 relative overflow-hidden">
                    {/* Background Grid */}
                     <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    
                    {/* Floating Cards Container */}
                    <div className="relative z-10 h-full flex flex-col gap-4">
                        
                        {/* Group: Scenarios */}
                        <div className="bg-[#1C1C1C] rounded-lg border border-white/5 overflow-hidden w-[380px] self-end shadow-xl">
                            <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 text-gray-400 bg-white/[0.02]">
                                <Folder size={14} />
                                <span className="text-xs font-medium">Scenarios</span>
                                <ChevronDown size={12} className="ml-auto" />
                            </div>
                            <div className="p-1">
                                <div className="group flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer">
                                    <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center text-orange-500">
                                        <FileText size={14} />
                                    </div>
                                    <span className="text-sm text-gray-200">New account onboarding</span>
                                    <MoreHorizontal size={14} className="ml-auto text-gray-600 opacity-0 group-hover:opacity-100" />
                                </div>
                                <div className="group flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer relative">
                                    <div className="absolute left-[-16px] top-1/2 w-4 h-[1px] bg-white/10"></div>
                                    <FileText size={14} className="text-gray-500 ml-1" />
                                    <span className="text-sm text-gray-400">Loan application support</span>
                                </div>
                                <div className="group flex items-center gap-3 p-2 bg-white/5 rounded-md cursor-pointer relative ml-4 border border-white/10 shadow-lg translate-x-2">
                                     <div className="absolute left-[-20px] top-1/2 w-5 h-[1px] bg-white/20"></div>
                                    <ShieldAlert size={14} className="text-gray-500" />
                                    <span className="text-sm text-gray-200">Fraud alert handling</span>
                                    <span className="ml-auto text-[10px] bg-blue-500 text-white px-1.5 rounded-sm">New!</span>
                                </div>
                                 <div className="group flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer relative">
                                    <FileText size={14} className="text-gray-500 ml-1" />
                                    <span className="text-sm text-gray-400">Credit card replacement</span>
                                </div>
                            </div>
                        </div>

                         {/* Group: Supporting Docs */}
                         <div className="bg-[#1C1C1C] rounded-lg border border-white/5 overflow-hidden w-[340px] self-end translate-x-[-40px] shadow-xl">
                            <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 text-gray-400 bg-white/[0.02]">
                                <Folder size={14} />
                                <span className="text-xs font-medium">Supporting docs</span>
                                <ChevronDown size={12} className="ml-auto" />
                            </div>
                            <div className="p-1">
                                <DocItem label="Compliance guidelines.pdf" />
                                <DocItem label="ID verification.csv" />
                                <DocItem label="Escalation flowchart.png" />
                            </div>
                        </div>

                        {/* Other Groups collapsed */}
                        <div className="w-[280px] self-end translate-x-[-20px] opacity-60">
                            <div className="flex items-center gap-2 text-gray-500 py-1">
                                <Folder size={14} />
                                <span className="text-xs">Brand</span>
                                <ChevronDown size={12} className="ml-auto rotate-180" />
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 py-1">
                                <Folder size={14} />
                                <span className="text-xs">Rules</span>
                                <ChevronDown size={12} className="ml-auto rotate-180" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image for the Canvas Section */}
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/canyon/1200/800" 
                    alt="Background Texture" 
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
            </div>
        </div>

      </div>

      <div className="container mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
                icon={<Box size={20} />} 
                title="Extremely customizable" 
            />
            <FeatureCard 
                icon={<Edit3 size={20} />} 
                title="Auto policy writing" 
            />
             <FeatureCard 
                icon={<Sparkles size={20} />} 
                title="Built-in Copilot" 
            />
      </div>
    </section>
  );
};

const MenuItem = ({ icon, label, active }: { icon: React.ReactNode, label: string, active: boolean }) => (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
        {icon}
        <span className="text-xs font-medium">{label}</span>
    </div>
);

const DocItem = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer">
        <FileText size={14} className="text-gray-500" />
        <span className="text-sm text-gray-400">{label}</span>
    </div>
);

const FeatureCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="p-6 border-l border-white/10 hover:border-white/40 transition-colors group">
        <div className="mb-4 text-white opacity-50 group-hover:opacity-100 transition-opacity">
            {icon}
        </div>
        <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
);

export default FeatureCanvas;