import { Test, State, Question, TestQuestion } from './contracts';

function convertQuestion({text, multiple, answers, answersType, questionImage}: Question): TestQuestion {
  return {
    question: text,
    multiple,
    questionImage,
    answersType,
    answers: answers.map(a => a.text),
  };
}

export function convertState({ testSettings, questions }: State): Test {
  return {
    public: {
      ...testSettings,
      questions: questions.map(convertQuestion),
    },
    answers: questions.map(q => q.answers.map((a, index) => a.isCorrect ? index : -1)
                                         .filter(a => a >= 0)),
  };
}

export const convertToJson = (test: Test): string => JSON.stringify(test, null, 2);

const saveLink = document.createElement('a');

export function saveJson(data: string, fileName: string): void {
  const file = new Blob([ data ], { type: 'application/json' });
  saveLink.href = URL.createObjectURL(file);
  saveLink.download = fileName;
  saveLink.click();
}
