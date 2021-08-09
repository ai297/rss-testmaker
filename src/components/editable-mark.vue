<template>
  <div class="editable-mark">
    <input :type="multiple ? 'checkbox' : 'radio'"
           :checked="value"
           :name="group"
           @change="checkHandler"
           v-if="edit">
    <span :class="{correct: value}" v-else>
      {{ value ? '✔' : '✘' }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'EditableMark',
  props: {
    edit: Boolean,
    value: Boolean,
    group: String,
    multiple: Boolean,
  },
  methods: {
    checkHandler(e: InputEvent) {
      this.$emit('input', (e.target as HTMLInputElement).checked);
    },
  },
})
</script>

<style lang="scss">
.editable-mark {
  & > span { color: red; }
  & > span.correct { color: green; }
}
</style>
