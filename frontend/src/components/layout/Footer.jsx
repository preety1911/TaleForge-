import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t-2 border-slate-900 bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-heading font-black text-slate-900 text-sm">
            STORYBUDDY — The Adaptive EdTech Experience
          </p>
          <p className="text-xs text-slate-500 font-medium">
            "StoryBuddy doesn't just teach. It discovers how each child learns."
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-full text-slate-700">
          <span>Loop:</span>
          <span className="text-amber-600">TEACH</span> →
          <span className="text-sky-600">TEST</span> →
          <span className="text-indigo-600">ANALYZE</span> →
          <span className="text-purple-600">RE-TEACH</span> →
          <span className="text-emerald-600">MASTERY</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
