import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Home, Zap, Check, X, Sparkles, Award } from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { evaluateQuiz } from '../services/quizService';
import { MiloAvatar, FloatingBookIllustration, HotAirBalloonIllustration } from '../components/common/StorybookIllustrations';
import { soundEffects } from '../utils/soundEffects';

export const Quiz = () => {
  const navigate = useNavigate();
  const { storyData, quizAnswers, setQuizAnswers, setLearningResult, setIsLoading, setLoadingMessage } = useLearning();

  const questions = storyData?.questions || [];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const currentQ = questions[currentIdx] || {};
  const isLastQuestion = currentIdx === questions.length - 1;
  const progressPercent = Math.round(((currentIdx + 1) / (questions.length || 1)) * 100);

  const handleSelectOption = (idx) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect) {
      soundEffects.playCorrectChime();
    } else {
      soundEffects.playGentleTryAgain();
    }

    const updatedAnswers = {
      ...quizAnswers,
      [currentQ.id]: idx,
    };
    setQuizAnswers(updatedAnswers);
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      setIsLoading(true);
      setLoadingMessage("Analyzing your concept-level understanding...");
      try {
        const result = await evaluateQuiz(questions, quizAnswers);
        setLearningResult(result);
        setTimeout(() => {
          setIsLoading(false);
          navigate('/result');
        }, 800);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        navigate('/result');
      }
    } else {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  };

  const handleQuickDemoFill = async () => {
    // Dynamically build realistic demo answers matching the actual questions of the active topic
    const demoAnswers = questions.reduce((acc, q, idx) => {
      // Intentionally make ~70% correct and 1-2 questions incorrect to demonstrate diagnostic analytics
      const isMistake = idx === Math.floor(questions.length / 2) || (questions.length > 3 && idx === questions.length - 1);
      const chosenOption = isMistake 
        ? ((q.correctAnswer + 1) % (q.options?.length || 4)) 
        : q.correctAnswer;
      return { ...acc, [q.id]: chosenOption };
    }, {});

    setQuizAnswers(demoAnswers);
    setIsLoading(true);
    setLoadingMessage("Calibrating Learning Analytics...");
    try {
      const result = await evaluateQuiz(questions, demoAnswers);
      setLearningResult(result);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/result');
      }, 700);
    } catch (e) {
      setIsLoading(false);
      navigate('/result');
    }
  };

  const isCurrentCorrect = selectedOption !== null && selectedOption === currentQ.correctAnswer;

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-8 sm:py-12 px-4 relative overflow-hidden flex flex-col justify-between">
      {/* Decorative Cloud background shapes */}
      <div className="absolute top-20 left-10 w-80 h-40 bg-sky-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-52 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 flex-1 flex flex-col">
        {/* Top bar with Home link & Judge shortcut */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-slate-800 text-sm font-extrabold px-4 py-2 rounded-full border border-slate-200/90 shadow-xs hover:shadow-sm transition-all"
          >
            <Home className="w-4 h-4 text-slate-500" />
            <span>Home</span>
          </Link>

          <button
            onClick={handleQuickDemoFill}
            className="flex items-center gap-1.5 bg-amber-100/90 hover:bg-amber-200 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 shadow-xs transition-all"
            title="Pre-fills answers to test concept breakdown (Evap 100%, Cond 50%, Pre 100%, Coll 0%)"
          >
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">Judge Demo Auto-Fill</span>
            <span className="sm:hidden">Auto-Fill</span>
          </button>
        </div>

        {/* Center Grid with Side Illustrations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center flex-1">
          {/* Left Decorative Column: Floating Storybook */}
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col items-center justify-center">
            <FloatingBookIllustration />
          </div>

          {/* Center Main Quiz Card (Expanded to max-w-4xl) */}
          <div className="col-span-1 lg:col-span-8 xl:col-span-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] sm:rounded-[40px] border border-slate-100 p-7 sm:p-12 shadow-lg shadow-slate-200/40 w-full max-w-3xl lg:max-w-4xl xl:max-w-[960px]"
            >
              {/* Question Progress Header & Top-Right Points Indicator */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <span className="font-heading font-black text-slate-900 text-xl sm:text-2xl">
                    Question {currentIdx + 1} of {questions.length}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-400">
                    • {progressPercent}% complete
                  </span>
                </div>

                {/* Clear Point Indicator Badge in Top-Right Corner */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl font-heading font-black text-sm sm:text-base border shadow-xs transition-all duration-300 ${
                    hasAnswered && isCurrentCorrect
                      ? 'bg-emerald-100 text-emerald-950 border-emerald-300 scale-105 ring-2 ring-emerald-400'
                      : 'bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-100 text-amber-950 border-amber-300'
                  }`}
                >
                  <Sparkles
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      hasAnswered && isCurrentCorrect
                        ? 'text-emerald-600 fill-emerald-500'
                        : 'text-amber-700 fill-amber-500 animate-pulse'
                    }`}
                  />
                  <span>+100 Points</span>
                </div>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden mb-6">
                <motion.div
                  className="h-full bg-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              {/* Concept Pill Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-2.5 bg-sky-50 text-sky-900 border border-sky-200 px-4.5 py-2 rounded-full text-sm sm:text-base font-extrabold shadow-2xs">
                  <span className="text-lg">💧</span>
                  <span>Testing Concept: {currentQ.conceptName || 'Science Concept'}</span>
                </span>
              </div>

              {/* Question Heading with Bold, Readable Font */}
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[32px] text-slate-900 leading-snug mb-8">
                {currentQ.question}
              </h2>

              {/* Answer Options List */}
              <div 
                className="space-y-4 mb-8"
                role="radiogroup"
                aria-label={`Question ${currentIdx + 1}: ${currentQ.question}`}
              >
                {currentQ.options?.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctAnswer;
                  const letter = String.fromCharCode(65 + idx);

                  let optionClasses = "bg-white border-slate-200 text-slate-900 hover:border-amber-300 hover:bg-amber-50/25";
                  let badgeClasses = "bg-slate-100 text-slate-700 border-slate-200";

                  if (hasAnswered) {
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
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4.5 sm:p-5.5 rounded-2xl border text-base sm:text-xl font-bold flex items-center justify-between transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${optionClasses}`}
                    >
                      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                        {/* Option Letter Circle */}
                        <span
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center text-base sm:text-lg font-black flex-shrink-0 transition-colors ${badgeClasses}`}
                        >
                          {letter}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
                      </div>

                      {/* Result Icon on Right */}
                      {hasAnswered && isSelected && (
                        <div className="flex-shrink-0 ml-3">
                          {isCorrect ? (
                            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-5 h-5 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-xs">
                              <X className="w-5 h-5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after answer */}
              {hasAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`p-5 sm:p-6 rounded-2xl border mb-8 text-base sm:text-lg font-medium ${
                    isCurrentCorrect
                      ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                      : 'bg-amber-50 text-amber-950 border-amber-200'
                  }`}
                >
                  <p className="leading-relaxed">
                    <span className="font-black">{isCurrentCorrect ? '✨ Great job! ' : '💡 Clue: '}</span>
                    {currentQ.explanation}
                  </p>
                </motion.div>
              )}

              {/* Bottom Row: Milo Speech Bubble + Sunshine Yellow Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-2">
                {/* Milo Mascot with Speech Bubble */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <MiloAvatar size="lg" />

                  {/* Speech Bubble */}
                  <div className="relative bg-sky-50/90 border border-sky-100 rounded-2xl px-4.5 py-3.5 text-sm sm:text-base text-slate-800 shadow-xs max-w-sm">
                    {/* Speech bubble pointer */}
                    <div className="absolute top-5 -left-1.5 w-3 h-3 bg-sky-50 border-l border-b border-sky-100 transform rotate-45" />

                    <div className="text-xs font-black uppercase text-amber-700 tracking-wider mb-0.5">
                      Milo says:
                    </div>
                    <p className="font-bold text-slate-900 leading-snug">
                      {!hasAnswered
                        ? `Think about what we discovered in ${storyData?.topic || 'our story'}!`
                        : isCurrentCorrect
                        ? "Spot on! You nailed this concept!"
                        : "No worries! Every mistake helps us learn."}
                    </p>
                  </div>
                </div>

                {/* Primary Action Button (Sunshine Yellow) */}
                <div className="w-full sm:w-auto flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={!hasAnswered}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2.5 font-heading font-black text-lg sm:text-xl px-9 py-4.5 rounded-2xl transition-all shadow-sm ${
                      hasAnswered
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 hover:shadow-md active:translate-y-0.5'
                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    <span>{isLastQuestion ? "View Learning Report" : "Next Question"}</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Decorative Column */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center relative">
            <HotAirBalloonIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
