import React from 'react';
import { motion } from 'framer-motion';

// Cute Milo Mascot Avatar (matching the reference image: round golden face, blue antennae, friendly eyes, blue outfit)
export const MiloAvatar = ({ size = "md", emotion = "happy", className = "" }) => {
  const dimensions = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-28 h-28"
  };

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`relative flex-shrink-0 ${dimensions[size] || dimensions.md} ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none overflow-visible">
        {/* Antennae */}
        <path d="M 38 28 Q 28 12 24 16" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="24" cy="16" r="4.5" fill="#38bdf8" />
        
        <path d="M 62 28 Q 72 12 76 16" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="76" cy="16" r="4.5" fill="#38bdf8" />

        {/* Headband / Goggles frame */}
        <path d="M 22 42 Q 50 24 78 42" fill="none" stroke="#0369a1" strokeWidth="4.5" strokeLinecap="round" />
        {/* Pink Ear Muff / Headphone pods */}
        <rect x="14" y="38" width="10" height="20" rx="5" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
        <rect x="76" y="38" width="10" height="20" rx="5" fill="#f472b6" stroke="#db2777" strokeWidth="2" />

        {/* Head */}
        <circle cx="50" cy="48" r="28" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
        <ellipse cx="50" cy="49" rx="26" ry="24" fill="#fde047" />

        {/* Rosy Cheeks */}
        <ellipse cx="34" cy="56" rx="5" ry="3" fill="#fb7185" opacity="0.6" />
        <ellipse cx="66" cy="56" rx="5" ry="3" fill="#fb7185" opacity="0.6" />

        {/* Big Cartoon Eyes */}
        <ellipse cx="38" cy="46" rx="6" ry="7.5" fill="#0f172a" />
        <circle cx="36" cy="43.5" r="2.5" fill="#ffffff" />
        <circle cx="40" cy="48" r="1.2" fill="#ffffff" />

        <ellipse cx="62" cy="46" rx="6" ry="7.5" fill="#0f172a" />
        <circle cx="60" cy="43.5" r="2.5" fill="#ffffff" />
        <circle cx="64" cy="48" r="1.2" fill="#ffffff" />

        {/* Cheerful Smile */}
        <path d="M 43 56 Q 50 63 57 56" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

        {/* Body / Backpack */}
        <path d="M 32 72 Q 50 68 68 72 L 72 94 Q 50 97 28 94 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
        {/* Yellow tummy badge */}
        <ellipse cx="50" cy="84" rx="11" ry="8" fill="#facc15" />

        {/* Waving Hand */}
        <motion.path
          animate={{ rotate: [-6, 12, -6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "28px", originY: "78px" }}
          d="M 28 78 Q 16 68 18 60 Q 22 58 26 68 Z"
          fill="#fde047"
          stroke="#ca8a04"
          strokeWidth="2"
        />
        {/* Right Arm */}
        <path d="M 72 78 Q 80 84 84 80 Q 82 72 74 74 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
      </svg>
    </motion.div>
  );
};

// Left Side Floating Storybook Illustration (matches the blue book with gold star in reference)
export const FloatingBookIllustration = ({ className = "" }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg viewBox="0 0 160 160" className="w-36 h-36 sm:w-44 sm:h-44 drop-shadow-xl overflow-visible">
        {/* Subtle cloud backdrop */}
        <ellipse cx="60" cy="110" rx="40" ry="16" fill="#f1f5f9" opacity="0.7" />
        <ellipse cx="110" cy="115" rx="35" ry="14" fill="#f1f5f9" opacity="0.7" />

        {/* Book shadow */}
        <ellipse cx="80" cy="125" rx="45" ry="12" fill="#cbd5e1" opacity="0.4" />

        {/* Blue Hardcover Book */}
        <g transform="rotate(-12 80 80)">
          {/* Back Cover & Pages */}
          <rect x="36" y="28" width="80" height="95" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <rect x="33" y="26" width="80" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Front Blue Cover */}
          <rect x="30" y="24" width="80" height="95" rx="8" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
          <path d="M 30 24 L 38 24 L 38 119 L 30 119 Z" fill="#0284c7" />

          {/* Yellow Bookmark ribbon */}
          <path d="M 64 24 L 64 65 L 70 58 L 76 65 L 76 24 Z" fill="#f43f5e" />

          {/* Golden Star Badge on cover */}
          <g transform="translate(62, 60)">
            <polygon
              points="14,0 18,10 28,11 20,18 23,28 14,22 5,28 8,18 0,11 10,10"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="2"
            />
          </g>
        </g>

        {/* Floating Stars */}
        <motion.polygon
          animate={{ scale: [1, 1.25, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          points="20,40 22,46 28,47 23,51 25,57 20,53 15,57 17,51 12,47 18,46"
          fill="#facc15"
          opacity="0.8"
        />
        <motion.polygon
          animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          points="130,70 132,74 136,75 133,78 134,82 130,80 126,82 127,78 124,75 128,74"
          fill="#facc15"
          opacity="0.8"
        />
        <motion.polygon
          animate={{ scale: [0.9, 1.2, 0.9] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
          points="35,130 36,134 40,135 37,138 38,142 35,140 32,142 33,138 30,135 34,134"
          fill="#facc15"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
};

// Right Side Hot Air Balloon, Airplane, and Island Illustration (matches reference image right side)
export const HotAirBalloonIllustration = ({ className = "" }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      {/* Paper Airplane Flying */}
      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [15, 25, 15]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-12 sm:-left-20"
      >
        <svg viewBox="0 0 60 40" className="w-14 h-10 drop-shadow-sm overflow-visible">
          {/* Dashed wind path */}
          <path d="M -25 25 Q -10 10 5 15" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
          {/* Blue Paper Plane */}
          <polygon points="5,15 45,5 30,30 25,20" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1.5" />
          <polygon points="45,5 25,20 30,30" fill="#38bdf8" />
        </svg>
      </motion.div>

      {/* Milo in Hot Air Balloon */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-1, 2, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <svg viewBox="0 0 140 180" className="w-32 h-44 sm:w-40 sm:h-52 drop-shadow-xl overflow-visible">
          {/* Balloon Canopy (Blue and White Vertical Stripes) */}
          <defs>
            <clipPath id="balloonClip">
              <path d="M 70 15 C 32 15 20 45 25 75 C 30 102 52 118 62 124 L 78 124 C 88 118 110 102 115 75 C 120 45 108 15 70 15 Z" />
            </clipPath>
          </defs>

          {/* Balloon Outer Shadow/Border */}
          <path
            d="M 70 13 C 30 13 18 44 23 76 C 28 104 51 120 61 126 L 79 126 C 89 120 112 104 117 76 C 122 44 110 13 70 13 Z"
            fill="#0284c7"
          />

          {/* Balloon Body with Stripes */}
          <g clipPath="url(#balloonClip)">
            <rect x="0" y="0" width="140" height="140" fill="#38bdf8" />
            {/* White and Deep Blue Stripes */}
            <path d="M 52 0 C 44 40 44 100 56 140 L 70 140 L 70 0 Z" fill="#ffffff" />
            <path d="M 88 0 C 96 40 96 100 84 140 L 70 140 L 70 0 Z" fill="#ffffff" />
            <path d="M 62 0 C 58 40 58 100 66 140 L 74 140 C 82 100 82 40 78 0 Z" fill="#0284c7" />
          </g>

          {/* Ropes to Basket */}
          <line x1="42" y1="120" x2="52" y2="148" stroke="#78350f" strokeWidth="1.5" />
          <line x1="98" y1="120" x2="88" y2="148" stroke="#78350f" strokeWidth="1.5" />
          <line x1="58" y1="124" x2="60" y2="148" stroke="#78350f" strokeWidth="1.5" />
          <line x1="82" y1="124" x2="80" y2="148" stroke="#78350f" strokeWidth="1.5" />

          {/* Milo peeking out of basket */}
          <g transform="translate(48, 118) scale(0.44)">
            {/* Milo Head & Face */}
            <circle cx="50" cy="48" r="28" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
            {/* Antennae */}
            <path d="M 38 28 Q 28 12 24 16" fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
            <circle cx="24" cy="16" r="5" fill="#38bdf8" />
            <path d="M 62 28 Q 72 12 76 16" fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
            <circle cx="76" cy="16" r="5" fill="#38bdf8" />
            {/* Eyes */}
            <ellipse cx="38" cy="46" rx="6" ry="7.5" fill="#0f172a" />
            <circle cx="36" cy="43.5" r="2.5" fill="#ffffff" />
            <ellipse cx="62" cy="46" rx="6" ry="7.5" fill="#0f172a" />
            <circle cx="60" cy="43.5" r="2.5" fill="#ffffff" />
            {/* Smile */}
            <path d="M 43 56 Q 50 63 57 56" fill="none" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
            {/* Waving arm over basket */}
            <path d="M 72 58 Q 88 50 86 38 Q 80 38 72 50 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
          </g>

          {/* Wicker Basket */}
          <rect x="48" y="146" width="44" height="26" rx="4" fill="#d97706" stroke="#92400e" strokeWidth="2" />
          <line x1="48" y1="154" x2="92" y2="154" stroke="#b45309" strokeWidth="1.5" />
          <line x1="48" y1="162" x2="92" y2="162" stroke="#b45309" strokeWidth="1.5" />
          <line x1="60" y1="146" x2="60" y2="172" stroke="#b45309" strokeWidth="1.5" />
          <line x1="72" y1="146" x2="72" y2="172" stroke="#b45309" strokeWidth="1.5" />
          <line x1="84" y1="146" x2="84" y2="172" stroke="#b45309" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Tropical Island Illustration in bottom right corner */}
      <div className="absolute -bottom-24 -right-10 pointer-events-none opacity-90 hidden lg:block">
        <svg viewBox="0 0 220 160" className="w-56 h-40 overflow-visible">
          {/* Ocean Waves */}
          <ellipse cx="120" cy="130" rx="90" ry="22" fill="#0284c7" opacity="0.3" />
          <ellipse cx="110" cy="126" rx="80" ry="18" fill="#38bdf8" opacity="0.4" />
          
          {/* Sandy Beach */}
          <path d="M 40 130 Q 110 90 190 130 Q 150 145 40 130 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          
          {/* Green Island Hills */}
          <path d="M 60 125 Q 110 65 170 125 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
          <path d="M 80 125 Q 120 78 155 125 Z" fill="#16a34a" />

          {/* Palm Tree 1 */}
          <path d="M 110 120 Q 125 90 118 70" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="110" cy="66" rx="14" ry="6" fill="#15803d" transform="rotate(-30 110 66)" />
          <ellipse cx="126" cy="66" rx="14" ry="6" fill="#15803d" transform="rotate(25 126 66)" />
          <ellipse cx="118" cy="60" rx="14" ry="6" fill="#16a34a" transform="rotate(-5 118 60)" />

          {/* Palm Tree 2 */}
          <path d="M 135 120 Q 148 95 142 80" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="136" cy="76" rx="12" ry="5" fill="#16a34a" transform="rotate(-25 136 76)" />
          <ellipse cx="148" cy="76" rx="12" ry="5" fill="#15803d" transform="rotate(30 148 76)" />
        </svg>
      </div>
    </div>
  );
};
