export interface TestQuestion {
  question: string,
  answers: string[],
  multiple: boolean,
  questionImage?: string,
  answersType?: 'image';
}

export interface TestSettings {
  tresholdPercentage: number,
  numberOfQuestions: number,
  maxAttemptsNumber: number,
  strictAttemptsMode: boolean,
}

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
  questionImage?: string,
  answersType?: 'image';
}

export type State = {
  fileName: string,
  testSettings: TestSettings,
  questions: Question[],
}
