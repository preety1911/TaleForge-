import api from './api';
import { generateDynamicTopicContent, TOPIC_CURRICULUM } from './topicContentService';

export const generateStory = async (studentData) => {
  const studentName = studentData?.name || 'Aarav';
  const topicName = studentData?.topic || 'Water Cycle';

  try {
    const response = await api.post('/story/generate', studentData);
    if (
      response.data && 
      Array.isArray(response.data.pages) && 
      response.data.pages.length > 0
    ) {
      // Merge with local flashcards and analogies if backend response is standard
      const localData = generateDynamicTopicContent(topicName, studentName);
      return {
        ...response.data,
        flashcards: (Array.isArray(response.data.flashcards) && response.data.flashcards.length > 0)
          ? response.data.flashcards 
          : localData.flashcards,
        themeColor: response.data.themeColor || localData.themeColor,
      };
    }
  } catch (error) {
    console.warn('Backend API unavailable or error, using dynamic local curriculum:', error.message);
  }

  // Pure dynamic generator based on chosen topic
  const dynamicStory = generateDynamicTopicContent(topicName, studentName);
  return {
    title: dynamicStory.title,
    topic: dynamicStory.topic,
    subject: dynamicStory.subject,
    concepts: dynamicStory.concepts,
    pages: dynamicStory.pages,
    questions: dynamicStory.questions,
    flashcards: dynamicStory.flashcards,
    themeColor: dynamicStory.themeColor,
  };
};

export const generateReTeachStory = async (student, topic, weakConcepts) => {
  const studentName = student?.name || 'Aarav';
  const topicName = topic || student?.topic || 'Water Cycle';
  const targetConcept = weakConcepts && weakConcepts.length > 0 
    ? weakConcepts[0] 
    : { name: topicName, id: 'weak-1' };

  try {
    const response = await api.post('/story/reteach', {
      student,
      topic: topicName,
      weakConcepts
    });
    if (response.data && response.data.content && response.data.content.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.warn('Backend API unavailable for reteach, using dynamic local fallback:', error.message);
  }

  // Fetch dynamic curriculum for this exact topic
  const dynamicData = generateDynamicTopicContent(targetConcept.name || topicName, studentName);

  if (dynamicData.reteach) {
    return {
      title: dynamicData.reteach.title,
      subtitle: dynamicData.reteach.subtitle,
      weakConcept: targetConcept,
      content: dynamicData.reteach.content,
      questions: dynamicData.reteach.questions,
      flashcards: dynamicData.flashcards
    };
  }

  // Fallback for custom topic reteach
  return {
    title: `${studentName}'s Super Boost: ${targetConcept.name || topicName}`,
    subtitle: `Let's make ${targetConcept.name || topicName} crystal clear!`,
    weakConcept: targetConcept,
    content: [
      {
        panel: 1,
        title: `The Heart of ${targetConcept.name || topicName}`,
        description: `Think back to what we discovered: ${targetConcept.name || topicName} is like a natural powerhouse working silently in the world around us.`,
        analogy: "Like the gears inside a clock—once you understand how one gear spins, the whole clock makes total sense!",
        dialogue: `Milo: 'Take a calm breath, ${studentName}! Every mistake is just your brain doing push-ups!'`
      },
      {
        panel: 2,
        title: "Connecting It to Real Life",
        description: `When you see ${targetConcept.name || topicName} in nature, look for the cause and the effect. Energy flows, matter shifts, and balance is restored!`,
        analogy: "Just like connecting puzzle pieces together: click, and the full picture appears!",
        dialogue: `Milo: 'You've got the spark! Let's test what you know with a quick 1-question check!'`
      }
    ],
    questions: [
      {
        id: `rq-${targetConcept.id || 'gen'}`,
        conceptId: targetConcept.id || 'gen',
        conceptName: targetConcept.name || topicName,
        question: `What is the most effective way to remember how ${targetConcept.name || topicName} works?`,
        options: [
          { text: "By using simple mental analogies and breaking it down step by step", isCorrect: true },
          { text: "By giving up and closing the book", isCorrect: false },
          { text: "By guessing randomly with your eyes closed", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: `Relatable analogies and step-by-step thinking make any scientific concept easy to remember!`
      }
    ]
  };
};

export const getFlashcardsForTopic = (topic, studentName = 'Aarav') => {
  const dynamic = generateDynamicTopicContent(topic, studentName);
  return dynamic.flashcards || [];
};
