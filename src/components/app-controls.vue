<template>
  <div class="controls">
    <label class="load-file">
      <input type="file" accept="application/json" @change="loadJson">
      Load JSON
    </label>
    <button @click="save">Save JSON</button>
    <button @click="clear">Clear</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'AppControls',
  methods: {
    ...mapActions(['save', 'clear']),
    loadJson(e: InputEvent) {
      const input = e.target as HTMLInputElement;
      if (!input.files) return;
      this.$store.dispatch('load', input.files[0]);
      this.$nextTick(() => {
        input.value = '';
      });
    },
  },
});
</script>

<style lang="scss">
.controls {
  display: flex;
  justify-content: center;
}
.load-file > input { display: none; }
</style>
