<template>
  <li class="test-answer">
    <h4 v-if="isNew">Add new answer:</h4>
    <editable-mark :value="isNew ? newData.isCorrect : correct"
                   :edit="edit"
                   :group="group"
                   :multiple="multiple"
                   @input="changeMark"
                   class="answer-mark" />
    <editable-text :value="isNew ? newData.text : text"
                   :edit="edit"
                   @input="changeText"
                   class="answer-text"
                   placeholder="Please, write the answer here"/>
    <button v-if="edit && !isNew" title="Delete answer" @click="$emit('remove')">✖</button>
    <button v-if="edit && isNew" title="Add new answer" @click="addNew">✚</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import EditableMark from './editable-mark.vue';
import EditableText from './editable-text.vue';

export default Vue.extend({
  name: 'TestAnswer',
  components: {
    EditableMark,
    EditableText,
  },
  props: {
    edit: Boolean,
    questionIndex: Number,
    text: String,
    correct: Boolean,
    multiple: Boolean,
    isNew: Boolean,
  },
  data() {
    return {
      group: this.questionIndex !== undefined ? `q-${this.questionIndex}` : undefined,
      newData: { text: '', isCorrect: false },
    };
  },
  methods: {
    addNew() {
      this.$emit('add', this.newData);
      this.$nextTick(() => {
        this.newData.text = '';
        this.newData.isCorrect = false;
      });
    },
    changeMark(isCorrect: boolean) {
      if (this.isNew) this.newData.isCorrect = isCorrect;
      else this.$emit('change', { text: this.text, isCorrect });
    },
    changeText(text: string) {
      if (this.isNew) this.newData.text = text;
      else this.$emit('change', { text, isCorrect: this.correct });
    },
  },
});
</script>

<style lang="scss">
.test-answer {
  margin: .25em 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > .answer-text {
    flex: 1 1 auto;
    color: #ce9178;
  }
  & > .answer-mark { flex: 0 0 2em; }
  & > button {
    padding: 0.25em;
    max-width: 2.5em;
    flex: 0 0 3em;
    font-size: .9em;
  }
  & > h4 { flex: 1 1 100%; }
}
</style>
