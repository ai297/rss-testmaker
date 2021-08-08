<template>
  <div class="editable-text">
    <input type="text" ref="editField" v-if="edit && !multiline" :value="value" @change="(e) => inputHandler(e.target.value)">
    <textarea v-else-if="edit" ref="editMultiField" v-model="value" @change="(e) => inputHandler(e.target.value)"></textarea>
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
    multiline: Boolean,
  },
  methods: {
    inputHandler(value: string) {
      this.$emit('input', value);
    },
  },
  watch: {
    edit(newVal: boolean) {
      if (newVal) this.$nextTick(() => {
        if (this.multiline) (this.$refs['editMultiField'] as HTMLTextAreaElement).focus();
        else (this.$refs['editField'] as HTMLInputElement).focus();
      });
    },
  }
});
</script>

<style lang="scss">
.editable-text {
  line-height: 1.25em;

  & > span {
    padding: .25em .5em;
    display: inline-block;
    font-size: inherit;
    border: solid 1px transparent;
  }

  & > input, & > textarea {
    width: calc(100% - 1.5em);
  }
}
</style>
