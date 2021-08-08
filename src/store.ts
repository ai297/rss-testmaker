import Vue from 'vue';
import Vuex from 'vuex';
import { TestSettings, Question, Answer } from './contracts';

Vue.use(Vuex);

const testSettings: TestSettings = {
  tresholdPercentage: 90,
  numberOfQuestions: 10,
  maxAttemptsNumber: 2,
  strictAttemptsMode: true,
};

const questions: Question[] = [
  {
    text: 'First question',
    multiple: false,
    editMode: false,
    answers: [
      {
        text: 'first answer',
        isCorrect: true,
      },
      {
        text: 'second answer',
        isCorrect: false,
      },
    ],
  },
];

export type State = {
  testSettings: TestSettings,
  questions: Question[],
};

export default new Vuex.Store({
  state: {
    testSettings,
    questions,
  },
  mutations: {
    setSettings({ testSettings }, payload: Partial<TestSettings>) {
      testSettings.maxAttemptsNumber = payload.maxAttemptsNumber ?? testSettings.maxAttemptsNumber;
      testSettings.numberOfQuestions = payload.numberOfQuestions ?? testSettings.numberOfQuestions;
      testSettings.strictAttemptsMode = payload.strictAttemptsMode ?? testSettings.strictAttemptsMode;
      testSettings.tresholdPercentage = payload.tresholdPercentage ?? testSettings.tresholdPercentage;
    },
    addQuestion({ questions }, payload: Question) {
      questions.push({ ...payload });
    },
    removeQuestion({ questions }, index: number) {
      questions.splice(index, 1);
    },
    updateQuestion({ questions }, payload: { questionIndex: number, data: Partial<Question> }) {
      questions[payload.questionIndex].text =
        payload.data.text ?? questions[payload.questionIndex].text;
      questions[payload.questionIndex].editMode =
        payload.data.editMode ?? questions[payload.questionIndex].editMode;
      questions[payload.questionIndex].multiple =
        payload.data.multiple ?? questions[payload.questionIndex].multiple;
    },
    addAnswer({ questions }, payload: { questionIndex: number, data: Answer }) {
      if (payload.data.isCorrect && !questions[payload.questionIndex].multiple) {
        questions[payload.questionIndex].answers.forEach(a => a.isCorrect = false);
      }
      questions[payload.questionIndex].answers.push({ ...payload.data });
    },
    removeAnswer({ questions }, payload: { index: number, questionIndex: number }) {
      questions[payload.questionIndex].answers.splice(payload.index, 1);
    },
    updateAnswer({ questions }, payload: { questionIndex: number, index: number, data: Partial<Answer> }) {
      questions[payload.questionIndex].answers[payload.index].text =
        payload.data.text ?? questions[payload.questionIndex].answers[payload.index].text;
      if (payload.data.isCorrect && !questions[payload.questionIndex].multiple) {
        questions[payload.questionIndex].answers.forEach(a => a.isCorrect = false);
        questions[payload.questionIndex].answers[payload.index].isCorrect = payload.data.isCorrect;
      }
    },
    changeEditMode({ questions }, payload: { questionIndex: number, enable: boolean }) {
      questions[payload.questionIndex].editMode = payload.enable;
    },
  },
  actions: {
    setSettings({ commit }, payload) {
      commit('setSettings', payload);
    },
    newQuestion({ commit, state }, multiple: boolean) {
      const question: Question = {
        text: `Question ${state.questions.length + 1}`,
        multiple,
        answers: [],
        editMode: true,
      };
      commit('addQuestion', question);
    },
    removeQuestion({ commit }, questionIndex) {
      commit('removeQuestion', questionIndex);
    },
    updateQuestion({ commit }, payload) {
      commit('updateQuestion', payload);
    },
    editMode({ commit }, payload) {
      commit('changeEditMode', payload);
    },
    newAnswer({ commit }, payload) {
      commit('addAnswer', payload);
    },
    removeAnswer({ commit }, payload) {
      commit('removeAnswer', payload);
    },
    updateAnswer({ commit }, payload) {
      commit('updateAnswer', payload);
    },
  },
});
