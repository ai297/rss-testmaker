<template>
  <select @change="change">
    <option v-for="(type, index) in answerTypes"
            :key="index"
            :value="type.key"
            :selected="type.key == value">
      {{type.value}}
    </option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AnswerTypeSelect',
  props: {
    value: String,
  },
  data() {
    return {
      answerTypes: [
        { key: '', value: ' ' },
        { key: 'image', value: 'Image' },
      ],
    };
  },
  methods: {
    change(e: InputEvent) {
      const elem = e.target as HTMLSelectElement;
      this.$emit('input', elem.value);
    },
  },
});
</script>
