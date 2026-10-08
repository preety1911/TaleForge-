import api from './api';

export const evaluateQuiz = async (questions, answers) => {
  try {
    const response = await api.post('/quiz/evaluate', { questions, answers });
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.warn('Backend API unavailable for quiz evaluation, calculating locally:', error.message);
  }

  // Local evaluation calculation
  const conceptMap = {};
  let totalCorrect = 0;

  questions.forEach(q => {
    const conceptId = q.conceptId || 'general';
    const conceptName = q.conceptName || 'General';

    if (!conceptMap[conceptId]) {
      conceptMap[conceptId] = {
        conceptId,
        conceptName,
        totalQuestions: 0,
        correctAnswers: 0,
      };
    }

    conceptMap[conceptId].totalQuestions += 1;
    const userAnswer = answers[q.id];
    if (userAnswer !== undefined && userAnswer === q.correctAnswer) {
      conceptMap[conceptId].correctAnswers += 1;
      totalCorrect += 1;
    }
  });

  const conceptScores = Object.values(conceptMap).map(c => {
    const scorePct = Math.round((c.correctAnswers / c.totalQuestions) * 100);
    let status = 'Needs Review';
    if (scorePct >= 80) {
      status = 'Strong';
    } else if (scorePct >= 50) {
      status = 'Needs Practice';
    }

    return {
      conceptId: c.conceptId,
      conceptName: c.conceptName,
      correctAnswers: c.correctAnswers,
      totalQuestions: c.totalQuestions,
      score: scorePct,
      status
    };
  });

  const totalQuestions = questions.length;
  const overallScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  
  const strongConcepts = conceptScores.filter(c => c.status === 'Strong');
  const weakConcepts = conceptScores.filter(c => c.status !== 'Strong');

  return {
    totalQuestions,
    correctAnswers: totalCorrect,
    score: overallScore,
    conceptScores,
    strongConcepts,
    weakConcepts
  };
};

export const evaluateMiniQuiz = async (questions, answers) => {
  let correct = 0;
  questions.forEach(q => {
    if (answers[q.id] === q.correctAnswer) {
      correct += 1;
    }
  });
  const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 100;
  return {
    totalQuestions: questions.length,
    correctAnswers: correct,
    score
  };
};
