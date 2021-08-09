<template>
  <ul class="test-settings">
    <li>
      <label for="tresholdPercentage">Treshold percentage:</label>
      <input id="tresholdPercentage" type="number" min="0" max="100" v-model="tresholdPercentage">
    </li>
    <li>
      <label for="numberOfQuestions">Number of questions: </label>
      <input id="numberOfQuestions" type="number" v-model="numberOfQuestions">
    </li>
    <li>
      <label for="maxAttemptsNumber">Max attempts:</label>
      <input id="maxAttemptsNumber" type="number" v-model="maxAttemptsNumber">
    </li>
    <li>
      <label for="strictAttemptsMode">Strict attempts mode:</label>
      <input id="strictAttemptsMode" type="checkbox" v-model="strictAttemptsMode">
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { State } from '../contracts';

export default Vue.extend({
  name: 'TestSettings',
  computed: {
    tresholdPercentage: {
      get() {
        return (this.$store.state as State).testSettings.tresholdPercentage;
      },
      set(val) {
        this.$store.dispatch('setSettings', { tresholdPercentage: Number(val) });
      },
    },
    numberOfQuestions: {
      get() {
        return (this.$store.state as State).testSettings.numberOfQuestions;
      },
      set(val) {
        this.$store.dispatch('setSettings', { numberOfQuestions: Number(val) });
      },
    },
    maxAttemptsNumber: {
      get() {
        return (this.$store.state as State).testSettings.maxAttemptsNumber;
      },
      set(val) {
        this.$store.dispatch('setSettings', { maxAttemptsNumber: Number(val) });
      },
    },
    strictAttemptsMode: {
      get() {
        return (this.$store.state as State).testSettings.strictAttemptsMode;
      },
      set(strictAttemptsMode) {
        this.$store.dispatch('setSettings', { strictAttemptsMode });
      },
    },
  },
});
</script>

<style lang="scss">
.test-settings {
  & > li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & label {
    flex: 0 1 50%;
    text-align: right;
  }
  & input {
    margin: .25em 1em;
    display: inline-block;
    max-width: 4em;
    flex: 0 1 4em;
  }
}
</style>
