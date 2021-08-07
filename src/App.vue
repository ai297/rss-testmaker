<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {}
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #363636;
  font-family: 'Roboto', sans-serif;
}

h1 { color: #e6c300; }

#app {
  width: 100%;
  max-width: 600px;
}
</style>
