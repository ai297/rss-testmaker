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

function convertState({ testSettings, questions }: State): Test {
  return {
    public: {
      ...testSettings,
      questions: questions.map(convertQuestion),
    },
    answers: questions.map(q => q.answers.map((a, index) => a.isCorrect ? index : -1)
                                         .filter(a => a >= 0)),
  };
}

const saveLink = document.createElement('a');

export function saveJson(state: State): void {
  const data = JSON.stringify(convertState(state), null, 2);
  const file = new Blob([ data ], { type: 'application/json' });
  saveLink.href = URL.createObjectURL(file);
  saveLink.download = state.fileName;
  saveLink.click();
}
