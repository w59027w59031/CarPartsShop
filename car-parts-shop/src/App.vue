<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Start/>
    <Register/>
  </div>
</template>

<script>
import Start from './components/Start.vue';
import Register from './components/Register.vue';
import './assets/app.css'

export default {
  name: 'App',
  components: {
    Start,
    Register,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
