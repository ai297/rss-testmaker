<template>
  <li class="test-question">
    <span>{{num}}</span>
    <editable-text :edit="edit" v-model="questionValue" class="question-text" />
    <button v-if="edit" @click="$emit('remove')" title="Delete question">✖</button>
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
      return `#${this.index < 10 ? '0' : ''}${(this.index as number) + 1}`;
    },
  },
});
</script>

<style lang="scss">
.test-question {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & > .question-text {
    flex: 1 1 auto;
    font-size: 1.2em;
  }
  & > button { flex: 0 0 auto; }
  & > .test-answers {
    margin: 1em;
    padding: 0;
    flex: 0 1 100%;
  }
}
</style>
