import React from 'react';
import { motion } from 'framer-motion';

export const MiloMascot = ({ 
  speech = "Hi! I'm Milo. Ready for an adventure?",
  emotion = "happy", // happy, thinking, cheering, excited, proud
  size = "md",      // sm, md, lg
  className = "" 
}) => {
  const getMascotExpression = () => {
    switch (emotion) {
      case 'cheering':
      case 'excited':
        return {
          eyes: '✧ ✧',
          mouth: '▽',
          color: 'from-amber-400 to-orange-400',
          hat: '🎓',
          badge: '✨'
        };
      case 'thinking':
        return {
          eyes: '• ᷅ •',
          mouth: 'o',
          color: 'from-sky-400 to-indigo-400',
          hat: '💡',
          badge: '🤔'
        };
      case 'proud':
        return {
          eyes: '˘ ˘',
          mouth: '‿',
          color: 'from-emerald-400 to-teal-400',
          hat: '👑',
          badge: '🏆'
        };
      case 'happy':
      default:
        return {
          eyes: '◕ ◕',
          mouth: '‿',
          color: 'from-amber-300 to-yellow-400',
          hat: '⭐',
          badge: '👋'
        };
    }
  };

  const exp = getMascotExpression();

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-base',
    lg: 'w-28 h-28 text-lg'
  };

  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* Milo Avatar with floating animation */}
      <motion.div
        animate={{ 
          y: [0, -6, 0],
          rotate: [-1, 1, -1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative flex-shrink-0"
      >
        <div className={`${sizeClasses[size]} rounded-3xl bg-gradient-to-br ${exp.color} border-4 border-slate-900 shadow-comic flex flex-col items-center justify-center select-none font-bold relative overflow-hidden`}>
          {/* Decorative ears/antennae */}
          <div className="absolute -top-1 w-6 h-2 bg-slate-900 rounded-full opacity-30" />
          
          {/* Milo face */}
          <div className="text-xl leading-none tracking-widest text-slate-900 font-extrabold">{exp.eyes}</div>
          <div className="text-sm font-black text-slate-900 mt-1">{exp.mouth}</div>
          
          {/* Cheeks */}
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-rose-400/60" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-rose-400/60" />
        </div>

        {/* Small floating accessory badge */}
        <motion.div 
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 bg-white rounded-full w-7 h-7 border-2 border-slate-900 shadow-comic-sm flex items-center justify-center text-sm"
        >
          {exp.hat}
        </motion.div>
      </motion.div>

      {/* Comic Speech Bubble */}
      {speech && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white border-2 border-slate-900 rounded-2xl p-3.5 shadow-comic max-w-sm"
        >
          {/* Bubble pointer */}
          <div className="absolute top-4 -left-2 w-4 h-4 bg-white border-l-2 border-b-2 border-slate-900 transform rotate-45" />
          
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
              Milo says
            </span>
          </div>
          <p className="text-slate-800 text-sm font-medium leading-relaxed">
            {speech}
          </p>
        </motion.div>
      )}
    </div>
  );
};
export default MiloMascot;
