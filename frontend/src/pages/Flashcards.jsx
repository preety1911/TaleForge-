import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RotateCcw, Shuffle, ChevronLeft, ChevronRight, 
  Lightbulb, Sparkles, CheckCircle2, BookOpen, Layers, ArrowRight
} from 'lucide-react';
import { useLearning, AVAILABLE_TOPICS } from '../context/LearningContext';
import { soundEffects } from '../utils/soundEffects';
import MiloMascot from '../components/common/MiloMascot';
import { getFlashcardsForTopic } from '../services/storyService';

export const Flashcards = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const { storyData, switchTopic, student } = useLearning();

  const currentTopic = storyData?.topic || 'Water Cycle';
  const initialCards = (storyData?.flashcards && storyData.flashcards.length > 0)
    ? storyData.flashcards 
    : getFlashcardsForTopic(currentTopic, student?.name || 'Aarav');

  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [understoodIds, setUnderstoodIds] = useState(new Set());

  // Update cards when topic changes
  useEffect(() => {
    const freshCards = (storyData?.flashcards && storyData.flashcards.length > 0)
      ? storyData.flashcards 
      : getFlashcardsForTopic(currentTopic, student?.name || 'Aarav');
    setCards(freshCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [currentTopic, storyData?.flashcards, student?.name]);

  const currentCard = cards[currentIndex] || cards[0] || {};
  const totalCards = cards.length;

  const handleFlip = () => {
    soundEffects.playCorrectChime();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleShuffle = () => {
    soundEffects.playCorrectChime();
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

  const toggleUnderstood = (id) => {
    soundEffects.playCorrectChime();
    setUnderstoodIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <div className={`w-full flex flex-col items-center ${isEmbedded ? 'pt-2 pb-6' : 'min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-8 sm:py-12 px-4'}`}>
      <div className="w-full max-w-[960px] mx-auto flex flex-col items-center">
        
        {/* Dynamic Topic Switcher Bar */}
        <div className="w-full mb-6 bg-white border-3 border-slate-900 rounded-3xl p-4 sm:p-5 shadow-comic">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span className="font-heading font-black text-xs sm:text-sm uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Select Topic to Study:</span>
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Active: {currentTopic}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {AVAILABLE_TOPICS.map((top) => {
              const isActive = currentTopic.toLowerCase() === top.toLowerCase();
              return (
                <button
                  key={top}
                  type="button"
                  onClick={() => switchTopic(top)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-heading font-black border-2 border-slate-900 transition-all ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-comic-sm scale-105'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {top}
                </button>
              );
            })}
          </div>
        </div>

        {/* Header (only when not embedded) */}
        {!isEmbedded && (
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black border-2 border-slate-900 shadow-comic-sm mb-3">
              <Layers className="w-4 h-4 text-sky-700" />
              <span>Interactive Concept Flashcards</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-2">
              {currentTopic} Flashcards
            </h1>
            <p className="text-slate-600 font-semibold text-sm sm:text-base">
              Click the card to flip between terms and mental analogies.
            </p>
          </div>
        )}

        {/* Top Control Bar: Card count, progress, shuffle */}
        <div className="w-full flex items-center justify-between gap-4 mb-5 px-2">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-base sm:text-lg text-slate-900">
              Card {currentIndex + 1} of {totalCards}
            </span>
            <span className="text-xs font-bold text-slate-500 hidden sm:inline">
              ({understoodIds.size} mastered)
            </span>
          </div>

          <button
            type="button"
            onClick={handleShuffle}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border-2 border-slate-900 px-4 py-2 rounded-2xl text-xs sm:text-sm font-heading font-black text-slate-900 shadow-comic-sm transition-transform active:translate-y-0.5"
            title="Randomize card order"
          >
            <Shuffle className="w-4 h-4 text-amber-600" />
            <span>Shuffle</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-slate-200 rounded-full border-2 border-slate-900 mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-amber-400"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* The 3D Interactive Flip Card */}
        <div 
          className="w-full cursor-pointer perspective-1000 mb-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 rounded-[36px]"
          onClick={handleFlip}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleFlip();
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              handleNext();
            } else if (e.key === 'ArrowLeft') {
              e.preventDefault();
              handlePrev();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`Flashcard: ${currentCard.term}. Currently showing ${isFlipped ? 'explanation side' : 'term side'}. Press Space or Enter to flip, Left/Right arrow to navigate`}
          style={{ perspective: '1200px' }}
        >
          <motion.div
            className="w-full min-h-[380px] sm:min-h-[420px] bg-white border-4 border-slate-900 rounded-[36px] p-7 sm:p-10 shadow-comic flex flex-col justify-between relative transition-shadow hover:shadow-comic-lg"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* FRONT SIDE */}
            <div 
              className={`w-full h-full flex flex-col justify-between ${isFlipped ? 'hidden' : 'flex'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-amber-100 text-amber-950 font-heading font-black text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-comic-sm">
                    {currentCard.icon || '⚡'} {currentCard.category || currentTopic}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-wide">
                    Question / Term
                  </span>
                </div>

                <div className="py-6 sm:py-8 text-center">
                  <span className="text-4xl sm:text-5xl mb-4 block">
                    {currentCard.icon || '💡'}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 leading-snug">
                    {currentCard.term}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-center pt-4 border-t-2 border-slate-100">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-500 animate-pulse">
                  <span>👆 Click anywhere to reveal explanation & mental analogy</span>
                </span>
              </div>
            </div>

            {/* BACK SIDE (Answer + Simple Mental Analogy) */}
            <div 
              className={`w-full h-full flex flex-col justify-between ${isFlipped ? 'flex' : 'hidden'}`}
              style={{ transform: 'rotateY(180deg)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 text-emerald-950 font-heading font-black text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-comic-sm">
                    ✓ Explanation & Analogy
                  </span>
                  <span className="text-xs sm:text-sm font-black text-emerald-600 uppercase tracking-wide">
                    Flipped
                  </span>
                </div>

                {/* Definition */}
                <div className="mb-5">
                  <p className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-relaxed">
                    {currentCard.definition}
                  </p>
                </div>

                {/* Simple Mental Analogy Box */}
                {currentCard.analogy && (
                  <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 mb-4 shadow-comic-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="font-heading font-black text-sm sm:text-base text-amber-950">
                        Mental Analogy (How to picture it):
                      </span>
                    </div>
                    <p className="text-slate-800 font-extrabold text-base sm:text-lg italic leading-relaxed">
                      "{currentCard.analogy}"
                    </p>
                  </div>
                )}

                {/* Key Takeaway */}
                {currentCard.keyTakeaway && (
                  <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold text-sky-900">
                    <Sparkles className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span><strong>Key takeaway:</strong> {currentCard.keyTakeaway}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleUnderstood(currentCard.id);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-heading font-black border-2 border-slate-900 transition-all ${
                    understoodIds.has(currentCard.id)
                      ? 'bg-emerald-300 text-slate-950 shadow-comic-sm'
                      : 'bg-white hover:bg-emerald-50 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{understoodIds.has(currentCard.id) ? "Mastered! ✓" : "Mark as Mastered"}</span>
                </button>

                <span className="text-xs font-bold text-slate-400">
                  Click to flip back ↩
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="w-full flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-2 font-heading font-black px-6 sm:px-7 py-3.5 rounded-2xl border-3 border-slate-900 bg-white hover:bg-slate-100 text-slate-900 shadow-comic-sm transition-all active:translate-y-0.5 text-base"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={handleFlip}
            className="hidden sm:inline-flex items-center gap-2 font-heading font-black px-6 py-3.5 rounded-2xl border-2 border-slate-900 bg-amber-200 hover:bg-amber-300 text-slate-950 text-sm shadow-comic-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Flip Card</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 font-heading font-black px-7 sm:px-8 py-3.5 rounded-2xl border-3 border-slate-900 bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-comic transition-all active:translate-y-0.5 text-base"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mascot Milo Encouragement */}
        <div className="w-full mt-2">
          <MiloMascot
            speech={`Flashcards train your brain memory muscle! Flip each card and test if you can explain ${currentTopic} in your own words.`}
            emotion="happy"
            size="sm"
          />
        </div>

        {/* Bottom CTA to test in Quiz */}
        {!isEmbedded && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate('/quiz')}
              className="inline-flex items-center gap-2.5 bg-rose-500 hover:bg-rose-400 text-white font-heading font-black text-base sm:text-lg px-8 py-4 rounded-2xl border-3 border-slate-900 shadow-comic transition-all active:translate-y-0.5"
            >
              <span>Ready for the Quiz Challenge</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Flashcards;
