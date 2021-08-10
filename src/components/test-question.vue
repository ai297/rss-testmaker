<template>
  <li class="test-question">
    <div v-if="image" class="question-image">
      <img :src="image" :alt="`Image for question #${num}`">
    </div>
    <span>{{num}}</span>
    <editable-text :edit="edit"
                   :value="question"
                   :multiline="true"
                   @input="changeQuestion"
                   class="question-text"
                   placeholder="Please, write the question here" />
    <button @click="$emit('remove')" title="Delete question">✖</button>
    <button @click="$emit('edit')" :title="edit ? 'OK' : 'Edit'">{{edit ? '✔' : '✎'}}</button>
    <div class="image-type" v-if="edit">
      <span>Image:</span>
      <editable-text :edit="edit"
                     :value="questionImage"
                     @input="changeImage"
                     class="image-field"
                     placeholder="Question image"/>
      <span>Answers type:</span>
      <answers-tyep-select :value="type" @input="changeAnswersType" class="type-select"/>
    </div>
    <ul class="test-answers">
      <li><h4 v-if="edit">Answers:</h4></li>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import EditableText from './editable-text.vue';
import AnswersTyepSelect from './answer-types.vue';

export default Vue.extend({
  name: 'TestQuestion',
  components: {
    EditableText,
    AnswersTyepSelect,
  },
  props: {
    edit: Boolean,
    question: String,
    image: String,
    answersType: String,
    index: Number,
  },
  computed: {
    type() {
      return this.answersType ?? '';
    },
    questionImage() {
      return this.image ?? '';
    },
    num() {
      return `#${this.index < 9 ? '0' : ''}${(this.index as number) + 1}`;
    },
  },
  methods: {
    changeQuestion(text: string) {
      this.$emit('change', { text, questionImage: this.image, answersType: this.answersType });
    },
    changeImage(questionImage: string) {
      this.$emit('change', { text: this.question, questionImage, answersType: this.answersType });
    },
    changeAnswersType(answersType: string) {
      this.$emit('change', { text: this.question, questionImage: this.image, answersType: answersType ? answersType : undefined });
    },
  },
});
</script>

<style lang="scss">
.test-question {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  & > .question-text {
    flex: 1 1 calc(100% - 10em);
    font-size: 1.2em;
  }
  & > button, & > span { flex: 0 0 3em; }
  & > button {
    padding: 0.25em;
    max-width: 2.5em;
  }
  & > .test-answers {
    margin: .5em;
    padding: 0;
    flex: 0 1 100%;
  }
  & > .image-type {
    flex: 1 0 100%;
    display: flex;
    & > span {
      padding: 0 1em 0 .5em;
      flex: 0 0 auto;
      line-height: 1.5em;
    }
    & > .image-field { flex: 1 1 auto; }
    & > .type-select { flex: 0 0 auto; }
  }
  & > .question-image {
    flex: 0 0 100%;
    max-width: 100%;
    max-height: 30em;
    margin: 0 0 1em 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img { max-width: 100%; }
  }
}
</style>
