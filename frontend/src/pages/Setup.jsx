import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, Rocket, Check, Compass, Wand2, Loader2 } from 'lucide-react';
import { useLearning, DEFAULT_STUDENT } from '../context/LearningContext';
import { generateStory } from '../services/storyService';
import MiloMascot from '../components/common/MiloMascot';

export const Setup = () => {
  const navigate = useNavigate();
  const { student, setStudent, setStoryData, resetProgress, setIsLoading, isLoading, setLoadingMessage, loadingMessage } = useLearning();

  const [formData, setFormData] = useState({
    name: student.name || 'Aarav',
    age: student.age || 10,
    classLevel: student.classLevel || '5',
    subject: student.subject || 'Science',
    topic: student.topic || 'Water Cycle',
    difficulty: student.difficulty || 'Easy',
  });

  const subjects = [
    { id: 'Science', label: 'Science', icon: '🔬', color: 'bg-emerald-100 hover:bg-emerald-200 border-emerald-500' },
    { id: 'Space', label: 'Space & Astronomy', icon: '🚀', color: 'bg-indigo-100 hover:bg-indigo-200 border-indigo-500' },
    { id: 'Environment', label: 'Nature & Ecology', icon: '🌿', color: 'bg-teal-100 hover:bg-teal-200 border-teal-500' },
    { id: 'Physics', label: 'Forces & Energy', icon: '⚡', color: 'bg-amber-100 hover:bg-amber-200 border-amber-500' },
  ];

  const difficulties = [
    { id: 'Easy', label: 'Easy (Explorer)', badge: '🌱 Friendly & Fun' },
    { id: 'Medium', label: 'Medium (Adventurer)', badge: '⭐ Standard Grade Level' },
    { id: 'Challenge', label: 'Challenge (Master)', badge: '🔥 Extra Brain Teasers' },
  ];

  const topicsBySubject = {
    Science: ['Water Cycle', 'Evaporation', 'Condensation', 'Precipitation', 'Collection', 'Plant Photosynthesis', 'States of Matter', 'Human Digestive System'],
    Space: ['Solar System & Planets', 'Moon Phases', 'Gravity in Space', 'Stars and Constellations'],
    Environment: ['Forest Ecosystems', 'Recycling & Waste', 'Pollination by Bees', 'Renewable Energy'],
    Physics: ['Magnets & Magnetic Fields', 'Simple Machines', 'Light and Shadows', 'Sound Waves'],
  };

  const sanitizeInput = (val, max = 50) => {
    if (!val) return '';
    return String(val)
      .replace(/[<>{}\\]/g, '')
      .trim()
      .slice(0, max);
  };

  const handlePreFillDemo = () => {
    setFormData({
      name: 'Aarav',
      age: 10,
      classLevel: '5',
      subject: 'Science',
      topic: 'Water Cycle',
      difficulty: 'Easy',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanData = {
      ...formData,
      name: sanitizeInput(formData.name, 40) || 'Aarav',
      topic: sanitizeInput(formData.topic, 60) || 'Water Cycle',
      classLevel: sanitizeInput(formData.classLevel, 10) || '5',
      age: Math.min(18, Math.max(5, Number(formData.age) || 10)),
    };

    resetProgress();
    setStudent(cleanData);

    setIsLoading(true);
    setLoadingMessage(`Milo is crafting ${cleanData.name}'s personalized ${cleanData.topic} adventure...`);

    try {
      const generated = await generateStory(cleanData);
      setStoryData(generated);
      // Brief aesthetic pause for pleasant loading effect
      setTimeout(() => {
        setIsLoading(false);
        navigate('/story');
      }, 900);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      navigate('/story');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-8 sm:py-12 px-4 relative flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-white text-center"
            >
              <div className="bg-white text-slate-900 border-4 border-slate-900 rounded-3xl p-8 max-w-md w-full shadow-comic flex flex-col items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-16 h-16 border-4 border-amber-400 border-t-slate-900 rounded-full mb-4"
                />
                <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">
                  Building your learning adventure...
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {loadingMessage || "Generating story panels, concept illustrations, and adaptive quiz..."}
                </p>
                <div className="flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1.5 rounded-full text-xs font-bold border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Topic: {formData.topic}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Header & Demo Shortcut */}
        <div className="text-center mb-8 sm:mb-10 w-full flex flex-col items-center">
          <div className="flex justify-center mb-3">
            <MiloMascot
              speech={`Tell me about yourself! I'll create a story specially suited for your age and curiosity.`}
              emotion="excited"
              size="sm"
            />
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 mb-2">
            Let's Start Your Adventure!
          </h1>
          <p className="text-slate-600 font-semibold text-base sm:text-lg">
            Customize the topic, student profile, and difficulty level.
          </p>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handlePreFillDemo}
              className="inline-flex items-center gap-2 bg-amber-200 hover:bg-amber-300 border-2 border-slate-900 px-4.5 py-2.5 rounded-2xl text-xs sm:text-sm font-black text-slate-900 shadow-comic-sm transition-transform active:translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Click to Pre-Fill Official Demo (Aarav • Grade 5 • Water Cycle)</span>
            </button>
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white border-4 border-slate-900 rounded-[36px] p-7 sm:p-10 pb-9 sm:pb-12 shadow-comic"
        >
          <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
            {/* Student Info Row with Proportional Column Alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5">
              <div className="sm:col-span-6">
                <label htmlFor="student-name" className="block font-heading font-black text-base text-slate-800 mb-2">
                  Student Name
                </label>
                <input
                  id="student-name"
                  type="text"
                  required
                  maxLength={40}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Aarav"
                  className="w-full comic-input px-5 py-3.5 rounded-2xl border-2 border-slate-900 font-bold text-base focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white placeholder:text-slate-400 placeholder:font-normal leading-normal"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="student-age" className="block font-heading font-black text-base text-slate-800 mb-2">
                  Age
                </label>
                <input
                  id="student-age"
                  type="number"
                  min="5"
                  max="18"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                  className="w-full comic-input px-5 py-3.5 rounded-2xl border-2 border-slate-900 font-bold text-base focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white leading-normal"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="student-grade" className="block font-heading font-black text-base text-slate-800 mb-2">
                  Class / Grade
                </label>
                <input
                  id="student-grade"
                  type="text"
                  required
                  maxLength={10}
                  value={formData.classLevel}
                  onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                  placeholder="e.g. 5"
                  className="w-full comic-input px-5 py-3.5 rounded-2xl border-2 border-slate-900 font-bold text-base focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white placeholder:text-slate-400 placeholder:font-normal leading-normal"
                />
              </div>
            </div>

            {/* Subject Selection Cards */}
            <div>
              <label className="block font-heading font-black text-base text-slate-800 mb-2.5">
                Select Subject
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5" role="radiogroup" aria-label="Select Subject">
                {subjects.map((subj) => (
                  <button
                    key={subj.id}
                    type="button"
                    role="radio"
                    aria-checked={formData.subject === subj.id}
                    onClick={() => {
                      const firstTopic = topicsBySubject[subj.id]?.[0] || 'Water Cycle';
                      setFormData({ ...formData, subject: subj.id, topic: firstTopic });
                    }}
                    className={`p-4 min-h-[110px] h-full rounded-2xl border-2 border-slate-900 flex flex-col items-center justify-center text-center transition-all ${
                      formData.subject === subj.id
                        ? `${subj.color} ring-2 ring-slate-900 shadow-comic-sm font-black`
                        : 'bg-slate-50 hover:bg-slate-100 font-bold text-slate-700'
                    }`}
                  >
                    <span className="text-3xl mb-1.5">{subj.icon}</span>
                    <span className="text-sm sm:text-base font-extrabold">{subj.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Input & Quick Suggestions */}
            <div>
              <label htmlFor="topic-input" className="block font-heading font-black text-base text-slate-800 mb-2">
                Topic to Learn
              </label>
              <input
                id="topic-input"
                type="text"
                required
                maxLength={60}
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="e.g. Water Cycle"
                className="w-full comic-input px-5 py-3.5 rounded-2xl border-2 border-slate-900 font-bold text-base focus:outline-none focus:ring-2 focus:ring-amber-400 mb-3 bg-white placeholder:text-slate-400 placeholder:font-normal leading-normal"
              />

              {/* Quick Topic Chips */}
              <div className="flex flex-wrap gap-2 pt-1" aria-label="Quick topic suggestions">
                {(topicsBySubject[formData.subject] || topicsBySubject.Science).map((top) => (
                  <button
                    key={top}
                    type="button"
                    onClick={() => setFormData({ ...formData, topic: top })}
                    className={`text-sm font-extrabold px-4 py-1.5 rounded-full border transition-all ${
                      formData.topic === top
                        ? 'bg-amber-300 font-black border-slate-900 text-slate-950 shadow-xs'
                        : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {top}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block font-heading font-black text-base text-slate-800 mb-2.5">
                Challenge Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5" role="radiogroup" aria-label="Challenge Level">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    type="button"
                    role="radio"
                    aria-checked={formData.difficulty === diff.id}
                    onClick={() => setFormData({ ...formData, difficulty: diff.id })}
                    className={`p-4 min-h-[96px] h-full rounded-2xl border-2 border-slate-900 text-left transition-all flex flex-col justify-between ${
                      formData.difficulty === diff.id
                        ? 'bg-amber-400 shadow-comic-sm font-black text-slate-900'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-base font-heading font-black">{diff.label}</span>
                      {formData.difficulty === diff.id ? (
                        <Check className="w-5 h-5 stroke-[3] text-slate-900 flex-shrink-0" />
                      ) : (
                        <span className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-semibold block mt-1">{diff.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button with Ample Clearance & Centering */}
            <div className="pt-6 sm:pt-8 flex justify-center">
              <button
                type="submit"
                className="w-full sm:max-w-md bg-amber-400 hover:bg-amber-300 active:translate-y-1 font-heading font-black text-xl sm:text-2xl py-4 sm:py-4.5 px-8 rounded-2xl border-3 border-slate-900 shadow-comic flex items-center justify-center gap-3 transition-all text-slate-950"
              >
                <Wand2 className="w-6 h-6" />
                <span>Create My Story</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
export default Setup;
