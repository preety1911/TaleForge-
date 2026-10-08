import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Sparkles, BookOpen, 
  Lightbulb, Layers, Zap, CheckCircle2 
} from 'lucide-react';
import { useLearning, AVAILABLE_TOPICS } from '../context/LearningContext';
import MiloMascot from '../components/common/MiloMascot';
import Flashcards from './Flashcards';

// Dynamic, rich comic scene illustrations supporting all science topics and chapters
const ComicSceneIllustration = ({ 
  visualType, 
  topic, 
  title, 
  conceptName, 
  illustrationBadge, 
  illustrationCaption, 
  illustrationIcon,
  pageNumber = 1 
}) => {
  const normTopic = (topic || '').toLowerCase();
  const normVisual = (visualType || '').toLowerCase();
  const normConcept = (conceptName || '').toLowerCase();

  // Helper badge & caption wrapper
  const renderBadgeAndCaption = (defaultBadge, defaultCaption) => {
    const badgeText = illustrationBadge || defaultBadge;
    const captionText = illustrationCaption || defaultCaption;
    return (
      <motion.div 
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-2.5 inset-x-3 flex flex-col items-center gap-1 z-30 pointer-events-none"
      >
        <div className="bg-amber-300 text-slate-950 border-2 border-slate-900 px-4 py-1 rounded-full text-xs sm:text-sm font-black shadow-comic-sm">
          {badgeText}
        </div>
        {captionText && (
          <span className="text-[10px] sm:text-xs font-bold text-white bg-slate-900/85 px-3 py-0.5 rounded-full border border-slate-700/80 max-w-lg text-center truncate backdrop-blur-xs">
            {captionText}
          </span>
        )}
      </motion.div>
    );
  };

  // ==========================================
  // 1. SOLAR SYSTEM & PLANETS CHAPTERS
  // ==========================================

  // Solar Chapter 1: The Sun & Gravitational Orbits
  if (
    normVisual === 'solar_sun_orbit' ||
    (normTopic.includes('solar') && (normConcept.includes('sun') || normConcept.includes('gravity') || pageNumber === 1)) ||
    (normTopic.includes('planet') && (normConcept.includes('sun') || pageNumber === 1))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        {/* Starfield */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 4 === 0 ? '3px' : '2px',
              height: i % 4 === 0 ? '3px' : '2px',
              left: `${(i * 17) % 94}%`,
              top: `${(i * 23) % 88}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: (i % 5) * 0.3 }}
          />
        ))}

        {/* Elliptical Gravitational Orbit Tracks */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
          <ellipse cx="300" cy="150" rx="260" ry="105" fill="none" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1.5" strokeDasharray="5 5" />
          <ellipse cx="300" cy="150" rx="190" ry="75" fill="none" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <ellipse cx="300" cy="150" rx="120" ry="48" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Gravitational force ripple */}
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.05, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full border-2 border-amber-400/40"
        />

        {/* The Radiant Sun */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-yellow-400/30 blur-lg"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-gradient-to-tr from-orange-600 via-amber-400 to-yellow-200 border-4 border-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.8)] flex items-center justify-center relative"
          >
            <span className="text-4xl sm:text-5xl drop-shadow">☀️</span>
          </motion.div>
        </div>

        {/* Orbiting Earth */}
        <motion.div
          animate={{
            x: [-170, 0, 170, 0, -170],
            y: [0, 68, 0, -68, 0],
            scale: [0.85, 1.1, 0.85, 0.7, 0.85],
            zIndex: [20, 20, 5, 5, 20]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute flex flex-col items-center pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 border-2 border-white shadow-md flex items-center justify-center">
            <span className="text-xs">🌍</span>
          </div>
          <span className="text-[10px] font-black text-cyan-200 bg-slate-900/80 px-1.5 py-0.5 rounded-full mt-0.5 border border-cyan-400/30">
            Earth
          </span>
        </motion.div>

        {/* Orbiting Mars */}
        <motion.div
          animate={{
            x: [230, 0, -230, 0, 230],
            y: [0, -90, 0, 90, 0],
            scale: [0.75, 0.65, 0.75, 0.95, 0.75],
            zIndex: [5, 5, 20, 20, 5]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute flex flex-col items-center pointer-events-none"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-700 via-orange-500 to-amber-600 border border-amber-300 shadow-md flex items-center justify-center">
            <div className="w-1.5 h-1 bg-white/70 rounded-full" />
          </div>
          <span className="text-[9px] font-black text-amber-200 bg-slate-900/80 px-1.5 py-0.5 rounded-full mt-0.5 border border-amber-400/30">
            Mars
          </span>
        </motion.div>

        {renderBadgeAndCaption(
          "☀️ The Sun: Our Gravitational Heart!",
          "The Sun's colossal mass anchors eight planets in steady elliptical orbits."
        )}
      </div>
    );
  }

  // Solar Chapter 2: Inner Rocky Terrestrial Planets
  if (
    normVisual === 'solar_rocky_planets' ||
    (normTopic.includes('solar') && (normConcept.includes('rocky') || normConcept.includes('inner') || pageNumber === 2)) ||
    (normTopic.includes('planet') && (normConcept.includes('rocky') || pageNumber === 2))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Sun Glow Edge on Left */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-64 bg-amber-400/30 rounded-full blur-2xl" />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl font-black text-amber-400 flex flex-col items-center">
          <span>☀️</span>
          <span className="text-[9px] text-amber-300 uppercase tracking-wider font-extrabold">Sun</span>
        </div>

        {/* 4 Inner Terrestrial Worlds in Row */}
        <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-8 ml-6 mr-10 sm:mr-14">
          {/* Mercury */}
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 2.8, repeat: Infinity }} className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-slate-600 via-stone-400 to-slate-300 border-2 border-slate-700 shadow-md flex items-center justify-center relative">
              <div className="w-1.5 h-1.5 bg-slate-700/60 rounded-full absolute top-2 left-2" />
              <div className="w-1 h-1 bg-slate-700/60 rounded-full absolute bottom-2 right-2" />
            </div>
            <span className="text-[11px] font-black text-slate-200 mt-1.5">Mercury</span>
            <span className="text-[9px] text-slate-400 font-extrabold">Small & Cratered</span>
          </motion.div>

          {/* Venus */}
          <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.2 }} className="flex flex-col items-center">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-200 border-2 border-amber-800 shadow-md flex items-center justify-center">
              <div className="w-8 h-2 bg-amber-300/40 rounded-full transform -rotate-12" />
            </div>
            <span className="text-[11px] font-black text-amber-200 mt-1.5">Venus</span>
            <span className="text-[9px] text-amber-400 font-extrabold">Hot Toxic Clouds</span>
          </motion.div>

          {/* Earth */}
          <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.4 }} className="flex flex-col items-center">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-700 via-cyan-400 to-emerald-400 border-2 border-cyan-200 shadow-[0_0_15px_rgba(56,189,248,0.5)] flex items-center justify-center relative">
              <span className="text-xl sm:text-2xl">🌍</span>
              {/* Moon orbit */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-start justify-end"
              >
                <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-600 -mr-2" />
              </motion.div>
            </div>
            <span className="text-[11px] font-black text-cyan-200 mt-1.5">Earth</span>
            <span className="text-[9px] text-emerald-300 font-extrabold">Liquid H2O & Life</span>
          </motion.div>

          {/* Mars */}
          <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }} className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-red-800 via-orange-600 to-amber-500 border-2 border-red-900 shadow-md flex items-center justify-center relative">
              <div className="w-3 h-1.5 bg-white rounded-full absolute top-0.5" />
            </div>
            <span className="text-[11px] font-black text-orange-200 mt-1.5">Mars</span>
            <span className="text-[9px] text-orange-300 font-extrabold">Red Dusty Crust</span>
          </motion.div>
        </div>

        {/* Asteroid Belt Divider */}
        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-70">
          <span className="text-xs">🪨</span>
          <span className="text-[8px] font-black text-slate-400 vertical-text uppercase">Asteroid Belt</span>
          <span className="text-xs">🪨</span>
        </div>

        {renderBadgeAndCaption(
          "🪨 Inner Rocky Terrestrial Worlds (Mercury, Venus, Earth, Mars)!",
          "Four dense rocky planets with solid mineral crusts orbiting closest to the Sun."
        )}
      </div>
    );
  }

  // Solar Chapter 3: Outer Gas Giants & Asteroid Belt
  if (
    normVisual === 'solar_gas_giants' ||
    (normTopic.includes('solar') && (normConcept.includes('giant') || normConcept.includes('gas') || pageNumber === 3)) ||
    (normTopic.includes('planet') && (normConcept.includes('giant') || pageNumber === 3))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Asteroid belt on left */}
        <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="text-xs">🪨</span>
          <span className="text-[8px] font-black text-slate-400">Asteroid Belt</span>
          <span className="text-xs">🪨</span>
        </div>

        {/* Outer Gas Giants Showcase */}
        <div className="relative z-10 flex items-center justify-center gap-5 sm:gap-10 ml-6">
          {/* Jupiter */}
          <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }} className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-amber-700 via-orange-300 to-amber-900 border-3 border-amber-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-3 h-2 bg-amber-900/40" />
              <div className="absolute inset-x-0 top-7 h-2.5 bg-orange-600/30" />
              <div className="absolute inset-x-0 bottom-4 h-2 bg-amber-800/40" />
              {/* Great Red Spot */}
              <div className="absolute bottom-5 right-3 w-4 h-3 bg-red-700 rounded-full border border-red-900 shadow-xs" />
            </div>
            <span className="text-xs font-black text-amber-200 mt-1">Jupiter</span>
            <span className="text-[9px] text-amber-400 font-extrabold">Largest World</span>
          </motion.div>

          {/* Saturn with Rings */}
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }} className="flex flex-col items-center relative">
            <div className="relative flex items-center justify-center">
              {/* SVG Ring System */}
              <svg className="absolute w-36 h-20 pointer-events-none -top-1" viewBox="0 0 140 80">
                <ellipse cx="70" cy="40" rx="66" ry="22" fill="none" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="6" />
                <ellipse cx="70" cy="40" rx="55" ry="17" fill="none" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="3" />
              </svg>
              {/* Saturn Body */}
              <div className="w-16 h-16 sm:w-19 sm:h-19 rounded-full bg-gradient-to-b from-yellow-100 via-amber-200 to-amber-600 border-2 border-amber-900 shadow-md relative z-10" />
            </div>
            <span className="text-xs font-black text-amber-200 mt-1">Saturn</span>
            <span className="text-[9px] text-yellow-300 font-extrabold">Icy Ring Marvel</span>
          </motion.div>

          {/* Uranus & Neptune */}
          <div className="flex flex-col gap-3">
            {/* Uranus */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-200 border border-cyan-400 shadow-sm" />
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-cyan-200">Uranus</span>
                <span className="text-[8px] text-cyan-400 font-bold">Tilted Ice Giant</span>
              </div>
            </div>
            {/* Neptune */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-400 border border-blue-400 shadow-sm" />
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-blue-200">Neptune</span>
                <span className="text-[8px] text-blue-400 font-bold">Supersonic Winds</span>
              </div>
            </div>
          </div>
        </div>

        {renderBadgeAndCaption(
          "🪐 Gas Giants: Jupiter, Saturn, Uranus & Neptune!",
          "Colossal swirling hydrogen-helium atmospheres and magnificent ring systems."
        )}
      </div>
    );
  }

  // Solar Chapter 4: Moons, Comets & Cosmic Deep Space
  if (
    normVisual === 'solar_deep_space' ||
    (normTopic.includes('solar') && (normConcept.includes('moon') || normConcept.includes('comet') || pageNumber === 4)) ||
    (normTopic.includes('planet') && (normConcept.includes('deep') || pageNumber === 4))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Nebular glow */}
        <div className="absolute inset-0 bg-radial from-purple-900/30 via-transparent to-transparent opacity-60" />

        {/* Streaking Comet */}
        <motion.div
          animate={{
            x: [-120, 320],
            y: [-40, 100],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 flex items-center pointer-events-none"
        >
          {/* Glowing Tail */}
          <div className="w-36 h-2 bg-gradient-to-l from-cyan-300 via-sky-400/50 to-transparent rounded-full filter blur-[1px]" />
          {/* Comet Core */}
          <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_15px_rgba(56,189,248,1)] flex items-center justify-center text-xs">
            ☄️
          </div>
        </motion.div>

        {/* Celestial Moons & Kuiper Belt Objects */}
        <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-12">
          {/* Icy Moon Europa */}
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-400 via-sky-100 to-white border-2 border-slate-600 shadow-md flex items-center justify-center text-lg">
              🌕
            </div>
            <span className="text-xs font-black text-slate-200 mt-1.5">Europa & Titan</span>
            <span className="text-[9px] text-sky-300 font-extrabold">Subsurface Oceans</span>
          </motion.div>

          {/* Kuiper Belt / Pluto */}
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-stone-600 via-amber-200 to-stone-400 border-2 border-stone-700 shadow-md flex items-center justify-center text-xl">
              🪐
            </div>
            <span className="text-xs font-black text-amber-200 mt-1.5">Kuiper Belt</span>
            <span className="text-[9px] text-amber-400 font-extrabold">Icy Cosmic Frontier</span>
          </motion.div>

          {/* Deep Space Explorer Probe */}
          <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-indigo-900 border-2 border-indigo-400 shadow-md flex items-center justify-center text-2xl">
              🚀
            </div>
            <span className="text-xs font-black text-indigo-200 mt-1.5">Voyager</span>
            <span className="text-[9px] text-indigo-300 font-extrabold">Beyond the System</span>
          </motion.div>
        </div>

        {renderBadgeAndCaption(
          "🚀 Moons, Glowing Comets & Deep Space Frontiers!",
          "Hundreds of orbiting moons, icy comets with dust tails, and the infinite cosmic frontier."
        )}
      </div>
    );
  }

  // ==========================================
  // 2. PLANT PHOTOSYNTHESIS CHAPTERS
  // ==========================================

  // Photosynthesis Chapter 1: Chloroplasts & Trapping Sunlight
  if (
    normVisual === 'photo_chloroplast' ||
    (normTopic.includes('photo') && (normConcept.includes('chlorophyll') || normConcept.includes('sunlight') || pageNumber === 1))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Sunbeam Light Rays from Top Corner */}
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-300/25 rounded-full blur-2xl pointer-events-none"
        />
        <div className="absolute top-3 left-4 flex items-center gap-2">
          <span className="text-2xl animate-spin-slow">☀️</span>
          <span className="text-xs font-black text-yellow-300 uppercase tracking-wide">Solar Photons</span>
        </div>

        {/* Chloroplast Microscopic Chamber */}
        <motion.div 
          animate={{ scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="bg-emerald-900/90 border-3 border-emerald-400 rounded-3xl p-5 shadow-comic flex items-center gap-5 backdrop-blur-xs">
            {/* Chloroplast Pill with Thylakoids */}
            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-full bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-700 border-3 border-emerald-200 flex flex-col items-center justify-center gap-1.5 p-2 shadow-inner">
              <span className="text-2xl">🍃</span>
              <div className="w-12 h-2.5 bg-emerald-900/70 rounded-full" />
              <div className="w-12 h-2.5 bg-emerald-900/70 rounded-full" />
              <div className="w-12 h-2.5 bg-emerald-900/70 rounded-full" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-heading font-black text-white text-base sm:text-lg">
                Chloroplast Solar Battery
              </span>
              <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-xs mt-0.5">
                Green chlorophyll pigments absorb sunlight photons like microscopic solar panels.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-yellow-400/90 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                  ⚡ Light Trapped
                </span>
                <span className="bg-emerald-400/90 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                  🍃 Chlorophyll
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "🌿 Chloroplasts Trapping Solar Light!",
          "Green chlorophyll inside leaf cells absorbs sunbeam photon energy."
        )}
      </div>
    );
  }

  // Photosynthesis Chapter 2: Water & Carbon Dioxide (Roots & Stomata)
  if (
    normVisual === 'photo_stomata_roots' ||
    (normTopic.includes('photo') && (normConcept.includes('water') || normConcept.includes('carbon') || pageNumber === 2))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-teal-900 via-emerald-900 to-stone-900 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-12 w-full max-w-xl">
          {/* Left: Roots drinking H2O */}
          <div className="flex flex-col items-center bg-sky-950/80 border-2 border-sky-400 rounded-2xl p-3 sm:p-4 text-center">
            <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 2.2, repeat: Infinity }} className="text-3xl mb-1">
              💧
            </motion.div>
            <span className="font-heading font-black text-xs sm:text-sm text-cyan-200">Roots Siphoning H2O</span>
            <span className="text-[10px] font-bold text-sky-300 mt-0.5">Water flows upward through stem xylem</span>
            <span className="mt-2 bg-cyan-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
              Incoming Water 💧
            </span>
          </div>

          {/* Plus sign */}
          <div className="text-2xl font-black text-amber-300 bg-slate-900 border-2 border-amber-300 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
            +
          </div>

          {/* Right: Leaf stomata inhaling CO2 */}
          <div className="flex flex-col items-center bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl p-3 sm:p-4 text-center">
            <motion.div animate={{ scaleX: [1, 1.3, 1] }} transition={{ duration: 2.5, repeat: Infinity }} className="text-3xl mb-1">
              🌱
            </motion.div>
            <span className="font-heading font-black text-xs sm:text-sm text-emerald-200">Stomata Inhaling CO2</span>
            <span className="text-[10px] font-bold text-emerald-300 mt-0.5">Pores breathe in carbon dioxide gas</span>
            <span className="mt-2 bg-emerald-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
              Carbon Dioxide 💨
            </span>
          </div>
        </div>

        {renderBadgeAndCaption(
          "💧 Roots Drinking H2O & Stomata Inhaling CO2!",
          "Water rises through stem tubes while microscopic stomata inhale carbon dioxide."
        )}
      </div>
    );
  }

  // Photosynthesis Chapter 3: Cooking Sweet Glucose Food
  if (
    normVisual === 'photo_glucose_kitchen' ||
    (normTopic.includes('photo') && (normConcept.includes('glucose') || normConcept.includes('sugar') || pageNumber === 3))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-br from-amber-200 via-emerald-200 to-teal-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Chemical Synthesis Sparks */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/40 rounded-full blur-xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], y: [-3, 3, -3] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-400 border-3 border-slate-900 shadow-comic-sm flex flex-col items-center justify-center text-2xl font-black">
              🍯
            </div>
            <div className="text-left">
              <span className="font-heading font-black text-slate-900 text-lg sm:text-xl">
                C6H12O6: Glucose Sugar!
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-extrabold mt-0.5">
                Solar energy binds H2O and CO2 into sweet food fuel for plant growth!
              </p>
            </div>
          </motion.div>
        </div>

        {renderBadgeAndCaption(
          "🍯 Cooking Sweet Glucose Sugar Fuel!",
          "Solar energy binds water and carbon into sweet glucose food to nourish the plant."
        )}
      </div>
    );
  }

  // Photosynthesis Chapter 4: Clean Oxygen Released for Earth
  if (
    normVisual === 'photo_oxygen_release' ||
    (normTopic.includes('photo') && (normConcept.includes('oxygen') || pageNumber === 4))
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-sky-200 via-emerald-100 to-teal-200 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Floating O2 Oxygen bubbles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [40, -140], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2 + (i % 3) * 0.4, repeat: Infinity, delay: i * 0.3 }}
            className="absolute bg-white/90 border-2 border-sky-600 rounded-full px-2 py-0.5 text-xs font-black text-sky-900 shadow-xs"
            style={{ left: `${15 + i * 14}%` }}
          >
            O₂ 🫧
          </motion.div>
        ))}

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white border-4 border-slate-900 rounded-3xl p-4 sm:p-5 shadow-comic flex items-center gap-4">
            <span className="text-4xl">🌍</span>
            <div className="text-left">
              <span className="font-heading font-black text-slate-900 text-base sm:text-lg">
                Fresh Oxygen for Every Living Creature!
              </span>
              <p className="text-xs sm:text-sm text-emerald-800 font-extrabold">
                Leaves release pure O2 through stomata, creating the air animals and humans breathe!
              </p>
            </div>
          </div>
        </div>

        {renderBadgeAndCaption(
          "💨 Clean Oxygen Released for Earth!",
          "Plants release vital oxygen into the atmosphere for every living creature."
        )}
      </div>
    );
  }

  // ==========================================
  // 3. WATER CYCLE & EVAPORATION CHAPTERS
  // ==========================================

  // Evaporation 1: Thermal Energy Warming Water
  if (
    normVisual === 'evap_thermal_energy' ||
    (normTopic === 'evaporation' && pageNumber === 1)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-amber-200 via-orange-200 to-sky-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-44 h-44 bg-amber-400 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-comic"
        >
          <span className="text-5xl">☀️</span>
        </motion.div>

        {/* Heat energy waves radiating downward */}
        <motion.div animate={{ y: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="absolute text-2xl text-amber-600 top-16 right-28">
          ♨️
        </motion.div>

        {/* Puddle Droplet Bella Warming Up */}
        <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2.5, repeat: Infinity }} className="relative z-10 flex flex-col items-center">
          <div className="w-22 h-26 bg-gradient-to-t from-sky-300 via-cyan-100 to-white rounded-full rounded-t-[50%] border-4 border-slate-900 shadow-comic flex flex-col items-center justify-center p-2">
            <span className="text-2xl font-black text-slate-900">^ ‿ ^</span>
            <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full mt-1 border border-amber-400">
              Absorbing Heat
            </span>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "☀️ Solar Thermal Energy Warming Water!",
          "Sunlight transfers thermal kinetic energy into the water puddle."
        )}
      </div>
    );
  }

  // Evaporation 2: Fast Molecular Excitement
  if (
    normVisual === 'evap_molecular_speed' ||
    (normTopic === 'evaporation' && pageNumber === 2)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-orange-200 via-amber-200 to-sky-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Buzzing molecules */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [(-20 * (i + 1)) % 40, (25 * (i + 1)) % 50, (-20 * (i + 1)) % 40],
              y: [(-15 * (i + 1)) % 30, (20 * (i + 1)) % 35, (-15 * (i + 1)) % 30]
            }}
            transition={{ duration: 0.8 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-10 h-10 rounded-full bg-cyan-200 border-2 border-slate-900 flex items-center justify-center font-black text-xs shadow-xs"
            style={{ left: `${20 + i * 15}%`, top: `${35 + (i % 2) * 20}%` }}
          >
            H₂O
          </motion.div>
        ))}

        <div className="relative z-10 bg-white/90 border-3 border-slate-900 rounded-2xl p-4 shadow-comic flex items-center gap-3">
          <span className="text-3xl">⚡</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base">Molecules Bouncing Fast!</span>
            <p className="text-xs text-slate-700 font-extrabold">Thermal heat makes water particles vibrate rapidly and push apart!</p>
          </div>
        </div>

        {renderBadgeAndCaption(
          "⚡ Fast-Bouncing Excited Molecules!",
          "Heated water molecules bounce faster and break intermolecular bonds."
        )}
      </div>
    );
  }

  // Evaporation 3: State Transformation into Vapor
  if (
    normVisual === 'evap_state_change' ||
    normVisual === 'sun_evaporation' ||
    (normTopic === 'evaporation' && pageNumber === 3)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-amber-200 via-orange-200 to-sky-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-44 h-44 bg-amber-400 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-comic"
        >
          <span className="text-5xl">☀️</span>
        </motion.div>

        {/* Floating Vapor Particles */}
        <motion.div animate={{ y: [40, -40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute left-1/4 text-2xl font-black text-white">
          ♨️
        </motion.div>
        <motion.div animate={{ y: [50, -30], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }} className="absolute right-1/3 text-2xl font-black text-white">
          ♨️
        </motion.div>

        {/* Rising Vapor Character */}
        <motion.div animate={{ y: [20, -25, 20] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex flex-col items-center">
          <div className="w-22 h-26 bg-gradient-to-t from-sky-200/90 via-cyan-100 to-white/95 rounded-full rounded-t-[50%] border-4 border-slate-900 shadow-comic flex flex-col items-center justify-center p-2 relative backdrop-blur-sm">
            <span className="text-3xl font-black text-slate-900">^ ‿ ^</span>
            <span className="text-xs font-black uppercase text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full mt-1 border border-amber-400">
              Vapor
            </span>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "✨ Rising into the Sky as Invisible Vapor!",
          "Liquid water transforms into invisible, lightweight water vapor."
        )}
      </div>
    );
  }

  // Evaporation 4: Evaporative Cooling
  if (
    normVisual === 'evap_cooling_effect' ||
    (normTopic === 'evaporation' && pageNumber === 4)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-sky-300 via-cyan-200 to-blue-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Cool breeze wind lines */}
        <motion.div animate={{ x: [-80, 100], opacity: [0, 0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute top-12 left-1/4 text-xl">
          🍃 〰️ 〰️
        </motion.div>

        <div className="relative z-10 bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4">
          <span className="text-4xl">❄️</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base sm:text-lg">Evaporative Cooling</span>
            <p className="text-xs sm:text-sm text-sky-900 font-extrabold">Fast escaping vapor carries heat away, leaving sidewalks and skin pleasantly chilled!</p>
          </div>
        </div>

        {renderBadgeAndCaption(
          "❄️ Evaporative Surface Cooling in Action!",
          "Escaping vapor carries heat away, leaving surfaces refreshingly cool."
        )}
      </div>
    );
  }

  // ==========================================
  // 4. CONDENSATION CHAPTERS
  // ==========================================

  // Condensation 1: High Altitude Chill
  if (
    normVisual === 'cond_high_altitude_chill' ||
    (normTopic === 'condensation' && pageNumber === 1)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-indigo-400 via-sky-300 to-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <div className="absolute bottom-0 inset-x-0 h-20 bg-slate-300 border-t-3 border-slate-900 flex items-center justify-around text-2xl">
          <span>🏔️</span>
          <span>🏔️</span>
          <span>🏔️</span>
        </div>

        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 2.5, repeat: Infinity }} className="relative z-10 flex flex-col items-center">
          <div className="bg-white border-3 border-slate-900 rounded-2xl px-5 py-3 shadow-comic flex items-center gap-3">
            <span className="text-3xl">🥶</span>
            <div className="text-left">
              <span className="font-heading font-black text-slate-900 text-sm sm:text-base">Freezing Mountain Sky</span>
              <p className="text-xs text-sky-800 font-extrabold">Chilly high altitude air slows speedy vapor molecules down!</p>
            </div>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "❄️ Chilly Altitude Slowing Molecules!",
          "Ascending water vapor cools down rapidly in the frosty upper atmosphere."
        )}
      </div>
    );
  }

  // Condensation 2: Molecules Clustering into Drops
  if (
    normVisual === 'cond_molecules_clustering' ||
    (normTopic === 'condensation' && pageNumber === 2)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-indigo-300 via-sky-300 to-blue-200 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <div className="relative z-10 flex items-center gap-3">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [0.95, 1.05, 0.95], y: [-2, 2, -2] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
              className="w-12 h-14 bg-gradient-to-b from-cyan-200 to-blue-400 rounded-full border-3 border-slate-900 flex items-center justify-center text-sm font-black text-slate-900 shadow-comic-sm"
            >
              💧
            </motion.div>
          ))}
        </div>

        {renderBadgeAndCaption(
          "💧 Vapor Clumping into Liquid Droplets!",
          "Cooling molecules lose kinetic energy and hug together as liquid."
        )}
      </div>
    );
  }

  // Condensation 3 / Cloud Castle
  if (
    normVisual === 'cond_cloud_castle' ||
    normVisual === 'cloud_condensation' ||
    (normTopic === 'condensation' && pageNumber === 3)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-indigo-300 via-sky-300 to-blue-200 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <div className="absolute -bottom-6 -left-10 w-48 h-36 bg-slate-400 rounded-tr-[80px] border-3 border-slate-900 opacity-60" />
        <motion.div 
          animate={{ scale: [1, 1.04, 1], y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="bg-white border-4 border-slate-900 rounded-[50px] px-8 py-5 shadow-comic flex items-center gap-3">
            <div className="text-4xl">☁️</div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-black text-slate-900 text-xl">Cloud Castle</span>
              <span className="text-sm text-sky-800 font-extrabold">Cooling vapor clustering together!</span>
            </div>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "☁️ Fluffy Cloud Castles Forming!",
          "Billions of condensed droplets coalesce around atmospheric dust particles."
        )}
      </div>
    );
  }

  // Condensation 4: Surface Dew
  if (
    normVisual === 'cond_surface_dew' ||
    (normTopic === 'condensation' && pageNumber === 4)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-emerald-200 via-teal-200 to-cyan-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        <div className="relative z-10 flex items-center gap-6">
          <div className="bg-white border-3 border-slate-900 rounded-2xl p-4 shadow-comic flex items-center gap-3">
            <span className="text-4xl">🥤</span>
            <div className="text-left">
              <span className="font-heading font-black text-slate-900 text-base">Sweating Cold Glass</span>
              <p className="text-xs text-slate-700 font-extrabold">Warm air touching cold glass condenses into beads of water!</p>
            </div>
          </div>
        </div>

        {renderBadgeAndCaption(
          "🌱 Sparkling Dew & Surface Condensation!",
          "Warm moist air contacting cold surfaces forms glistening beads of dew."
        )}
      </div>
    );
  }

  // ==========================================
  // 5. PRECIPITATION CHAPTERS
  // ==========================================

  // Precipitation 1: Heavy Overcast Storm Clouds
  if (
    normVisual === 'precip_heavy_clouds' ||
    (normTopic === 'precipitation' && pageNumber === 1)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3, repeat: Infinity }} className="relative z-10 flex flex-col items-center">
          <div className="bg-slate-800 text-white border-4 border-slate-900 rounded-[50px] px-8 py-5 shadow-comic flex items-center gap-4">
            <span className="text-4xl">⛈️</span>
            <div className="text-left">
              <span className="font-heading font-black text-lg sm:text-xl">Saturated Storm Clouds</span>
              <p className="text-xs sm:text-sm text-cyan-200 font-bold">Overflowing with water droplets—too heavy to stay aloft!</p>
            </div>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "☁️ Heavy Overcast Storm Clouds!",
          "Clouds collect water until upward drafts can no longer support the weight."
        )}
      </div>
    );
  }

  // Precipitation 2: Rain Splashing Down under Gravity
  if (
    normVisual === 'precip_rain_fall' ||
    normVisual === 'rain_precipitation' ||
    (normTopic === 'precipitation' && pageNumber === 2)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-slate-600 via-slate-500 to-sky-700 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-20, 220], opacity: [0, 1, 0] }}
            transition={{ duration: 1 + (i % 3) * 0.3, repeat: Infinity, delay: i * 0.2 }}
            className="absolute text-cyan-300 text-lg font-black"
            style={{ left: `${15 + i * 14}%` }}
          >
            💧
          </motion.div>
        ))}

        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [10, -10, 10] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-22 h-26 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full rounded-t-[50%] border-4 border-slate-900 shadow-comic flex flex-col items-center justify-center p-3 text-white">
            <span className="text-3xl font-black text-slate-900">≧ ▽ ≦</span>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "🌧️ Gravity's Splashdown!",
          "Earth's gravity pulls water droplets downward in refreshing showers."
        )}
      </div>
    );
  }

  // Precipitation 3: Snowflakes & Hail
  if (
    normVisual === 'precip_snow_ice' ||
    (normTopic === 'precipitation' && pageNumber === 3)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-sky-300 via-indigo-200 to-blue-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-20, 220], opacity: [0, 1, 0], rotate: 360 }}
            transition={{ duration: 2 + (i % 3) * 0.4, repeat: Infinity, delay: i * 0.2 }}
            className="absolute text-white text-xl font-black"
            style={{ left: `${12 + i * 15}%` }}
          >
            ❄️
          </motion.div>
        ))}

        <div className="relative z-10 bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-3">
          <span className="text-3xl">⛄</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base">Snowflakes & Hailstones</span>
            <p className="text-xs text-slate-700 font-extrabold">Freezing air changes the raindrop's costume into frozen crystals!</p>
          </div>
        </div>

        {renderBadgeAndCaption(
          "❄️ Crystalline Snowflakes & Hailstones!",
          "Sub-zero temperatures freeze falling water into crystalline geometric snow."
        )}
      </div>
    );
  }

  // Precipitation 4: Earth Hydration
  if (
    normVisual === 'precip_earth_hydration' ||
    (normTopic === 'precipitation' && pageNumber === 4)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-sky-300 via-emerald-200 to-green-300 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        <div className="relative z-10 bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4">
          <span className="text-4xl">🌻</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base">Quenching Earth's Thirst</span>
            <p className="text-xs text-slate-700 font-extrabold">Precipitation waters thirsty crops, refills lakes, and revives ecosystems!</p>
          </div>
        </div>

        {renderBadgeAndCaption(
          "🌱 Hydrating Earth's Ecosystems!",
          "Fallen precipitation nourishes crops, forests, and replenishes streams."
        )}
      </div>
    );
  }

  // ==========================================
  // 6. COLLECTION CHAPTERS
  // ==========================================

  // Collection 1: Runoff & Mountain Streams
  if (
    normVisual === 'collect_runoff_streams' ||
    normVisual === 'river_collection' ||
    (normTopic === 'collection' && pageNumber === 1)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-emerald-200 via-teal-200 to-blue-400 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-blue-500/80 border-t-4 border-slate-900" />
        <div className="absolute bottom-2 left-6 text-xl">🪨</div>
        <div className="absolute bottom-4 right-10 text-xl">🪨</div>
        <div className="absolute top-6 left-8 text-2xl">🌲</div>
        <div className="absolute top-8 right-12 text-2xl">🌲</div>

        <motion.div 
          animate={{ x: [-15, 15, -15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="bg-white border-4 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-comic flex items-center gap-3">
            <span className="text-3xl">🌊</span>
            <div className="text-left">
              <span className="font-heading font-black text-slate-900 text-base sm:text-lg">Mountain Brook Slide</span>
              <p className="text-xs sm:text-sm text-slate-700 font-extrabold">Runoff flows downhill along curvy slopes into rivers!</p>
            </div>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "🏞️ Mountain Runoff & Cascading Brooks!",
          "Gravity pulls runoff downhill along winding streams and rapids."
        )}
      </div>
    );
  }

  // Collection 2: Underground Aquifers
  if (
    normVisual === 'collect_aquifers' ||
    (normTopic === 'collection' && pageNumber === 2)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-amber-200 via-stone-300 to-cyan-400 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        <div className="relative z-10 bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4">
          <span className="text-4xl">🪨</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base sm:text-lg">Underground Aquifer Sponge</span>
            <p className="text-xs sm:text-sm text-slate-700 font-extrabold">Water seeps through sand and rock layers to store clean drinking groundwater!</p>
          </div>
        </div>

        {renderBadgeAndCaption(
          "🪨 Underground Infiltration & Aquifers!",
          "Porous soil and rock layers filter and store crystal-clear groundwater."
        )}
      </div>
    );
  }

  // Collection 3: Ocean Basin Reunion
  if (
    normVisual === 'collect_ocean_basin' ||
    normVisual === 'ocean_intro' ||
    (normTopic === 'collection' && pageNumber === 3) ||
    (normTopic === 'water cycle' && pageNumber === 1)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-sky-300 via-blue-400 to-indigo-600 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        {/* Ocean waves */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-blue-700/60 border-t-3 border-white/40" />
        <div className="absolute bottom-3 left-8 text-2xl">🐢</div>
        <div className="absolute bottom-6 right-10 text-2xl">🐬</div>

        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 2.5, repeat: Infinity }} className="relative z-10 bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4">
          <span className="text-4xl">🌊</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base sm:text-lg">The Great Ocean Basin</span>
            <p className="text-xs sm:text-sm text-slate-700 font-extrabold">Oceans store over 97% of Earth's water in one majestic shimmering home!</p>
          </div>
        </motion.div>

        {renderBadgeAndCaption(
          "🌊 The Great Ocean Reservoir!",
          "Oceans store 97% of Earth's water in vast shimmering blue basins."
        )}
      </div>
    );
  }

  // Collection 4: The Cycle Reset
  if (
    normVisual === 'collect_cycle_loop' ||
    (normTopic === 'collection' && pageNumber === 4)
  ) {
    return (
      <div className="w-full h-60 sm:h-72 bg-gradient-to-b from-amber-200 via-sky-300 to-blue-500 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
        <div className="absolute -top-6 right-8 text-5xl">☀️</div>

        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-44 h-44 rounded-full border-3 border-dashed border-white/60 pointer-events-none" />

        <div className="relative z-10 bg-white border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4">
          <span className="text-4xl">🔄</span>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base sm:text-lg">The Cycle Reset!</span>
            <p className="text-xs sm:text-sm text-slate-700 font-extrabold">Water is gathered and ready for the Sun to warm it up all over again!</p>
          </div>
        </div>

        {renderBadgeAndCaption(
          "🔄 Perpetual Cycle Reset!",
          "Collected water gathers under the warm sun, ready to repeat the loop."
        )}
      </div>
    );
  }

  // ==========================================
  // 7. UNIVERSAL DYNAMIC EXPLORER SCENE
  // (For any custom user-selected or arbitrary topic)
  // ==========================================
  return (
    <div className="w-full h-60 sm:h-72 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center border-3 border-slate-900 shadow-comic p-4">
      {/* Particle field */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            left: `${(i * 19) % 92}%`,
            top: `${(i * 23) % 86}%`,
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Orbiting science ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-44 h-44 rounded-full border-2 border-dashed border-cyan-400/40"
      />

      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="bg-white/95 border-4 border-slate-900 rounded-3xl p-5 shadow-comic flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 border-3 border-slate-900 flex items-center justify-center text-3xl shadow-xs">
            {illustrationIcon || '🔬'}
          </div>
          <div className="text-left">
            <span className="font-heading font-black text-slate-900 text-base sm:text-lg">
              {conceptName || topic || 'Science Adventure'}
            </span>
            <p className="text-xs sm:text-sm text-slate-700 font-extrabold max-w-sm">
              {title || `Exploring fundamental natural rules and discoveries in ${topic}.`}
            </p>
          </div>
        </div>
      </motion.div>

      {renderBadgeAndCaption(
        illustrationBadge || `🔍 Exploring ${topic || 'Science'} Concepts!`,
        illustrationCaption || `Discovering the secrets and mechanisms of ${topic || 'Science'}.`
      )}
    </div>
  );
};

export const Story = () => {
  const navigate = useNavigate();
  const { storyData, switchTopic, student } = useLearning();

  const [viewMode, setViewMode] = useState('story'); // 'story' or 'flashcards'
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pages = storyData?.pages || [];
  const totalPages = pages.length;
  const currentPage = pages[currentPageIndex] || pages[0] || {};
  const isFinalPage = currentPageIndex === totalPages - 1;

  const currentTopic = storyData?.topic || 'Water Cycle';

  const handleNext = () => {
    if (!isFinalPage) {
      setCurrentPageIndex((prev) => prev + 1);
    } else {
      navigate('/quiz');
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const handleTopicSelect = (newTopic) => {
    switchTopic(newTopic);
    setCurrentPageIndex(0);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#fefcf6] via-[#fffef9] to-[#f4f9fd] py-8 sm:py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-[1200px] mx-auto">
        
        {/* Dynamic Topic Switcher Bar */}
        <div className="w-full mb-6 bg-white border-3 border-slate-900 rounded-3xl p-4 sm:p-5 shadow-comic">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span className="font-heading font-black text-xs sm:text-sm uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Select Any Topic to Learn:</span>
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-amber-900 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
              Active Topic: <strong>{currentTopic}</strong>
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {AVAILABLE_TOPICS.map((top) => {
              const isActive = currentTopic.toLowerCase() === top.toLowerCase();
              return (
                <button
                  key={top}
                  type="button"
                  onClick={() => handleTopicSelect(top)}
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

        {/* View Mode Toggle: [ 📖 Comic Story Mode ] | [ 🎴 Flashcards Mode ] */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 bg-white border-2 border-slate-900 rounded-full shadow-comic-sm">
            <button
              type="button"
              onClick={() => setViewMode('story')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-black text-sm sm:text-base transition-all ${
                viewMode === 'story'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Comic Story Mode</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('flashcards')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-black text-sm sm:text-base transition-all ${
                viewMode === 'flashcards'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Interactive Flashcards Mode</span>
            </button>
          </div>
        </div>

        {/* CONDITIONAL RENDER: FLASHCARDS MODE */}
        {viewMode === 'flashcards' ? (
          <div className="w-full">
            <Flashcards isEmbedded={true} />
          </div>
        ) : (
          /* CONDITIONAL RENDER: COMIC STORY MODE */
          <>
            {/* Story Top Bar Synchronized with Active Chapter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-7 bg-white border-3 border-slate-900 rounded-3xl p-5 sm:p-6 shadow-comic">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                  <span className="bg-amber-400 text-slate-950 font-heading font-black text-xs sm:text-sm px-3.5 py-1 rounded-full border border-slate-900 shadow-comic-xs">
                    Chapter {currentPageIndex + 1} of {totalPages}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    Topic: {currentTopic}
                  </span>
                  {currentPage.conceptName && (
                    <span className="text-xs sm:text-sm font-black text-sky-900 bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
                      ⚡ {currentPage.conceptName}
                    </span>
                  )}
                </div>
                <motion.h1 
                  key={`head-title-${currentTopic}-${currentPageIndex}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mt-1"
                >
                  {currentPage.title || storyData?.title || `${currentTopic} Adventure`}
                </motion.h1>
                <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">
                  {storyData?.title}
                </p>
              </div>

              {/* Page Counter & Progress Bar */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2.5">
                <span className="font-heading font-black text-base sm:text-lg text-slate-900">
                  Page {currentPageIndex + 1} of {totalPages}
                </span>
                <div className="w-40 h-3.5 bg-slate-100 rounded-full border-2 border-slate-900 overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentPageIndex + 1) / totalPages) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>

            {/* Comic Book Page Card with Framer Motion Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentTopic}-${currentPageIndex}`}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-4 border-slate-900 rounded-[36px] p-6 sm:p-10 shadow-comic relative mb-8"
              >
                {/* Concept Badge */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading font-extrabold text-sm uppercase text-slate-500">
                      Concept in this chapter:
                    </span>
                    <motion.span 
                      key={`concept-badge-${currentPage.conceptName}`}
                      initial={{ scale: 0.92, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="bg-amber-100 text-amber-950 font-heading font-black text-sm sm:text-base px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-comic-sm flex items-center gap-2"
                    >
                      <span>{currentPage.illustrationIcon || '⚡'}</span>
                      <span>{currentPage.conceptName || currentTopic}</span>
                    </motion.span>
                  </div>

                  <div className="text-sm font-black text-slate-500 uppercase tracking-wide bg-slate-100 px-3.5 py-1 rounded-full border border-slate-300">
                    Panel {currentPage.pageNumber || currentPageIndex + 1} of {totalPages}
                  </div>
                </div>

                {/* Dynamic Illustration Banner Graphic Area with Smooth Transition */}
                <div className="mb-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`banner-${currentTopic}-${currentPageIndex}-${currentPage.conceptName}`}
                      initial={{ opacity: 0, scale: 0.98, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -8 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                    >
                      <ComicSceneIllustration
                        visualType={currentPage.visualType}
                        topic={currentTopic}
                        title={currentPage.title}
                        conceptName={currentPage.conceptName}
                        illustrationBadge={currentPage.illustrationBadge}
                        illustrationCaption={currentPage.illustrationCaption}
                        illustrationIcon={currentPage.illustrationIcon}
                        pageNumber={currentPage.pageNumber || currentPageIndex + 1}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Chapter Title */}
                <motion.h2 
                  key={`chapter-title-${currentPageIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-heading font-black text-2xl sm:text-4xl text-slate-900 mb-4"
                >
                  {currentPage.title}
                </motion.h2>

                {/* Story Text */}
                <div className="bg-amber-50/60 border-2 border-slate-900/30 rounded-3xl p-6 sm:p-7 mb-6 text-slate-900 font-semibold text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  {currentPage.content}
                </div>

                {/* Comic Speech Bubble */}
                {currentPage.dialogue && (
                  <div className="relative bg-white border-3 border-slate-900 rounded-2xl p-5 mb-6 shadow-comic-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-heading font-black text-xs sm:text-sm text-sky-900 bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
                        🗣️ {currentPage.dialogue.character}
                      </span>
                    </div>
                    <p className="text-slate-950 font-bold text-base sm:text-lg lg:text-xl italic">
                      "{currentPage.dialogue.speech}"
                    </p>
                  </div>
                )}

                {/* Mental Model Analogy Box */}
                {currentPage.analogy && (
                  <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5 mb-7 shadow-comic-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="font-heading font-black text-sm sm:text-base text-emerald-950">
                        Mental Analogy (How to Picture This):
                      </span>
                    </div>
                    <p className="text-slate-800 font-extrabold text-base sm:text-lg italic leading-relaxed">
                      "{currentPage.analogy}"
                    </p>
                  </div>
                )}

                {/* Mascot Milo Encouragement */}
                <div className="mt-5 pt-5 border-t-2 border-slate-100">
                  <MiloMascot
                    speech={
                      isFinalPage
                        ? `Awesome job! You finished the whole ${currentTopic} story adventure. Now test your knowledge or flip through flashcards!`
                        : currentPageIndex === 0
                        ? `Turn the page to see what happens next in ${currentTopic}!`
                        : `Pay close attention to the mental analogy—it makes answering quiz questions super simple!`
                    }
                    emotion={isFinalPage ? "cheering" : "happy"}
                    size="sm"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-4 w-full">
              <button
                onClick={handlePrev}
                disabled={currentPageIndex === 0}
                className={`flex items-center gap-2 font-heading font-black px-6 py-3.5 rounded-2xl border-3 border-slate-900 transition-all text-base sm:text-lg ${
                  currentPageIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-white hover:bg-slate-100 text-slate-800 shadow-comic-sm active:translate-y-0.5'
                }`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Previous</span>
              </button>

              {/* Next / Challenge CTA */}
              <button
                onClick={handleNext}
                className={`flex items-center gap-2.5 font-heading font-black px-7 sm:px-9 py-4 rounded-2xl border-3 border-slate-900 shadow-comic transition-all active:translate-y-0.5 ${
                  isFinalPage
                    ? 'bg-rose-500 hover:bg-rose-400 text-white text-lg sm:text-xl animate-pulse'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950 text-base sm:text-lg'
                }`}
              >
                {isFinalPage ? (
                  <>
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Take the Challenge!</span>
                  </>
                ) : (
                  <>
                    <span>Next Page</span>
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Story;
