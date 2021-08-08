<template>
  <div class="editable-text">
    <input type="text" ref="editField" v-if="edit" :value="value" @change="inputHandler">
    <span v-else>{{ value }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'EditableText',
  props: {
    edit: Boolean,
    value: String,
  },
  methods: {
    inputHandler(e: InputEvent) {
      this.$emit('input', (e.target as HTMLInputElement).value);
    },
  },
  watch: {
    edit(newVal: boolean) {
      if (newVal) this.$nextTick(() => (this.$refs['editField'] as HTMLInputElement).focus());
    },
  }
});
</script>

<style lang="scss">
.editable-text { line-height: 1.25em; }
.editable-text > span {
  padding: .25em .5em;
  display: inline-block;
  font-size: inherit;
  border: solid 1px transparent;
}
</style>
