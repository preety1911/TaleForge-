import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RotateCcw, ChevronDown } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

export const Navbar = () => {
  const { student, resetProgress } = useLearning();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleStartOver = () => {
    resetProgress();
    navigate('/setup');
  };

  const stages = [
    { id: 'teach', label: '1. Teach', path: '/story', number: '①' },
    { id: 'cards', label: 'Flashcards', path: '/flashcards', number: '🎴' },
    { id: 'test', label: '2. Test', path: '/quiz', number: '✏️' },
    { id: 'analyze', label: '3. Analyze', path: '/result', number: '③' },
    { id: 'reteach', label: '4. Re-Teach', path: '/reteach', number: '④' },
    { id: 'mastery', label: '5. Mastery', path: '/mastery', number: '⑤' },
  ];

  const getActiveStageIndex = () => {
    switch (currentPath) {
      case '/story': return 0;
      case '/flashcards': return 1;
      case '/quiz': return 2;
      case '/result': return 3;
      case '/reteach': return 4;
      case '/mastery': return 5;
      default: return -1;
    }
  };

  const activeIndex = getActiveStageIndex();

  return (
    <header className="sticky top-0 z-40 bg-[#fffdfa]/95 backdrop-blur-md border-b border-amber-200/70 shadow-xs h-20">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        {/* Brand Left */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 max-w-14 max-h-14 rounded-2xl bg-white border-2 border-slate-900 shadow-comic-sm flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
            <img 
              src="/logo.png?v=2" 
              alt="StoryBuddy Logo" 
              className="w-full h-full max-w-full max-h-full object-contain block" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl tracking-tight text-slate-900 leading-tight">
              STORYBUDDY
            </span>
            <span className="text-xs font-semibold text-slate-400 tracking-wider whitespace-nowrap">
              Stories • Learn • Grow
            </span>
          </div>
        </Link>

        {/* 5-Step Learning Navigation Center */}
        <nav 
          aria-label="Learning Stages"
          className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0"
        >
          {stages.map((stage, idx) => {
            const isCurrent = idx === activeIndex;
            const isCompleted = activeIndex !== -1 && idx < activeIndex;

            return (
              <Link
                key={stage.id}
                to={stage.path}
                aria-current={isCurrent ? 'page' : undefined}
                className={`flex items-center gap-2 px-4 lg:px-4.5 py-2.5 rounded-full text-sm lg:text-base whitespace-nowrap transition-all ${
                  isCurrent
                    ? 'bg-amber-300 text-slate-950 shadow-xs ring-2 ring-amber-400 font-black scale-105'
                    : isCompleted
                    ? 'bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100 font-extrabold'
                    : 'bg-white/90 text-slate-700 border border-slate-200 hover:bg-slate-50 font-bold'
                }`}
              >
                <span className="text-sm lg:text-base">{isCompleted ? '✓' : stage.number}</span>
                <span>{stage.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Current Student Badge & Action Right */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {student?.name && (
            <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-full text-sm lg:text-base font-bold text-slate-800 shadow-xs whitespace-nowrap">
              <span className="w-7 h-7 rounded-full bg-amber-200 border border-amber-300 flex items-center justify-center text-sm flex-shrink-0">
                👦
              </span>
              <span className="hidden sm:inline">
                Adventurer: <span className="font-black text-slate-900">{student.name}</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-slate-600 hidden sm:inline font-bold">Grade {student.classLevel}</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          )}

          <button
            onClick={handleStartOver}
            aria-label="Start New Topic"
            className="flex items-center gap-2 bg-white hover:bg-amber-50 text-slate-800 text-xs sm:text-sm lg:text-base font-extrabold py-2.5 px-4 rounded-full border border-slate-200 shadow-xs whitespace-nowrap transition-all"
            title="Start New Topic"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden lg:inline">New Topic</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
