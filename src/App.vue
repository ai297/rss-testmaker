<template>
  <div id="app">
    <app-controls class="header"/>
    <div class="file-name">
      File name:
      <editable-text :edit="isEditFileName" v-model="fileName" class="file-name-input"/>
      <button @click="isEditFileName = !isEditFileName">{{isEditFileName ? '✔' : '✎'}}</button>
    </div>
    <h2>Settings</h2>
    <test-settings/>
    <h2>Questions</h2>
    <ul class="test-questions">
      <test-question v-for="(question, questionIndex) in questions"
                     :key="questionIndex"
                     :index="questionIndex"
                     :question="question.text"
                     :edit="question.editMode"
                     :image="question.questionImage"
                     :answersType="question.answersType"
                     @edit="() => editMode({ questionIndex, enable: !question.editMode })"
                     @remove="() => removeQuestion(questionIndex)"
                     @change="data => updateQuestion({questionIndex, data})">
        <test-answer v-for="(answer, index) in question.answers"
                     :key="index"
                     :questionIndex="questionIndex"
                     :text="answer.text"
                     :correct="answer.isCorrect"
                     :multiple="question.multiple"
                     :edit="question.editMode"
                     :isImage="question.answersType == 'image'"
                     @remove="() => removeAnswer({ questionIndex, index })"
                     @change="(data) => updateAnswer({ questionIndex, index, data })"/>
        <li v-if="question.answers.length == 0"><p class="info">No answers for this question.</p></li>
        <test-answer v-if="question.editMode"
                     :questionIndex="questionIndex"
                     :multiple="question.multiple"
                     :edit="true"
                     :isNew="true"
                     @add="(data) => newAnswer({ questionIndex, data })"/>
      </test-question>
      <li v-if="questions.length == 0"><p class="info">There are no questions in test.</p></li>
      <li class="controls">
        <button @click="() => newQuestion(false)">Add question (single answer)</button>
        <button @click="() => newQuestion(true)">Add question (multiple answers)</button>
      </li>
    </ul>
    <app-controls class="footer"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { State } from './contracts';
import EditableText from './components/editable-text.vue';
import AppControls from './components/app-controls.vue';
import TestSettings from './components/test-settings.vue';
import TestQuestion from './components/test-question.vue';
import TestAnswer from './components/test-answer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    EditableText,
    AppControls,
    TestSettings,
    TestQuestion,
    TestAnswer,
  },
  data() {
    return {
      isEditFileName: false,
    };
  },
  computed: {
    questions() {
      return (this.$store.state as State).questions;
    },
    fileName: {
      get() {
        return String(this.$store.state.fileName).replace(/.json$/i, '');
      },
      set(val: string) {
        const fileName = val.replace(/.json$/ig, '') + '.json';
        this.setFileName(fileName);
      },
    },
  },
  methods: {
    ...mapActions([
      'editMode',
      'newQuestion',
      'removeQuestion',
      'removeAnswer',
      'newAnswer',
      'updateAnswer',
      'updateQuestion',
      'setFileName',
    ]),
  },
  mounted() {
    this.$store.dispatch('restore');
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #363636;
  font-family: 'Roboto', sans-serif;
  color: #67cdfe;
}

h1 { color: #e6c300; }
h2 {
  color: #c57991;
  border-bottom: solid 1px #c57991;
}
h4 { margin: 0.5em 0; }
ul { list-style: none; }

button, .load-file {
  margin: 0 .25em;
  padding: .5em 1em;
  border: none;
  border-radius: .25em;
  background-color: #e6c300;
  font-size: inherit;
  color: #000000;
  line-height: 1.25em;
  cursor: pointer;
  outline: none;
  transition: transform .2s,
              background-color .4s;

  &:hover { background-color: #67cdfe; }
  &:active { transform: translateY(10%); }
  &:disabled { background-color: #c57991; }
}

input, textarea, select {
  padding: .25em .5em;
  font-size: inherit;
  color: #ce9178;
  background-color: #2c2a2a;
  border: solid 1px #2c2a2a;
  border-radius: .25em;
  outline: none;
  transition: all .5s;
  &:focus, &:active {
    color: #b3ba7d;
    border-color: #ce9178;
  }
}

#app {
  width: 100%;
  max-width: 640px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.test-questions {
  flex: 1 1 auto;
  & > li:not(:last-child) {
    margin-bottom: 1em;
    border-bottom: 1px solid #54b14b;
  }
}
.header, .footer {
  padding: .5em;
  background-color: #2c2a2a;
}
.header { border-radius: .5em; }
.footer { border-radius: .5em .5em 0 0; }
.info {
  color: #b3ba7d;
  text-align: center;
}
.file-name {
  display: flex;
  margin: .5em;
  align-items: center;
  justify-content: center;
  &-input {
    flex: 0 1 50%;
    margin: 0 .5em;
    font-size: 1.2em;
  }
  & > button {
    padding: .25em .5em;
  }
}
</style>
