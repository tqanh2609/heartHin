
import React, { useState } from 'react';
import Ripple from './components/Ripple';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleHeartClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-red-950 overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />
      
      {/* Background Ambience */}
      <BackgroundParticles />

      {/* Main Content Area */}
      <div className="relative flex items-center justify-center z-20">
        
        {/* Heart-Shaped Blooming Waves */}
        <div className="absolute flex items-center justify-center">
          <Ripple delay={0} />
          <Ripple delay={1} />
          <Ripple delay={2} />
          <Ripple delay={3} />
          <Ripple delay={4} />
        </div>

        {/* The Heart Shape */}
        <div 
          className={`relative cursor-pointer transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleHeartClick}
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-30 animate-pulse" />
          
          <svg 
            viewBox="0 0 32 29.6" 
            className={`w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_35px_rgba(220,38,38,0.8)] animate-heartbeat transition-all duration-300 ${clickCount % 2 === 0 ? 'fill-red-600' : 'fill-rose-700'}`}
          >
            <path d="M23.6,0c-3.4,0-6.4,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
          </svg>

          {/* Inner Highlight for a "glassy" look */}
          <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white/20 blur-xl rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Cinematic Text */}
      <div className="absolute bottom-16 text-center z-20 space-y-2 select-none">
        <h1 className="text-white text-5xl md:text-7xl font-romantic opacity-80 animate-fade-in-up">
          Iu Hìn
        </h1>
      </div>

      <style>{`
        @keyframes bloom {
          0% {
            transform: scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.1); }
          30% { transform: scale(1); }
          45% { transform: scale(1.1); }
          60% { transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 0.8; transform: translateY(0); }
        }

        .animate-bloom {
          animation: bloom 5s cubic-bezier(0.2, 0, 0.4, 1) infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2.5s ease-in-out infinite;
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
