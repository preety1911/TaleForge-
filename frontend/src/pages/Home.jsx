import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Compass, ArrowRight, Zap, Target, Award, Brain } from 'lucide-react';
import MiloMascot from '../components/common/MiloMascot';

export const Home = () => {
  const navigate = useNavigate();

  const floatingVariants = {
    animate: (i) => ({
      y: [0, -12, 0],
      rotate: [-3, 3, -3],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  const featureCards = [
    {
      icon: '📖',
      title: 'Comic-Book Stories',
      desc: 'Complex textbook concepts converted into thrilling adventures and relatable characters.',
      bg: 'bg-amber-100',
      border: 'border-amber-400',
    },
    {
      icon: '🎴',
      title: 'Interactive Flashcards',
      desc: '3D flip cards with core terms, key takeaways, and memorable mental model analogies.',
      bg: 'bg-rose-100',
      border: 'border-rose-400',
    },
    {
      icon: '🎯',
      title: 'Concept Diagnostics',
      desc: 'Pinpoints exactly which concept was understood and which needs a different angle.',
      bg: 'bg-sky-100',
      border: 'border-sky-400',
    },
    {
      icon: '✨',
      title: 'Personalized Re-Teaching',
      desc: 'Generates a micro-story specifically tailored to fill the weak concept gaps.',
      bg: 'bg-emerald-100',
      border: 'border-emerald-400',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50/70 via-white to-sky-50/50 relative overflow-hidden py-8 sm:py-14 px-4">
      {/* Background Floating Elements */}
      <motion.div
        custom={1}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-12 left-10 text-4xl select-none opacity-40 pointer-events-none hidden md:block"
      >
        ⭐
      </motion.div>
      <motion.div
        custom={2}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-16 text-5xl select-none opacity-40 pointer-events-none hidden md:block"
      >
        🚀
      </motion.div>
      <motion.div
        custom={1.5}
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 left-20 text-4xl select-none opacity-40 pointer-events-none hidden md:block"
      >
        🧪
      </motion.div>
      <motion.div
        custom={2.5}
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 right-24 text-4xl select-none opacity-40 pointer-events-none hidden md:block"
      >
        🎨
      </motion.div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Hackathon Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 bg-amber-200 border-2 border-slate-900 rounded-full px-5 py-2 shadow-comic-sm mb-6"
        >
          <Sparkles className="w-5 h-5 text-amber-700" />
          <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-wide">
            Not just an AI story generator — The Adaptive Learning Loop
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white border-4 border-slate-900 rounded-3xl p-2 shadow-comic hover:rotate-3 transition-transform inline-flex items-center justify-center overflow-hidden">
            <img src="/logo.png?v=2" alt="StoryBuddy Logo" className="w-full h-full object-contain block" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-none mb-4"
        >
          STORY <span className="text-amber-500 drop-shadow-sm underline decoration-wavy decoration-sky-400">BUDDY</span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-4"
        >
          "Turn learning into an adventure!"
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-slate-700 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed font-semibold"
        >
          Learn through interactive comic stories. Discover what you truly understand with concept-level analytics, and get a personalized story made just for your weak spots.
        </motion.p>

        {/* Mascot Milo greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <MiloMascot
            speech="Hi! I'm Milo. Pick any school concept and let's go on an epic story adventure together!"
            emotion="happy"
            size="md"
          />
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <button
            onClick={() => navigate('/setup')}
            className="group flex items-center gap-3 bg-amber-400 hover:bg-amber-300 active:translate-y-1 text-slate-900 font-heading font-black text-xl sm:text-2xl py-4.5 px-9 rounded-2xl border-4 border-slate-900 shadow-comic transition-all"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>

        {/* The 7-Step Learning Loop Visual Card */}
        <div className="w-full bg-white border-4 border-slate-900 rounded-3xl p-6 sm:p-9 shadow-comic mb-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-sky-400 text-slate-900 font-black text-xs sm:text-sm px-5 py-2 rounded-bl-2xl border-l-2 border-b-2 border-slate-900 uppercase">
            Core Differentiator
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-2.5 flex items-center gap-2.5">
            <Brain className="w-7 h-7 text-sky-600" />
            The Closed-Loop Learning Process
          </h3>
          <p className="text-slate-700 text-base sm:text-lg mb-7 font-semibold leading-relaxed">
            Most EdTech gives you a single quiz score (e.g. 60%). StoryBuddy breaks understanding down into individual concepts and rewires teaching on the fly:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {[
              { step: '1', title: 'TEACH', desc: 'Comic Story', color: 'bg-amber-100 border-amber-400' },
              { step: '2', title: 'TEST', desc: 'Interactive Quiz', color: 'bg-sky-100 border-sky-400' },
              { step: '3', title: 'ANALYZE', desc: 'Concept Gaps', color: 'bg-indigo-100 border-indigo-400' },
              { step: '4', title: 'ADAPT', desc: 'Target Weakness', color: 'bg-pink-100 border-pink-400' },
              { step: '5', title: 'RE-TEACH', desc: 'Micro Story', color: 'bg-purple-100 border-purple-400' },
              { step: '6', title: 'RETEST', desc: 'Mini Check', color: 'bg-yellow-100 border-yellow-400' },
              { step: '7', title: 'MASTERY', desc: 'Growth Verified', color: 'bg-emerald-100 border-emerald-400' },
            ].map((item) => (
              <div
                key={item.step}
                className={`${item.color} border-2 border-slate-900 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-center shadow-comic-sm`}
              >
                <span className="font-mono text-xs font-black text-slate-500">#{item.step}</span>
                <span className="font-heading font-black text-sm sm:text-base text-slate-900">{item.title}</span>
                <span className="text-xs text-slate-700 font-bold">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full text-left">
          {featureCards.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`${feat.bg} border-3 border-slate-900 rounded-3xl p-6 sm:p-7 shadow-comic hover:-translate-y-1 transition-transform`}
            >
              <div className="text-4xl mb-3.5">{feat.icon}</div>
              <h4 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mb-2">{feat.title}</h4>
              <p className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
