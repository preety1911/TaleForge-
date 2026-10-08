import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Award, Sparkles, TrendingUp, CheckCircle, RotateCcw, Star, Check } from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { MiloAvatar } from '../components/common/StorybookIllustrations';

export const Mastery = () => {
  const navigate = useNavigate();
  const { masteryResult, student, storyData, resetProgress } = useLearning();

  const currentTopic = storyData?.topic || student?.topic || 'Science';
  const defaultConcepts = storyData?.concepts?.map((c) => ({
    name: c.name,
    score: 100,
    status: 'Mastered'
  })) || [
    { name: currentTopic, score: 100, status: 'Mastered 🎉' }
  ];

  const data = masteryResult || {
    conceptName: currentTopic,
    beforeScore: 50,
    afterScore: 100,
    improvementPoints: 50,
    allConcepts: defaultConcepts
  };

  useEffect(() => {
    // Launch celebratory confetti
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const handleStartAnother = () => {
    resetProgress();
    navigate('/setup');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Celebration Banner */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-2.5 shadow-sm mb-5"
        >
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <span className="font-heading font-black text-xs sm:text-base text-emerald-900 tracking-wide">
            THE LEARNING LOOP COMPLETE!
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl text-slate-900 mb-3"
        >
          Concept Mastered! 🎉
        </motion.h1>

        <p className="text-slate-600 font-semibold text-base sm:text-xl mb-9 max-w-2xl mx-auto leading-relaxed">
          Congratulations {student?.name || 'Aarav'}! Through targeted re-teaching, you closed your learning gap.
        </p>

        {/* Mascot Milo celebrating */}
        <div className="flex justify-center mb-9">
          <div className="bg-white rounded-[32px] p-5 sm:p-6 border border-slate-100 shadow-sm flex items-center gap-4.5 max-w-lg">
            <MiloAvatar size="lg" />
            <div className="bg-sky-50/90 border border-sky-100 rounded-2xl p-4 text-left relative flex-1">
              <div className="absolute top-5 -left-1.5 w-3 h-3 bg-sky-50 border-l border-b border-sky-100 transform rotate-45" />
              <p className="text-xs font-black uppercase text-amber-700 tracking-wider mb-0.5">Milo says:</p>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                YOU DID IT! You understood the tricky concept by seeing it from another angle!
              </p>
            </div>
          </div>
        </div>

        {/* Improvement Transformation Card */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-slate-100 rounded-[36px] p-6 sm:p-9 shadow-sm mb-9 text-left"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-heading font-black uppercase text-slate-400 tracking-wider">
                Targeted Concept
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mt-0.5">
                {data.conceptName}
              </h3>
            </div>
            <div className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-4 py-2 rounded-2xl font-heading font-black text-sm sm:text-base shadow-xs flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span>+{data.improvementPoints} Percentage Points!</span>
            </div>
          </div>

          {/* Before & After Comparison */}
          <div className="grid grid-cols-2 gap-5 mb-7">
            <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-5 text-center">
              <span className="text-xs font-heading font-black uppercase text-rose-600">
                Before Re-Teaching
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-rose-700 my-1.5">
                {data.beforeScore}%
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-rose-600">Needs Review</span>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 text-center">
              <span className="text-xs font-heading font-black uppercase text-emerald-700">
                After Re-Teaching
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-emerald-700 my-1.5">
                {data.afterScore}%
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-emerald-700">Fully Mastered ✨</span>
            </div>
          </div>

          {/* Full Final Concept Grid */}
          <h4 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-4">
            Final Concept Report Card:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {data.allConcepts?.map((c, i) => (
              <div
                key={i}
                className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-heading font-black text-base sm:text-lg text-slate-900">{c.name}</span>
                </div>
                <span className="text-xs sm:text-sm font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  {c.score}% • {c.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Memorable Closing Quotation */}
        <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-5 mb-9">
          <p className="font-heading font-bold text-base sm:text-lg lg:text-xl text-slate-800 italic">
            "StoryBuddy doesn't just teach. It discovers how each child learns."
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={handleStartAnother}
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 active:translate-y-0.5 font-heading font-black text-lg sm:text-xl py-4.5 px-9 rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-950"
          >
            <RotateCcw className="w-6 h-6" />
            <span>Start Another Adventure</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Mastery;
