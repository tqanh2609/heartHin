
import React from 'react';

interface RippleProps {
  delay: number;
}

const Ripple: React.FC<RippleProps> = ({ delay }) => {
  return (
    <div 
      className="absolute flex items-center justify-center animate-bloom pointer-events-none"
      style={{
        width: '200px',
        height: '200px',
        animationDelay: `${delay}s`,
        animationIterationCount: 'infinite',
      }}
    >
      <svg 
        viewBox="0 0 32 29.6" 
        className="w-full h-full fill-none stroke-red-500/40 stroke-[0.5px]"
      >
        <path d="M23.6,0c-3.4,0-6.4,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
      </svg>
    </div>
  );
};

export default Ripple;
