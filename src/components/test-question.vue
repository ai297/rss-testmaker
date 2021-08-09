<template>
  <li class="test-question">
    <span>{{num}}</span>
    <editable-text :edit="edit" v-model="questionValue" class="question-text" :multiline="true" placeholder="Please, write the question here" />
    <button @click="$emit('remove')" title="Delete question">✖</button>
    <button @click="$emit('edit')" :title="edit ? 'OK' : 'Edit'">{{edit ? '✔' : '✎'}}</button>
    <ul class="test-answers">
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import EditableText from './editable-text.vue';

export default Vue.extend({
  name: 'TestQuestion',
  components: {
    EditableText,
  },
  props: {
    edit: Boolean,
    value: String,
    index: Number,
  },
  computed: {
    questionValue: {
      get() {
        return (this as {value: string}).value;
      },
      set(val) {
        (this as Vue).$emit('change', val);
      },
    },
    num() {
      return `#${this.index < 9 ? '0' : ''}${(this.index as number) + 1}`;
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
}
</style>
