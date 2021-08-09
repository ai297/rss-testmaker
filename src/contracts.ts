export interface TestQuestion {
  question: string,
  answers: string[],
  multiple: boolean,
}

export interface TestSettings {
  tresholdPercentage: number,
  numberOfQuestions: number,
  maxAttemptsNumber: number,
  strictAttemptsMode: boolean,
};

export interface Test {
  public: TestSettings & { questions: TestQuestion[] },
  answers: number[][],
}

export interface Answer {
  text: string,
  isCorrect: boolean,
}

export interface Question {
  text: string,
  multiple: boolean,
  answers: Answer[],
  editMode: boolean,
}

export type State = {
  fileName: string,
  testSettings: TestSettings,
  questions: Question[],
};
