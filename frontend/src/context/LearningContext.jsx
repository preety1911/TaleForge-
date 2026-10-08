import React, { createContext, useContext, useState } from 'react';
import { generateDynamicTopicContent, TOPIC_CURRICULUM } from '../services/topicContentService';

const LearningContext = createContext();

// Default demo student
export const DEFAULT_STUDENT = {
  name: 'Aarav',
  age: 10,
  classLevel: '5',
  subject: 'Science',
  topic: 'Water Cycle',
  difficulty: 'Easy'
};

export const AVAILABLE_TOPICS = [
  'Water Cycle',
  'Evaporation',
  'Condensation',
  'Precipitation',
  'Collection',
  'Plant Photosynthesis',
  'Solar System & Planets',
];

export const LearningProvider = ({ children }) => {
  const [student, setStudent] = useState(DEFAULT_STUDENT);

  // Dynamic initial story data based on default topic
  const initialData = generateDynamicTopicContent(DEFAULT_STUDENT.topic, DEFAULT_STUDENT.name);
  const [storyData, setStoryData] = useState({
    title: initialData.title,
    topic: initialData.topic,
    subject: initialData.subject,
    concepts: initialData.concepts,
    pages: initialData.pages,
    questions: initialData.questions,
    flashcards: initialData.flashcards,
    themeColor: initialData.themeColor,
  });

  const [quizAnswers, setQuizAnswers] = useState({});
  const [learningResult, setLearningResult] = useState(null);
  
  // Re-teaching state
  const [reteachData, setReteachData] = useState(null);
  const [miniQuizAnswers, setMiniQuizAnswers] = useState({});
  const [masteryResult, setMasteryResult] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  // Reset progress for a fresh test / reteach session
  const resetProgress = () => {
    setQuizAnswers({});
    setLearningResult(null);
    setReteachData(null);
    setMiniQuizAnswers({});
    setMasteryResult(null);
  };

  // Dynamically switch topic and update all associated story, analogies, dialogues, questions & flashcards
  const switchTopic = (newTopic) => {
    const freshStudent = { ...student, topic: newTopic };
    setStudent(freshStudent);
    const freshData = generateDynamicTopicContent(newTopic, student.name || 'Aarav');
    setStoryData({
      title: freshData.title,
      topic: freshData.topic,
      subject: freshData.subject,
      concepts: freshData.concepts,
      pages: freshData.pages,
      questions: freshData.questions,
      flashcards: freshData.flashcards,
      themeColor: freshData.themeColor,
    });
    resetProgress();
  };

  return (
    <LearningContext.Provider
      value={{
        student,
        setStudent,
        storyData,
        setStoryData,
        switchTopic,
        availableTopics: AVAILABLE_TOPICS,
        quizAnswers,
        setQuizAnswers,
        learningResult,
        setLearningResult,
        reteachData,
        setReteachData,
        miniQuizAnswers,
        setMiniQuizAnswers,
        masteryResult,
        setMasteryResult,
        isLoading,
        setIsLoading,
        loadingMessage,
        setLoadingMessage,
        resetProgress
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => useContext(LearningContext);
