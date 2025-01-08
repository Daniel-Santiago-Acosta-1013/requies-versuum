import React from 'react';
import Lottie from 'lottie-react';
import featherAnimation from '../assets/feather-writing.json';

export const LottieBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80 dark:via-black/30 dark:to-black/80 z-10" />
      <div className="absolute inset-0 scale-[400%] opacity-[0.08] dark:opacity-[0.05]">
        <Lottie
          animationData={featherAnimation}
          loop={true}
          style={{
            width: '100%',
            height: '100%',
            filter: 'sepia(1) hue-rotate(20deg)'
          }}
        />
      </div>
    </div>
  );
};