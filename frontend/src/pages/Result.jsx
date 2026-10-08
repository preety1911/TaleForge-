import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, AlertCircle, 
  ArrowRight, BookOpen, Lightbulb, Target, Check, RotateCcw, Filter
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { generateReTeachStory } from '../services/storyService';
import { MiloAvatar } from '../components/common/StorybookIllustrations';
import { soundEffects } from '../utils/soundEffects';

export const Result = () => {
  const navigate = useNavigate();
  const { learningResult, student, storyData, setReteachData, setIsLoading, setLoadingMessage } = useLearning();

  const currentTopic = storyData?.topic || student?.topic || 'Water Cycle';
  const dynamicConcepts = storyData?.concepts || [
    { id: 'c1', name: currentTopic }
  ];

  const defaultConceptScores = dynamicConcepts.map((c, i) => {
    const score = i === dynamicConcepts.length - 1 ? 0 : (i === 1 ? 50 : 100);
    const status = score >= 80 ? 'Strong' : (score >= 50 ? 'Needs Practice' : 'Needs Review');
    return {
      conceptId: c.id,
      conceptName: c.name,
      score,
      status,
      correctAnswers: score === 100 ? 1 : 0,
      totalQuestions: 1
    };
  });

  const result = learningResult || {
    score: 60,
    totalQuestions: dynamicConcepts.length || 4,
    correctAnswers: Math.max(1, (dynamicConcepts.length || 4) - 1),
    conceptScores: defaultConceptScores,
    strongConcepts: defaultConceptScores.filter(c => c.status === 'Strong'),
    weakConcepts: defaultConceptScores.filter(c => c.status !== 'Strong')
  };

  // Interactive Concept Filter State
  const [selectedConcept, setSelectedConcept] = useState(null);

  const handleSelectConcept = (concept) => {
    soundEffects.playCorrectChime();
    if (selectedConcept?.conceptId === concept.conceptId) {
      // Toggle off / Reset to all
      setSelectedConcept(null);
    } else {
      setSelectedConcept(concept);
    }
  };

  const handleClearFilter = () => {
    soundEffects.playCorrectChime();
    setSelectedConcept(null);
  };

  // Metrics: Concept-specific vs Aggregated Overall
  const isFiltered = Boolean(selectedConcept);
  const displayedScore = isFiltered ? selectedConcept.score : result.score;
  const displayedCorrect = isFiltered ? selectedConcept.correctAnswers : result.correctAnswers;
  const displayedTotal = isFiltered ? selectedConcept.totalQuestions : result.totalQuestions;
  const displayedLabel = isFiltered ? `${selectedConcept.conceptName} Score` : "Overall Score";

  const primaryWeakConcept = selectedConcept || result.conceptScores?.slice().sort((a, b) => a.score - b.score)[0] || { 
    conceptName: currentTopic, 
    conceptId: 'w1' 
  };

  const handleStartReteach = async () => {
    setIsLoading(true);
    setLoadingMessage(`Generating personalized bonus story for ${primaryWeakConcept.conceptName}...`);
    try {
      const reteach = await generateReTeachStory(
        student,
        storyData?.topic || 'Water Cycle',
        [primaryWeakConcept]
      );
      setReteachData(reteach);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/reteach');
      }, 700);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      navigate('/reteach');
    }
  };

  const getConceptIcon = (name) => {
    const norm = (name || '').toLowerCase();
    if (norm.includes('evaporat')) return '☀️';
    if (norm.includes('condens')) return '🌧️';
    if (norm.includes('precipitat')) return '💧';
    if (norm.includes('collect')) return '🌊';
    if (norm.includes('sun') || norm.includes('star')) return '☀️';
    if (norm.includes('inner') || norm.includes('rocky') || norm.includes('terrestrial')) return '🪨';
    if (norm.includes('giant') || norm.includes('outer') || norm.includes('jupiter') || norm.includes('gas')) return '🪐';
    if (norm.includes('orbit') || norm.includes('gravit')) return '🛸';
    if (norm.includes('photo') || norm.includes('plant') || norm.includes('leaf') || norm.includes('chlorophyll')) return '🍃';
    if (norm.includes('magnet')) return '🧲';
    if (norm.includes('force') || norm.includes('energy')) return '⚡';
    if (norm.includes('recycle') || norm.includes('eco')) return '🌿';
    return '⚡';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Strong':
        return { text: 'text-emerald-700', bg: 'bg-emerald-50', bar: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-800' };
      case 'Needs Practice':
        return { text: 'text-amber-700', bg: 'bg-amber-50', bar: 'bg-amber-400', badge: 'bg-amber-100 text-amber-800' };
      case 'Needs Review':
      default:
        return { text: 'text-rose-700', bg: 'bg-rose-50', bar: 'bg-rose-500', badge: 'bg-rose-100 text-rose-800' };
    }
  };

  // Concept-specific knowledge takeaways
  const getConceptLearnedPoints = (name) => {
    const norm = (name || '').toLowerCase();
    if (norm.includes('evaporat')) {
      return [
        "How solar heat gives liquid molecules energy to break free",
        "Liquid water turning into invisible, lightweight water vapor",
        "Evaporative cooling: how rising heat cools surface air"
      ];
    }
    if (norm.includes('condens')) {
      return [
        "How vapor cools down in high altitude and slows down",
        "Billions of tiny droplets clustering around dust to form clouds",
        "Why morning dew and cold drink glasses develop moisture"
      ];
    }
    if (norm.includes('precipitat')) {
      return [
        "Cloud saturation: when droplets grow too heavy for air currents",
        "Earth's gravitational force pulling raindrops downward",
        "The 4 types of precipitation: rain, snow, sleet, and hail"
      ];
    }
    if (norm.includes('collect')) {
      return [
        "Rainwater runoff flowing downhill along natural slopes and streams",
        "Underground aquifers filtering and storing fresh drinking water",
        "How oceans and lakes store water for the cycle to restart"
      ];
    }
    if (norm.includes('sun') || norm.includes('star') || norm.includes('solar')) {
      return [
        "How the Sun's immense gravity acts as the gravitational anchor for all 8 planets",
        "Nuclear fusion producing constant radiant heat and solar light",
        "Solar wind and coronal mass ejections traveling across our solar system"
      ];
    }
    if (norm.includes('inner') || norm.includes('rocky') || norm.includes('terrestrial')) {
      return [
        "The 4 rocky inner planets: Mercury, Venus, Earth, and Mars",
        "Dense metal-silicate cores and solid crusts suited for craters and valleys",
        "Shorter orbital years due to closer proximity to the Sun"
      ];
    }
    if (norm.includes('giant') || norm.includes('outer') || norm.includes('gas')) {
      return [
        "The 4 outer gas giants: Jupiter, Saturn, Uranus, and Neptune",
        "Vast swirling atmospheres composed primarily of hydrogen, helium, and methane",
        "Spectacular ring systems and dozens of orbiting moons"
      ];
    }
    if (norm.includes('orbit') || norm.includes('gravit')) {
      return [
        "Elliptical planetary orbits balanced by forward inertia and central gravitational pull",
        "Why planets further from the Sun travel slower and have much longer years",
        "How gravitational slingshots allow probes to explore interstellar space"
      ];
    }
    if (norm.includes('photo') || norm.includes('plant')) {
      return [
        "Chlorophyll capturing radiant solar light inside chloroplast organelles",
        "Converting water and carbon dioxide into oxygen and nourishing glucose sugars",
        "How plant leaves act as natural solar-powered food factories for Earth"
      ];
    }
    return [
      `Mastered fundamental definitions and mechanisms of ${name}`,
      `Connected scientific cause-and-effect relationships for ${name}`,
      `Identified real-world examples and everyday applications`
    ];
  };

  const getConceptPracticePoints = (name) => {
    const norm = (name || '').toLowerCase();
    if (norm.includes('evaporat')) {
      return [
        "Distinguishing between invisible gas (vapor) and visible liquid drops",
        "Why evaporation rate speeds up when temperature increases"
      ];
    }
    if (norm.includes('condens')) {
      return [
        "Remembering that clouds are made of liquid droplets, not gas or smoke",
        "Recognizing how temperature drops trigger condensation"
      ];
    }
    if (norm.includes('precipitat')) {
      return [
        "Understanding how atmospheric freezing creates snowflakes vs hail",
        "Tracking how rainfall replenishes groundwater reservoirs"
      ];
    }
    if (norm.includes('collect')) {
      return [
        "How water filters through soil layers into deep rock aquifers",
        "Why collection is the critical reset button that starts the cycle again"
      ];
    }
    if (norm.includes('sun') || norm.includes('star') || norm.includes('solar')) {
      return [
        "Differentiating between planets that reflect light and stars that generate light",
        "Calculating comparative sizes of Earth versus the massive Sun"
      ];
    }
    if (norm.includes('inner') || norm.includes('rocky') || norm.includes('terrestrial')) {
      return [
        "Remembering the correct sequence of inner planets outward from the Sun",
        "Contrasting Mars' thin carbon dioxide atmosphere with Venus' runaway greenhouse effect"
      ];
    }
    if (norm.includes('giant') || norm.includes('outer') || norm.includes('gas')) {
      return [
        "Distinguishing gas giants (Jupiter, Saturn) from ice giants (Uranus, Neptune)",
        "Understanding why gas giants have no solid walking surface"
      ];
    }
    if (norm.includes('orbit') || norm.includes('gravit')) {
      return [
        "Understanding how mass and distance determine the strength of gravity",
        "Clarifying why spacecraft remain in freefall orbit without falling straight down"
      ];
    }
    if (norm.includes('photo') || norm.includes('plant')) {
      return [
        "Reviewing chemical reactants (CO2 + H2O) versus products (Glucose + O2)",
        "Distinguishing day-time photosynthesis from continuous plant respiration"
      ];
    }
    return [
      `Reviewing challenging multi-step scenario questions for ${name}`,
      `Connecting ${name} with related principles across science and nature`
    ];
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-8 sm:py-12">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Top Header */}
        <div className="mb-9 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl sm:text-4xl">⭐</span>
              <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
                Your Learning Adventure Report
              </h1>
            </div>
            <p className="text-base sm:text-xl text-slate-600 font-semibold ml-10 sm:ml-12">
              {isFiltered 
                ? `Showing focused analytics for ${selectedConcept.conceptName}` 
                : "Here's how you did and what to focus on next!"}
            </p>
          </div>

          {/* Quick Active Filter Pill */}
          {isFiltered && (
            <div className="inline-flex items-center gap-2 bg-amber-100 border-2 border-slate-900 px-4 py-2 rounded-2xl shadow-comic-sm self-start sm:self-auto">
              <Filter className="w-4 h-4 text-amber-800" />
              <span className="text-xs sm:text-sm font-black text-slate-900">
                Filtered: {selectedConcept.conceptName}
              </span>
              <button
                type="button"
                onClick={handleClearFilter}
                className="ml-1 text-xs font-black text-amber-900 hover:text-rose-600 underline"
              >
                (Reset All)
              </button>
            </div>
          )}
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* COLUMN 1 (Left): Student Profile, Donut Score & Milo */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 border-3 border-slate-900 shadow-comic">
              
              {/* Student Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100 mb-5">
                <div className="w-14 h-14 rounded-full bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-2xl flex-shrink-0 shadow-comic-sm">
                  👦
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                    {student?.name || 'Aarav'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 font-semibold">
                    Age {student?.age || 10} • Grade {student?.classLevel || 5}
                  </p>
                </div>
              </div>

              {/* Subject & Topic Meta */}
              <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-slate-500 block text-xs uppercase font-extrabold tracking-wider">Subject</span>
                  <span className="font-heading font-black text-slate-900 text-base sm:text-lg block mt-0.5">{student?.subject || 'Science'}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-slate-500 block text-xs uppercase font-extrabold tracking-wider">
                    {isFiltered ? 'Concept' : 'Topic'}
                  </span>
                  <span className="font-heading font-black text-slate-900 text-base sm:text-lg truncate block mt-0.5">
                    {isFiltered ? selectedConcept.conceptName : (student?.topic || currentTopic)}
                  </span>
                </div>
              </div>

              {/* Circular Donut Progress Chart (Dynamic to Selected Concept) */}
              <div className="flex flex-col items-center justify-center my-6">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#f1f5f9"
                      strokeWidth="10"
                      fill="none"
                    />
                    <motion.circle
                      key={`donut-${displayedScore}-${selectedConcept?.conceptId || 'all'}`}
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={displayedScore >= 80 ? "#10b981" : displayedScore >= 50 ? "#f59e0b" : "#f43f5e"}
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 251.2 - (251.2 * displayedScore) / 100 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{ strokeDasharray: 251.2 }}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center px-2">
                    <span className="font-heading font-black text-5xl sm:text-6xl text-slate-900 leading-none">
                      {displayedScore}%
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-500 mt-1 line-clamp-1">
                      {displayedLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics Capsules */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 bg-emerald-50 text-emerald-950 border border-emerald-200 rounded-2xl p-3.5 text-base sm:text-lg font-bold">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 stroke-[3]" />
                  <span>{displayedCorrect} / {displayedTotal} Correct Answers</span>
                </div>
                <div className="flex items-center gap-3 bg-sky-50 text-sky-950 border border-sky-200 rounded-2xl p-3.5 text-base sm:text-lg font-bold">
                  <BookOpen className="w-5 h-5 text-sky-600 flex-shrink-0 stroke-[2.5]" />
                  <span>{displayedTotal} {isFiltered ? `Questions on ${selectedConcept.conceptName}` : "Total Questions"}</span>
                </div>
              </div>

              {/* Reset view shortcut when filtered */}
              {isFiltered && (
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center">
                  <button
                    type="button"
                    onClick={handleClearFilter}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-amber-700 hover:text-amber-900"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to All Concepts</span>
                  </button>
                </div>
              )}
            </div>

            {/* Milo Mascot Speech Card */}
            <div className="bg-white rounded-[32px] p-5 sm:p-6 border-3 border-slate-900 shadow-comic flex items-center gap-4">
              <MiloAvatar size="lg" />
              <div className="bg-sky-50/90 border border-sky-200 rounded-2xl p-4 text-sm sm:text-base text-slate-800 relative flex-1">
                <div className="absolute top-5 -left-1.5 w-3 h-3 bg-sky-50 border-l border-b border-sky-200 transform rotate-45" />
                <p className="font-heading font-black text-slate-900 text-base mb-1">
                  {isFiltered ? `Inspecting ${selectedConcept.conceptName}!` : `You did great, ${student?.name || 'Aarav'}!`}
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-snug font-semibold">
                  {isFiltered
                    ? `Click any card again or tap 'Show All' to compare all concepts together.`
                    : "Click on any concept card below to isolate its specific score and learning tips!"}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2 (Center): Concept-wise Performance & Diagnostic Analysis */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Concept-wise Performance Section */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border-3 border-slate-900 shadow-comic">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                    Concept-wise Performance
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-500">
                    Click any concept card to filter and inspect detailed diagnostics.
                  </p>
                </div>

                {/* Show All Toggle Button */}
                <button
                  type="button"
                  onClick={handleClearFilter}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-heading font-black border-2 border-slate-900 transition-all ${
                    !isFiltered
                      ? 'bg-amber-300 text-slate-950 shadow-comic-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Show All Topics
                </button>
              </div>

              {/* Interactive Concept Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">
                {result.conceptScores?.map((concept, idx) => {
                  const colors = getStatusColor(concept.status);
                  const icon = getConceptIcon(concept.conceptName);
                  const isCardActive = selectedConcept?.conceptId === concept.conceptId;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectConcept(concept)}
                      className={`cursor-pointer rounded-2xl p-4 sm:p-4.5 transition-all flex flex-col justify-between relative ${
                        isCardActive
                          ? 'bg-amber-50/90 border-3 border-slate-900 ring-4 ring-amber-400 shadow-comic scale-[1.03]'
                          : 'bg-slate-50/70 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-100 shadow-2xs'
                      }`}
                    >
                      {/* Active Indicator Pin */}
                      {isCardActive && (
                        <div className="absolute -top-2.5 -right-2 bg-amber-400 border-2 border-slate-900 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-comic-sm">
                          Active ✓
                        </div>
                      )}

                      <div>
                        <div className="text-3xl mb-2">{icon}</div>
                        <h4 className="font-heading font-black text-sm sm:text-base text-slate-900 truncate">
                          {concept.conceptName}
                        </h4>
                        <div className="font-heading font-black text-2xl sm:text-3xl lg:text-[28px] text-slate-900 my-2">
                          {concept.score}%
                        </div>
                        <span className={`text-xs sm:text-sm font-black px-2.5 py-1 rounded-full inline-block ${colors.badge}`}>
                          {concept.status}
                        </span>
                      </div>
                      
                      <div className="w-full h-2.5 sm:h-3 bg-slate-200 rounded-full mt-4 overflow-hidden border border-slate-300/60">
                        <div className={`h-full ${colors.bar} rounded-full`} style={{ width: `${concept.score}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic Row 1: What You Learned & What Needs Practice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* What You Learned (Concept-Filtered) */}
              <div className="bg-emerald-50/70 border-3 border-slate-900 rounded-[28px] p-6 sm:p-7 shadow-comic">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-emerald-950 font-heading font-black text-lg sm:text-xl">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                    <span>What you learned</span>
                  </div>
                  {isFiltered && (
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                      {selectedConcept.conceptName}
                    </span>
                  )}
                </div>

                <ul className="text-base sm:text-lg text-slate-800 space-y-3 leading-relaxed font-semibold">
                  {isFiltered ? (
                    selectedConcept.score >= 50 ? (
                      getConceptLearnedPoints(selectedConcept.conceptName).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-black">•</span>
                          <span>{pt}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-black">•</span>
                        <span>You explored {selectedConcept.conceptName}! Reviewing the quick re-teach story will turn this into a strong concept.</span>
                      </li>
                    )
                  ) : (
                    // Aggregated across all concepts
                    (result.strongConcepts?.length > 0 ? result.strongConcepts : result.conceptScores?.slice(0, 3)).map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-black">•</span>
                        <span>{getConceptLearnedPoints(c.conceptName)[0]} ({c.conceptName})</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* What Needs Practice (Concept-Filtered) */}
              <div className="bg-rose-50/70 border-3 border-slate-900 rounded-[28px] p-6 sm:p-7 shadow-comic">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-rose-950 font-heading font-black text-lg sm:text-xl">
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 flex-shrink-0" />
                    <span>What needs more practice</span>
                  </div>
                  {isFiltered && (
                    <span className="text-xs font-black text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300">
                      {selectedConcept.conceptName}
                    </span>
                  )}
                </div>

                <ul className="text-base sm:text-lg text-slate-800 space-y-3 leading-relaxed font-semibold">
                  {isFiltered ? (
                    selectedConcept.score < 100 ? (
                      getConceptPracticePoints(selectedConcept.conceptName).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-500 font-black">•</span>
                          <span>{pt}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2 text-emerald-800 font-bold">
                        <span className="text-emerald-600 font-black">🌟</span>
                        <span>You scored a perfect 100% on {selectedConcept.conceptName}! No extra practice required.</span>
                      </li>
                    )
                  ) : (
                    // Aggregated across all weak concepts
                    (result.weakConcepts?.length > 0 ? result.weakConcepts : [primaryWeakConcept]).map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-500 font-black">•</span>
                        <span>{getConceptPracticePoints(c.conceptName)[0]} ({c.conceptName})</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            {/* Diagnostic Row 2: Common Mistakes & Next Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Common Mistakes */}
              <div className="bg-sky-50/70 border-3 border-slate-900 rounded-[28px] p-6 sm:p-7 shadow-comic">
                <div className="flex items-center gap-2.5 mb-4 text-sky-950 font-heading font-black text-lg sm:text-xl">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 flex-shrink-0" />
                  <span>Key Concept Nuances</span>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold">
                  {isFiltered
                    ? `• When analyzing ${selectedConcept.conceptName}, watch out for confusing temperature shifts with state changes.`
                    : `• Remember: Evaporation requires heat, condensation requires cooling, and gravity brings rain back during collection.`}
                </p>
              </div>

              {/* Next Steps */}
              <div className="bg-purple-50/70 border-3 border-slate-900 rounded-[28px] p-6 sm:p-7 shadow-comic">
                <div className="flex items-center gap-2.5 mb-4 text-purple-950 font-heading font-black text-lg sm:text-xl">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                  <span>Next Steps</span>
                </div>
                <ul className="text-base sm:text-lg text-slate-800 space-y-2.5 leading-relaxed font-semibold">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-black">•</span>
                    <span>Focus on <strong>{primaryWeakConcept.conceptName}</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-black">•</span>
                    <span>Review the personalized re-teaching story.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-black">•</span>
                    <span>Take the follow-up quiz to reach 100% mastery.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sunshine Yellow CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleStartReteach}
                className="w-full flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-lg sm:text-xl py-4.5 sm:py-5 px-8 rounded-2xl border-3 border-slate-900 shadow-comic hover:shadow-comic-lg transition-all active:translate-y-0.5"
              >
                <BookOpen className="w-6 h-6 text-slate-900" />
                <span>Practice {primaryWeakConcept.conceptName} Story & Retest</span>
                <ArrowRight className="w-6 h-6 text-slate-900" />
              </button>
            </div>
          </div>

          {/* COLUMN 3 (Right): Before & After Comparison */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 border-3 border-slate-900 shadow-comic">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                  Before & After
                </h3>
                {isFiltered && (
                  <span className="text-xs font-black bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
                    {selectedConcept.conceptName}
                  </span>
                )}
              </div>
              
              <p className="text-sm sm:text-base text-slate-500 font-semibold mb-5">
                {isFiltered ? `${selectedConcept.conceptName} Improvement` : "Overall Score Improvement"}
              </p>

              {/* Before vs After Score Circles */}
              <div className="flex items-center justify-between gap-3 my-6 px-2">
                
                {/* Before Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-4 border-slate-900 bg-sky-50 flex items-center justify-center font-heading font-black text-2xl sm:text-3xl text-slate-900 shadow-comic-sm">
                    {displayedScore}%
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-slate-700 mt-2">Before</span>
                  <span className="text-xs sm:text-sm text-slate-500 font-semibold">
                    {isFiltered ? "(Initial)" : "(Initial Quiz)"}
                  </span>
                </div>

                <div className="text-slate-400 text-3xl font-black">→</div>

                {/* After Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-4 border-slate-900 bg-emerald-100 flex items-center justify-center font-heading font-black text-2xl sm:text-3xl text-emerald-950 shadow-comic-sm">
                    100%
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-900 mt-2">After</span>
                  <span className="text-xs sm:text-sm text-slate-500 font-semibold">(Follow-up)</span>
                </div>
              </div>

              {/* Improvement Banner */}
              <div className="bg-emerald-100 text-emerald-950 border-2 border-slate-900 rounded-2xl p-4 text-center text-sm sm:text-base font-black my-5 shadow-comic-sm">
                ↑ Potential Gain: +{100 - displayedScore}%!
              </div>

              {/* Concept Improvement Bars (Highlights selected concept or shows all) */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-black text-slate-900 block">
                    {isFiltered ? `${selectedConcept.conceptName} Target` : "Concept Improvement"}
                  </span>
                  {isFiltered && (
                    <button
                      type="button"
                      onClick={handleClearFilter}
                      className="text-xs font-bold text-slate-500 hover:text-slate-900 underline"
                    >
                      Show all
                    </button>
                  )}
                </div>

                {(result.conceptScores || []).map((item, i) => {
                  const isItemActive = selectedConcept?.conceptId === item.conceptId;
                  const isDimmed = isFiltered && !isItemActive;
                  const colors = ['bg-emerald-500', 'bg-amber-400', 'bg-sky-400', 'bg-indigo-500'];
                  const color = colors[i % colors.length];

                  return (
                    <div 
                      key={i} 
                      onClick={() => handleSelectConcept(item)}
                      className={`cursor-pointer text-xs sm:text-sm transition-opacity p-2 rounded-xl ${
                        isItemActive ? 'bg-amber-100/70 border border-slate-900 font-black' : isDimmed ? 'opacity-40 hover:opacity-80' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex justify-between font-extrabold text-slate-800 mb-1.5">
                        <span className="text-sm sm:text-base flex items-center gap-1.5">
                          {isItemActive && <span>👉</span>}
                          <span>{item.conceptName || item.name}</span>
                        </span>
                        <span className="text-slate-600 font-black">{item.score}% → 100%</span>
                      </div>
                      <div className="w-full h-2.5 sm:h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
                        <div className={`h-full ${color} rounded-full`} style={{ width: '100%' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Result;
