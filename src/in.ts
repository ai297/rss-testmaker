import { Test, Question, TestSettings } from './contracts';

export function getTestSettings(json: Test): TestSettings {
  return {
    maxAttemptsNumber: json.public.maxAttemptsNumber,
    numberOfQuestions: json.public.numberOfQuestions,
    strictAttemptsMode: json.public.strictAttemptsMode,
    tresholdPercentage: json.public.tresholdPercentage,
  };
}

export function getQuestions(json: Test): Question[] {
  return json.public.questions.map(({ question, answers, multiple, answersType, questionImage }, questionIndex) => ({
    text: question,
    multiple,
    editMode: false,
    questionImage,
    answersType,
    answers: answers.map((a, index) => ({
      text: a,
      isCorrect: json.answers[questionIndex].includes(index),
    })),
  }));
}
