import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LearningProvider } from './context/LearningContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LearningLoopProgress from './components/common/LearningLoopProgress';

import Home from './pages/Home';
import Setup from './pages/Setup';
import Story from './pages/Story';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import ReTeach from './pages/ReTeach';
import Mastery from './pages/Mastery';
import Flashcards from './pages/Flashcards';

function App() {
  return (
    <LearningProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-amber-50/30 text-slate-900 selection:bg-amber-200">
          <Navbar />
          <LearningLoopProgress />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/story" element={<Story />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/reteach" element={<ReTeach />} />
              <Route path="/mastery" element={<Mastery />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LearningProvider>
  );
}

export default App;
