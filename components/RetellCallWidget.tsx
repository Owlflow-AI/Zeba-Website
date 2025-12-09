import React, { useState } from 'react';
import { Mic, Phone } from 'lucide-react';

interface RetellCallWidgetProps {
  agentId: string;
  agentName: string;
  containerId: string;
}

declare global {
  interface Window {
    retellWeb: {
      createSession: (config: {
        callId: string;
        accessToken: string;
        container: string;
        enableMic: boolean;
        enableCamera: boolean;
      }) => void;
      stopCall: () => void;
    };
  }
}

const RetellCallWidget: React.FC<RetellCallWidgetProps> = ({ agentId, agentName, containerId }) => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startRetellWebCall = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://zeba-demo-call.netlify.app/.netlify/functions/createWebCall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agent_id: agentId })
      });

      const data = await response.json();

      if (!data.success) {
        setError("Failed to start call: " + (data.error || "Unknown error"));
        setIsLoading(false);
        return;
      }

      const session = data.data;
      const callId = session.call_id;
      const accessToken = session.access_token;

      if (window.retellWeb) {
        window.retellWeb.createSession({
          callId: callId,
          accessToken: accessToken,
          container: "#" + containerId,
          enableMic: true,
          enableCamera: false
        });
        setIsCallActive(true);
      } else {
        setError("Retell SDK not loaded");
      }
    } catch (err) {
      setError("Error connecting to call service");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const endCall = () => {
    if (window.retellWeb) {
      window.retellWeb.stopCall();
      setIsCallActive(false);
    }
  };

  return (
    <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Widget Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <div className="mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-gray-500 bg-white/5 px-2.5 sm:px-3 py-1 rounded-full border border-white/5">
            {agentName} Agent
          </span>
        </div>

        {/* Call Container */}
        <div id={containerId} className="w-full flex flex-col items-center justify-center min-h-[200px]">
          {!isCallActive && (
            <>
              {/* Mic Interaction Area */}
              <div className="relative group cursor-pointer">
                {/* Pulsing Rings */}
                <div className="absolute inset-0 bg-white/5 rounded-full animate-ping opacity-20 duration-1000"></div>
                <div className="absolute inset-[-10px] sm:inset-[-12px] bg-white/5 rounded-full animate-pulse opacity-40 delay-75"></div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gray-800 to-black border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-transform duration-300">
                  <Mic size={28} className="sm:w-8 sm:h-8 text-white group-hover:text-blue-400 transition-colors" />
                </div>
              </div>

              {/* Audio Waveform Visualization */}
              <div className="h-12 sm:h-16 flex items-center gap-1 mt-8 sm:mt-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 sm:w-1.5 bg-white/20 rounded-full animate-[pulse_1s_ease-in-out_infinite]"
                    style={{
                      height: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>

              {error && (
                <p className="mt-6 text-red-400 text-xs sm:text-sm font-light">
                  {error}
                </p>
              )}

              <button
                onClick={startRetellWebCall}
                disabled={isLoading}
                className="mt-6 sm:mt-8 px-6 py-2.5 bg-white text-black rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <Phone size={14} />
                    Start Call
                  </>
                )}
              </button>
            </>
          )}
        </div>

        {isCallActive && (
          <button
            onClick={endCall}
            className="mt-6 px-6 py-2.5 bg-red-500 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <Phone size={14} />
            End Call
          </button>
        )}
      </div>
    </div>
  );
};

export default RetellCallWidget;
