<template>
  <div id="app">
    <api-component></api-component>
    <router-view/>
  </div>
</template>

<script>
import api from './components/api'
export default {
  name: 'App',
  components: {
    'api-component': api,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
