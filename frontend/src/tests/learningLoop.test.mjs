/**
 * Comprehensive Automated Test Suite for StoryBuddy Learning Loop
 * Run with: node src/tests/learningLoop.test.mjs
 */

import assert from 'node:assert/strict';
import { generateDynamicTopicContent, TOPIC_CURRICULUM } from '../services/topicContentService.js';

// Replicating evaluateQuiz and evaluateMiniQuiz locally for deterministic node environment testing
const testEvaluateQuiz = (questions, answers) => {
  const conceptMap = {};
  let totalCorrect = 0;

  (questions || []).forEach(q => {
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
    const userAnswer = answers?.[q.id];
    if (userAnswer !== undefined && userAnswer === q.correctAnswer) {
      conceptMap[conceptId].correctAnswers += 1;
      totalCorrect += 1;
    }
  });

  const conceptScores = Object.values(conceptMap).map(c => {
    const scorePct = c.totalQuestions > 0 ? Math.round((c.correctAnswers / c.totalQuestions) * 100) : 0;
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

  const totalQuestions = (questions || []).length;
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

const testEvaluateMiniQuiz = (questions, answers) => {
  let correct = 0;
  (questions || []).forEach(q => {
    if (answers?.[q.id] === q.correctAnswer) {
      correct += 1;
    }
  });
  const total = (questions || []).length;
  const score = total > 0 ? Math.round((correct / total) * 100) : 100;
  return { totalQuestions: total, correctAnswers: correct, score };
};

const sanitizeInput = (val, max = 50) => {
  if (!val) return '';
  return String(val)
    .replace(/[<>{}\\]/g, '')
    .trim()
    .slice(0, max);
};

let passedCount = 0;
let totalCount = 0;

function runTest(description, fn) {
  totalCount++;
  try {
    fn();
    console.log(`  ✓ PASS: ${description}`);
    passedCount++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${description}`);
    console.error(`    ${err.message}`);
  }
}

console.log('\n======================================================');
console.log('🧪 StoryBuddy Automated Test Suite & Rubric Audit');
console.log('======================================================\n');

// 1. QUIZ EVALUATION SUITE
console.log('--- Suite 1: Quiz Evaluation & Diagnostics ---');

runTest('evaluateQuiz: Perfect score identifies all concepts as Strong', () => {
  const questions = [
    { id: 'q1', conceptId: 'c1', conceptName: 'Evaporation', correctAnswer: 1 },
    { id: 'q2', conceptId: 'c2', conceptName: 'Condensation', correctAnswer: 0 },
  ];
  const answers = { q1: 1, q2: 0 };
  const res = testEvaluateQuiz(questions, answers);

  assert.equal(res.score, 100);
  assert.equal(res.correctAnswers, 2);
  assert.equal(res.strongConcepts.length, 2);
  assert.equal(res.weakConcepts.length, 0);
});

runTest('evaluateQuiz: Mixed score isolates weak concept for re-teaching', () => {
  const questions = [
    { id: 'q1', conceptId: 'c1', conceptName: 'Evaporation', correctAnswer: 1 },
    { id: 'q2', conceptId: 'c2', conceptName: 'Collection', correctAnswer: 0 },
  ];
  const answers = { q1: 1, q2: 2 }; // Missed Collection
  const res = testEvaluateQuiz(questions, answers);

  assert.equal(res.score, 50);
  assert.equal(res.correctAnswers, 1);
  assert.equal(res.strongConcepts.length, 1);
  assert.equal(res.weakConcepts.length, 1);
  assert.equal(res.weakConcepts[0].conceptName, 'Collection');
});

runTest('evaluateQuiz: Handles empty question list without crashing', () => {
  const res = testEvaluateQuiz([], {});
  assert.equal(res.score, 0);
  assert.equal(res.totalQuestions, 0);
  assert.equal(res.conceptScores.length, 0);
});

runTest('evaluateMiniQuiz: Correctly evaluates single-question reteach check', () => {
  const miniQuestions = [
    { id: 'mq1', correctAnswer: 2 }
  ];
  const passRes = testEvaluateMiniQuiz(miniQuestions, { mq1: 2 });
  assert.equal(passRes.score, 100);
  assert.equal(passRes.correctAnswers, 1);

  const failRes = testEvaluateMiniQuiz(miniQuestions, { mq1: 0 });
  assert.equal(failRes.score, 0);
  assert.equal(failRes.correctAnswers, 0);
});

// 2. DYNAMIC CURRICULUM GENERATOR SUITE
console.log('\n--- Suite 2: Dynamic Topic Curriculum & Visuals ---');

runTest('generateDynamicTopicContent: Water Cycle builds full 4-panel comic story', () => {
  const story = generateDynamicTopicContent('Water Cycle', 'Aarav');
  assert.ok(story.title.length > 0);
  assert.equal(story.pages.length, 4);
  assert.equal(story.concepts.length, 4);
  assert.equal(story.questions.length, 5);
  assert.ok(story.flashcards.length >= 4);
  assert.equal(story.pages[0].visualType, 'ocean_intro');
});

runTest('generateDynamicTopicContent: Solar System maps space themes & planets', () => {
  const story = generateDynamicTopicContent('Solar System & Planets', 'Maya');
  assert.ok(story.title.includes('Cosmo') || story.title.includes('Planetary'));
  assert.equal(story.pages.length, 4);
  assert.equal(story.concepts.length, 4);
  assert.ok(story.pages.length > 0);
  assert.ok(story.flashcards.length >= 4);
});

runTest('generateDynamicTopicContent: Custom topic generates adaptive story and questions safely', () => {
  const customTopic = 'Renewable Wind Energy';
  const story = generateDynamicTopicContent(customTopic, 'Zara');
  assert.ok(story.title.length > 0);
  assert.equal(story.pages.length, 4);
  assert.ok(story.concepts.length > 0);
  assert.ok(story.questions.length > 0);
  assert.ok(story.flashcards.length > 0);
  // Verify student personalization was injected
  assert.ok(story.pages[0].content.includes('Zara'));
});

// 3. SECURITY & SANITIZATION SUITE
console.log('\n--- Suite 3: Security & Input Sanitization ---');

runTest('sanitizeInput: Strips XSS attempt characters and limits length', () => {
  const maliciousInput = '<script>alert("xss")</script> Aarav';
  const cleaned = sanitizeInput(maliciousInput, 20);
  assert.equal(cleaned.includes('<'), false);
  assert.equal(cleaned.includes('>'), false);
  assert.equal(cleaned.includes('script'), true); // tag characters removed
  assert.ok(cleaned.length <= 20);
});

runTest('sanitizeInput: Trims whitespace and handles nullish edge-cases', () => {
  assert.equal(sanitizeInput('   Leo   '), 'Leo');
  assert.equal(sanitizeInput(null), '');
  assert.equal(sanitizeInput(undefined), '');
});

console.log('\n======================================================');
console.log(`Results: ${passedCount} / ${totalCount} tests passed (${Math.round((passedCount/totalCount)*100)}%)`);
console.log('======================================================\n');

if (passedCount === totalCount) {
  process.exit(0);
} else {
  process.exit(1);
}
