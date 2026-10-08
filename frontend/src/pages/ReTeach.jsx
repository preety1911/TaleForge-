import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb, Zap, HelpCircle, Check, X } from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { evaluateMiniQuiz } from '../services/quizService';
import { MiloAvatar } from '../components/common/StorybookIllustrations';
import { soundEffects } from '../utils/soundEffects';
import { generateDynamicTopicContent } from '../services/topicContentService';

export const ReTeach = () => {
  const navigate = useNavigate();
  const { reteachData, learningResult, storyData, student, setMasteryResult, setIsLoading, setLoadingMessage } = useLearning();

  const [activeTab, setActiveTab] = useState('story'); // 'story' or 'miniquiz'
  const [miniQuizIndex, setMiniQuizIndex] = useState(0);
  const [miniQuizAnswers, setLocalMiniQuizAnswers] = useState({});
  const [hasAnsweredMini, setHasAnsweredMini] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);

  const currentTopic = storyData?.topic || 'Water Cycle';
  const dynamicFallback = generateDynamicTopicContent(currentTopic, student?.name || 'Aarav');
  const data = reteachData || {
    title: dynamicFallback.reteach?.title || `${student?.name || 'Aarav'}'s Adventure in ${currentTopic}`,
    subtitle: dynamicFallback.reteach?.subtitle || `Let's make ${currentTopic} super easy!`,
    weakConcept: dynamicFallback.reteach?.weakConcept || { id: 'w1', name: currentTopic, score: 0 },
    content: dynamicFallback.reteach?.content || [],
    questions: dynamicFallback.reteach?.questions || []
  };

  const miniQuestions = data.questions || [];
  const currentMiniQ = miniQuestions[miniQuizIndex] || {};
  const isLastMiniQ = miniQuizIndex === miniQuestions.length - 1;

  const handleSelectMini = (idx) => {
    if (hasAnsweredMini) return;
    setSelectedOpt(idx);
    setHasAnsweredMini(true);

    const isCorrect = idx === currentMiniQ.correctAnswer;
    if (isCorrect) {
      soundEffects.playCorrectChime();
    } else {
      soundEffects.playGentleTryAgain();
    }

    setLocalMiniQuizAnswers((prev) => ({
      ...prev,
      [currentMiniQ.id]: idx,
    }));
  };

  const handleNextMini = async () => {
    if (isLastMiniQ) {
      setIsLoading(true);
      setLoadingMessage("Calculating mastery & growth improvement...");

      const initialWeakScore = data.weakConcept?.score ?? 0;
      const evaluation = await evaluateMiniQuiz(miniQuestions, {
        ...miniQuizAnswers,
        [currentMiniQ.id]: selectedOpt,
      });

      const activeConcepts = storyData?.concepts || dynamicFallback.concepts || [
        { name: data.weakConcept?.name || currentTopic }
      ];

      const finalResult = {
        conceptName: data.weakConcept?.name || currentTopic,
        beforeScore: initialWeakScore,
        afterScore: 100,
        improvementPoints: 100 - initialWeakScore,
        status: 'Mastered',
        miniQuizScore: evaluation.score,
        strongConcepts: learningResult?.strongConcepts || activeConcepts.slice(0, 2).map(c => ({ conceptName: c.name })),
        allConcepts: activeConcepts.map((c) => ({
          name: c.name,
          score: 100,
          status: c.name.toLowerCase() === (data.weakConcept?.name || '').toLowerCase() ? 'Mastered 🎉' : 'Mastered'
        }))
      };

      setMasteryResult(finalResult);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/mastery');
      }, 700);
    } else {
      setMiniQuizIndex((prev) => prev + 1);
      setSelectedOpt(null);
      setHasAnsweredMini(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-8 sm:py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 bg-pink-50 border border-pink-200 rounded-full px-5 py-2 shadow-xs mb-3.5">
            <Sparkles className="w-5 h-5 text-pink-600" />
            <span className="text-xs sm:text-sm font-extrabold text-pink-900 tracking-wide">
              Personalized Micro Re-Teaching
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 mb-2">
            Your Bonus Learning Adventure
          </h1>
          <h2 className="font-heading text-lg sm:text-2xl font-black text-rose-600">
            Let's make {data.weakConcept?.name || 'Collection'} super easy!
          </h2>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-2.5 rounded-full font-heading font-black text-sm sm:text-base transition-all ${
                activeTab === 'story'
                  ? 'bg-amber-300 text-slate-950 shadow-xs ring-1 ring-amber-400'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📖 Micro Story
            </button>
            <button
              onClick={() => setActiveTab('miniquiz')}
              className={`px-6 py-2.5 rounded-full font-heading font-black text-sm sm:text-base transition-all ${
                activeTab === 'miniquiz'
                  ? 'bg-amber-300 text-slate-950 shadow-xs ring-1 ring-amber-400'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⚡ Mini Quiz
            </button>
          </div>
        </div>

        {/* TAB 1: Micro Story */}
        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-7"
          >
            {/* Mascot Intro Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm flex items-center gap-4">
              <MiloAvatar size="lg" />
              <div className="bg-sky-50/90 border border-sky-100 rounded-2xl p-4 text-sm sm:text-base text-slate-800 relative flex-1">
                <div className="absolute top-5 -left-1.5 w-3 h-3 bg-sky-50 border-l border-b border-sky-100 transform rotate-45" />
                <p className="text-xs font-black uppercase text-amber-700 tracking-wider mb-1">Milo says:</p>
                <p className="font-bold text-slate-900 leading-snug">
                  No need to re-read everything! We only zoom into "{data.weakConcept?.name || 'Collection'}" with a fun new analogy.
                </p>
              </div>
            </div>

            {/* Interactive Analogy Panels */}
            {data.content?.map((panel, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-[32px] p-6 sm:p-8 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-xs sm:text-sm uppercase px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    Panel #{panel.panel || idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-500">
                    Focus: {data.weakConcept?.name}
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-3">
                  {panel.title}
                </h3>

                <p className="text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed mb-5 font-semibold">
                  {panel.description}
                </p>

                {/* Mental Model Analogy Box */}
                {panel.analogy && (
                  <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 sm:p-5 mb-5 flex items-start gap-3.5">
                    <span className="text-3xl flex-shrink-0">💡</span>
                    <div>
                      <span className="font-heading font-black text-xs sm:text-sm uppercase text-amber-900 block mb-1">
                        Simple Mental Analogy:
                      </span>
                      <p className="text-slate-900 text-base sm:text-lg font-bold italic leading-relaxed">
                        "{panel.analogy}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Character Dialogue */}
                {panel.dialogue && (
                  <div className="bg-sky-50/90 border border-sky-100 rounded-2xl p-4 text-base sm:text-lg font-bold text-sky-950">
                    💬 {panel.dialogue}
                  </div>
                )}
              </div>
            ))}

            {/* CTA to launch Mini Quiz */}
            <div className="bg-white border border-slate-100 rounded-[32px] p-7 sm:p-8 shadow-sm text-center">
              <h4 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-2">
                Ready for a quick challenge?
              </h4>
              <p className="text-slate-600 text-base sm:text-lg mb-6 font-semibold">
                Answer 2 quick questions to prove you've mastered {data.weakConcept?.name}!
              </p>
              <button
                onClick={() => setActiveTab('miniquiz')}
                className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 font-heading font-black text-base sm:text-lg py-4 px-9 rounded-2xl shadow-sm hover:shadow-md transition-all active:translate-y-0.5 text-slate-950"
              >
                <Zap className="w-5 h-5 text-amber-800" />
                <span>Take Mini Quiz</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Mini Quiz */}
        {activeTab === 'miniquiz' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 rounded-[32px] sm:rounded-[36px] p-6 sm:p-9 shadow-sm"
          >
            <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
              <span className="bg-rose-50 text-rose-700 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full border border-rose-200">
                🎯 Target Concept: {data.weakConcept?.name || 'Collection'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400">
                Mini Question {miniQuizIndex + 1} of {miniQuestions.length}
              </span>
            </div>

            <h3 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 mb-7">
              {currentMiniQ.question}
            </h3>

            {/* Options */}
            <div 
              className="space-y-3.5 mb-7"
              role="radiogroup"
              aria-label="Mini Quiz Options"
            >
              {currentMiniQ.options?.map((opt, idx) => {
                const isSelected = selectedOpt === idx;
                const isCorrect = idx === currentMiniQ.correctAnswer;
                const letter = String.fromCharCode(65 + idx);

                let optionClasses = "bg-white border-slate-200 text-slate-900 hover:border-amber-300";
                let badgeClasses = "bg-slate-100 text-slate-700 border-slate-200";

                if (hasAnsweredMini) {
                  if (isSelected) {
                    if (isCorrect) {
                      optionClasses = "bg-emerald-50/90 border-2 border-emerald-500 text-slate-950";
                      badgeClasses = "bg-emerald-500 text-white border-emerald-500";
                    } else {
                      optionClasses = "bg-rose-50/90 border-2 border-rose-400 text-slate-950";
                      badgeClasses = "bg-rose-500 text-white border-rose-500";
                    }
                  } else if (isCorrect) {
                    optionClasses = "bg-emerald-50/50 border border-emerald-300 text-slate-900";
                    badgeClasses = "bg-emerald-100 text-emerald-800 border-emerald-300";
                  } else {
                    optionClasses = "bg-slate-50/60 border-slate-200 text-slate-400 opacity-60";
                    badgeClasses = "bg-slate-100 text-slate-400 border-slate-200";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Option ${letter}: ${opt.text}`}
                    disabled={hasAnsweredMini}
                    onClick={() => handleSelectMini(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border text-base sm:text-lg font-bold flex items-center justify-between transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${optionClasses}`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center text-sm sm:text-base font-black flex-shrink-0 ${badgeClasses}`}>
                        {letter}
                      </span>
                      <span>{opt.text}</span>
                    </div>

                    {hasAnsweredMini && isSelected && (
                      <div className="flex-shrink-0 ml-3">
                        {isCorrect ? (
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-xs">
                            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {hasAnsweredMini && (
              <div className="p-4 sm:p-5 bg-emerald-50 text-emerald-950 border border-emerald-200 rounded-2xl mb-5 text-base sm:text-lg font-semibold leading-relaxed">
                ✨ {currentMiniQ.explanation}
              </div>
            )}

            {/* Mini Quiz Action Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextMini}
                disabled={!hasAnsweredMini}
                className={`flex items-center gap-2.5 font-heading font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-sm transition-all active:translate-y-0.5 ${
                  hasAnsweredMini
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 hover:shadow-md'
                    : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                }`}
              >
                <span>{isLastMiniQ ? "See Mastery Result! 🎉" : "Next Mini Question"}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default ReTeach;
