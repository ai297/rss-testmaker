import Vue from 'vue';
import Vuex from 'vuex';
import { TestSettings, Question, Answer, Test, State } from './contracts';
import { convertState } from './out';
import { getTestSettings, getQuestions } from './in';

Vue.use(Vuex);

const testSettings: TestSettings = {
  tresholdPercentage: 90,
  numberOfQuestions: 10,
  maxAttemptsNumber: 2,
  strictAttemptsMode: false,
};

const questions: Question[] = [];

export default new Vuex.Store({
  state: {
    fileName: 'new-test.json',
    testSettings: { ...testSettings },
    questions: [ ...questions ],
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
      questions[payload.questionIndex].questionImage = payload.data.questionImage
      questions[payload.questionIndex].answersType = payload.data.answersType;
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
      }

      questions[payload.questionIndex].answers[payload.index].isCorrect =
        payload.data.isCorrect ?? questions[payload.questionIndex].answers[payload.index].isCorrect;
    },
    changeEditMode({ questions }, payload: { questionIndex: number, enable: boolean }) {
      if (payload.enable) questions.forEach(q => q.editMode = false);
      questions[payload.questionIndex].editMode = payload.enable;
    },
    setState(state, {fileName, data}: { fileName: string, data: Test }) {
      state.testSettings = getTestSettings(data);
      state.questions = getQuestions(data);
      state.fileName = fileName;
    },
    restoreState(state, { testSettings, questions, fileName }: State) {
      state.testSettings = testSettings;
      state.questions = questions;
      state.fileName = fileName;
    },
    clearState(state) {
      state.testSettings = { ...testSettings };
      state.fileName = 'new-test.json';
      state.questions = [ ...questions ];
    },
    setFileName(state, fileName) {
      state.fileName = fileName;
    }
  },
  actions: {
    setSettings({ commit, dispatch }, payload) {
      commit('setSettings', payload);
      dispatch('backup');
    },
    newQuestion({ commit, state, dispatch }, multiple: boolean) {
      const question: Question = {
        text: `Question ${state.questions.length + 1}`,
        multiple,
        answers: [],
        editMode: false,
      };
      commit('addQuestion', question);
      commit('changeEditMode', { questionIndex: state.questions.length - 1, enable: true })
      dispatch('backup');
    },
    removeQuestion({ commit, dispatch }, questionIndex) {
      commit('removeQuestion', questionIndex);
      dispatch('backup');
    },
    updateQuestion({ commit, dispatch }, payload) {
      commit('updateQuestion', payload);
      dispatch('backup');
    },
    editMode({ commit, dispatch }, payload) {
      commit('changeEditMode', payload);
      dispatch('backup');
    },
    newAnswer({ commit, dispatch }, payload) {
      commit('addAnswer', payload);
      dispatch('backup');
    },
    removeAnswer({ commit, dispatch }, payload) {
      commit('removeAnswer', payload);
      dispatch('backup');
    },
    updateAnswer({ commit, dispatch }, payload) {
      commit('updateAnswer', payload);
      dispatch('backup');
    },
    getTest({ state }): Promise<Test> {
      return Promise.resolve(convertState(state));
    },
    load({ commit, dispatch }, payload) {
      commit('setState', payload);
      dispatch('backup');
    },
    backup({ state }) {
      const jsonString = JSON.stringify(state);
      window.localStorage.setItem('editor-state', jsonString);
    },
    restore({ commit }) {
      const jsonString = window.localStorage.getItem('editor-state');
      if (!jsonString) return;
      const data: State = JSON.parse(jsonString);
      commit('restoreState', data);
    },
    clear({ commit }) {
      commit('clearState');
      window.localStorage.removeItem('editor-state');
    },
    setFileName({ commit, dispatch }, fileName) {
      commit('setFileName', fileName);
      dispatch('backup');
    },
  },
});
