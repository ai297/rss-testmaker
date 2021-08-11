<template>
  <div class="controls">
    <label class="load-file">
      <input type="file" accept="application/json" @change="loadHandler">
      🗁 Open
    </label>
    <button @click="saveHandler">🖫 Save</button>
    <template v-if="isClipboard">
      <button @click="copyHandler">Copy</button>
      <button @click="pastHandler">Paste</button>
    </template>
    <button @click="clear">🗘 Clear</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import { Test } from '../contracts';
import { saveJson, convertToJson } from '../out';

export default Vue.extend({
  name: 'AppControls',
  computed: {
    ...mapState(['fileName']),
    isClipboard() {
      return typeof window.navigator.clipboard != 'undefined';
    },
  },
  methods: {
    ...mapActions(['getTest', 'clear', 'load']),
    async loadHandler(e: InputEvent) {
      const input = e.target as HTMLInputElement;
      if (!input.files) return;
      const jsonString = await input.files[0].text();
      const data: Test = JSON.parse(jsonString);
      this.load({ fileName: input.files[0].name, data });
      this.$nextTick(() => {
        input.value = '';
      });
    },
    async saveHandler() {
      const test: Test = await this.getTest();
      saveJson(convertToJson(test), this.fileName);
    },
    async copyHandler(e: MouseEvent) {
      const btn = e.target as HTMLButtonElement;
      const txt = btn.textContent;
      btn.disabled = true;
      const test: Test = await this.getTest();
      try {
        await window.navigator.clipboard.writeText(convertToJson(test));
        btn.innerText = 'Copied!';
      } catch {
        btn.innerText = 'Fail!';
      }
      setTimeout(() => {
        btn.innerText = String(txt);
        btn.disabled = false;
      }, 1000);
    },
    async pastHandler() {
      const str = await window.navigator.clipboard.readText();
      if (!str) return;
      try {
        const data: Test = JSON.parse(str);
        console.log(data.public?.questions, data.public?.tresholdPercentage, data.answers);
        if (!Array.isArray(data.public?.questions) ||
            !Array.isArray(data.answers) ||
            typeof data.public?.tresholdPercentage == 'undefined' ||
            typeof data.public?.maxAttemptsNumber == 'undefined' ||
            typeof data.public?.numberOfQuestions == 'undefined') {
          throw Error('invalid data format');
        }
        this.load({ fileName: 'unknown-test.json', data });
      } catch(e) {
        window.alert('Invalid data format in buffer.');
        console.error(e);
      }
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
