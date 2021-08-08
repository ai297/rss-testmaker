<template>
  <div id="app">
    <div class="controls">
      <label class="load-file">
        <input type="file" ref="file" accept="application/json" @change="loadJson">
        Load JSON
      </label>
      <button @click="save">Save JSON</button>
      <button @click="clear">Clear</button>
    </div>
    <h2>Settings</h2>
    <test-settings/>
    <h2>Questions</h2>
    <ul class="test-questions">
      <test-question v-for="(question, questionIndex) in questions"
                     :key="questionIndex"
                     :index="questionIndex"
                     :value="question.text"
                     :edit="question.editMode"
                     @edit="() => editMode({ questionIndex, enable: !question.editMode })"
                     @remove="() => removeQuestion(questionIndex)"
                     @change="(text) => updateQuestion({questionIndex, data: { text }})">
        <test-answer v-for="(answer, index) in question.answers"
                     :key="index"
                     :questionIndex="questionIndex"
                     :text="answer.text"
                     :correct="answer.isCorrect"
                     :multiple="question.multiple"
                     :edit="question.editMode"
                     @remove="() => removeAnswer({ questionIndex, index })"
                     @change="(data) => updateAnswer({ questionIndex, index, data })"/>
        <test-answer v-if="question.editMode"
                     :questionIndex="questionIndex"
                     :multiple="question.multiple"
                     :edit="true"
                     :isNew="true"
                     @add="(data) => newAnswer({ questionIndex, data })"/>
      </test-question>
      <li v-if="questions.length == 0" class="controls"><p>There are no questions in test.</p></li>
      <li class="controls">
        <button @click="() => newQuestion(false)">Add question (single answer)</button>
        <button @click="() => newQuestion(true)">Add question (multiple answers)</button>
      </li>
    </ul>
    <div class="controls">
      <button @click="save">Save JSON</button>
      <button @click="clear">Clear</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { State } from './contracts';
import TestSettings from './components/test-settings.vue';
import TestQuestion from './components/test-question.vue';
import TestAnswer from './components/test-answer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TestSettings,
    TestQuestion,
    TestAnswer,
  },
  computed: {
    questions() {
      return (this.$store.state as State).questions;
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
      'save',
      'clear',
    ]),
    loadJson(e: InputEvent) {
      const input = e.target as HTMLInputElement;
      if (!input.files) return;
      this.$store.dispatch('load', input.files[0]);
      this.$nextTick(() => {
        input.value = '';
      });
    },
  },
  mounted() {
    this.$store.dispatch('restore');
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #363636;
  font-family: 'Roboto', sans-serif;
  color: #67cdfe;
}

h1 { color: #e6c300; }
h2 { color: #c57991; }
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
}

input, textarea {
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
}

.controls {
  display: flex;
  justify-content: center;
}
.load-file > input { display: none; }
</style>
